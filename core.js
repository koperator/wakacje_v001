// Logika bez DOM: wartości, punktacja, walidacja danych i profilu.
// Używana przez index.html, test.mjs i merge.mjs.

export const MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const FIELDS = ['min', 'idealFrom', 'idealTo', 'max'];
const DEFAULT_SETTINGS = {
  flagPenalty: 10,
  swimFlags: true,
  seasonThresholds: { low: 50, high: 70 },
  filters: { hideLevel3: false, maxFlightTime: null, maxStops: null, minCoverage: null, minScore: null },
};
const COLUMN_ID = /^[a-z0-9_]+$/;
export const DEST_ID = /^[a-z0-9-]+$/;

export const isObj = x => typeof x === 'object' && x !== null && !Array.isArray(x);
const isNum = x => typeof x === 'number' && Number.isFinite(x);
export const isScoring = col => col?.type === 'number' || col?.type === 'scale';

// Wartość w danych: zwykła | {est: x} | "na" | null/brak klucza.
export function parseValue(raw) {
  if (raw === undefined || raw === null) return { kind: 'missing' };
  if (raw === 'na') return { kind: 'na' };
  if (isObj(raw) && 'est' in raw) return { kind: 'est', v: raw.est };
  return { kind: 'value', v: raw };
}

export function rawValue(dest, col, month) {
  return col.scope === 'fixed' ? dest?.fixed?.[col.id] : dest?.months?.[month]?.[col.id];
}

// Czy wartość pasuje do kolumny liczbowej lub skali (typ, całkowitość i zakres).
export function validNumber(col, v) {
  if (col.type === 'scale') return Number.isInteger(v) && v >= 1 && v <= 5;
  if (!isNum(v)) return false;
  if (col.integer && !Number.isInteger(v)) return false;
  return !Array.isArray(col.valid) || (v >= col.valid[0] && v <= col.valid[1]);
}

// Flagi jako lista obiektów; inne wpisy (błędne dane) są pomijane.
export const flagList = raw => (Array.isArray(raw) ? raw.filter(isObj) : []);

// Wszystkie flagi miesiąca ze wszystkich kolumn typu flags.
export function monthFlags(dest, month, columns) {
  return columns.filter(c => c?.type === 'flags').flatMap(c => flagList(dest?.months?.[month]?.[c.id]));
}

// Flagi, które liczą się do kary: znany typ, poziom 1–3, kąpielowe tylko przy swimFlags,
// przy weatherOnly tylko pogodowe. Ten sam zbiór służy do filtra i sortowania.
export function countedFlags(list, flagTypes, profile, weatherOnly = false) {
  const types = Object.fromEntries(flagTypes.filter(isObj).map(t => [t.id, t]));
  return list.filter(f => {
    const t = types[f.type];
    if (!t || ![1, 2, 3].includes(f.level)) return false;
    if (weatherOnly && !t.weather) return false;
    return !t.swim || profile.swimFlags;
  });
}

// Strona zakresu: dolna (min, ideał od) i górna (ideał do, max). Każde pole jest opcjonalne.
// Strona z obiema wartościami ma liniowe zbocze; z jedną wartością to ostra granica (poza nią ocena 0);
// bez wartości nie ogranicza.
const lowSide = r => r.min != null || r.idealFrom != null;
const highSide = r => r.idealTo != null || r.max != null;
const hasSide = r => lowSide(r) || highSide(r);

// Ocena 0–1 według formatki; null, gdy wszystkie pola zakresu są puste.
export function colScore(x, r) {
  if (!hasSide(r)) return null;
  if (lowSide(r)) {
    const lo = r.min ?? r.idealFrom, hi = r.idealFrom ?? r.min;
    if (x < hi) return x <= lo ? 0 : (x - lo) / (hi - lo);
  }
  if (highSide(r)) {
    const lo = r.idealTo ?? r.max, hi = r.max ?? r.idealTo;
    if (x > lo) return x >= hi ? 0 : (hi - x) / (hi - lo);
  }
  return 1;
}

// "na" w kolumnie pogodowej (np. woda bez morza) jest pomijane: nie wchodzi ani do wyniku, ani do pokrycia.
// "na" w kolumnie niepogodowej (np. plaże) daje ocenę 0.
export const skipsNa = (col, raw) => !!col.weather && parseValue(raw).kind === 'na';

// Ocena jednej komórki: 0–1 albo null (brak danych, błędna wartość, brak zakresu, "na" w kolumnie pogodowej).
export function cellScore(raw, r, col) {
  const p = parseValue(raw);
  if (p.kind === 'na') return col.weather ? null : 0;
  if (p.kind === 'missing' || !validNumber(col, p.v)) return null;
  return colScore(p.v, r);
}

// Wynik kierunku w miesiącu. weatherOnly = globalny sezon.
export function score(dest, month, columns, flagTypes, profile, weatherOnly = false) {
  let active = 0, available = 0, sum = 0;
  const missing = [], skipped = [];
  for (const col of columns) {
    if (!isScoring(col) || (weatherOnly && !col.weather)) continue;
    const r = profile.columns[col.id];
    if (!r || !(r.weight > 0)) continue;
    const raw = rawValue(dest, col, month);
    if (skipsNa(col, raw)) { skipped.push(col.id); continue; }
    active += r.weight;
    const s = cellScore(raw, r, col);
    if (s == null) { missing.push(col.id); continue; }
    available += r.weight;
    sum += r.weight * s;
  }
  const counted = countedFlags(monthFlags(dest, month, columns), flagTypes, profile, weatherOnly);
  const levels = counted.reduce((n, f) => n + f.level, 0);
  const penalty = Math.min(1, (profile.flagPenalty / 100) * levels);
  const raw = available > 0 ? (100 * sum) / available : null;
  return {
    score: raw == null ? null : raw * (1 - penalty),
    raw,
    penalty,
    flags: counted,
    coverage: active > 0 ? available / active : null,
    missing,
    skipped,
  };
}

// Filtry z profilu dla kierunku w miesiącu; res = wynik score() dla tego miesiąca.
// Brak danych (albo błędna wartość) nie odrzuca kierunku: filtr trafia do listy unchecked i strona to oznacza.
export const FILTER_COLUMNS = { maxFlightTime: 'flight_time', maxStops: 'stops' };
export function checkFilters(dest, month, res, columns, f) {
  const unchecked = [];
  if (f.hideLevel3 && res.flags.some(x => x.level === 3)) return { pass: false, unchecked };
  if (f.minCoverage != null && res.coverage != null && res.coverage * 100 + 1e-9 < f.minCoverage) return { pass: false, unchecked };
  // Wynik jak pokazywany (zaokrąglony do całości); brak wyniku nie odrzuca kierunku.
  if (f.minScore != null) {
    if (res.score == null) unchecked.push('minScore');
    else if (Math.round(res.score) < f.minScore) return { pass: false, unchecked };
  }
  for (const [key, id] of Object.entries(FILTER_COLUMNS)) {
    if (f[key] == null) continue;
    const col = columns.find(c => c?.id === id);
    const p = col ? parseValue(rawValue(dest, col, month)) : { kind: 'missing' };
    const v = (p.kind === 'value' || p.kind === 'est') && validNumber(col, p.v) ? p.v : null;
    if (v == null) unchecked.push(key);
    else if (v > f[key]) return { pass: false, unchecked };
  }
  return { pass: true, unchecked };
}

// Równy progowi należy do wyższego sezonu. Porównanie po zaokrągleniu do 0,1,
// tak jak wynik jest pokazywany (49,96 → „50,0” → M, nie L).
export const round1 = x => Math.round(x * 10) / 10;
export function season(weatherScore, t) {
  if (weatherScore == null) return null;
  const s = round1(weatherScore);
  return s >= t.high ? 'H' : s >= t.low ? 'M' : 'L';
}

export function defaultProfile(columns) {
  const cols = {};
  for (const col of columns) if (isScoring(col)) cols[col.id] = { ...col.default };
  return { name: 'Domyślny', columns: cols, ...structuredClone(DEFAULT_SETTINGS) };
}

// Profil z pliku lub pamięci → profil zgodny z rejestrem.
// Kolumna albo ustawienie, którego nie ma w profilu, dostaje wartość domyślną (lista w added / addedSettings);
// wszystko, co w profilu jest, przechodzi bez zmian (także błędne), żeby validateProfile mogło to zgłosić.
// Nieznane klucze w seasonThresholds i filters są pomijane.
export function mergeProfile(loaded, columns) {
  const base = defaultProfile(columns);
  const ids = Object.keys(base.columns);
  const profile = { ...base };
  const addedSettings = [];
  for (const k of ['name', 'flagPenalty', 'swimFlags']) {
    if (loaded[k] !== undefined) profile[k] = loaded[k];
    else addedSettings.push(k);
  }
  for (const k of ['seasonThresholds', 'filters']) {
    const v = loaded[k];
    if (v === undefined) { addedSettings.push(k); continue; }
    if (!isObj(v)) { profile[k] = v; continue; }
    profile[k] = Object.fromEntries(Object.keys(base[k]).map(f => {
      if (v[f] !== undefined) return [f, v[f]];
      addedSettings.push(`${k}.${f}`);
      return [f, base[k][f]];
    }));
  }
  if (loaded.columns === undefined) return { profile, added: ids, removed: [], addedSettings };
  if (!isObj(loaded.columns)) return { profile: { ...profile, columns: loaded.columns }, added: [], removed: [], addedSettings };
  profile.columns = {};
  for (const id of ids) {
    const e = loaded.columns[id];
    profile.columns[id] = e === undefined ? base.columns[id]
      : isObj(e) ? Object.fromEntries([...FIELDS, 'weight'].map(f => [f, e[f] ?? null]))
      : e;
  }
  return {
    profile,
    added: ids.filter(id => !(id in loaded.columns)),
    removed: Object.keys(loaded.columns).filter(id => !ids.includes(id)),
    addedSettings,
  };
}

// Pole błędu "kolumna.pole" → [kolumna, pole]; dzielone po ostatniej kropce.
export const splitField = field => { const i = field.lastIndexOf('.'); return i < 0 ? [field, ''] : [field.slice(0, i), field.slice(i + 1)]; };

// Zwraca listę {field, msg}; pusta lista = profil poprawny.
export function validateProfile(p, columns) {
  if (!isObj(p)) return [{ field: 'profile', msg: 'Profil musi być obiektem JSON.' }];
  const errs = [];
  const err = (field, msg) => errs.push({ field, msg });
  if (typeof p.name !== 'string' || !p.name.trim()) err('name', 'Profil musi mieć nazwę.');
  if (!isObj(p.columns)) err('columns', 'Pole columns musi być obiektem z ustawieniami kolumn.');
  else for (const col of columns) {
    if (!isScoring(col)) continue;
    const r = p.columns[col.id];
    const at = f => `${col.id}.${f}`;
    if (!isObj(r)) { err(at('weight'), `${col.name}: ustawienia kolumny muszą być obiektem z polami min, idealFrom, idealTo, max i weight.`); continue; }
    let bad = false;
    for (const f of [...FIELDS, 'weight']) {
      if (r[f] != null && !isNum(r[f])) { err(at(f), `${col.name}: pole musi być liczbą.`); bad = true; }
    }
    if (bad) continue;
    if (r.weight == null || r.weight < 0) err(at('weight'), `${col.name}: waga musi być liczbą ≥ 0.`);
    const filled = FIELDS.filter(f => r[f] != null);
    for (let i = 1; i < filled.length; i++) {
      if (r[filled[i]] < r[filled[i - 1]]) err(at(filled[i]), `${col.name}: wymagane min ≤ ideał od ≤ ideał do ≤ max.`);
    }
    if (r.weight > 0 && !hasSide(r))
      err(at('weight'), `${col.name}: kolumna z wagą > 0 potrzebuje co najmniej jednego pola zakresu.`);
  }
  if (!isNum(p.flagPenalty) || p.flagPenalty < 0 || p.flagPenalty > 100)
    err('flagPenalty', 'Kara za poziom flagi musi być w zakresie 0–100%.');
  if (typeof p.swimFlags !== 'boolean') err('swimFlags', 'Przełącznik flag kąpielowych musi być tak/nie.');
  const t = p.seasonThresholds;
  if (!isObj(t) || !isNum(t.low) || !isNum(t.high) || t.low >= t.high)
    err('seasonThresholds', 'Dolny próg globalnego sezonu musi być liczbą niższą od górnego.');
  const fl = p.filters;
  if (!isObj(fl)) err('filters', 'Pole filters musi być obiektem.');
  else {
    if (typeof fl.hideLevel3 !== 'boolean') err('filters.hideLevel3', 'Filtr „ukryj z flagą poziomu 3” musi być tak/nie.');
    if (fl.maxFlightTime != null && (!isNum(fl.maxFlightTime) || fl.maxFlightTime < 0))
      err('filters.maxFlightTime', 'Filtr „czas lotu do” musi być pusty albo liczbą ≥ 0.');
    if (fl.maxStops != null && (!isNum(fl.maxStops) || fl.maxStops < 0))
      err('filters.maxStops', 'Filtr „przesiadek do” musi być pusty albo liczbą ≥ 0.');
    if (fl.minCoverage != null && (!isNum(fl.minCoverage) || fl.minCoverage < 0 || fl.minCoverage > 100))
      err('filters.minCoverage', 'Filtr „pokrycie od” musi być pusty albo liczbą 0–100.');
    if (fl.minScore != null && (!isNum(fl.minScore) || fl.minScore < 0 || fl.minScore > 100))
      err('filters.minScore', 'Filtr „wynik od” musi być pusty albo liczbą 0–100.');
  }
  return errs;
}

// Dane leżą w rejestrze (rejestr.json: version, columns, flagTypes, destinations = lista id) i w plikach
// kierunków (kierunki/<id>.json). Strona, merge.mjs i testy składają je w jeden obiekt danych dla validateData.

// Id kierunków z rejestru do wczytania (poprawne i bez powtórzeń) oraz błędy listy.
export function registryIds(reg) {
  const ids = [], errs = [];
  if (!isObj(reg) || !Array.isArray(reg.destinations)) return { ids, errs: ['rejestr.json: brak listy destinations (id kierunków).'] };
  for (const id of reg.destinations) {
    if (typeof id !== 'string' || !DEST_ID.test(id)) errs.push(`rejestr.json: niepoprawne id kierunku ${JSON.stringify(id)} (małe litery, cyfry i -).`);
    else if (ids.includes(id)) errs.push(`rejestr.json: powtórzone id kierunku "${id}".`);
    else ids.push(id);
  }
  return { ids, errs };
}

// Rejestr + wczytane pliki ([{ id, value } | { id, error }] w kolejności rejestru) → { data, errs }.
// Pliku, którego nie da się użyć (brak, zły JSON, inne id w środku), nie ma w data.destinations; jest w errs.
export function assemble(reg, loaded) {
  const errs = [], destinations = [];
  for (const { id, value, error } of loaded) {
    if (error) errs.push(`kierunki/${id}.json: ${error}`);
    else if (!isObj(value)) errs.push(`kierunki/${id}.json: oczekiwany obiekt kierunku.`);
    else if (value.id !== id) errs.push(`kierunki/${id}.json: id w pliku to ${JSON.stringify(value.id)}, a w rejestrze "${id}".`);
    else destinations.push(value);
  }
  return { data: { ...reg, destinations }, errs };
}

// Walidacja złożonych danych (rejestr + kierunki); zwraca listę komunikatów. Nie rzuca wyjątków na błędnych danych.
export function validateData(data) {
  if (!isObj(data) || !Array.isArray(data.columns) || !Array.isArray(data.flagTypes) || !Array.isArray(data.destinations))
    return ['Plik musi być obiektem z tablicami: columns, flagTypes, destinations.'];
  const errs = [];
  if (data.version !== undefined && !(Number.isInteger(data.version) && data.version >= 1))
    errs.push('Pole version musi być liczbą całkowitą ≥ 1.');

  const colIds = new Set();
  data.columns.forEach((c, i) => {
    if (!isObj(c)) { errs.push(`Rejestr, kolumna #${i + 1}: oczekiwany obiekt.`); return; }
    const at = `Rejestr, kolumna ${typeof c.id === 'string' ? c.id : '#' + (i + 1)}`;
    if (typeof c.id !== 'string' || !COLUMN_ID.test(c.id)) errs.push(`${at}: id musi składać się z małych liter, cyfr i _.`);
    else if (colIds.has(c.id)) errs.push(`${at}: powtórzone id.`);
    colIds.add(c.id);
    if (!['number', 'scale', 'hml', 'flags'].includes(c.type)) errs.push(`${at}: nieznany typ "${c.type}".`);
    if (!['month', 'fixed'].includes(c.scope)) errs.push(`${at}: zakres musi być month albo fixed.`);
    if (typeof c.name !== 'string' || typeof c.group !== 'string') errs.push(`${at}: brak nazwy lub grupy.`);
    if (typeof c.weather !== 'boolean') errs.push(`${at}: pole weather musi być true/false.`);
    if (c.type === 'number' && !(Array.isArray(c.valid) && c.valid.length === 2 && c.valid.every(isNum) && c.valid[0] <= c.valid[1]))
      errs.push(`${at}: kolumna liczbowa potrzebuje valid: [min, max].`);
    if (c.integer !== undefined && (typeof c.integer !== 'boolean' || c.type !== 'number'))
      errs.push(`${at}: pole integer (true/false) dotyczy tylko kolumn liczbowych.`);
    if (isScoring(c) && !isObj(c.default)) errs.push(`${at}: brak domyślnej formatki.`);
    if (c.type === 'flags' && c.scope !== 'month') errs.push(`${at}: flagi muszą być per miesiąc.`);
  });
  if (!errs.length) {
    for (const e of validateProfile(defaultProfile(data.columns), data.columns))
      errs.push(`Rejestr, domyślna formatka: ${e.msg}`);
  }

  const flagIds = new Set();
  data.flagTypes.forEach((t, i) => {
    if (!isObj(t)) { errs.push(`Typy flag #${i + 1}: oczekiwany obiekt.`); return; }
    if (typeof t.id !== 'string' || flagIds.has(t.id)) errs.push(`Typy flag: brak lub powtórzone id "${t.id}".`);
    flagIds.add(t.id);
    if (typeof t.name !== 'string' || typeof t.icon !== 'string') errs.push(`Typ flagi ${t.id}: wymagane name i icon.`);
    if (typeof t.weather !== 'boolean' || typeof t.swim !== 'boolean') errs.push(`Typ flagi ${t.id}: weather i swim muszą być true/false.`);
  });

  const cols = Object.fromEntries(data.columns.filter(isObj).map(c => [c.id, c]));
  const checkValue = (where, col, raw) => {
    const p = parseValue(raw);
    if (p.kind === 'missing') return;
    if (p.kind === 'na') {
      if (col.type === 'flags') errs.push(`${where}: flagi nie mogą mieć "na".`);
      return;
    }
    const v = p.v;
    if (col.type === 'number') {
      if (!isNum(v)) errs.push(`${where}: oczekiwana liczba, jest ${JSON.stringify(raw)}.`);
      else if (col.integer && !Number.isInteger(v)) errs.push(`${where}: oczekiwana liczba całkowita, jest ${v}.`);
      else if (!validNumber(col, v)) errs.push(`${where}: ${v} poza zakresem ${col.valid[0]}–${col.valid[1]}.`);
    } else if (col.type === 'scale') {
      if (!validNumber(col, v)) errs.push(`${where}: oczekiwana skala 1–5, jest ${JSON.stringify(raw)}.`);
    } else if (col.type === 'hml') {
      if (!['H', 'M', 'L'].includes(v)) errs.push(`${where}: oczekiwane H, M albo L, jest ${JSON.stringify(raw)}.`);
    } else if (col.type === 'flags') {
      if (p.kind !== 'value' || !Array.isArray(v)) { errs.push(`${where}: flagi muszą być listą.`); return; }
      v.forEach((f, i) => {
        if (!isObj(f)) { errs.push(`${where} #${i + 1}: flaga musi być obiektem.`); return; }
        if (!flagIds.has(f.type)) errs.push(`${where} #${i + 1}: nieznany typ flagi "${f.type}".`);
        if (![1, 2, 3].includes(f.level)) errs.push(`${where} #${i + 1}: natężenie musi być 1, 2 albo 3.`);
        if (typeof f.note !== 'string') errs.push(`${where} #${i + 1}: brak notatki.`);
      });
    }
  };
  const checkRow = (where, row, scope) => {
    if (!isObj(row)) { errs.push(`${where}: oczekiwany obiekt.`); return; }
    for (const [key, raw] of Object.entries(row)) {
      const col = cols[key];
      if (!col || col.scope !== scope) errs.push(`${where}: nieznana kolumna "${key}".`);
      else checkValue(`${where}, ${col.name}`, col, raw);
    }
  };

  const destIds = new Set();
  data.destinations.forEach((d, i) => {
    if (!isObj(d)) { errs.push(`Kierunek #${i + 1}: oczekiwany obiekt.`); return; }
    const name = typeof d.place === 'string' && d.place ? d.place : `kierunek #${i + 1}`;
    if (typeof d.id !== 'string' || !d.id) errs.push(`${name}: brak id.`);
    else if (!DEST_ID.test(d.id)) errs.push(`${name}: id "${d.id}" musi składać się z małych liter, cyfr i -.`);
    else if (destIds.has(d.id)) errs.push(`${name}: powtórzone id "${d.id}".`);
    destIds.add(d.id);
    if (typeof d.country !== 'string' || typeof d.place !== 'string') errs.push(`${name}: brak kraju lub miejsca.`);
    checkRow(`${name}, stałe`, d.fixed ?? {}, 'fixed');
    if (!Array.isArray(d.months) || d.months.length !== 12) errs.push(`${name}: wymagane dokładnie 12 miesięcy.`);
    else d.months.forEach((m, mi) => checkRow(`${name}, ${MONTHS[mi].toLowerCase()}`, m, 'month'));
    if (!Array.isArray(d.sources)) errs.push(`${name}: brak listy źródeł.`);
    else d.sources.forEach((s, j) => {
      if (!isObj(s) || typeof s.title !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s.checked ?? ''))
        errs.push(`${name}, źródło #${j + 1}: wymagane title i checked (data RRRR-MM-DD).`);
      else if (s.url !== undefined && !/^https?:\/\//i.test(String(s.url)))
        errs.push(`${name}, źródło #${j + 1}: url musi zaczynać się od http:// lub https://.`);
    });
  });
  return errs;
}

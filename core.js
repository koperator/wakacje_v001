// Logika bez DOM: wartości, punktacja, walidacja danych i profilu.
// Używana przez index.html, test.mjs i merge.mjs.

export const MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const FIELDS = ['min', 'idealFrom', 'idealTo', 'max'];
const DEFAULT_SETTINGS = {
  flagPenalty: 10,
  swimFlags: true,
  seasonThresholds: { low: 50, high: 70 },
  // categories: { id kolumny category/tags: wybrane wartości } – pusta lista albo brak klucza = bez filtra;
  // tagMode: all = kierunek ma wszystkie wybrane tagi, any = choć jeden; ranges: { id kolumny liczbowej/skali: { min, max } };
  // packageOnly: tylko kierunki z ofertą wczasów (package_price) w miesiącu.
  filters: {
    hideLevel3: false, maxFlightTime: null, maxStops: null, minCoverage: null, minScore: null, maxTripCost: null,
    categories: {}, tagMode: 'all', ranges: {}, packageOnly: false,
  },
  // Kierunki wyłączone ręcznie (id) – ukryte w tabeli i na wykresach.
  excluded: [],
  // Poziom widoku: 1 beginner (najprostsze kolumny), 2 advanced, 3 master (wszystkie). Tylko pokazywanie, nie wynik.
  viewLevel: 2,
  // Skład wyjazdu i długość pobytu (kalkulator kosztu wyjazdu).
  // mode: self = na własną rękę (lot + nocleg + wydatki), package = wczasy z biurem (kolumna package_price).
  trip: { adults: 2, children: 0, infants: 0, nights: 14, mode: 'self' },
  // Umowne stawki kalkulatora. lodging: pokój na noc, daily: dorosły na dzień – dla poziomów cen na miejscu 1–5 (zł).
  // extras: % od pobytu (nocleg + wydatki) dla zwiedzania 1 i 5, liniowo pomiędzy.
  costs: {
    ticketFactor: 0.85, infantTicket: 0, childDaily: 0.5,
    // Wczasy z biurem: dziecko 2–11 jako udział ceny dorosłego, niemowlę – stała opłata (zł).
    childPackage: 0.6, infantPackage: 300,
    lodging: [200, 300, 500, 750, 1200], daily: [120, 180, 280, 420, 650], extras: [10, 25],
    // Mnożnik noclegu według sezonu lokalnego miesiąca (szczyt drożej, niski sezon taniej).
    season: { H: 1.25, M: 1, L: 0.85 },
  },
};
const COLUMN_ID = /^[a-z0-9_]+$/;
export const DEST_ID = /^[a-z0-9-]+$/;

export const isObj = x => typeof x === 'object' && x !== null && !Array.isArray(x);
const isNum = x => typeof x === 'number' && Number.isFinite(x);
export const isScoring = col => col?.type === 'number' || col?.type === 'scale';
// Kolumny z listą dozwolonych wartości (values): jedna wartość (category) albo lista (tags). Filtrowane, nie punktowane.
export const isChoice = col => col?.type === 'category' || col?.type === 'tags';
// Poziom widoku kolumny (pole level w rejestrze, 1–3); brak = 3, czyli tylko w widoku master.
export const VIEW_LEVELS = [1, 2, 3];
export const colLevel = col => (VIEW_LEVELS.includes(col?.level) ? col.level : 3);
// Kolumny, które można filtrować zakresem od–do.
export const isRangeable = col => isScoring(col);

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
// Wyjątek: "na" w kolumnie z naLabel (brak oferty) odrzuca.
export const FILTER_COLUMNS = { maxFlightTime: 'flight_time', maxStops: 'stops', maxTripCost: 'trip_cost' };
export const PACKAGE_PRICE = 'package_price';
// Wartości kolumny category/tags w kierunku: lista (category – jedna pozycja) albo null, gdy brak danych lub błędna wartość.
export function choiceValues(dest, col) {
  const p = parseValue(rawValue(dest, col, 0));
  if (p.kind !== 'value' && p.kind !== 'est') return null;
  const list = col.type === 'tags' ? p.v : [p.v];
  return Array.isArray(list) && list.every(v => Array.isArray(col.values) && col.values.includes(v)) ? list : null;
}
// Liczba z kolumny (zwykła albo szacunek) albo null; "na" osobno.
const numberIn = (dest, col, month) => {
  const p = parseValue(rawValue(dest, col, month));
  return { na: p.kind === 'na', v: (p.kind === 'value' || p.kind === 'est') && validNumber(col, p.v) ? p.v : null };
};
// unchecked: klucze filtrów bez danych – maxFlightTime itd., 'minScore', 'packageOnly', 'cat:<id>', 'range:<id>'.
export function checkFilters(dest, month, res, columns, f) {
  const unchecked = [];
  const colOf = id => columns.find(c => c?.id === id);
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
    // "na" w kolumnie z naLabel (np. koszt wyjazdu: brak oferty) odrzuca – takiego wyjazdu nie da się kupić.
    if (p.kind === 'na' && typeof col?.naLabel === 'string') return { pass: false, unchecked };
    if (v == null) unchecked.push(key);
    else if (v > f[key]) return { pass: false, unchecked };
  }
  // Kategorie i tagi: wartość spoza wyboru odrzuca; brak danych – niesprawdzony.
  for (const [id, sel] of Object.entries(isObj(f.categories) ? f.categories : {})) {
    const col = colOf(id);
    if (!isChoice(col) || !Array.isArray(sel) || !sel.length) continue;
    const vals = choiceValues(dest, col);
    if (vals == null) { unchecked.push(`cat:${id}`); continue; }
    const ok = col.type === 'category' ? sel.includes(vals[0])
      : f.tagMode === 'any' ? sel.some(t => vals.includes(t)) : sel.every(t => vals.includes(t));
    if (!ok) return { pass: false, unchecked };
  }
  // Zakresy od–do: "na" (nie dotyczy, brak oferty) odrzuca – np. „woda od 24” bez morza.
  for (const [id, r] of Object.entries(isObj(f.ranges) ? f.ranges : {})) {
    const col = colOf(id);
    if (!isRangeable(col) || !isObj(r) || (r.min == null && r.max == null)) continue;
    const { na, v } = numberIn(dest, col, month);
    if (na) return { pass: false, unchecked };
    if (v == null) { unchecked.push(`range:${id}`); continue; }
    if ((r.min != null && v < r.min) || (r.max != null && v > r.max)) return { pass: false, unchecked };
  }
  if (f.packageOnly) {
    const col = colOf(PACKAGE_PRICE);
    const { na, v } = col ? numberIn(dest, col, month) : { na: false, v: null };
    if (na) return { pass: false, unchecked };
    if (v == null) unchecked.push('packageOnly');
  }
  return { pass: true, unchecked };
}

// ---------- kalkulator kosztu wyjazdu ----------
// Rząd wielkości kosztu całej grupy w miesiącu (zł). Liczony z ceny lotu w miesiącu, poziomu cen na miejscu (1–5)
// i zwiedzania (1–5) według umownych stawek z profilu (costs) i składu wyjazdu (trip).
// Bilety: korzystny zakup = cena miesiąca × ticketFactor, ale nie mniej niż cena najtańszego miesiąca kierunku
// (to ok. dolna granica typowych cen), × (dorośli + dzieci) + infantTicket × niemowlęta.
// Nocleg: stawka poziomu × mnożnik sezonu lokalnego miesiąca (season.H/M/L; brak sezonu = 1) × pokoje × noce.
// Pokoje: dorośli / 2 w górę, ale najwyżej 4 osoby (dorośli + dzieci) na pokój, co najmniej 1.
// Wydatki: jedzenie i transport lokalny – stawka poziomu × (dorośli + childDaily × dzieci) × noce.
// Dodatkowe (wycieczki itp.): % od noclegu i wydatków, od extras[0] przy zwiedzaniu 1 do extras[1] przy 5.
// Brak ceny lotu albo poziomu cen: null i lista brakujących kolumn; brak zwiedzania: środek zakresu %.
// Tryb „z biurem” (trip.mode = package): cena wczasów miesiąca (package_price, za 7 nocy) zamiast lotu, noclegu i wydatków.
// Inna liczba nocy: część stała (bilet jak wyżej, najwyżej połowa ceny wczasów; bez ceny lotu 40%) + reszta × noce / 7.
// Dziecko: childPackage × cena dorosłego; niemowlę: infantPackage. Dodatkowe (wycieczki): ten sam % co na własną rękę,
// od noclegu i wydatków liczonych jak na własną rękę (bez poziomu cen: od części hotelowej wczasów).
// Brak oferty (package_price = "na") albo brak danych: null, missing = ['package_price'], noOffer dla "na".
export const TRIP_COST = 'trip_cost';
const numOf = (col, raw) => {
  const p = parseValue(raw);
  return (p.kind === 'value' || p.kind === 'est') && col && validNumber(col, p.v) ? p.v : null;
};
const extrasPct = (c, sights) => sights == null ? (c.extras[0] + c.extras[1]) / 2 : c.extras[0] + (c.extras[1] - c.extras[0]) * (sights - 1) / 4;
export function tripCost(dest, month, profile, columns) {
  const col = id => columns.find(c => c?.id === id);
  const price = numOf(col('flight_price'), dest?.months?.[month]?.flight_price);
  const level = numOf(col('local_prices'), dest?.fixed?.local_prices);
  const sights = numOf(col('sightseeing'), dest?.fixed?.sightseeing);
  const { adults, children, infants, nights } = profile.trip;
  const c = profile.costs;
  const fpCol = col('flight_price');
  const prices = (dest?.months ?? []).map(m => numOf(fpCol, m?.flight_price)).filter(x => x != null);
  const fare = price == null ? null : Math.max(price * c.ticketFactor, Math.min(...prices));
  const rooms = Math.max(1, Math.ceil(adults / 2), Math.ceil((adults + children) / 4));
  const ls = parseValue(dest?.months?.[month]?.local_season);
  const seasonKey = ['H', 'M', 'L'].includes(ls.v) ? ls.v : null;
  const seasonMult = seasonKey ? c.season[seasonKey] : 1;
  const stay = level == null ? null : {
    lodging: c.lodging[level - 1] * seasonMult * rooms * nights,
    daily: c.daily[level - 1] * (adults + c.childDaily * children) * nights,
  };
  const pct = extrasPct(c, sights);
  if (profile.trip.mode === 'package') {
    const raw = dest?.months?.[month]?.package_price;
    const pkg = numOf(col('package_price'), raw);
    if (pkg == null) return { total: null, mode: 'package', missing: ['package_price'], noOffer: parseValue(raw).kind === 'na' };
    const fixed = fare == null ? 0.4 * pkg : Math.min(fare, 0.5 * pkg);
    const perAdult = fixed + (pkg - fixed) * nights / 7;
    const pkgTotal = perAdult * (adults + c.childPackage * children) + c.infantPackage * infants;
    const base = stay ? stay.lodging + stay.daily : (pkg - fixed) * nights / 7 * (adults + c.childPackage * children);
    const extras = base * pct / 100;
    return { total: pkgTotal + extras, mode: 'package', pkg, perAdult, pkgTotal, extras, extrasPct: pct, level, sights, missing: [] };
  }
  const missing = [...(price == null ? ['flight_price'] : []), ...(level == null ? ['local_prices'] : [])];
  if (missing.length) return { total: null, mode: 'self', missing };
  const tickets = fare * (adults + children) + c.infantTicket * infants;
  const { lodging, daily } = stay;
  const extras = (lodging + daily) * pct / 100;
  return { total: tickets + lodging + daily + extras, mode: 'self', tickets, fare, lodging, daily, extras, extrasPct: pct, rooms, level, sights, seasonKey, seasonMult, missing: [] };
}

// Kierunki z wyliczoną kolumną trip_cost (tys. zł, szacunek, zaokrąglone do 0,5) – kopie, dane źródłowe bez zmian.
// Wymaga poprawnego profilu. Bez kolumny trip_cost w rejestrze zwraca kierunki bez zmian.
export function withTripCost(destinations, profile, columns) {
  if (!columns.some(c => c?.id === TRIP_COST)) return destinations;
  return destinations.map(d => {
    if (!isObj(d) || !Array.isArray(d.months)) return d;
    const months = d.months.map((m, i) => {
      const r = tripCost(d, i, profile, columns);
      const v = r.total == null ? (r.noOffer ? 'na' : null) : { est: Math.round(r.total / 500) / 2 };
      return isObj(m) ? { ...m, [TRIP_COST]: v } : m;
    });
    return { ...d, months };
  });
}

// ---------- różnica czasu ----------
// Przesunięcie strefy czasowej (IANA, np. "Asia/Bangkok") względem UTC w godzinach w danej chwili; null dla nieznanej strefy.
// Formatery w pamięci podręcznej: tworzenie Intl.DateTimeFormat jest kosztowne, a różnicę czasu liczy każde przeliczenie strony.
const TZ_FORMAT = new Map();
export function tzOffset(tz, date) {
  try {
    if (!TZ_FORMAT.has(tz)) TZ_FORMAT.set(tz, new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'longOffset' }));
    const name = TZ_FORMAT.get(tz).formatToParts(date).find(p => p.type === 'timeZoneName')?.value ?? '';
    if (name === 'GMT') return 0;
    const m = name.match(/^GMT([+-])(\d{2}):(\d{2})$/);
    return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) + Number(m[3]) / 60) : null;
  } catch { return null; }
}
export const validTz = tz => typeof tz === 'string' && tzOffset(tz, new Date(0)) != null;
export const HOME_TZ = 'Europe/Warsaw';
export const TIME_DIFF = 'time_diff';
// Różnica czasu miejsca (pole tz kierunku) względem Polski w połowie miesiąca (z czasem letnim po obu stronach), w godzinach.
export function timeDiff(tz, month, year = new Date().getFullYear()) {
  const at = new Date(Date.UTC(year, month, 15, 12));
  const a = tzOffset(tz, at), b = tzOffset(HOME_TZ, at);
  return a == null || b == null ? null : a - b;
}

// Kierunki z kolumnami wyliczanymi przez stronę: trip_cost (z profilu) i time_diff (z pola tz). Kopie, dane bez zmian.
export function withComputed(destinations, profile, columns, year) {
  const withCost = withTripCost(destinations, profile, columns);
  if (!columns.some(c => c?.id === TIME_DIFF)) return withCost;
  return withCost.map(d => {
    if (!isObj(d) || !Array.isArray(d.months)) return d;
    const months = d.months.map((m, i) => {
      const v = validTz(d.tz) ? timeDiff(d.tz, i, year) : null;
      return isObj(m) ? { ...m, [TIME_DIFF]: v } : m;
    });
    return { ...d, months };
  });
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
  for (const k of ['name', 'flagPenalty', 'swimFlags', 'excluded', 'viewLevel']) {
    if (loaded[k] !== undefined) profile[k] = loaded[k];
    else addedSettings.push(k);
  }
  for (const k of ['seasonThresholds', 'filters', 'trip', 'costs']) {
    const v = loaded[k];
    if (v === undefined) { addedSettings.push(k); continue; }
    if (!isObj(v)) { profile[k] = v; continue; }
    profile[k] = Object.fromEntries(Object.keys(base[k]).map(f => {
      if (v[f] !== undefined) return [f, v[f]];
      addedSettings.push(`${k}.${f}`);
      return [f, base[k][f]];
    }));
  }
  // Filtry kolumn, których nie ma już w rejestrze (albo zmieniły typ), i wartości spoza listy są po cichu pomijane.
  const fl = profile.filters;
  if (isObj(fl)) {
    const col = id => columns.find(c => c?.id === id);
    if (isObj(fl.categories)) fl.categories = Object.fromEntries(Object.entries(fl.categories)
      .filter(([id]) => isChoice(col(id)))
      .map(([id, sel]) => [id, Array.isArray(sel) ? sel.filter(v => col(id).values?.includes(v)) : sel]));
    if (isObj(fl.ranges)) fl.ranges = Object.fromEntries(Object.entries(fl.ranges).filter(([id]) => isRangeable(col(id))));
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
  // also: inne pola, których dotyczy błąd (np. obie wartości w złej kolejności) – strona oznacza wszystkie.
  const err = (field, msg, also) => errs.push(also ? { field, msg, also } : { field, msg });
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
      if (r[filled[i]] < r[filled[i - 1]]) err(at(filled[i]), `${col.name}: wymagane min ≤ ideał od ≤ ideał do ≤ max.`, [at(filled[i - 1])]);
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
    if (fl.maxTripCost != null && (!isNum(fl.maxTripCost) || fl.maxTripCost < 0))
      err('filters.maxTripCost', 'Filtr „budżet do” musi być pusty albo liczbą ≥ 0.');
    if (!isObj(fl.categories) || !Object.values(fl.categories).every(v => Array.isArray(v) && v.every(x => typeof x === 'string')))
      err('filters.categories', 'Filtry kategorii muszą być obiektem: id kolumny → lista wybranych wartości.');
    if (!['all', 'any'].includes(fl.tagMode)) err('filters.tagMode', 'Tryb tagów musi być „all” (wszystkie) albo „any” (którykolwiek).');
    if (!isObj(fl.ranges)) err('filters.ranges', 'Filtry zakresów muszą być obiektem: id kolumny → { min, max }.');
    else for (const [id, r] of Object.entries(fl.ranges)) {
      const name = columns.find(c => c?.id === id)?.name ?? id;
      if (!isObj(r) || [r.min, r.max].some(x => x != null && !isNum(x))) err(`filters.ranges.${id}`, `Filtr „${name}”: od i do muszą być puste albo liczbami.`);
      else if (r.min != null && r.max != null && r.min > r.max) err(`filters.ranges.${id}`, `Filtr „${name}”: „od” nie może być większe niż „do”.`);
    }
    if (typeof fl.packageOnly !== 'boolean') err('filters.packageOnly', 'Filtr „tylko z ofertą biur” musi być tak/nie.');
  }
  if (!VIEW_LEVELS.includes(p.viewLevel)) err('viewLevel', 'Poziom widoku musi być 1 (beginner), 2 (advanced) albo 3 (master).');
  if (!Array.isArray(p.excluded) || !p.excluded.every(x => typeof x === 'string'))
    err('excluded', 'Lista wyłączonych kierunków musi być listą id.');
  const tr = p.trip;
  if (!isObj(tr)) err('trip', 'Pole trip musi być obiektem.');
  else {
    const cnt = { adults: 'dorośli', children: 'dzieci', infants: 'niemowlęta' };
    for (const [k, label] of Object.entries(cnt))
      if (!Number.isInteger(tr[k]) || tr[k] < 0 || tr[k] > 20) err(`trip.${k}`, `Liczba osób (${label}) musi być liczbą całkowitą 0–20.`);
    if (!Number.isInteger(tr.nights) || tr.nights < 1 || tr.nights > 365) err('trip.nights', 'Liczba nocy musi być liczbą całkowitą 1–365.');
    if (!['self', 'package'].includes(tr.mode)) err('trip.mode', 'Tryb wyjazdu musi być „self” (na własną rękę) albo „package” (z biurem).');
    // Dzieci i niemowlęta nie podróżują same; kalkulator liczy pokoje i bilety od dorosłych.
    if (Number.isInteger(tr.adults) && tr.adults < 1) err('trip.adults', 'Wyjazd potrzebuje co najmniej jednego dorosłego.');
  }
  const co = p.costs;
  if (!isObj(co)) err('costs', 'Pole costs musi być obiektem.');
  else {
    if (!isNum(co.ticketFactor) || co.ticketFactor <= 0 || co.ticketFactor > 2) err('costs.ticketFactor', 'Mnożnik ceny biletu musi być liczbą większą od 0, najwyżej 2.');
    if (!isNum(co.infantTicket) || co.infantTicket < 0) err('costs.infantTicket', 'Bilet niemowlęcia musi być liczbą ≥ 0 (zł).');
    if (!isNum(co.childDaily) || co.childDaily < 0 || co.childDaily > 1) err('costs.childDaily', 'Udział dziecka w wydatkach dziennych musi być liczbą 0–1.');
    if (!isNum(co.childPackage) || co.childPackage < 0 || co.childPackage > 1) err('costs.childPackage', 'Cena wczasów dziecka musi być udziałem ceny dorosłego 0–1.');
    if (!isNum(co.infantPackage) || co.infantPackage < 0) err('costs.infantPackage', 'Wczasy niemowlęcia muszą być liczbą ≥ 0 (zł).');
    for (const k of ['lodging', 'daily']) {
      const a = co[k];
      if (!Array.isArray(a) || a.length !== 5) { err(`costs.${k}`, 'Stawki muszą być listą 5 liczb (poziomy cen 1–5).'); continue; }
      a.forEach((x, i) => { if (!isNum(x) || x < 0) err(`costs.${k}.${i}`, `Stawka dla poziomu ${i + 1} musi być liczbą ≥ 0.`); });
    }
    const sm = co.season;
    if (!isObj(sm) || !['H', 'M', 'L'].every(k => isNum(sm[k]) && sm[k] > 0 && sm[k] <= 3))
      err('costs.season', 'Mnożniki noclegu dla sezonu H, M i L muszą być liczbami większymi od 0, najwyżej 3.');
    const e = co.extras;
    if (!Array.isArray(e) || e.length !== 2 || !e.every(x => isNum(x) && x >= 0 && x <= 100))
      err('costs.extras', 'Dodatkowe wydatki: dwie liczby 0–100 (% dla zwiedzania 1 i 5).');
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
    if (!['number', 'scale', 'hml', 'flags', 'category', 'tags'].includes(c.type)) errs.push(`${at}: nieznany typ "${c.type}".`);
    if (c.level !== undefined && !VIEW_LEVELS.includes(c.level)) errs.push(`${at}: level musi być 1, 2 albo 3 (poziom widoku).`);
    if (isChoice(c)) {
      if (!Array.isArray(c.values) || !c.values.length || !c.values.every(v => typeof v === 'string' && v.trim()) || new Set(c.values).size !== c.values.length)
        errs.push(`${at}: kolumna ${c.type} potrzebuje values: listy różnych, niepustych nazw.`);
      if (c.scope !== 'fixed') errs.push(`${at}: kolumna ${c.type} musi być stała (scope fixed).`);
    } else if (c.values !== undefined) errs.push(`${at}: pole values dotyczy tylko kolumn category i tags.`);
    if (!['month', 'fixed'].includes(c.scope)) errs.push(`${at}: zakres musi być month albo fixed.`);
    if (typeof c.name !== 'string' || typeof c.group !== 'string') errs.push(`${at}: brak nazwy lub grupy.`);
    if (typeof c.weather !== 'boolean') errs.push(`${at}: pole weather musi być true/false.`);
    if (c.type === 'number' && !(Array.isArray(c.valid) && c.valid.length === 2 && c.valid.every(isNum) && c.valid[0] <= c.valid[1]))
      errs.push(`${at}: kolumna liczbowa potrzebuje valid: [min, max].`);
    if (c.integer !== undefined && (typeof c.integer !== 'boolean' || c.type !== 'number'))
      errs.push(`${at}: pole integer (true/false) dotyczy tylko kolumn liczbowych.`);
    if (isScoring(c) && !isObj(c.default)) errs.push(`${at}: brak domyślnej formatki.`);
    if (c.type === 'flags' && c.scope !== 'month') errs.push(`${at}: flagi muszą być per miesiąc.`);
    if (c.naLabel !== undefined && (typeof c.naLabel !== 'string' || !c.naLabel.trim())) errs.push(`${at}: naLabel musi być niepustym tekstem.`);
    if (c.computed !== undefined && (c.computed !== true || c.type !== 'number'))
      errs.push(`${at}: pole computed (true) dotyczy tylko kolumn liczbowych wyliczanych przez stronę.`);
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
      if (col.type === 'flags' || isChoice(col)) errs.push(`${where}: kolumna ${col.type} nie może mieć "na".`);
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
    } else if (col.type === 'category') {
      if (!col.values?.includes(v)) errs.push(`${where}: ${JSON.stringify(raw)} spoza listy wartości kolumny.`);
    } else if (col.type === 'tags') {
      if (!Array.isArray(v)) { errs.push(`${where}: tagi muszą być listą.`); return; }
      for (const t of v) if (!col.values?.includes(t)) errs.push(`${where}: nieznany tag ${JSON.stringify(t)}.`);
      if (new Set(v).size !== v.length) errs.push(`${where}: powtórzony tag.`);
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
      else if (col.computed) errs.push(`${where}: kolumna "${key}" jest wyliczana przez stronę i nie może być w pliku kierunku.`);
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
    for (const k of ['costNote', 'entryNote'])
      if (d[k] !== undefined && (typeof d[k] !== 'string' || !d[k].trim())) errs.push(`${name}: ${k} musi być niepustym tekstem.`);
    if (d.tz !== undefined && !validTz(d.tz)) errs.push(`${name}: tz ${JSON.stringify(d.tz)} nie jest znaną strefą czasową (np. "Asia/Bangkok").`);
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

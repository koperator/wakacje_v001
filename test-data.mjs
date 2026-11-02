// Testy wiarygodności danych (wszystkie kierunki z rejestru): node --test test-data.mjs
// Struktura i typy są sprawdzane w test.mjs (validateData); tu: kompletność, spójność między kolumnami i fizyczny sens wartości.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { parseValue, registryIds, assemble, validTz, isChoice, colLevel, defaultProfile, validateProfile } from './core.js';

const read = p => JSON.parse(readFileSync(new URL(p, import.meta.url), 'utf8'));
const reg = read('./rejestr.json');
const { ids } = registryIds(reg);
const { data } = assemble(reg, ids.map(id => ({ id, value: read(`./kierunki/${id}.json`) })));
const D = data.destinations;
const col = id => reg.columns.find(c => c.id === id);
const num = raw => { const p = parseValue(raw); return p.kind === 'value' || p.kind === 'est' ? p.v : null; };
// Własności całego zbioru (każdy tag użyty, wybór w każdym miesiącu) sprawdzane tylko na pełnych danych, nie na wycinku do przeglądu.
const FULL = D.length >= 20 ? {} : { skip: 'tylko pełny zestaw kierunków' };
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const SHORT = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
// Zbiera wszystkie naruszenia, żeby test pokazał pełną listę, a nie tylko pierwsze.
function expectNone(list, what) { assert.deepEqual(list, [], `${what}:\n${list.join('\n')}`); }
const eachMonth = (fn) => D.flatMap(d => d.months.flatMap((m, i) => fn(d, m, i) ?? []));

test('rejestr: każda kolumna ma nazwę, grupę, definicję i poziom widoku; domyślna formatka poprawna', () => {
  const bad = reg.columns.filter(c => !c.name?.trim() || !c.group?.trim() || typeof c.definition !== 'string' || c.definition.length < 40 || ![1, 2, 3].includes(c.level))
    .map(c => c.id);
  expectNone(bad, 'kolumny bez opisu');
  assert.deepEqual(validateProfile(defaultProfile(reg.columns), reg.columns), []);
  for (const lvl of [1, 2, 3]) assert.ok(reg.columns.some(c => colLevel(c) === lvl), `brak kolumn na poziomie ${lvl}`);
  assert.deepEqual(read('./profil-domyslny.json'), defaultProfile(reg.columns));
});

test('rejestr: typy flag mają różne id i ikony', () => {
  const ids = reg.flagTypes.map(t => t.id), icons = reg.flagTypes.map(t => t.icon);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(icons).size, icons.length);
});

test('rejestr: lista kierunków odpowiada plikom w kierunki/', () => {
  const files = readdirSync(new URL('./kierunki/', import.meta.url)).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)).sort();
  assert.deepEqual([...ids].sort(), files);
  assert.equal(D.length, ids.length);
});

test('kompletność: każda kolumna (poza wyliczanymi) ma wartość w każdym kierunku i miesiącu', () => {
  const miss = [];
  for (const d of D) for (const c of reg.columns.filter(c => !c.computed)) {
    if (c.scope === 'fixed') { if (num(d.fixed[c.id]) == null && d.fixed[c.id] !== 'na' && !Array.isArray(d.fixed[c.id]) && typeof d.fixed[c.id] !== 'string') miss.push(`${d.id}: ${c.id}`); }
    else d.months.forEach((m, i) => { if (m[c.id] === undefined || m[c.id] === null) miss.push(`${d.id} ${SHORT[i]}: ${c.id}`); });
  }
  expectNone(miss, 'brakujące wartości');
});

test('opis kierunku: kraj, miejsce, notatka, formalności, strefa, źródła', () => {
  const bad = D.flatMap(d => [
    !d.country?.trim() && `${d.id}: kraj`, !d.place?.trim() && `${d.id}: miejsce`,
    !(d.notes?.length > 80) && `${d.id}: notatka za krótka`,
    !(d.entryNote?.length > 10) && `${d.id}: entryNote`, !validTz(d.tz) && `${d.id}: tz`,
    !(d.sources?.length >= 3) && `${d.id}: mniej niż 3 źródła`,
  ].filter(Boolean));
  expectNone(bad, 'opis kierunku');
});

test('źródła: daty nie z przyszłości, adresy http(s), bez powtórzeń', () => {
  const today = new Date().toISOString().slice(0, 10);
  const bad = D.flatMap(d => {
    const out = [];
    const urls = d.sources.map(s => s.url).filter(Boolean);
    const titles = d.sources.map(s => s.title);
    if (new Set(titles).size !== titles.length) out.push(`${d.id}: powtórzony tytuł źródła`);
    for (const s of d.sources) {
      if (s.checked > today) out.push(`${d.id}: data z przyszłości ${s.checked}`);
      if (s.checked < '2024-01-01') out.push(`${d.id}: bardzo stara data ${s.checked}`);
      if (s.url !== undefined && !/^https:\/\/[^\s]+$/.test(s.url) && !/^http:\/\/[^\s]+$/.test(s.url)) out.push(`${d.id}: url ${s.url}`);
      if (!s.title.trim()) out.push(`${d.id}: pusty tytuł`);
    }
    if (urls.length !== new Set(urls).size) out.push(`${d.id}: powtórzony url`);
    return out;
  });
  expectNone(bad, 'źródła');
});

test('pogoda: temperatura dnia ≥ nocy, punkt rosy ≤ temperatury dnia, w rozsądnych granicach', () => {
  expectNone(eachMonth((d, m, i) => {
    const td = num(m.temp_day), tn = num(m.temp_night), dp = num(m.dew_point);
    const out = [];
    if (td != null && tn != null && td < tn) out.push(`${d.id} ${SHORT[i]}: dzień ${td} < noc ${tn}`);
    if (td != null && tn != null && td - tn > 25) out.push(`${d.id} ${SHORT[i]}: amplituda ${td - tn}`);
    if (dp != null && td != null && dp > td) out.push(`${d.id} ${SHORT[i]}: punkt rosy ${dp} > dzień ${td}`);
    if (td != null && (td < -15 || td > 48)) out.push(`${d.id} ${SHORT[i]}: temp dzień ${td}`);
    return out;
  }), 'temperatury');
});

test('pogoda: dni deszczowe ≤ dni miesiąca, słońce ≤ długość dnia, UV 0–16, opad ≥ 0, wiatr ≥ 0', () => {
  expectNone(eachMonth((d, m, i) => {
    const out = [];
    const rd = num(m.rain_days), sun = num(m.sun), uv = num(m.uv), rain = num(m.rain), wind = num(m.wind);
    if (rd != null && (rd < 0 || rd > DAYS[i])) out.push(`${d.id} ${SHORT[i]}: dni deszczowe ${rd}`);
    if (sun != null && (sun < 0 || sun > 14.5)) out.push(`${d.id} ${SHORT[i]}: słońce ${sun} h`);
    if (uv != null && (uv < 0 || uv > 16)) out.push(`${d.id} ${SHORT[i]}: UV ${uv}`);
    if (rain != null && rain < 0) out.push(`${d.id} ${SHORT[i]}: opad ${rain}`);
    if (wind != null && (wind < 0 || wind > 60)) out.push(`${d.id} ${SHORT[i]}: wiatr ${wind}`);
    // dużo dni deszczowych przy znikomym opadzie albo odwrotnie
    if (rd != null && rain != null && rd >= 10 && rain < 10) out.push(`${d.id} ${SHORT[i]}: ${rd} dni deszczowych przy ${rain} mm`);
    if (rd != null && rain != null && rd < 0.5 && rain > 60) out.push(`${d.id} ${SHORT[i]}: ${rain} mm przy ${rd} dniach deszczowych`);
    return out;
  }), 'opady, słońce, UV, wiatr');
});

test('morze: woda „nie dotyczy” w całym roku dokładnie tam, gdzie plaże „nie dotyczy”; temperatura wody 0–35 °C', () => {
  const bad = D.flatMap(d => {
    const naW = d.months.map(m => m.water === 'na');
    const out = [];
    if (naW.some(Boolean) && !naW.every(Boolean)) out.push(`${d.id}: woda „na” tylko w części miesięcy`);
    if (naW[0] !== (d.fixed.beaches === 'na')) out.push(`${d.id}: woda „na” ≠ plaże „na”`);
    d.months.forEach((m, i) => { const w = num(m.water); if (w != null && (w < 0 || w > 35)) out.push(`${d.id} ${SHORT[i]}: woda ${w}`); });
    return out;
  });
  expectNone(bad, 'morze');
});

test('morze: zmiana temperatury wody z miesiąca na miesiąc ≤ 7 °C (woda ma bezwładność; płytkie morza wiosną do ok. 6 °C)', () => {
  expectNone(D.flatMap(d => d.months.flatMap((m, i) => {
    const a = num(m.water), b = num(d.months[(i + 1) % 12].water);
    return a != null && b != null && Math.abs(a - b) > 7 ? [`${d.id} ${SHORT[i]}→${SHORT[(i + 1) % 12]}: ${a} → ${b}`] : [];
  })), 'skoki temperatury wody');
});

test('pogoda: zmiana temperatury dnia z miesiąca na miesiąc ≤ 8 °C', () => {
  expectNone(D.flatMap(d => d.months.flatMap((m, i) => {
    const a = num(m.temp_day), b = num(d.months[(i + 1) % 12].temp_day);
    return a != null && b != null && Math.abs(a - b) > 8 ? [`${d.id} ${SHORT[i]}→${SHORT[(i + 1) % 12]}: ${a} → ${b}`] : [];
  })), 'skoki temperatury');
});

test('koszty: ceny lotów dodatnie i w rozsądnym zakresie; wczasy droższe niż sam lot w tym miesiącu', () => {
  expectNone(eachMonth((d, m, i) => {
    const fp = num(m.flight_price), pp = num(m.package_price), out = [];
    if (fp != null && (fp < 200 || fp > 25000)) out.push(`${d.id} ${SHORT[i]}: lot ${fp}`);
    if (pp != null && (pp < 800 || pp > 40000)) out.push(`${d.id} ${SHORT[i]}: wczasy ${pp}`);
    if (pp != null && fp != null && pp < fp * 0.6) out.push(`${d.id} ${SHORT[i]}: wczasy ${pp} < 60% lotu ${fp}`);
    return out;
  }), 'ceny');
});

test('koszty: wczasy z biurem – oferta „na” całoroczna albo sezonowa w ciągłym bloku miesięcy', () => {
  const bad = D.flatMap(d => {
    const has = d.months.map(m => m.package_price !== 'na');
    // liczba przejść oferta ↔ brak oferty po okręgu: 0 (cały rok / nigdy) albo 2 (jeden sezon)
    const changes = has.filter((h, i) => h !== has[(i + 1) % 12]).length;
    return changes > 2 ? [`${d.id}: sezon wczasów w kilku kawałkach (${has.map(h => (h ? 'x' : '.')).join('')})`] : [];
  });
  expectNone(bad, 'sezon wczasów');
});

test('dojazd: czas lotu rośnie z przesiadkami, transfer krótszy niż lot', () => {
  const bad = D.flatMap(d => {
    const ft = num(d.fixed.flight_time), st = num(d.fixed.stops), tr = num(d.fixed.transfer), out = [];
    if (st === 0 && ft > 12) out.push(`${d.id}: ${ft} h bez przesiadek`);
    if (st >= 1 && ft < 4) out.push(`${d.id}: ${ft} h z przesiadką`);
    if (tr != null && ft != null && tr > ft) out.push(`${d.id}: transfer ${tr} h > lot ${ft} h`);
    return out;
  });
  expectNone(bad, 'dojazd');
});

test('kategorie: region pasuje do kontynentu, formalności UE tylko w Europie', () => {
  const allowed = {
    'Morze Śródziemne': ['Europa', 'Afryka', 'Azja'], 'Atlantyk wschodni': ['Europa', 'Afryka'], 'Bałtyk i Morze Czarne': ['Europa'],
    'Morze Czerwone': ['Afryka', 'Azja'], 'Półwysep Arabski': ['Azja'], 'Afryka Wschodnia': ['Afryka'], 'Wyspy Oceanu Indyjskiego': ['Afryka', 'Azja'],
    'Azja Południowa': ['Azja'], 'Azja Południowo-Wschodnia': ['Azja'], 'Karaiby': ['Ameryka Północna i Karaiby', 'Ameryka Środkowa i Południowa'],
    'Pacyfik Ameryki Środkowej': ['Ameryka Północna i Karaiby', 'Ameryka Środkowa i Południowa'], 'Wybrzeże Brazylii': ['Ameryka Środkowa i Południowa'],
    'Australia': ['Australia i Oceania'], 'Wyspy Pacyfiku': ['Australia i Oceania'],
  };
  assert.deepEqual(Object.keys(allowed).sort(), [...col('region').values].sort(), 'mapa regionów nieaktualna');
  const bad = D.flatMap(d => [
    !allowed[d.fixed.region]?.includes(d.fixed.continent) && `${d.id}: ${d.fixed.region} / ${d.fixed.continent}`,
    d.fixed.entry === 'dowód osobisty' && d.fixed.continent !== 'Europa' && `${d.id}: dowód poza Europą`,
  ].filter(Boolean));
  expectNone(bad, 'kategorie');
});

test('kategorie: każda wartość kategorii i każdy tag występuje w co najmniej jednym kierunku', FULL, () => {
  const unused = reg.columns.filter(isChoice).flatMap(c => c.values.filter(v => !D.some(d => (c.type === 'tags' ? d.fixed[c.id] : [d.fixed[c.id]]).includes(v))).map(v => `${c.id}: ${v}`));
  expectNone(unused, 'nieużywane wartości');
});

test('tagi: w kolejności słownika, co najmniej 1; tagi morskie tylko przy morzu; „rajska plaża” tylko przy plażach ≥ 4', () => {
  const order = col('tags').values;
  const sea = ['rajska plaża', 'płytkie wejście', 'rafa i snorkeling', 'nurkowanie', 'surfing', 'kitesurfing'];
  const bad = D.flatMap(d => {
    const t = d.fixed.tags, out = [];
    if (!t.length) out.push(`${d.id}: brak tagów`);
    if (JSON.stringify(t) !== JSON.stringify(order.filter(x => t.includes(x)))) out.push(`${d.id}: kolejność tagów`);
    if (d.fixed.beaches === 'na' && t.some(x => sea.includes(x))) out.push(`${d.id}: tag morski bez morza`);
    if (t.includes('rajska plaża') && !(num(d.fixed.beaches) >= 4)) out.push(`${d.id}: rajska plaża przy plażach ${JSON.stringify(d.fixed.beaches)}`);
    return out;
  });
  expectNone(bad, 'tagi');
});

test('formalności: notatka zgodna z kategorią', () => {
  const bad = D.flatMap(d => {
    const e = d.fixed.entry, n = d.entryNote;
    return [
      e === 'zezwolenie elektroniczne' && !/ESTA|eTA|ETA|eVisitor|NZeTA|Electronic Border/.test(n) && `${d.id}: zezwolenie bez nazwy zezwolenia`,
      e === 'wiza na lotnisku' && !/po przylocie|na lotnisku/.test(n) && `${d.id}: wiza na lotnisku bez wzmianki`,
      e === 'wiza przed wylotem' && !/wiz/.test(n) && `${d.id}: wiza przed wylotem bez wzmianki`,
      e === 'paszport + formularz online' && !/online|EASE/.test(n) && `${d.id}: formularz bez wzmianki`,
      e === 'dowód osobisty' && !/dowód|UE|krajowa/i.test(n) && `${d.id}: dowód bez wzmianki`,
    ].filter(Boolean);
  });
  expectNone(bad, 'formalności');
});

test('strefa czasowa: różnica czasu pasuje do kontynentu', () => {
  const range = { Europa: [-2, 3], Afryka: [-2, 3], Azja: [0, 8], 'Ameryka Północna i Karaiby': [-7, -4], 'Ameryka Środkowa i Południowa': [-8, -3], 'Australia i Oceania': [-13, 12] };
  const off = tz => { const s = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'longOffset' }).formatToParts(new Date(Date.UTC(2027, 0, 15))).find(p => p.type === 'timeZoneName').value; const m = s.match(/([+-])(\d\d):(\d\d)/); return m ? (m[1] === '-' ? -1 : 1) * (+m[2] + m[3] / 60) - 1 : -1; };
  const bad = D.flatMap(d => { const [a, b] = range[d.fixed.continent]; const v = off(d.tz); return v < a || v > b ? [`${d.id}: ${d.tz} (${v} h) / ${d.fixed.continent}`] : []; });
  expectNone(bad, 'strefy');
});

test('flagi: notatki niepuste, kąpielowe tylko przy morzu', () => {
  const swim = new Set(reg.flagTypes.filter(t => t.swim).map(t => t.id));
  expectNone(eachMonth((d, m, i) => (m.flags ?? []).flatMap(f => [
    !(f.note?.trim().length > 10) && `${d.id} ${SHORT[i]}: krótka notatka flagi ${f.type}`,
    swim.has(f.type) && d.fixed.beaches === 'na' && `${d.id} ${SHORT[i]}: flaga kąpielowa bez morza`,
  ].filter(Boolean))), 'flagi');
});

test('sezon lokalny: co najmniej jeden miesiąc wysokiego sezonu (H) w roku', () => {
  expectNone(D.filter(d => !d.months.some(m => num(m.local_season) === 'H')).map(d => d.id), 'bez sezonu H');
});

test('costNote: tylko tam, gdzie jest, zaczyna się wielką literą i nie powtarza notatki', () => {
  const bad = D.filter(d => d.costNote !== undefined).flatMap(d => [
    !/^[A-ZŁŚŻŹĆŃÓĄĘ]/.test(d.costNote) && `${d.id}: costNote`,
    d.notes.includes(d.costNote) && `${d.id}: costNote powtarza notatkę`,
  ].filter(Boolean));
  expectNone(bad, 'costNote');
});

test('liczenie na prawdziwych danych: wynik, pokrycie, koszt i różnica czasu w każdym miesiącu, bez NaN', async () => {
  const core = await import('./core.js');
  const bad = [];
  for (const mode of ['self', 'package']) {
    const p = core.defaultProfile(reg.columns);
    p.trip.mode = mode;
    const dests = core.withComputed(D, p, reg.columns, 2027);
    for (const d of dests) d.months.forEach((m, i) => {
      const r = core.score(d, i, reg.columns, reg.flagTypes, p);
      if (mode === 'self') {
        if (!Number.isFinite(r.score) || r.score < 0 || r.score > 100) bad.push(`${d.id} ${SHORT[i]}: wynik ${r.score}`);
        if (r.coverage !== 1) bad.push(`${d.id} ${SHORT[i]}: pokrycie ${r.coverage} (brak: ${r.missing})`);
        if (num(m.trip_cost) == null) bad.push(`${d.id} ${SHORT[i]}: koszt ${JSON.stringify(m.trip_cost)}`);
        if (!Number.isFinite(m.time_diff)) bad.push(`${d.id} ${SHORT[i]}: różnica czasu ${m.time_diff}`);
      } else {
        const want = d.months[i].package_price === 'na' ? 'na' : 'num';
        const got = m.trip_cost === 'na' ? 'na' : num(m.trip_cost) != null ? 'num' : String(m.trip_cost);
        if (want !== got) bad.push(`${d.id} ${SHORT[i]}: z biurem ${got}, oczekiwane ${want}`);
      }
      const c = num(m.trip_cost);
      if (c != null && !(c > 0 && c < 500)) bad.push(`${d.id} ${SHORT[i]}: koszt ${c} tys.`);
    });
  }
  expectNone(bad, 'liczenie');
});

test('profil domyślny: w każdym miesiącu jest wybór (co najmniej 5 kierunków w sezonie H, co najmniej 3 z wynikiem ≥ 80)', FULL, async () => {
  const core = await import('./core.js');
  const p = core.defaultProfile(reg.columns);
  const dests = core.withComputed(D, p, reg.columns, 2027);
  const bad = SHORT.flatMap((s, i) => {
    const w = dests.map(d => core.season(core.score(d, i, reg.columns, reg.flagTypes, p, true).score, p.seasonThresholds));
    const good = dests.filter(d => core.score(d, i, reg.columns, reg.flagTypes, p).score >= 80).length;
    return [w.filter(x => x === 'H').length < 5 && `${s}: ${w.filter(x => x === 'H').length} w sezonie H`, good < 3 && `${s}: ${good} z wynikiem ≥ 80`].filter(Boolean);
  });
  expectNone(bad, 'wybór w miesiącach');
});

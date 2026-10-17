// Testy punktacji i walidacji: node --test test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, copyFileSync, cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { colScore, score, season, defaultProfile, mergeProfile, validateProfile, validateData, validNumber, countedFlags, checkFilters, registryIds, assemble } from './core.js';

// Rejestr + pliki kierunków z katalogu (jak w merge.mjs i na stronie): { data, errs }.
function loadDir(dir) {
  const reg = JSON.parse(readFileSync(join(dir, 'rejestr.json'), 'utf8'));
  const listed = registryIds(reg);
  const loaded = listed.ids.map(id => {
    const p = join(dir, 'kierunki', `${id}.json`);
    if (!existsSync(p)) return { id, error: 'brak pliku.' };
    try { return { id, value: JSON.parse(readFileSync(p, 'utf8')) }; } catch (e) { return { id, error: `niepoprawny JSON (${e.message}).` }; }
  });
  const { data, errs } = assemble(reg, loaded);
  return { reg, data, errs: [...listed.errs, ...errs] };
}
const APP = new URL('.', import.meta.url).pathname;
const readData = () => loadDir(APP).data;
// Kopia aplikacji w katalogu tymczasowym + uruchamianie merge.mjs w niej.
function sandbox() {
  const dir = mkdtempSync(join(tmpdir(), 'wakacje-'));
  for (const f of ['core.js', 'merge.mjs', 'rejestr.json', 'profil-domyslny.json']) copyFileSync(new URL('./' + f, import.meta.url), join(dir, f));
  for (const d of ['kierunki', 'research']) cpSync(new URL('./' + d, import.meta.url), join(dir, d), { recursive: true });
  return {
    dir,
    run: (...args) => spawnSync(process.execPath, [join(dir, 'merge.mjs'), ...args], { cwd: dir, encoding: 'utf8' }),
    put: (name, content) => { const p = join(dir, name); writeFileSync(p, typeof content === 'string' ? content : JSON.stringify(content)); return p; },
    read: name => readFileSync(join(dir, name), 'utf8'),
    json: name => JSON.parse(readFileSync(join(dir, name), 'utf8')),
    data: () => loadDir(dir).data,
    // Zawartość wszystkich plików danych, do sprawdzania, że nic się nie zmieniło.
    snapshot: () => ['rejestr.json', ...readdirSync(join(dir, 'kierunki')).map(f => `kierunki/${f}`)].map(f => f + '\n' + readFileSync(join(dir, f), 'utf8')).join('\n'),
  };
}

const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≠ ${b}`);

const columns = [
  { id: 'temp', name: 'Temp', type: 'number', scope: 'month', group: 'P', weather: true, valid: [-50, 50], default: { min: 20, idealFrom: 25, idealTo: 30, max: 35, weight: 2 } },
  { id: 'water', name: 'Woda', type: 'number', scope: 'month', group: 'M', weather: true, valid: [0, 35], default: { min: 20, idealFrom: 26, idealTo: null, max: null, weight: 1 } },
  { id: 'sights', name: 'Zwiedzanie', type: 'scale', scope: 'fixed', group: 'X', weather: false, default: { min: 1, idealFrom: 5, idealTo: null, max: null, weight: 1 } },
  { id: 'season', name: 'Sezon', type: 'hml', scope: 'month', group: 'S', weather: false },
  { id: 'flags', name: 'Flagi', type: 'flags', scope: 'month', group: 'S', weather: false },
];
const flagTypes = [
  { id: 'monsoon', weather: true, swim: false },
  { id: 'jellyfish', weather: true, swim: true },
  { id: 'holidays', weather: false, swim: false },
];
const dest = (month0, fixed = { sights: 5 }) => ({ id: 'x', country: 'X', place: 'X', fixed, months: [month0, ...Array(11).fill({})], sources: [] });
const prof = (over = {}) => ({ ...defaultProfile(columns), ...over });

test('ocena kolumny: ideał, liniowe zbocza, granice, strony jednostronne', () => {
  const r = { min: 20, idealFrom: 25, idealTo: 30, max: 35 };
  assert.equal(colScore(27, r), 1);
  assert.equal(colScore(25, r), 1);
  near(colScore(22.5, r), 0.5);
  near(colScore(33, r), 0.4);
  assert.equal(colScore(19, r), 0);
  assert.equal(colScore(40, r), 0);
  assert.equal(colScore(-100, { min: null, idealFrom: null, idealTo: 8, max: 12 }), 1);
  assert.equal(colScore(30, { min: 20, idealFrom: 26, idealTo: null, max: null }), 1);
  // równe granice = ostre przejście
  const sharp = { min: 25, idealFrom: 25, idealTo: null, max: null };
  assert.equal(colScore(24.9, sharp), 0);
  assert.equal(colScore(25, sharp), 1);
  assert.equal(colScore(10, { min: null, idealFrom: null, idealTo: null, max: null }), null);
});

test('ocena kolumny: min i max opcjonalne – jedna wartość strony to ostra granica', () => {
  const noMin = { min: null, idealFrom: 25, idealTo: 30, max: 35 };
  assert.equal(colScore(24.9, noMin), 0);
  assert.equal(colScore(25, noMin), 1);
  near(colScore(33, noMin), 0.4);
  const noMax = { min: 20, idealFrom: 25, idealTo: 30, max: null };
  assert.equal(colScore(30, noMax), 1);
  assert.equal(colScore(30.1, noMax), 0);
  near(colScore(22.5, noMax), 0.5);
  // samo min albo samo max działa tak samo jak sam ideał
  assert.equal(colScore(19, { min: 20, idealFrom: null, idealTo: null, max: null }), 0);
  assert.equal(colScore(21, { min: 20, idealFrom: null, idealTo: null, max: null }), 1);
  assert.equal(colScore(13, { min: null, idealFrom: null, idealTo: null, max: 12 }), 0);
  assert.equal(colScore(12, { min: null, idealFrom: null, idealTo: null, max: 12 }), 1);
});

test('braki danych: kolumna pominięta, pokrycie < 100%', () => {
  const res = score(dest({ temp: null, water: 26 }), 0, columns, flagTypes, prof());
  // temp (waga 2) brak; water 1 i sights 1 mają ocenę 1
  assert.equal(res.score, 100);
  near(res.coverage, 2 / 4);
  assert.deepEqual(res.missing, ['temp']);
});

test('brak klucza w danych = brak danych (nowa kolumna)', () => {
  const res = score(dest({ water: 26 }), 0, columns, flagTypes, prof());
  near(res.coverage, 2 / 4);
});

test('szacunek liczy się jak zwykła wartość', () => {
  const a = score(dest({ temp: 22.5, water: 26 }), 0, columns, flagTypes, prof());
  const b = score(dest({ temp: { est: 22.5 }, water: { est: 26 } }), 0, columns, flagTypes, prof());
  assert.equal(a.score, b.score);
});

test('zerowe wagi: wynik pusty, nie zerowy', () => {
  const p = prof();
  for (const id in p.columns) p.columns[id].weight = 0;
  const res = score(dest({ temp: 27, water: 26 }), 0, columns, flagTypes, p);
  assert.equal(res.score, null);
  assert.equal(res.coverage, null);
});

test('same braki danych: wynik pusty, pokrycie 0', () => {
  const res = score(dest({}, {}), 0, columns, flagTypes, prof());
  assert.equal(res.score, null);
  assert.equal(res.coverage, 0);
});

test('"na" w kolumnie pogodowej jest pomijane (wynik, pokrycie, sezon)', () => {
  const res = score(dest({ temp: 27, water: 'na' }), 0, columns, flagTypes, prof());
  near(res.score, 100);
  assert.equal(res.coverage, 1);
  assert.deepEqual(res.skipped, ['water']);
  assert.deepEqual(res.missing, []);
  const w = score(dest({ temp: 27, water: 'na' }), 0, columns, flagTypes, prof(), true);
  near(w.score, 100);
});

test('"na" w kolumnie niepogodowej daje ocenę 0 i liczy się do pokrycia', () => {
  const res = score(dest({ temp: 27, water: 26 }, { sights: 'na' }), 0, columns, flagTypes, prof());
  near(res.score, 100 * (2 * 1 + 1 * 1 + 1 * 0) / 4);
  assert.equal(res.coverage, 1);
  assert.deepEqual(res.skipped, []);
});

test('filtry: brak danych oznacza, nie odrzuca; pokrycie od %', () => {
  const cols = readData().columns;
  const base = { hideLevel3: false, maxFlightTime: null, maxStops: null, minCoverage: null, minScore: null };
  const res = { flags: [], coverage: 0.8 };
  const d = { fixed: { flight_time: 10, stops: null }, months: Array(12).fill({}) };
  assert.deepEqual(checkFilters(d, 0, res, cols, { ...base, maxFlightTime: 12, maxStops: 1 }), { pass: true, unchecked: ['maxStops'] });
  assert.equal(checkFilters(d, 0, res, cols, { ...base, maxFlightTime: 8 }).pass, false);
  // wartość błędna (poza zakresem) = brak danych
  assert.deepEqual(checkFilters({ fixed: { flight_time: 99 } }, 0, res, cols, { ...base, maxFlightTime: 8 }), { pass: true, unchecked: ['maxFlightTime'] });
  assert.equal(checkFilters(d, 0, res, cols, { ...base, minCoverage: 80 }).pass, true);
  assert.equal(checkFilters(d, 0, res, cols, { ...base, minCoverage: 81 }).pass, false);
  assert.equal(checkFilters(d, 0, { flags: [{ level: 3 }], coverage: 1 }, cols, { ...base, hideLevel3: true }).pass, false);
  const p = structuredClone(prof());
  p.filters.minCoverage = 120;
  assert.deepEqual(validateProfile(p, columns).map(e => e.field), ['filters.minCoverage']);
  // wynik od: porównanie z wynikiem zaokrąglonym jak na stronie; brak wyniku oznacza, nie odrzuca
  assert.equal(checkFilters(d, 0, { ...res, score: 69.5 }, cols, { ...base, minScore: 70 }).pass, true);
  assert.equal(checkFilters(d, 0, { ...res, score: 69.4 }, cols, { ...base, minScore: 70 }).pass, false);
  assert.deepEqual(checkFilters(d, 0, { ...res, score: null }, cols, { ...base, minScore: 70 }), { pass: true, unchecked: ['minScore'] });
  p.filters.minCoverage = null; p.filters.minScore = -5;
  assert.deepEqual(validateProfile(p, columns).map(e => e.field), ['filters.minScore']);
});

test('kary za flagi: suma natężeń, obcięcie do zera', () => {
  const flags = [{ type: 'monsoon', level: 2, note: '' }, { type: 'holidays', level: 1, note: '' }];
  const res = score(dest({ temp: 27, water: 26, flags }), 0, columns, flagTypes, prof({ flagPenalty: 10 }));
  near(res.raw, 100);
  near(res.score, 70);
  const heavy = [{ type: 'monsoon', level: 3, note: '' }, { type: 'holidays', level: 3, note: '' }];
  const res2 = score(dest({ temp: 27, water: 26, flags: heavy }), 0, columns, flagTypes, prof({ flagPenalty: 40 }));
  assert.equal(res2.score, 0);
  assert.equal(res2.penalty, 1);
});

test('przełącznik flag kąpielowych', () => {
  const flags = [{ type: 'jellyfish', level: 2, note: '' }];
  const on = score(dest({ temp: 27, water: 26, flags }), 0, columns, flagTypes, prof({ swimFlags: true }));
  const off = score(dest({ temp: 27, water: 26, flags }), 0, columns, flagTypes, prof({ swimFlags: false }));
  near(on.score, 80);
  near(off.score, 100);
});

test('globalny sezon: tylko kolumny i flagi pogodowe', () => {
  const flags = [{ type: 'holidays', level: 3, note: '' }, { type: 'monsoon', level: 1, note: '' }];
  // sights (niepogodowa) = 1 nie wchodzi; temp 22.5 → 0.5, water 26 → 1
  const res = score(dest({ temp: 22.5, water: 26, flags }, { sights: 1 }), 0, columns, flagTypes, prof(), true);
  near(res.raw, 100 * (2 * 0.5 + 1) / 3);
  near(res.score, res.raw * 0.9);
});

test('progi sezonu: równy progowi należy do wyższego', () => {
  const t = { low: 50, high: 70 };
  assert.equal(season(70, t), 'H');
  assert.equal(season(69.9, t), 'M');
  assert.equal(season(50, t), 'M');
  assert.equal(season(49.9, t), 'L');
  assert.equal(season(null, t), null);
  // porównanie po zaokrągleniu do 0,1, tak jak wynik jest pokazywany
  assert.equal(season(69.96, t), 'H');
  assert.equal(season(49.96, t), 'M');
  assert.equal(season(49.94, t), 'L');
});

test('flagi ze wszystkich kolumn typu flags; filtr i kara liczą ten sam zbiór', () => {
  const cols2 = [...columns, { id: 'events', name: 'Wydarzenia', type: 'flags', scope: 'month', group: 'S', weather: false }];
  const d = dest({ temp: 27, water: 26, flags: [{ type: 'monsoon', level: 1, note: '' }], events: [{ type: 'holidays', level: 2, note: '' }] });
  near(score(d, 0, cols2, flagTypes, prof()).score, 70);
  const list = [{ type: 'jellyfish', level: 3 }, { type: 'nieznany', level: 3 }, { type: 'monsoon', level: 2 }];
  assert.deepEqual(countedFlags(list, flagTypes, { swimFlags: false }).map(f => f.type), ['monsoon']);
  assert.deepEqual(countedFlags(list, flagTypes, { swimFlags: true }).map(f => f.type), ['jellyfish', 'monsoon']);
});

test('kolumny całkowite', () => {
  const col = { type: 'number', valid: [0, 5], integer: true };
  assert.equal(validNumber(col, 1), true);
  assert.equal(validNumber(col, 1.5), false);
  const data = readData();
  data.destinations[0].fixed.stops = 1.5;
  assert.ok(validateData(data).some(e => e.includes('liczba całkowita')));
  const bad = readData();
  bad.columns.find(c => c.id === 'temp_day').integer = 'tak';
  assert.ok(validateData(bad).some(e => e.includes('pole integer')));
});

test('walidacja profilu', () => {
  assert.deepEqual(validateProfile(prof(), columns), []);
  const fields = p => validateProfile(p, columns).map(e => e.field);
  const p = () => structuredClone(prof());

  let x = p(); x.columns.temp.weight = -1;
  assert.deepEqual(fields(x), ['temp.weight']);
  x = p(); x.columns.temp.min = null;
  assert.deepEqual(fields(x), []);
  x = p(); x.columns.temp.max = null; x.columns.temp.min = null;
  assert.deepEqual(fields(x), []);
  x = p(); x.columns.temp.idealTo = 24;
  assert.deepEqual(fields(x), ['temp.idealTo']);
  x = p(); x.columns.water = { min: null, idealFrom: null, idealTo: null, max: null, weight: 1 };
  assert.deepEqual(fields(x), ['water.weight']);
  x = p(); x.columns.water = { min: null, idealFrom: null, idealTo: null, max: null, weight: 0 };
  assert.deepEqual(fields(x), []);
  x = p(); x.columns.temp = { min: 25, idealFrom: 25, idealTo: 30, max: 30, weight: 1 };
  assert.deepEqual(fields(x), []);
  x = p(); x.flagPenalty = 120;
  assert.deepEqual(fields(x), ['flagPenalty']);
  x = p(); x.seasonThresholds = { low: 70, high: 70 };
  assert.deepEqual(fields(x), ['seasonThresholds']);
  x = p(); x.columns.temp.min = '20';
  assert.deepEqual(fields(x), ['temp.min']);
});

test('zgodność profilu z rejestrem: nowe i usunięte kolumny', () => {
  const loaded = { name: 'Ania', flagPenalty: 5, columns: { temp: { min: 18, idealFrom: 24, idealTo: 29, max: 33, weight: 4 }, old: { weight: 1 } } };
  const { profile, added, removed } = mergeProfile(loaded, columns);
  assert.deepEqual(added.sort(), ['sights', 'water']);
  assert.deepEqual(removed, ['old']);
  assert.equal(profile.columns.temp.weight, 4);
  assert.equal(profile.columns.water.weight, 1);
  assert.equal(profile.flagPenalty, 5);
  assert.equal(profile.swimFlags, true);
  assert.ok(!('old' in profile.columns));
  assert.deepEqual(validateProfile(profile, columns), []);
});

test('dane (rejestr + kierunki) przechodzą walidację struktury', () => {
  const { data, errs } = loadDir(APP);
  assert.deepEqual(errs, []);
  assert.deepEqual(validateData(data), []);
});

test('kierunki/ zgodne z rejestrem: każdy plik na liście, każde id ma plik', () => {
  const { reg } = loadDir(APP);
  const files = readdirSync(new URL('./kierunki', import.meta.url)).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5));
  assert.deepEqual([...files].sort(), [...reg.destinations].sort());
});

test('składanie danych: brak pliku, zły JSON, inne id, błędna lista', () => {
  const reg = { columns: [], flagTypes: [], destinations: ['a', 'b', 'c', 'd', 'a', 'Złe id', 7] };
  const listed = registryIds(reg);
  assert.deepEqual(listed.ids, ['a', 'b', 'c', 'd']);
  assert.equal(listed.errs.length, 3);
  const { data, errs } = assemble(reg, [
    { id: 'a', value: { id: 'a' } },
    { id: 'b', error: 'brak pliku.' },
    { id: 'c', value: { id: 'inne' } },
    { id: 'd', value: [] },
  ]);
  assert.deepEqual(data.destinations.map(d => d.id), ['a']);
  for (const s of ['kierunki/b.json: brak pliku', 'kierunki/c.json: id w pliku', 'kierunki/d.json: oczekiwany obiekt']) assert.ok(errs.some(e => e.includes(s)), s);
  assert.deepEqual(registryIds({ columns: [] }).ids, []);
  assert.ok(validateData({ ...reg, destinations: [{ ...readData().destinations[0], id: 'Duże' }] }).some(e => e.includes('małych liter, cyfr i -')));
});

test('walidacja danych wyłapuje błędy struktury', () => {
  const data = readData();
  const d = structuredClone(data.destinations[0]);
  d.months = d.months.slice(0, 11);
  const e = structuredClone(data.destinations[1]);
  e.id = data.destinations[2].id;
  e.months[0].temp_day = 80;
  e.months[1].flags = [{ type: 'tsunami', level: 4, note: 'x' }];
  e.months[2].nowa = 1;
  e.fixed.beaches = 6;
  const errs = validateData({ ...data, destinations: [d, e, data.destinations[2]] });
  const has = s => assert.ok(errs.some(x => x.includes(s)), `brak komunikatu: ${s}\n${errs.join('\n')}`);
  has('dokładnie 12 miesięcy');
  has('powtórzone id');
  has('poza zakresem');
  has('nieznany typ flagi');
  has('natężenie');
  has('nieznana kolumna "nowa"');
  has('skala 1–5');
});

test('błędne wartości w danych liczą się jak brak danych', () => {
  // temp poza zakresem valid, skala 0 → obie pomijane, zostaje water
  const res = score(dest({ temp: -500, water: 26 }, { sights: 0 }), 0, columns, flagTypes, prof());
  assert.equal(res.score, 100);
  near(res.coverage, 1 / 4);
  assert.deepEqual(res.missing.sort(), ['sights', 'temp']);
  assert.deepEqual(score(dest({ temp: 27, water: 26 }, { sights: 2.5 }), 0, columns, flagTypes, prof()).missing, ['sights']);
  assert.deepEqual(score(dest({ temp: '27', water: { est: 'x' } }), 0, columns, flagTypes, prof()).missing.sort(), ['temp', 'water']);
});

test('błędne flagi nie liczą się do kary i nie wywracają liczenia', () => {
  const flags = [null, 'x', { type: 'nieznany', level: 3 }, { type: 'monsoon', level: 7 }, { type: 'monsoon', level: 1, note: '' }];
  near(score(dest({ temp: 27, water: 26, flags }), 0, columns, flagTypes, prof()).score, 90);
  near(score(dest({ temp: 27, water: 26, flags: 'zepsute' }), 0, columns, flagTypes, prof()).score, 100);
});

test('walidacja danych nie rzuca wyjątków na zepsutym pliku', () => {
  const data = readData();
  const broken = [
    null, 'x', [],
    { ...data, columns: [null, ...data.columns] },
    { ...data, flagTypes: [null, ...data.flagTypes] },
    { ...data, destinations: [null, ...data.destinations] },
    { ...data, columns: data.columns.map(c => (c.id === 'temp_day' ? { ...c, valid: undefined } : c)) },
    { ...data, columns: data.columns.map(c => (c.id === 'temp_day' ? { ...c, id: 'temp(dzień)' } : c)) },
  ];
  for (const b of broken) assert.ok(validateData(b).length > 0);
  const d = structuredClone(data);
  d.destinations[0].months[0].flags = [null];
  d.destinations[0].sources = [null, { title: 'x', checked: '2026-10-04', url: 'javascript:alert(1)' }, { title: 'y' }];
  const errs = validateData(d);
  for (const s of ['flaga musi być obiektem', 'źródło #1', 'url musi', 'źródło #3']) assert.ok(errs.some(e => e.includes(s)), s);
});

test('profil z błędną strukturą nie jest po cichu poprawiany', () => {
  const fields = loaded => validateProfile(mergeProfile(loaded, columns).profile, columns).map(e => e.field);
  assert.deepEqual(fields({ name: 'A', columns: 'abc' }), ['columns']);
  assert.deepEqual(fields({ name: 'A', columns: { temp: 'abc' } }), ['temp.weight']);
  assert.deepEqual(fields({ name: 'A', columns: { temp: { min: 2, weight: 1 } } }), []);
  assert.deepEqual(fields({ name: 'A', columns: { temp: { min: 30, idealFrom: 20, weight: 1 } } }), ['temp.idealFrom']);
  assert.deepEqual(fields({ name: 'A', seasonThresholds: 'x' }), ['seasonThresholds']);
  assert.deepEqual(fields({ name: 'A', filters: 'x' }), ['filters']);
  assert.deepEqual(fields({ name: 'A', filters: { hideLevel3: false, maxStops: -1 } }), ['filters.maxStops']);
  assert.deepEqual(fields({ name: 'A' }), []); // brak sekcji columns = wszystkie kolumny domyślne
});

test('brakujące ustawienia profilu dostają wartości domyślne per klucz', () => {
  const { profile, addedSettings } = mergeProfile({ name: 'A', seasonThresholds: { low: 40 }, filters: { maxStops: 1, stare: true } }, columns);
  assert.deepEqual(profile.seasonThresholds, { low: 40, high: 70 });
  assert.deepEqual(profile.filters, { hideLevel3: false, maxFlightTime: null, maxStops: 1, minCoverage: null, minScore: null });
  assert.deepEqual(addedSettings.sort(), ['filters.hideLevel3', 'filters.maxFlightTime', 'filters.minCoverage', 'filters.minScore', 'flagPenalty', 'seasonThresholds.high', 'swimFlags']);
  assert.deepEqual(validateProfile(profile, columns), []);
  // wartość podana, ale błędna, nie jest zastępowana
  const bad = mergeProfile({ name: 'A', filters: { hideLevel3: 'tak' } }, columns).profile;
  assert.deepEqual(validateProfile(bad, columns).map(e => e.field), ['filters.hideLevel3']);
});

test('profil-domyslny.json odpowiada rejestrowi (node merge.mjs --profile)', () => {
  const file = JSON.parse(readFileSync(new URL('./profil-domyslny.json', import.meta.url), 'utf8'));
  assert.deepEqual(file, defaultProfile(readData().columns));
});

test('merge.mjs: kolumna zmienia tylko pliki podanych kierunków', () => {
  const s = sandbox();
  const uv = Array(12).fill(5);
  const otherBefore = s.read('kierunki/corralejo.json'), regBefore = s.read('rejestr.json');
  const r = s.run(s.put('k.json', { column: 'uv', values: { phuket: uv } }));
  assert.equal(r.status, 0, r.stderr);
  assert.deepEqual(s.json('kierunki/phuket.json').months.map(m => m.uv), uv);
  assert.equal(s.read('kierunki/corralejo.json'), otherBefore);
  assert.equal(s.read('rejestr.json'), regBefore);
  const st = s.run(s.put('s.json', { column: 'stops', values: { corralejo: 0 } }));
  assert.equal(st.status, 0, st.stderr);
  assert.equal(s.json('kierunki/corralejo.json').fixed.stops, 0);
  // flag nie uzupełnia się trybem kolumny
  assert.notEqual(s.run(s.put('f.json', { column: 'flags', values: { phuket: Array(12).fill([]) } })).status, 0);
});

test('merge.mjs: nowy kierunek, tekst przed blokiem JSON, --dry, opis zmian', () => {
  const s = sandbox();
  const d = { ...structuredClone(readData().destinations[0]), id: 'nowy', place: 'Nowe miejsce' };
  const orig = s.snapshot();
  const dryRun = s.run('--dry', s.put('n.json', d));
  assert.equal(dryRun.status, 0, dryRun.stderr);
  assert.equal(s.snapshot(), orig);
  const ok = s.run(s.put('n.json', 'Oto wynik:\n\n```json\n' + JSON.stringify(d) + '\n```\nKoniec.'));
  assert.equal(ok.status, 0, ok.stderr);
  assert.deepEqual(s.json('kierunki/nowy.json'), d);
  assert.equal(s.json('rejestr.json').destinations.at(-1), 'nowy');
  // id spoza wzoru nazwy pliku jest odrzucane
  assert.notEqual(s.run(s.put('z.json', { ...d, id: '../zle' })).status, 0);
  // nadpisanie wypisuje zmienione pola
  d.months[0].temp_day = 20;
  d.fixed.stops = 2;
  const over = s.run(s.put('n.json', d));
  assert.equal(over.status, 0, over.stderr);
  assert.match(over.stdout, /temp_day: zmienione w 1 mies\./);
  assert.match(over.stdout, /stałe stops: 1 → 2/);
});

test('merge.mjs: powtórzony istniejący błąd też blokuje zapis', () => {
  const s = sandbox();
  const first = s.json('rejestr.json').destinations[0];
  const d = s.json(`kierunki/${first}.json`);
  d.months[0].temp_day = 80;
  writeFileSync(join(s.dir, `kierunki/${first}.json`), JSON.stringify(d));
  const orig = s.snapshot();
  const twin = { ...structuredClone(d), id: 'blizniak' };
  assert.notEqual(s.run(s.put('t.json', twin)).status, 0);
  assert.equal(s.snapshot(), orig);
});

test('merge.mjs --profile odtwarza profil domyślny z rejestru', () => {
  const s = sandbox();
  const reg = s.json('rejestr.json');
  reg.columns.find(c => c.id === 'wind').default.weight = 2;
  writeFileSync(join(s.dir, 'rejestr.json'), JSON.stringify(reg));
  assert.equal(s.run('--profile').status, 0);
  assert.equal(s.json('profil-domyslny.json').columns.wind.weight, 2);
});

test('merge.mjs odrzuca błędne wejście i nie psuje danych', () => {
  const s = sandbox();
  const { run, put } = s;
  const orig = s.snapshot();
  const data = s.data();
  const oneMonth = { ...structuredClone(data.destinations[0]), months: data.destinations[0].months.slice(0, 1) };
  const bad = [
    oneMonth,
    { kolumna: 'uv' },
    { column: 'uv', values: { phuket: [1, 2, 3] } },
    { column: 'uv', values: { nieznany: Array(12).fill(5) } },
    { column: 'beaches', values: { phuket: 9 } },
  ];
  for (const input of bad) {
    const r = run(put('in.json', input));
    assert.notEqual(r.status, 0, JSON.stringify(input).slice(0, 60));
    assert.equal(s.snapshot(), orig);
  }
  // Odpowiedź w bloku ```json``` jest przyjmowana; ponowne wgranie tego samego kierunku nic nie zmienia.
  const ok = run(put('ok.json', '```json\n' + JSON.stringify(data.destinations[0]) + '\n```'));
  assert.equal(ok.status, 0, ok.stderr);
  assert.equal(s.snapshot(), orig);
  // Kierunek z rejestru bez czytelnego pliku: inne operacje działają, a próba dopisania go od nowa jest odrzucana.
  const lost = data.destinations[1];
  rmSync(join(s.dir, `kierunki/${lost.id}.json`));
  assert.notEqual(run(put('lost.json', lost)).status, 0);
  assert.equal(run(put('k.json', { column: 'uv', values: { [data.destinations[0].id]: Array(12).fill(5) } })).status, 0);
  writeFileSync(join(s.dir, `kierunki/${lost.id}.json`), JSON.stringify(lost, null, 2) + '\n');
  // --drop usuwa dane kolumny skreślonej z rejestru.
  const reg = s.json('rejestr.json');
  writeFileSync(join(s.dir, 'rejestr.json'), JSON.stringify({ ...reg, columns: reg.columns.filter(c => c.id !== 'wind') }));
  assert.notEqual(validateData(s.data()).length, 0);
  assert.equal(run('--drop', 'wind').status, 0);
  const after = s.data();
  assert.ok(after.destinations.every(d => d.months.every(m => !('wind' in m))));
  assert.deepEqual(validateData(after), []);
});

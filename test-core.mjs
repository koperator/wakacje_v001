// Testy przypadków brzegowych core.js: node --test test-core.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as core from './core.js';

const {
  parseValue, rawValue, validNumber, colScore, cellScore, score, season, checkFilters, tripCost, withTripCost,
  withComputed, timeDiff, tzOffset, validTz, choiceValues, defaultProfile, mergeProfile, validateProfile, validateData,
  registryIds, assemble, countedFlags, monthFlags, flagList, splitField, colLevel, isScoring, isChoice,
} = core;

const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} ≠ ${b}`);
const months = (m0 = {}, rest = {}) => [m0, ...Array.from({ length: 11 }, () => ({ ...rest }))];
const D = (fixed = {}, m0 = {}, extra = {}) => ({ id: 'x', country: 'X', place: 'X', fixed, months: months(m0), sources: [], ...extra });
const FT = [
  { id: 'monsoon', name: 'Monsun', icon: '🌧', weather: true, swim: false },
  { id: 'jelly', name: 'Meduzy', icon: '🪼', weather: true, swim: true },
  { id: 'holiday', name: 'Święto', icon: '📅', weather: false, swim: false },
];
const COLS = [
  { id: 'temp', name: 'Temp', unit: '°C', type: 'number', scope: 'month', group: 'P', weather: true, valid: [-50, 60], default: { min: 20, idealFrom: 25, idealTo: 30, max: 35, weight: 2 } },
  { id: 'water', name: 'Woda', unit: '°C', type: 'number', scope: 'month', group: 'M', weather: true, valid: [0, 40], default: { min: 20, idealFrom: 26, idealTo: null, max: null, weight: 1 } },
  { id: 'beach', name: 'Plaże', unit: '1–5', type: 'scale', scope: 'fixed', group: 'M', weather: false, default: { min: 1, idealFrom: 5, idealTo: null, max: null, weight: 1 } },
  { id: 'stops', name: 'Przesiadki', unit: '', type: 'number', integer: true, scope: 'fixed', group: 'D', weather: false, valid: [0, 5], default: { min: null, idealFrom: null, idealTo: 0, max: 3, weight: 0 } },
  { id: 'season_l', name: 'Sezon', unit: '', type: 'hml', scope: 'month', group: 'S', weather: false },
  { id: 'flags', name: 'Flagi', unit: '', type: 'flags', scope: 'month', group: 'S', weather: false },
];
const P = (over = {}) => ({ ...defaultProfile(COLS), ...over });

// ---------- format wartości ----------
test('parseValue: wszystkie rodzaje wartości', () => {
  assert.deepEqual(parseValue(undefined), { kind: 'missing' });
  assert.deepEqual(parseValue(null), { kind: 'missing' });
  assert.deepEqual(parseValue('na'), { kind: 'na' });
  assert.deepEqual(parseValue({ est: 3 }), { kind: 'est', v: 3 });
  assert.deepEqual(parseValue({ est: null }), { kind: 'est', v: null });
  assert.deepEqual(parseValue(0), { kind: 'value', v: 0 });
  assert.deepEqual(parseValue('H'), { kind: 'value', v: 'H' });
  assert.deepEqual(parseValue([]), { kind: 'value', v: [] });
  assert.deepEqual(parseValue({ x: 1 }), { kind: 'value', v: { x: 1 } });
});

test('rawValue: stałe z fixed, miesięczne z months, brak struktur nie rzuca', () => {
  const d = D({ beach: 4 }, { temp: 30 });
  assert.equal(rawValue(d, COLS[2], 5), 4);
  assert.equal(rawValue(d, COLS[0], 0), 30);
  assert.equal(rawValue(d, COLS[0], 1), undefined);
  assert.equal(rawValue({}, COLS[0], 0), undefined);
  assert.equal(rawValue(null, COLS[2], 0), undefined);
});

test('validNumber: skala, całkowite, zakres, wartości nieliczbowe', () => {
  const scale = COLS[2], num = COLS[0], int = COLS[3];
  for (const v of [1, 3, 5]) assert.equal(validNumber(scale, v), true);
  for (const v of [0, 6, 2.5, '3', null, NaN]) assert.equal(validNumber(scale, v), false, String(v));
  assert.equal(validNumber(num, -50), true);
  assert.equal(validNumber(num, 60), true);
  for (const v of [-50.1, 60.1, NaN, Infinity, -Infinity, '20', null, undefined, true]) assert.equal(validNumber(num, v), false, String(v));
  assert.equal(validNumber(int, 2), true);
  assert.equal(validNumber(int, 1.5), false);
  assert.equal(validNumber({ type: 'number' }, 1e9), true); // bez valid: każda skończona liczba
});

// ---------- ocena kolumny ----------
test('colScore: granice dokładnie na progach', () => {
  const r = { min: 20, idealFrom: 25, idealTo: 30, max: 35 };
  assert.equal(colScore(20, r), 0);
  assert.equal(colScore(25, r), 1);
  assert.equal(colScore(30, r), 1);
  assert.equal(colScore(35, r), 0);
  near(colScore(21, r), 0.2);
  near(colScore(34, r), 0.2);
  assert.equal(colScore(-1000, r), 0);
  assert.equal(colScore(1000, r), 0);
});

test('colScore: równe progi (min = ideał od, ideał do = max) to ostra granica bez dzielenia przez zero', () => {
  const r = { min: 25, idealFrom: 25, idealTo: 30, max: 30 };
  assert.equal(colScore(24.999, r), 0);
  assert.equal(colScore(25, r), 1);
  assert.equal(colScore(30, r), 1);
  assert.equal(colScore(30.001, r), 0);
  assert.ok(Number.isFinite(colScore(25, r)));
});

test('colScore: punktowy ideał (ideał od = ideał do)', () => {
  const r = { min: 20, idealFrom: 25, idealTo: 25, max: 30 };
  assert.equal(colScore(25, r), 1);
  near(colScore(22.5, r), 0.5);
  near(colScore(27.5, r), 0.5);
});

test('colScore: tylko jedno pole po każdej stronie i same strony', () => {
  assert.equal(colScore(5, { min: null, idealFrom: null, idealTo: null, max: null }), null);
  assert.equal(colScore(5, {}), null);
  // tylko max: ostra granica u góry
  assert.equal(colScore(10, { max: 10 }), 1);
  assert.equal(colScore(10.1, { max: 10 }), 0);
  // tylko ideał do + max: zbocze
  near(colScore(15, { idealTo: 10, max: 20 }), 0.5);
  // tylko min: ostra granica u dołu
  assert.equal(colScore(9.9, { min: 10 }), 0);
  assert.equal(colScore(10, { min: 10 }), 1);
  // obie strony z jedną wartością
  assert.equal(colScore(15, { min: 10, max: 20 }), 1);
  assert.equal(colScore(21, { min: 10, max: 20 }), 0);
});

test('cellScore: "na" zależnie od kolumny, szacunek, błędne wartości', () => {
  const r = { min: 20, idealFrom: 25, idealTo: 30, max: 35 };
  assert.equal(cellScore('na', r, COLS[0]), null);          // pogodowa
  assert.equal(cellScore('na', r, COLS[2]), 0);             // niepogodowa
  assert.equal(cellScore({ est: 27 }, r, COLS[0]), 1);
  assert.equal(cellScore('27', r, COLS[0]), null);
  assert.equal(cellScore(999, r, COLS[0]), null);           // poza valid
  assert.equal(cellScore(undefined, r, COLS[0]), null);
  assert.equal(cellScore({ est: 'x' }, r, COLS[0]), null);
});

// ---------- wynik ----------
test('score: średnia ważona, lista braków, pokrycie', () => {
  const p = P();
  // temp 1 (waga 2), water 0 (waga 1), beach 5 → 1 (waga 1); stops waga 0 nie liczy się
  const r = score(D({ beach: 5, stops: 3 }, { temp: 27, water: 10 }), 0, COLS, FT, p);
  near(r.score, (2 * 1 + 1 * 0 + 1 * 1) / 4 * 100);
  assert.equal(r.coverage, 1);
  assert.deepEqual(r.missing, []);
  const r2 = score(D({ beach: 5 }, { temp: 27 }), 0, COLS, FT, p);
  assert.deepEqual(r2.missing, ['water']);
  near(r2.coverage, 3 / 4);
  near(r2.score, 100);
});

test('score: waga ułamkowa i kolumna bez formatki w profilu', () => {
  const p = P();
  p.columns.temp.weight = 0.5;
  delete p.columns.water;
  const r = score(D({ beach: 1 }, { temp: 27, water: 10 }), 0, COLS, FT, p);
  near(r.score, (0.5 * 1 + 1 * 0) / 1.5 * 100);
});

test('score: kara za flagi – poziomy spoza 1–3, nieznany typ, obcięcie do 100%', () => {
  const p = P({ flagPenalty: 40 });
  const flags = [{ type: 'monsoon', level: 2, note: '' }, { type: 'monsoon', level: 7, note: '' }, { type: 'nieznany', level: 3, note: '' }, 'zły wpis'];
  const r = score(D({ beach: 5 }, { temp: 27, water: 30, flags }), 0, COLS, FT, p);
  near(r.penalty, 0.8);
  near(r.score, 20);
  const r3 = score(D({ beach: 5 }, { temp: 27, water: 30, flags: [{ type: 'monsoon', level: 3, note: '' }] }), 0, COLS, FT, P({ flagPenalty: 50 }));
  assert.equal(r3.penalty, 1);
  assert.equal(r3.score, 0);
  assert.equal(r3.raw, 100);
});

test('score: sezon globalny pomija kolumny i flagi niepogodowe', () => {
  const p = P();
  const flags = [{ type: 'holiday', level: 3, note: '' }, { type: 'monsoon', level: 1, note: '' }];
  const w = score(D({ beach: 1 }, { temp: 27, water: 26, flags }), 0, COLS, FT, p, true);
  assert.equal(w.raw, 100);
  assert.deepEqual(w.flags.map(f => f.type), ['monsoon']);
  near(w.penalty, 0.1);
});

test('score: kierunek bez fixed i months nie rzuca', () => {
  const r = score({ id: 'x' }, 0, COLS, FT, P());
  assert.equal(r.score, null);
  assert.equal(r.coverage, 0);
});

test('season: progi po zaokrągleniu do 0,1 i brak wyniku', () => {
  const t = { low: 50, high: 70 };
  assert.equal(season(null, t), null);
  assert.equal(season(49.94, t), 'L');
  assert.equal(season(49.95, t), 'M');
  assert.equal(season(69.96, t), 'H');
  assert.equal(season(0, t), 'L');
  assert.equal(season(100, t), 'H');
});

// ---------- filtry ----------
const res = (over = {}) => ({ score: 80, coverage: 1, flags: [], ...over });
const F = (over = {}) => ({ ...P().filters, ...over });

test('checkFilters: bez filtrów wszystko przechodzi', () => {
  assert.deepEqual(checkFilters(D(), 0, res(), COLS, F()), { pass: true, unchecked: [] });
});

test('checkFilters: wynik od – porównanie po zaokrągleniu, brak wyniku niesprawdzony', () => {
  assert.equal(checkFilters(D(), 0, res({ score: 69.5 }), COLS, F({ minScore: 70 })).pass, true);
  assert.equal(checkFilters(D(), 0, res({ score: 69.49 }), COLS, F({ minScore: 70 })).pass, false);
  assert.deepEqual(checkFilters(D(), 0, res({ score: null }), COLS, F({ minScore: 70 })), { pass: true, unchecked: ['minScore'] });
  assert.equal(checkFilters(D(), 0, res({ score: 0 }), COLS, F({ minScore: 0 })).pass, true);
});

test('checkFilters: pokrycie od – granica i brak kolumn z wagą', () => {
  assert.equal(checkFilters(D(), 0, res({ coverage: 0.5 }), COLS, F({ minCoverage: 50 })).pass, true);
  assert.equal(checkFilters(D(), 0, res({ coverage: 0.49 }), COLS, F({ minCoverage: 50 })).pass, false);
  assert.equal(checkFilters(D(), 0, res({ coverage: null }), COLS, F({ minCoverage: 50 })).pass, true);
});

test('checkFilters: flaga poziomu 3 odrzuca tylko liczone flagi', () => {
  assert.equal(checkFilters(D(), 0, res({ flags: [{ type: 'monsoon', level: 3 }] }), COLS, F({ hideLevel3: true })).pass, false);
  assert.equal(checkFilters(D(), 0, res({ flags: [{ type: 'monsoon', level: 2 }] }), COLS, F({ hideLevel3: true })).pass, true);
  assert.equal(checkFilters(D(), 0, res({ flags: [{ type: 'monsoon', level: 3 }] }), COLS, F({ hideLevel3: false })).pass, true);
});

test('checkFilters: filtry kolumn – wartość równa progowi przechodzi, szacunek się liczy, błędna wartość niesprawdzona', () => {
  const cols = [...COLS, { id: 'flight_time', name: 'Lot', type: 'number', scope: 'fixed', group: 'D', weather: false, valid: [0, 48], default: { weight: 0 } }];
  const chk = (fixed, f) => checkFilters(D(fixed), 0, res(), cols, F(f));
  assert.equal(chk({ flight_time: 10 }, { maxFlightTime: 10 }).pass, true);
  assert.equal(chk({ flight_time: 10.1 }, { maxFlightTime: 10 }).pass, false);
  assert.equal(chk({ flight_time: { est: 12 } }, { maxFlightTime: 10 }).pass, false);
  assert.deepEqual(chk({ flight_time: 99 }, { maxFlightTime: 10 }), { pass: true, unchecked: ['maxFlightTime'] });
  assert.deepEqual(chk({ flight_time: 'na' }, { maxFlightTime: 10 }), { pass: true, unchecked: ['maxFlightTime'] });
  // kolumny nie ma w rejestrze: niesprawdzony, bez wyjątku
  assert.deepEqual(checkFilters(D(), 0, res(), COLS, F({ maxStops: 1 })), { pass: true, unchecked: ['maxStops'] });
  assert.equal(chk({ flight_time: 0 }, { maxFlightTime: 0 }).pass, true);
});

test('checkFilters: zakres na kolumnie niefiltrowalnej i zakres pusty są ignorowane', () => {
  const cols = [...COLS, { id: 'cat', name: 'K', type: 'category', scope: 'fixed', group: 'X', weather: false, values: ['a'] }];
  assert.equal(checkFilters(D({ cat: 'a' }), 0, res(), cols, F({ ranges: { cat: { min: 1 }, season_l: { min: 1 }, nieznana: { min: 1 } } })).pass, true);
  assert.equal(checkFilters(D({}, { temp: 10 }), 0, res(), COLS, F({ ranges: { temp: {} } })).pass, true);
  assert.equal(checkFilters(D({}, { temp: 10 }), 0, res(), COLS, F({ ranges: { temp: null } })).pass, true);
});

test('checkFilters: zakres od–do włącznie z granicami', () => {
  const chk = (t, r) => checkFilters(D({}, { temp: t }), 0, res(), COLS, F({ ranges: { temp: r } })).pass;
  assert.equal(chk(25, { min: 25, max: 30 }), true);
  assert.equal(chk(30, { min: 25, max: 30 }), true);
  assert.equal(chk(24.9, { min: 25, max: 30 }), false);
  assert.equal(chk(30.1, { min: 25, max: 30 }), false);
  assert.equal(chk(-5, { min: null, max: 0 }), true);
});

test('checkFilters: kategoria i tagi – wartość błędna to brak danych, wybór kolumny nieistniejącej ignorowany', () => {
  const cols = [...COLS,
    { id: 'cont', name: 'K', type: 'category', scope: 'fixed', group: 'X', weather: false, values: ['Europa', 'Azja'] },
    { id: 'tags', name: 'T', type: 'tags', scope: 'fixed', group: 'X', weather: false, values: ['a', 'b', 'c'] }];
  const chk = (fixed, f) => checkFilters(D(fixed), 0, res(), cols, F(f));
  assert.deepEqual(chk({ cont: 'Afryka' }, { categories: { cont: ['Europa'] } }), { pass: true, unchecked: ['cat:cont'] });
  assert.deepEqual(chk({ tags: ['a', 'zły'] }, { categories: { tags: ['a'] } }), { pass: true, unchecked: ['cat:tags'] });
  assert.deepEqual(chk({ tags: [] }, { categories: { tags: ['a'] } }), { pass: false, unchecked: [] });
  assert.deepEqual(chk({ tags: [] }, { categories: { tags: ['a'] }, tagMode: 'any' }), { pass: false, unchecked: [] });
  assert.equal(chk({}, { categories: { nieznana: ['x'] } }).pass, true);
  assert.equal(chk({ cont: { est: 'Azja' } }, { categories: { cont: ['Azja'] } }).pass, true);
  assert.equal(chk({ cont: 'Azja' }, { categories: 'zepsute' }).pass, true);
});

test('checkFilters: najpierw odrzucenie, potem lista niesprawdzonych nie przecieka', () => {
  const cols = [...COLS, { id: 'flight_time', name: 'Lot', type: 'number', scope: 'fixed', group: 'D', weather: false, valid: [0, 48], default: { weight: 0 } }];
  const r = checkFilters(D({ flight_time: 20 }), 0, res({ score: null }), cols, F({ minScore: 50, maxFlightTime: 10 }));
  assert.equal(r.pass, false);
});

// ---------- kalkulator kosztu ----------
const KC = [
  { id: 'flight_price', name: 'Lot', type: 'number', scope: 'month', group: 'K', weather: false, valid: [0, 100000], default: { weight: 0 } },
  { id: 'package_price', name: 'Wczasy', type: 'number', scope: 'month', group: 'K', weather: false, valid: [0, 100000], naLabel: 'brak oferty', default: { weight: 0 } },
  { id: 'local_prices', name: 'Ceny', type: 'scale', scope: 'fixed', group: 'K', weather: false, default: { weight: 0 } },
  { id: 'sightseeing', name: 'Zwiedzanie', type: 'scale', scope: 'fixed', group: 'M', weather: false, default: { weight: 0 } },
  { id: 'local_season', name: 'Sezon', type: 'hml', scope: 'month', group: 'S', weather: false },
  { id: 'trip_cost', name: 'Koszt', type: 'number', scope: 'month', group: 'K', weather: false, computed: true, valid: [0, 100000], naLabel: 'brak oferty', default: { weight: 0 } },
];
const kdest = (fixed, mon) => ({ id: 'k', country: 'K', place: 'K', fixed, months: mon, sources: [] });
const kprof = (trip = {}, costs = {}) => { const p = defaultProfile(KC); p.trip = { ...p.trip, ...trip }; p.costs = { ...p.costs, ...costs }; return p; };

test('tripCost: dokładne wyliczenie na własną rękę', () => {
  const mon = Array.from({ length: 12 }, (_, i) => ({ flight_price: 2000 + 100 * i, local_season: 'M' }));
  const d = kdest({ local_prices: 3, sightseeing: 5 }, mon);
  const p = kprof({ adults: 2, children: 1, infants: 1, nights: 10 });
  const r = tripCost(d, 5, p, KC);
  // bilet: max(2500 × 0,85 = 2125, najtańszy miesiąc 2000) = 2125 × 3 osoby + niemowlę 0
  near(r.fare, 2125);
  near(r.tickets, 6375);
  assert.equal(r.rooms, 1);
  near(r.lodging, 500 * 1 * 1 * 10);
  near(r.daily, 280 * (2 + 0.5) * 10);
  near(r.extrasPct, 25);
  near(r.extras, (5000 + 7000) * 0.25);
  near(r.total, 6375 + 5000 + 7000 + 3000);
});

test('tripCost: pokoje – dorośli ÷ 2, najwyżej 4 osoby, niemowlęta nie zajmują miejsc', () => {
  const d = kdest({ local_prices: 1 }, months({ flight_price: 1000 }));
  const rooms = (adults, children, infants = 0) => tripCost(d, 0, kprof({ adults, children, infants }), KC).rooms;
  assert.equal(rooms(1, 0), 1);
  assert.equal(rooms(2, 0), 1);
  assert.equal(rooms(3, 0), 2);
  assert.equal(rooms(2, 2), 1);
  assert.equal(rooms(2, 3), 2);
  assert.equal(rooms(2, 2, 3), 1);
  assert.equal(rooms(0, 1), 1);
});

test('tripCost: brak danych – lista braków, środek % przy braku zwiedzania, sezon nieznany ×1', () => {
  const p = kprof();
  assert.deepEqual(tripCost(kdest({}, months({})), 0, p, KC).missing, ['flight_price', 'local_prices']);
  assert.deepEqual(tripCost(kdest({ local_prices: 2 }, months({ flight_price: 'na' })), 0, p, KC).missing, ['flight_price']);
  const r = tripCost(kdest({ local_prices: 2 }, months({ flight_price: 1000, local_season: 'X' })), 0, p, KC);
  near(r.extrasPct, 17.5);
  assert.equal(r.seasonMult, 1);
  assert.equal(r.seasonKey, null);
  const h = tripCost(kdest({ local_prices: 2 }, months({ flight_price: 1000, local_season: { est: 'H' } })), 0, p, KC);
  assert.equal(h.seasonMult, 1.25);
});

test('tripCost: z biurem – część stała, przeliczenie nocy, dzieci i niemowlęta, brak ceny lotu', () => {
  const d = kdest({ local_prices: 3, sightseeing: 1 }, months({ flight_price: 1000, package_price: 4000 }));
  const p7 = kprof({ mode: 'package', adults: 2, children: 1, infants: 1, nights: 7 });
  const r7 = tripCost(d, 0, p7, KC);
  near(r7.perAdult, 4000);
  near(r7.pkgTotal, 4000 * 2.6 + 300);
  const r14 = tripCost(d, 0, kprof({ mode: 'package', nights: 14 }), KC);
  // bilet = max(850, najtańszy miesiąc 1000) = 1000; stała = min(1000, 2000); reszta 3000 × 2
  near(r14.perAdult, 1000 + 3000 * 2);
  const noFare = kdest({}, months({ package_price: 4000 }));
  const rn = tripCost(noFare, 0, kprof({ mode: 'package', nights: 14 }), KC);
  near(rn.perAdult, 1600 + 2400 * 2);
  near(rn.extras, 2400 * 2 * 2 * 17.5 / 100); // bez poziomu cen: od części hotelowej, zwiedzanie brak → 17,5%
  const cheap = kdest({}, months({ flight_price: 5000, package_price: 2000 }));
  near(tripCost(cheap, 0, kprof({ mode: 'package', nights: 14 }), KC).perAdult, 1000 + 1000 * 2);
});

test('tripCost: z biurem – brak oferty i brak danych', () => {
  const p = kprof({ mode: 'package' });
  const na = tripCost(kdest({}, months({ package_price: 'na' })), 0, p, KC);
  assert.equal(na.total, null);
  assert.equal(na.noOffer, true);
  const miss = tripCost(kdest({}, months({})), 0, p, KC);
  assert.equal(miss.noOffer, false);
  assert.deepEqual(miss.missing, ['package_price']);
});

test('withTripCost: zaokrąglenie do 0,5 tys., "na" przy braku oferty, dane wejściowe bez zmian', () => {
  const mon = months({ flight_price: 1000 }, { flight_price: 1000 });
  const d = kdest({ local_prices: 1, sightseeing: 3 }, mon);
  const before = JSON.stringify(d);
  const p = kprof({ adults: 1, nights: 1 });
  const out = withTripCost([d, 'zły wpis', { id: 'bez-miesięcy' }], p, KC);
  assert.equal(JSON.stringify(d), before);
  // bilet max(850, najtańszy 1000) = 1000 + 200 + 120 + 17,5% × 320 = 1376 → 1,5 tys.
  assert.deepEqual(out[0].months[0].trip_cost, { est: 1.5 });
  assert.equal(out[1], 'zły wpis');
  assert.deepEqual(out[2], { id: 'bez-miesięcy' });
  const pk = withTripCost([kdest({}, months({ package_price: 'na' }))], kprof({ mode: 'package' }), KC);
  assert.equal(pk[0].months[0].trip_cost, 'na');
  assert.equal(pk[0].months[1].trip_cost, null);
  assert.equal(withTripCost([d], p, COLS)[0], d); // bez kolumny trip_cost bez zmian
});

// ---------- czas ----------
test('tzOffset i timeDiff: strefy z czasem letnim na półkuli południowej, ułamkowe, UTC', () => {
  assert.equal(tzOffset('UTC', new Date(Date.UTC(2027, 0, 1))), 0);
  assert.equal(tzOffset('Atlantic/Reykjavik', new Date(Date.UTC(2027, 6, 1))), 0);
  assert.equal(tzOffset('Asia/Kathmandu', new Date(Date.UTC(2027, 0, 1))), 5.75);
  assert.equal(tzOffset('America/St_Johns', new Date(Date.UTC(2027, 0, 1))), -3.5);
  // Sydney: czas letni w styczniu (+11), Polska zimowy (+1) → +10; w lipcu +10 i +2 → +8
  assert.equal(timeDiff('Australia/Sydney', 0, 2027), 10);
  assert.equal(timeDiff('Australia/Sydney', 6, 2027), 8);
  assert.equal(timeDiff('Europe/Warsaw', 9, 2027), 0);
  assert.equal(timeDiff('Nie/Ma', 0, 2027), null);
  assert.equal(validTz('Europe/Warsaw'), true);
  for (const bad of ['', 'Mars/Base', null, 5, undefined, {}]) assert.equal(validTz(bad), false, String(bad));
});

test('withComputed: różnica czasu tylko przy poprawnej strefie, kopie danych', () => {
  const cols = [...KC, { id: 'time_diff', name: 'Czas', type: 'number', scope: 'month', group: 'X', weather: false, computed: true, valid: [-14, 14], default: { weight: 0 } }];
  const a = { ...kdest({}, months({})), tz: 'Asia/Bangkok' };
  const b = { ...kdest({}, months({})), tz: 'zła' };
  const out = withComputed([a, b], defaultProfile(cols), cols, 2027);
  assert.equal(out[0].months[0].time_diff, 6);
  assert.equal(out[1].months[0].time_diff, null);
  assert.equal(a.months[0].time_diff, undefined);
  // bez kolumny time_diff tylko koszt
  assert.equal(withComputed([a], defaultProfile(KC), KC, 2027)[0].months[0].time_diff, undefined);
});

// ---------- kolumny wyboru, poziomy ----------
test('choiceValues i colLevel', () => {
  const cat = { id: 'c', type: 'category', scope: 'fixed', values: ['a', 'b'] };
  const tags = { id: 't', type: 'tags', scope: 'fixed', values: ['a', 'b'] };
  assert.deepEqual(choiceValues(D({ c: 'a' }), cat), ['a']);
  assert.equal(choiceValues(D({ c: 'z' }), cat), null);
  assert.equal(choiceValues(D({}), cat), null);
  assert.equal(choiceValues(D({ c: 'na' }), cat), null);
  assert.deepEqual(choiceValues(D({ t: [] }), tags), []);
  assert.equal(choiceValues(D({ t: 'a' }), tags), null);
  assert.equal(choiceValues(D({ c: 'a' }), { ...cat, values: undefined }), null);
  assert.equal(colLevel({ level: 1 }), 1);
  assert.equal(colLevel({ level: 0 }), 3);
  assert.equal(colLevel({ level: '1' }), 3);
  assert.equal(colLevel({}), 3);
  assert.equal(colLevel(undefined), 3);
  assert.equal(isScoring({ type: 'scale' }), true);
  assert.equal(isChoice({ type: 'tags' }), true);
  assert.equal(isChoice(null), false);
});

test('splitField: dzielenie po ostatniej kropce', () => {
  assert.deepEqual(splitField('temp.min'), ['temp', 'min']);
  assert.deepEqual(splitField('filters.ranges.temp'), ['filters.ranges', 'temp']);
  assert.deepEqual(splitField('name'), ['name', '']);
});

test('countedFlags i monthFlags: wiele kolumn flag, wpisy niebędące obiektami', () => {
  const cols = [...COLS, { id: 'flags2', name: 'F2', type: 'flags', scope: 'month', group: 'S', weather: false }];
  const d = D({}, { flags: [{ type: 'monsoon', level: 1 }, 5], flags2: [{ type: 'jelly', level: 2 }] });
  assert.equal(monthFlags(d, 0, cols).length, 2);
  assert.deepEqual(flagList('x'), []);
  const p = P({ swimFlags: false });
  assert.deepEqual(countedFlags(monthFlags(d, 0, cols), FT, p).map(f => f.type), ['monsoon']);
  assert.deepEqual(countedFlags(monthFlags(d, 0, cols), [...FT, 'zły typ'], P()).map(f => f.type), ['monsoon', 'jelly']);
});

// ---------- profil ----------
test('defaultProfile: kopia ustawień (zmiana jednego profilu nie zmienia drugiego)', () => {
  const a = defaultProfile(COLS), b = defaultProfile(COLS);
  a.filters.categories.x = ['y'];
  a.costs.lodging[0] = 1;
  a.columns.temp.weight = 99;
  assert.deepEqual(b.filters.categories, {});
  assert.equal(b.costs.lodging[0], 200);
  assert.equal(b.columns.temp.weight, 2);
  assert.equal(COLS[0].default.weight, 2);
  assert.deepEqual(validateProfile(b, COLS), []);
});

test('mergeProfile: nie modyfikuje wczytanego obiektu i nie współdzieli tablic z domyślnym', () => {
  const loaded = { name: 'A', excluded: ['x'], filters: { categories: { cont: ['Azja'] } } };
  const snap = JSON.stringify(loaded);
  const { profile } = mergeProfile(loaded, COLS);
  assert.equal(JSON.stringify(loaded), snap);
  profile.costs.lodging[0] = 1;
  assert.equal(defaultProfile(COLS).costs.lodging[0], 200);
});

test('mergeProfile: formatka kolumny – brakujące pola to null, nadmiarowe pomijane', () => {
  const { profile } = mergeProfile({ name: 'A', columns: { temp: { weight: 1, min: 10, extra: 5 } } }, COLS);
  assert.deepEqual(profile.columns.temp, { min: 10, idealFrom: null, idealTo: null, max: null, weight: 1 });
  assert.deepEqual(profile.columns.water, defaultProfile(COLS).columns.water);
  assert.deepEqual(validateProfile(profile, COLS), []);
});

test('mergeProfile: nieznane klucze w obiektach ustawień są pomijane, błędne typy zostają do walidacji', () => {
  const { profile } = mergeProfile({ name: 'A', trip: { adults: 2, rocket: true }, costs: 'zepsute', viewLevel: 9 }, COLS);
  assert.equal('rocket' in profile.trip, false);
  assert.equal(profile.costs, 'zepsute');
  const fields = validateProfile(profile, COLS).map(e => e.field);
  assert.ok(fields.includes('costs'));
  assert.ok(fields.includes('viewLevel'));
});

test('validateProfile: każde ustawienie zgłasza błąd we właściwym polu', () => {
  const ok = defaultProfile(COLS);
  const cases = [
    [{ name: '  ' }, 'name'],
    [{ columns: [] }, 'columns'],
    [{ flagPenalty: 101 }, 'flagPenalty'],
    [{ flagPenalty: -1 }, 'flagPenalty'],
    [{ swimFlags: 'tak' }, 'swimFlags'],
    [{ seasonThresholds: { low: 70, high: 70 } }, 'seasonThresholds'],
    [{ filters: { ...ok.filters, maxFlightTime: -1 } }, 'filters.maxFlightTime'],
    [{ filters: { ...ok.filters, maxStops: 'dwa' } }, 'filters.maxStops'],
    [{ filters: { ...ok.filters, minCoverage: 101 } }, 'filters.minCoverage'],
    [{ filters: { ...ok.filters, minScore: -5 } }, 'filters.minScore'],
    [{ filters: { ...ok.filters, maxTripCost: -1 } }, 'filters.maxTripCost'],
    [{ filters: { ...ok.filters, categories: { a: 'x' } } }, 'filters.categories'],
    [{ filters: { ...ok.filters, ranges: [] } }, 'filters.ranges'],
    [{ filters: { ...ok.filters, ranges: { temp: { min: 'x' } } } }, 'filters.ranges.temp'],
    [{ trip: { ...ok.trip, adults: 1.5 } }, 'trip.adults'],
    [{ trip: { ...ok.trip, nights: 0 } }, 'trip.nights'],
    [{ trip: { ...ok.trip, nights: 366 } }, 'trip.nights'],
    [{ trip: { ...ok.trip, children: 21 } }, 'trip.children'],
    [{ trip: { ...ok.trip, mode: 'bus' } }, 'trip.mode'],
    [{ costs: { ...ok.costs, ticketFactor: 0 } }, 'costs.ticketFactor'],
    [{ costs: { ...ok.costs, lodging: [1, 2, 3] } }, 'costs.lodging'],
    [{ costs: { ...ok.costs, daily: [1, 2, 3, -4, 5] } }, 'costs.daily.3'],
    [{ costs: { ...ok.costs, extras: [10, 101] } }, 'costs.extras'],
    [{ costs: { ...ok.costs, season: { H: 1, M: 1 } } }, 'costs.season'],
    [{ excluded: [1] }, 'excluded'],
    [{ viewLevel: 2.5 }, 'viewLevel'],
  ];
  for (const [over, field] of cases) {
    const fields = validateProfile({ ...structuredClone(ok), ...over }, COLS).map(e => e.field);
    assert.ok(fields.includes(field), `${JSON.stringify(over)} → ${fields.join(', ') || 'brak błędów'}`);
  }
});

test('validateProfile: wyjazd potrzebuje co najmniej jednego dorosłego', () => {
  const ok = defaultProfile(COLS);
  const f = trip => validateProfile({ ...ok, trip: { ...ok.trip, ...trip } }, COLS).map(e => e.field);
  assert.ok(f({ adults: 0, children: 0, infants: 0 }).includes('trip.adults'));
  assert.ok(f({ adults: 0, children: 0, infants: 1 }).includes('trip.adults'));
  assert.ok(f({ adults: 0, children: 2, infants: 0 }).includes('trip.adults'));
  assert.deepEqual(f({ adults: 1, children: 0, infants: 0 }), []);
});

test('validateProfile: formatka – kolejność pól, waga, wartości nieliczbowe, NaN z formularza', () => {
  const ok = defaultProfile(COLS);
  const col = r => validateProfile({ ...ok, columns: { ...ok.columns, temp: r } }, COLS).map(e => e.field);
  assert.deepEqual(col({ min: 10, idealFrom: 20, idealTo: 20, max: 30, weight: 1 }), []);
  assert.ok(col({ min: 30, idealFrom: 20, idealTo: null, max: null, weight: 1 }).includes('temp.idealFrom'));
  assert.ok(col({ min: null, idealFrom: 30, idealTo: null, max: 20, weight: 1 }).includes('temp.max'));
  assert.ok(col({ min: NaN, idealFrom: 20, idealTo: null, max: null, weight: 1 }).includes('temp.min'));
  assert.ok(col({ min: 1, idealFrom: 2, idealTo: 3, max: 4, weight: -1 }).includes('temp.weight'));
  assert.ok(col({ min: 1, idealFrom: 2, idealTo: 3, max: 4, weight: null }).includes('temp.weight'));
  assert.ok(col({ min: null, idealFrom: null, idealTo: null, max: null, weight: 1 }).includes('temp.weight'));
  assert.deepEqual(col({ min: null, idealFrom: null, idealTo: null, max: null, weight: 0 }), []);
  assert.ok(col('zepsute').includes('temp.weight'));
  assert.ok(validateProfile(null, COLS).length === 1);
  assert.ok(validateProfile([], COLS).length === 1);
});

// ---------- walidacja danych ----------
const base = () => ({ version: 1, columns: structuredClone(COLS), flagTypes: structuredClone(FT), destinations: [D({ beach: 3 }, { temp: 20, water: 20, season_l: 'H', flags: [] })] });

test('validateData: poprawny zestaw bez błędów', () => {
  assert.deepEqual(validateData(base()), []);
});

test('validateData: błędy rejestru kolumn', () => {
  const mut = (f, needle) => {
    const d = base(); f(d);
    const errs = validateData(d);
    assert.ok(errs.some(e => e.includes(needle)), `${needle}: ${errs.join(' | ') || 'brak błędów'}`);
  };
  mut(d => { d.columns[0].id = 'Temp'; }, 'id musi składać się');
  mut(d => { d.columns[1].id = 'temp'; }, 'powtórzone id');
  mut(d => { d.columns[0].type = 'text'; }, 'nieznany typ');
  mut(d => { d.columns[0].scope = 'year'; }, 'zakres musi być');
  mut(d => { delete d.columns[0].name; }, 'brak nazwy lub grupy');
  mut(d => { d.columns[0].weather = 1; }, 'weather musi być');
  mut(d => { d.columns[0].valid = [10, 0]; }, 'potrzebuje valid');
  mut(d => { d.columns[2].integer = true; }, 'integer');
  mut(d => { delete d.columns[0].default; }, 'brak domyślnej formatki');
  mut(d => { d.columns[5].scope = 'fixed'; }, 'flagi muszą być per miesiąc');
  mut(d => { d.columns[0].naLabel = ''; }, 'naLabel');
  mut(d => { d.columns[2].computed = true; }, 'computed');
  mut(d => { d.columns[0].computed = false; }, 'computed');
  mut(d => { d.columns[0].level = 4; }, 'level musi być');
  mut(d => { d.columns[0].values = ['a']; }, 'values dotyczy tylko');
  mut(d => { d.columns[0].default = { min: 30, idealFrom: 20, idealTo: null, max: null, weight: 1 }; }, 'domyślna formatka');
  mut(d => { d.columns.push('zły wpis'); }, 'oczekiwany obiekt');
  mut(d => { d.version = 0; }, 'version');
  mut(d => { d.flagTypes.push({ id: 'monsoon', name: 'x', icon: 'x', weather: true, swim: false }); }, 'powtórzone id');
  mut(d => { delete d.flagTypes[0].icon; }, 'wymagane name i icon');
  mut(d => { d.flagTypes[0].swim = 'nie'; }, 'weather i swim');
});

test('validateData: błędy kierunków', () => {
  const mut = (f, needle) => {
    const d = base(); f(d.destinations[0], d);
    const errs = validateData(d);
    assert.ok(errs.some(e => e.includes(needle)), `${needle}: ${errs.join(' | ') || 'brak błędów'}`);
  };
  mut(x => { x.id = ''; }, 'brak id');
  mut(x => { x.id = 'Zły Id'; }, 'musi składać się');
  mut((x, d) => { d.destinations.push(structuredClone(x)); }, 'powtórzone id');
  mut(x => { delete x.country; }, 'brak kraju lub miejsca');
  mut(x => { x.months = x.months.slice(0, 11); }, 'dokładnie 12 miesięcy');
  mut(x => { x.months[3] = 'x'; }, 'oczekiwany obiekt');
  mut(x => { x.fixed.nieznana = 1; }, 'nieznana kolumna');
  mut(x => { x.fixed.temp = 20; }, 'nieznana kolumna');            // kolumna miesięczna w fixed
  mut(x => { x.months[0].beach = 3; }, 'nieznana kolumna');         // stała w miesiącu
  mut(x => { x.months[0].temp = 'ciepło'; }, 'oczekiwana liczba');
  mut(x => { x.months[0].temp = 99; }, 'poza zakresem');
  mut(x => { x.fixed.stops = 1.5; }, 'liczba całkowita');
  mut(x => { x.fixed.beach = 6; }, 'skala 1–5');
  mut(x => { x.months[0].season_l = 'X'; }, 'H, M albo L');
  mut(x => { x.months[0].flags = 'brak'; }, 'flagi muszą być listą');
  mut(x => { x.months[0].flags = 'na'; }, 'nie może mieć "na"');
  mut(x => { x.months[0].flags = [{ type: 'x', level: 1, note: '' }]; }, 'nieznany typ flagi');
  mut(x => { x.months[0].flags = [{ type: 'monsoon', level: 4, note: '' }]; }, 'natężenie');
  mut(x => { x.months[0].flags = [{ type: 'monsoon', level: 1 }]; }, 'brak notatki');
  mut(x => { x.months[0].flags = [7]; }, 'flaga musi być obiektem');
  mut(x => { x.sources = 'x'; }, 'brak listy źródeł');
  mut(x => { x.sources = [{ title: 'a', checked: '2026-1-1' }]; }, 'checked');
  mut(x => { x.sources = [{ title: 'a', checked: '2026-01-01', url: 'javascript:alert(1)' }]; }, 'url musi zaczynać się');
  mut(x => { x.costNote = ''; }, 'costNote');
  mut(x => { x.tz = 'Mars/Base'; }, 'nie jest znaną strefą');
  mut((x, d) => { d.destinations.push(5); }, 'oczekiwany obiekt');
});

test('validateData: zła struktura całości nie rzuca', () => {
  for (const bad of [null, 5, 'x', [], {}, { columns: [], flagTypes: [] }, { columns: {}, flagTypes: [], destinations: [] }])
    assert.ok(Array.isArray(validateData(bad)) && validateData(bad).length >= 1, JSON.stringify(bad));
});

test('registryIds i assemble: kolejność, duplikaty, złe id', () => {
  assert.deepEqual(registryIds({ destinations: ['a', 'b'] }), { ids: ['a', 'b'], errs: [] });
  const r = registryIds({ destinations: ['a', 'a', 'B', 5, 'c'] });
  assert.deepEqual(r.ids, ['a', 'c']);
  assert.equal(r.errs.length, 3);
  assert.equal(registryIds(null).errs.length, 1);
  const { data, errs } = assemble({ x: 1 }, [{ id: 'a', value: { id: 'a' } }, { id: 'b', error: 'brak pliku.' }, { id: 'c', value: [] }, { id: 'd', value: { id: 'e' } }]);
  assert.deepEqual(data.destinations.map(d => d.id), ['a']);
  assert.equal(errs.length, 3);
  assert.equal(data.x, 1);
});

// ---------- losowe dane (fuzz): żadna kombinacja nie wywraca liczenia ani nie daje wyników spoza zakresu ----------
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32); }
test('fuzz: losowe kierunki, formatki i filtry – wynik 0–100 albo null, koszt ≥ 0 albo null, brak wyjątków', () => {
  const r = rng(12345);
  const pick = a => a[Math.floor(r() * a.length)];
  const junk = [undefined, null, 'na', 'x', -1, 0, 1e9, NaN, Infinity, [], {}, { est: 3 }, { est: 'x' }, true];
  const cols = [...COLS, ...KC,
    { id: 'cat', name: 'K', type: 'category', scope: 'fixed', group: 'X', weather: false, values: ['a', 'b'] },
    { id: 'tags', name: 'T', type: 'tags', scope: 'fixed', group: 'X', weather: false, values: ['a', 'b', 'c'] }];
  const val = c => r() < 0.3 ? pick(junk)
    : c.type === 'scale' ? 1 + Math.floor(r() * 5)
    : c.type === 'hml' ? pick(['H', 'M', 'L'])
    : c.type === 'flags' ? Array.from({ length: Math.floor(r() * 3) }, () => ({ type: pick(['monsoon', 'jelly', 'holiday', 'zły']), level: pick([1, 2, 3, 4, 0]), note: 'n' }))
    : c.type === 'category' ? pick(['a', 'b', 'z'])
    : c.type === 'tags' ? ['a', 'b', 'c'].filter(() => r() < 0.5)
    : (c.valid ? c.valid[0] + r() * (c.valid[1] - c.valid[0]) : r() * 100) * (r() < 0.5 ? 1 : 0.5);
  for (let n = 0; n < 400; n++) {
    const d = { id: 'f', fixed: {}, months: Array.from({ length: 12 }, () => ({})), tz: pick(['Asia/Bangkok', 'zła', undefined]) };
    for (const c of cols) if (!c.computed) { if (c.scope === 'fixed') d.fixed[c.id] = val(c); else d.months.forEach(m => { m[c.id] = val(c); }); }
    const p = defaultProfile(cols);
    for (const c of Object.values(p.columns)) {
      const a = [r() * 40, r() * 40, r() * 40, r() * 40].sort((x, y) => x - y);
      Object.assign(c, { min: r() < 0.3 ? null : a[0], idealFrom: r() < 0.3 ? null : a[1], idealTo: r() < 0.3 ? null : a[2], max: r() < 0.3 ? null : a[3], weight: pick([0, 0.5, 1, 3]) });
      if (c.weight > 0 && [c.min, c.idealFrom, c.idealTo, c.max].every(x => x == null)) c.max = 50;
    }
    p.flagPenalty = pick([0, 10, 50, 100]);
    p.swimFlags = r() < 0.5;
    p.trip = { adults: 1 + Math.floor(r() * 4), children: Math.floor(r() * 4), infants: Math.floor(r() * 3), nights: 1 + Math.floor(r() * 30), mode: pick(['self', 'package']) };
    p.filters = { ...p.filters, minScore: pick([null, 50]), maxFlightTime: pick([null, 5]), categories: { cat: pick([[], ['a']]), tags: pick([[], ['a', 'b']]) }, tagMode: pick(['all', 'any']), ranges: { temp: { min: pick([null, 20]), max: pick([null, 30]) } }, packageOnly: r() < 0.5 };
    assert.deepEqual(validateProfile(p, cols), [], `profil #${n}`);
    const [out] = withComputed([d], p, cols, 2027);
    for (let m = 0; m < 12; m++) {
      for (const w of [false, true]) {
        const s = score(out, m, cols, FT, p, w);
        assert.ok(s.score === null || (s.score >= 0 && s.score <= 100), `wynik ${s.score}`);
        assert.ok(s.coverage === null || (s.coverage >= 0 && s.coverage <= 1), `pokrycie ${s.coverage}`);
        const f = checkFilters(out, m, s, cols, p.filters);
        assert.equal(typeof f.pass, 'boolean');
      }
      const t = tripCost(out, m, p, cols);
      assert.ok(t.total === null || (Number.isFinite(t.total) && t.total >= 0), `koszt ${t.total}`);
      const tc = out.months[m].trip_cost;
      assert.ok(tc === null || tc === 'na' || (tc.est >= 0 && Number.isFinite(tc.est)), JSON.stringify(tc));
    }
    // walidacja danych nie rzuca na losowych śmieciach
    assert.ok(Array.isArray(validateData({ columns: cols, flagTypes: FT, destinations: [d] })));
  }
});

test('fuzz: losowe śmieci jako profil – merge i walidacja nie rzucają, wynik walidacji zawsze lista', () => {
  const r = rng(999);
  const junk = () => [null, 1, 'x', [], {}, { a: 1 }, true, NaN, [1, 2, 3, 4, 5], { min: 1 }][Math.floor(r() * 10)];
  for (let n = 0; n < 500; n++) {
    const p = { name: junk(), columns: r() < 0.5 ? junk() : { temp: junk(), water: junk() }, flagPenalty: junk(), swimFlags: junk(), seasonThresholds: junk(), filters: r() < 0.5 ? junk() : { categories: junk(), ranges: junk(), tagMode: junk(), minScore: junk() }, trip: junk(), costs: junk(), excluded: junk(), viewLevel: junk() };
    const { profile } = mergeProfile(p, COLS);
    const errs = validateProfile(profile, COLS);
    assert.ok(Array.isArray(errs));
    assert.ok(errs.every(e => typeof e.field === 'string' && typeof e.msg === 'string'));
  }
});

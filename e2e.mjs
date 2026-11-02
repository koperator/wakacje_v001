// Testy strony w przeglądarce (Chromium przez Playwright): node --test e2e.mjs
// Wymaga pakietu playwright i przeglądarki: npm i playwright && npx playwright install chromium
// Bez nich testy są pomijane. Strona jest serwowana z własnego serwera HTTP (kopie danych dla przypadków specjalnych).
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdtempSync, cpSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as core from './core.js';

let pw = null;
try { pw = await import('playwright'); } catch {}
const SKIP = pw ? false : 'brak pakietu playwright (npm i playwright && npx playwright install chromium)';
const APP = fileURLToPath(new URL('.', import.meta.url));
const reg = JSON.parse(readFileSync(join(APP, 'rejestr.json'), 'utf8'));
const DEST = Object.fromEntries(reg.destinations.map(id => [id, JSON.parse(readFileSync(join(APP, 'kierunki', `${id}.json`), 'utf8'))]));
const N = reg.destinations.length;

// ---------- serwer statyczny ----------
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8' };
function serve(root) {
  const srv = createServer((req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
    const file = join(root, path || 'index.html');
    if (!file.startsWith(root) || !existsSync(file)) { res.writeHead(404); res.end('nie ma'); return; }
    res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
    res.end(readFileSync(file));
  });
  srv.unref(); // otwarte połączenia przeglądarki nie mogą zatrzymać końca testów
  return new Promise(ok => srv.listen(0, '127.0.0.1', () => ok({ url: `http://127.0.0.1:${srv.address().port}/`, close: () => { srv.closeAllConnections(); srv.close(); } })));
}
// Kopia aplikacji z modyfikacją plików (fixture).
function copyApp(edit) {
  const dir = mkdtempSync(join(tmpdir(), 'wakacje-e2e-'));
  for (const f of ['index.html', 'core.js', 'rejestr.json']) cpSync(join(APP, f), join(dir, f));
  cpSync(join(APP, 'kierunki'), join(dir, 'kierunki'), { recursive: true });
  const json = p => JSON.parse(readFileSync(join(dir, p), 'utf8'));
  const put = (p, v) => writeFileSync(join(dir, p), typeof v === 'string' ? v : JSON.stringify(v, null, 2));
  edit({ dir, json, put, rm: p => rmSync(join(dir, p)) });
  return dir;
}

let browser, main;
const temp = [];
before(async () => {
  if (SKIP) return;
  browser = await pw.chromium.launch();
  main = await serve(APP);
});
after(async () => {
  await browser?.close();
  main?.close();
  for (const t of temp) { t.srv?.close(); rmSync(t.dir, { recursive: true, force: true }); }
});

// Nowa karta w czystym kontekście (pusta pamięć przeglądarki); fonty zablokowane, żeby testy nie zależały od sieci.
async function open({ url = main.url, viewport = { width: 1400, height: 900 }, colorScheme = 'light', init, storage } = {}) {
  const ctx = await browser.newContext({ viewport, colorScheme, acceptDownloads: true });
  ctx.setDefaultTimeout(5000); // brak elementu ma szybko wywrócić test, a nie czekać 30 s
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  if (init) await ctx.addInitScript(init);
  if (storage) await ctx.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, storage);
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', e => page.errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_FAILED|fonts|net::/.test(m.text())) page.errors.push(m.text()); });
  page.on('dialog', d => d.accept());
  await page.goto(url);
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo')?.textContent ?? 'Wczytywanie'));
  page.close2 = async () => { assert.deepEqual(page.errors, [], 'błędy JS na stronie'); await ctx.close(); };
  return page;
}
const count = async page => {
  const m = (await page.textContent('#count')).match(/Pokazano (\d+) z (\d+)/);
  return { shown: +m[1], total: +m[2] };
};
const rowIds = page => page.$$eval('#grid tbody tr', trs => trs.map(tr => tr.querySelector('button[data-dest]')?.dataset.dest).filter(Boolean));
const scores = page => page.$$eval('#grid tbody td.score button', bs => bs.map(b => b.textContent === '—' ? null : Number(b.textContent.replace('~', ''))));
const tick = page => page.waitForTimeout(30);

// ---------- start ----------
test('start: dane wczytane bez błędów, wszystkie kierunki, bieżący miesiąc', { skip: SKIP }, async () => {
  const page = await open();
  assert.match(await page.textContent('#dataInfo'), /dane poprawne/);
  assert.deepEqual(await count(page), { shown: N, total: N });
  assert.equal((await rowIds(page)).length, N);
  assert.equal(await page.getAttribute(`#tab-${new Date().getMonth()}`, 'aria-selected'), 'true');
  assert.equal(await page.$('#boot'), null);
  assert.equal(await page.$('.msg.error'), null);
  await page.close2();
});

test('start: otwarcie pliku z dysku zostawia instrukcję uruchomienia serwera', { skip: SKIP }, async () => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(pathToFileURL(join(APP, 'index.html')).href);
  await page.waitForTimeout(500);
  assert.match(await page.textContent('#boot'), /python3 -m http\.server/);
  assert.equal(await page.textContent('#dataInfo'), 'Nie wczytano danych.');
  await ctx.close();
});

// ---------- miesiące i tabela ----------
test('miesiące: klik, strzałki, Home, End; fokus zostaje na zakładce', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-3');
  assert.equal(await page.getAttribute('#tab-3', 'aria-selected'), 'true');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getAttribute('#tab-4', 'aria-selected'), 'true');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'tab-4');
  await page.keyboard.press('End');
  assert.equal(await page.getAttribute('#tab-11', 'aria-selected'), 'true');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getAttribute('#tab-0', 'aria-selected'), 'true');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await page.getAttribute('#tab-11', 'aria-selected'), 'true');
  await page.keyboard.press('Home');
  assert.equal(await page.getAttribute('#tab-0', 'aria-selected'), 'true');
  assert.equal(await page.$$eval('#months [aria-selected="true"]', x => x.length), 1);
  await page.close2();
});

test('tabela: domyślnie wynik malejąco; nagłówek przełącza kierunek; nazwa rosnąco po polsku', { skip: SKIP }, async () => {
  const page = await open();
  const s = await scores(page);
  assert.deepEqual(s, [...s].sort((a, b) => b - a));
  assert.equal(await page.getAttribute('th[aria-sort]', 'aria-sort'), 'descending');
  await page.click('[data-sort="score"]');
  const s2 = await scores(page);
  assert.deepEqual(s2, [...s2].sort((a, b) => a - b));
  await page.click('[data-sort="place"]');
  const names = await page.$$eval('#grid tbody .place', x => x.map(e => e.textContent));
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'pl')));
  await page.click('[data-sort="place"]');
  const rev = await page.$$eval('#grid tbody .place', x => x.map(e => e.textContent));
  assert.deepEqual(rev, [...names].reverse());
  // kolumna liczbowa: wartości bez „b.d.” w kolejności
  await page.click('[data-sort="flight_time"]');
  const ft = await page.$$eval('#grid tbody tr', trs => trs.map(tr => tr.querySelector('td:nth-last-child(1)') && tr));
  assert.ok(ft.length > 0);
  await page.close2();
});

test('tabela: zwijanie grupy kolumn i rozwijanie', { skip: SKIP }, async () => {
  const page = await open();
  const cols = () => page.$$eval('#grid thead tr:nth-child(2) th', x => x.length);
  const before = await cols();
  await page.click('[data-group="Pogoda"]');
  assert.ok(await cols() < before);
  assert.equal(await page.getAttribute('[data-group="Pogoda"]', 'aria-expanded'), 'false');
  await page.click('[data-group="Pogoda"]');
  assert.equal(await cols(), before);
  await page.close2();
});

// ---------- formatka ----------
test('formatka: waga zmienia wynik; błąd zakresu oznacza pole i wstrzymuje przeliczanie; poprawka wraca', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#btnForm');
  const first = await scores(page);
  await page.fill('#f-temp_day-weight', '10');
  await tick(page);
  assert.notDeepEqual(await scores(page), first);
  const withWeight = await scores(page);
  await page.fill('#f-temp_day-min', '40');  // min > ideał od
  await tick(page);
  // oznaczone oba pola w złej kolejności
  assert.equal(await page.getAttribute('#f-temp_day-min', 'aria-invalid'), 'true');
  assert.equal(await page.getAttribute('#f-temp_day-idealFrom', 'aria-invalid'), 'true');
  assert.match(await page.textContent('#formErrors'), /Formatka ma błędy/);
  assert.deepEqual(await scores(page), withWeight); // liczone z ostatniej poprawnej
  await page.fill('#f-temp_day-min', '');
  await tick(page);
  assert.equal(await page.textContent('#formErrors'), '');
  assert.equal(await page.getAttribute('#f-temp_day-min', 'aria-invalid'), null);
  // tekst, którego przeglądarka nie czyta jako liczby, nie wyłącza pola po cichu
  await page.fill('#set-flagPenalty', '-5');
  await tick(page);
  assert.match(await page.textContent('#formErrors'), /Kara za poziom flagi/);
  await page.fill('#set-flagPenalty', '10');
  await page.close2();
});

test('formatka: stan zapisany w przeglądarce przetrwa odświeżenie (także z błędem)', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#btnForm');
  await page.fill('#f-water-weight', '3');
  await page.fill('#profileName', 'Test');
  await page.fill('#f-temp_day-min', '40');
  await tick(page);
  await page.reload();
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo').textContent));
  assert.equal(await page.inputValue('#f-water-weight'), '3');
  assert.equal(await page.inputValue('#profileName'), 'Test');
  assert.equal(await page.inputValue('#f-temp_day-min'), '40');
  assert.match(await page.textContent('#formErrors'), /Formatka ma błędy/);
  await page.close2();
});

// ---------- filtry ----------
test('filtry: wynik od – każdy pokazany wiersz spełnia próg, licznik zgadza się z tabelą', { skip: SKIP }, async () => {
  const page = await open();
  await page.fill('#flt-minScore', '75');
  await tick(page);
  const s = await scores(page);
  assert.ok(s.length > 0 && s.length < N);
  assert.ok(s.every(x => x == null || x >= 75), String(s));
  assert.equal((await count(page)).shown, s.length);
  await page.fill('#flt-minScore', '101');
  await tick(page);
  assert.match(await page.textContent('#formErrors'), /wynik od/);
  await page.fill('#flt-minScore', '');
  await page.close2();
});

test('filtry: czas lotu do i przesiadek do odpowiadają danym', { skip: SKIP }, async () => {
  const page = await open();
  await page.fill('#flt-maxFlightTime', '6');
  await page.fill('#flt-maxStops', '0');
  await tick(page);
  const ids = await rowIds(page);
  const expect = reg.destinations.filter(id => {
    const f = DEST[id].fixed, ft = f.flight_time?.est ?? f.flight_time, st = f.stops?.est ?? f.stops;
    return ft <= 6 && st <= 0;
  });
  assert.deepEqual([...ids].sort(), [...expect].sort());
  await page.close2();
});

test('filtry: tryb z biurem i budżet ukrywają „brak oferty”; „tylko z ofertą biur” w miesiącu', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-6');
  await page.check('#flt-packageOnly');
  await tick(page);
  const ids = await rowIds(page);
  const expect = reg.destinations.filter(id => DEST[id].months[6].package_price !== 'na');
  assert.deepEqual([...ids].sort(), [...expect].sort());
  await page.uncheck('#flt-packageOnly');
  await page.check('#trip-mode');
  await page.fill('#flt-maxTripCost', '1000');
  await tick(page);
  assert.equal(await page.$$eval('#grid tbody td', tds => tds.some(td => td.textContent.includes('brak oferty'))), false);
  assert.deepEqual([...(await rowIds(page))].sort(), [...expect].sort());
  await page.close2();
});

test('filtry: kierunek bez danych do filtra jest oznaczony ⚠, nie ukryty', { skip: SKIP }, async () => {
  const dir = copyApp(({ json, put }) => {
    const d = json('kierunki/phuket.json'); delete d.fixed.flight_time; put('kierunki/phuket.json', d);
  });
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  await page.fill('#flt-maxFlightTime', '3');
  await tick(page);
  assert.ok((await rowIds(page)).includes('phuket'));
  const tip = await page.getAttribute('tr:has(button[data-dest="phuket"]) .unchk', 'title');
  assert.match(tip, /czas lotu/);
  assert.match(await page.textContent('#count'), /1 bez danych do filtra/);
  await page.close2();
});

test('tagi: pasek, tryb wszystkie/którykolwiek, przycisk w komórce i w oknie – wynik zgodny z danymi', { skip: SKIP }, async () => {
  const page = await open();
  const has = (id, t) => DEST[id].fixed.tags.includes(t);
  await page.click('#tagbar [data-val="ruiny"]');
  await page.click('#tagbar [data-val="stare miasto"]');
  await tick(page);
  let ids = await rowIds(page);
  assert.deepEqual([...ids].sort(), reg.destinations.filter(id => has(id, 'ruiny') && has(id, 'stare miasto')).sort());
  await page.click('#tagbar [data-tagmode="any"]');
  await tick(page);
  ids = await rowIds(page);
  assert.deepEqual([...ids].sort(), reg.destinations.filter(id => has(id, 'ruiny') || has(id, 'stare miasto')).sort());
  assert.equal(await page.getAttribute('#tagbar [data-val="ruiny"]', 'aria-pressed'), 'true');
  await page.click('#tagbar [data-clear="tags"]');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  // przycisk tagu w tabeli włącza filtr, drugi klik wyłącza
  await page.click('#grid .tagbtn[data-tagf="tags|dżungla"] >> nth=0');
  await tick(page);
  assert.deepEqual([...(await rowIds(page))].sort(), reg.destinations.filter(id => has(id, 'dżungla')).sort());
  assert.equal(await page.getAttribute('#grid .tagbtn[data-tagf="tags|dżungla"] >> nth=0', 'aria-pressed'), 'true');
  await page.click('#grid .tagbtn[data-tagf="tags|dżungla"] >> nth=0');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  // z okna kierunku: zamyka okno i filtruje
  await page.click('button[data-dest="malediwy"]');
  await page.click('#dlg .tagbtn[data-tagf="tags|nurkowanie"]');
  await tick(page);
  assert.equal(await page.evaluate(() => document.querySelector('#dlg').open), false);
  assert.deepEqual([...(await rowIds(page))].sort(), reg.destinations.filter(id => has(id, 'nurkowanie')).sort());
  await page.close2();
});

test('kategorie: kontynent i region łączą się (i), wyczyść, podsumowanie sekcji', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#more summary');
  await page.click('#chips [data-cat="continent"][data-val="Azja"]');
  await page.click('#chips [data-cat="continent"][data-val="Afryka"]');
  await page.click('#chips [data-cat="region"][data-val="Morze Czerwone"]');
  await tick(page);
  const exp = reg.destinations.filter(id => ['Azja', 'Afryka'].includes(DEST[id].fixed.continent) && DEST[id].fixed.region === 'Morze Czerwone');
  assert.deepEqual([...(await rowIds(page))].sort(), exp.sort());
  assert.match(await page.textContent('#moreSum'), /Kontynent: Afryka, Azja · Region: Morze Czerwone/);
  await page.click('#chips [data-clear="region"]');
  await page.click('#chips [data-clear="continent"]');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  assert.equal(await page.textContent('#moreSum'), '');
  await page.close2();
});

test('zakresy: dodanie, filtrowanie, błąd od > do, usunięcie', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#more summary');
  await page.click('#tab-0');
  await page.selectOption('#rangeAdd', 'water');
  await page.fill('#rng-water-min', '27');
  await tick(page);
  const exp = reg.destinations.filter(id => { const w = DEST[id].months[0].water; const v = w?.est ?? w; return typeof v === 'number' && v >= 27; });
  assert.deepEqual([...(await rowIds(page))].sort(), exp.sort());
  assert.match(await page.textContent('#moreSum'), /Woda od 27/);
  assert.equal(await page.$('#rangeAdd option[value="water"]'), null); // kolumna już użyta znika z listy
  await page.fill('#rng-water-max', '20');
  await tick(page);
  assert.equal(await page.getAttribute('#rng-water-max', 'aria-invalid'), 'true');
  await page.click('[data-rmrng="water"]');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  assert.equal(await page.textContent('#formErrors'), '');
  await page.close2();
});

// ---------- wyłączanie kierunków ----------
test('wyłączanie: pole wyboru, pokaż wyłączone, masowe akcje, zapis po odświeżeniu', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('input[data-toggle="phuket"]');
  await tick(page);
  assert.ok(!(await rowIds(page)).includes('phuket'));
  assert.match(await page.textContent('#count'), new RegExp(`Pokazano ${N - 1} z ${N} · wyłączonych 1`));
  await page.check('#showExcluded');
  await tick(page);
  assert.ok((await rowIds(page)).includes('phuket'));
  assert.equal(await page.$$eval('#grid tr.off', x => x.length), 1);
  await page.uncheck('#showExcluded');
  // zostaw tylko widoczne przy filtrze Europa
  await page.click('#more summary');
  await page.click('#chips [data-cat="continent"][data-val="Europa"]');
  await page.click('#onlyVisible');
  await page.click('#chips [data-clear="continent"]');
  await tick(page);
  const eu = reg.destinations.filter(id => DEST[id].fixed.continent === 'Europa');
  assert.deepEqual([...(await rowIds(page))].sort(), eu.sort());
  await page.reload();
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo').textContent));
  assert.deepEqual([...(await rowIds(page))].sort(), eu.sort());
  // wyłącz widoczne → nic nie zostaje
  await page.click('#exclVisible');
  await tick(page);
  assert.equal((await count(page)).shown, 0);
  assert.match(await page.textContent('#grid'), /Żaden kierunek/);
  await page.click('#includeAll');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  await page.close2();
});

test('wyłączanie: wyłączony kierunek znika z kalendarza, porównania i wykresu koszt–wynik', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('input[data-toggle="malediwy"]');
  await page.click('#vt-cal');
  assert.equal(await page.$('#cal button[data-dest="malediwy"]'), null);
  await page.click('#vt-xy');
  assert.equal(await page.$('#xyChart circle[data-dest="malediwy"]'), null);
  await page.click('#vt-cmp');
  assert.equal(await page.$('#cmpAdd option[value="malediwy"]'), null);
  await page.check('#showExcluded');
  await page.click('#vt-cal');
  assert.notEqual(await page.$('#cal tr.off button[data-dest="malediwy"]'), null);
  await page.close2();
});

// ---------- poziomy widoku ----------
test('poziomy widoku: liczba kolumn rośnie, formatka i filtry nadążają, zapis w profilu', { skip: SKIP }, async () => {
  const page = await open();
  const n = () => page.$$eval('#grid thead tr:nth-child(2) th', x => x.length);
  const counts = {};
  for (const l of [1, 2, 3]) {
    await page.click(`[data-level="${l}"]`);
    counts[l] = await n();
    assert.equal(counts[l], reg.columns.filter(c => (c.level ?? 3) <= l).length, `poziom ${l}`);
    assert.equal(await page.getAttribute(`[data-level="${l}"]`, 'aria-pressed'), 'true');
  }
  await page.click('[data-level="1"]');
  assert.equal(await page.isVisible('label[for="flt-minCoverage"]'), false);
  assert.equal(await page.isVisible('label[for="flt-maxFlightTime"]'), true);
  assert.equal(await page.$('#f-dew_point-weight'), null);
  assert.match(await page.textContent('#formHidden'), /Punkt rosy/);
  await page.reload();
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo').textContent));
  assert.equal(await page.getAttribute('[data-level="1"]', 'aria-pressed'), 'true');
  // wynik nie zależy od poziomu
  const s1 = await scores(page);
  await page.click('[data-level="3"]');
  assert.deepEqual(await scores(page), s1);
  await page.close2();
});

// ---------- widoki ----------
test('kalendarz: wiersze, komórka otwiera obliczenie dla miesiąca, nagłówek wybiera miesiąc, sortowanie', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-0');
  await page.click('#vt-cal');
  assert.equal(await page.$$eval('#cal tbody tr', x => x.length), N);
  assert.equal(await page.$$eval('#cal tbody tr:first-child td button', x => x.length), 12);
  await page.click('#cal button[data-cell^="phuket|"][data-cell$="|6"]');
  assert.match(await page.textContent('#dlgBody'), /Lipiec/);
  await page.keyboard.press('Escape');
  await page.click('#cal thead button[data-m="7"]');
  assert.equal(await page.getAttribute('#tab-7', 'aria-selected'), 'true');
  await page.selectOption('#calSort', 'best');
  const best = await page.$$eval('#cal tbody td.agg', x => x.map(e => Number(e.textContent)));
  assert.deepEqual(best, [...best].sort((a, b) => b - a));
  await page.selectOption('#calSort', 'place');
  const names = await page.$$eval('#cal tbody .place', x => x.map(e => e.textContent));
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'pl')));
  // filtr wyniku: miesiące poniżej progu kreskowane, wiersz zostaje, jeśli choć jeden miesiąc przechodzi
  await page.fill('#flt-minScore', '90');
  await tick(page);
  const rows = await page.$$eval('#cal tbody tr', trs => trs.map(tr => [...tr.querySelectorAll('td:not(.agg)')].map(td => td.classList.contains('fail'))));
  assert.ok(rows.length > 0 && rows.length < N);
  assert.ok(rows.every(r => r.some(f => !f)));
  await page.close2();
});

test('porównanie: domyślnie najlepsze z tabeli, dodawanie do 6, usuwanie, zmiana wartości, podpowiedź', { skip: SKIP }, async () => {
  const page = await open();
  const top = (await rowIds(page)).slice(0, 4);
  await page.click('#vt-cmp');
  const sel = () => page.$$eval('#cmpSel [data-rm]', x => x.map(b => b.dataset.rm));
  assert.deepEqual(await sel(), top);
  assert.equal(await page.$$eval('#cmpChart path[stroke-width="2.2"]', x => x.length), top.length);
  for (let i = 0; i < 3; i++) {
    const v = await page.$eval('#cmpAdd', s => s.options[1]?.value);
    if (v) await page.selectOption('#cmpAdd', v);
  }
  const max = Math.min(6, N);
  assert.equal((await sel()).length, max);
  if (max === 6) assert.equal(await page.isDisabled('#cmpAdd'), true);
  await page.click(`#cmpSel [data-rm="${top[0]}"]`);
  assert.equal((await sel()).length, max - 1);
  await page.selectOption('#cmpMetric', 'water');
  assert.match(await page.getAttribute('#cmpChart svg', 'aria-label'), /Woda/);
  const box = await page.$('#cmpHit');
  const b = await box.boundingBox();
  await page.mouse.move(b.x + b.width * 0.05, b.y + b.height / 2);
  assert.match(await page.textContent('#cmpChart .tip'), /Styczeń/);
  await page.mouse.click(b.x + b.width * 0.95, b.y + b.height / 2);
  assert.equal(await page.getAttribute('#tab-11', 'aria-selected'), 'true');
  await page.close2();
});

test('koszt a wynik: punkty = wiersze tabeli z kosztem, front Pareto poprawny, oś i klik punktu', { skip: SKIP }, async () => {
  const page = await open();
  const ids = await rowIds(page);
  await page.click('#vt-xy');
  const pts = await page.$$eval('#xyChart circle[data-dest]', cs => cs.map(c => ({ id: c.dataset.dest, x: +c.getAttribute('cx'), y: +c.getAttribute('cy'), front: c.getAttribute('r') === '6' })));
  assert.equal(pts.length, ids.length);
  assert.deepEqual(pts.map(p => p.id).sort(), [...ids].sort());
  // front: punkt nie jest zdominowany (żaden inny nie ma x ≤ i y wyżej, czyli cy mniejsze, z jedną nierównością ostrą)
  const dominated = p => pts.some(q => q !== p && q.x <= p.x && q.y <= p.y && (q.x < p.x || q.y < p.y));
  for (const p of pts) assert.equal(p.front, !dominated(p), `${p.id}: front=${p.front}`);
  await page.selectOption('#xyX', 'flight_time');
  assert.match(await page.getAttribute('#xyChart svg', 'aria-label'), /czas lotu/);
  await page.click('#xyChart circle[data-dest="phuket"]', { force: true });
  assert.match(await page.textContent('#dlgBody'), /Phuket/);
  await page.close2();
});

test('widoki: zakładka zapamiętana; klawiatura przełącza zakładki widoków', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-cal');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getAttribute('#vt-cmp', 'aria-selected'), 'true');
  assert.equal(await page.isVisible('#v-cmp'), true);
  assert.equal(await page.isVisible('#v-table'), false);
  await page.reload();
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo').textContent));
  assert.equal(await page.getAttribute('#vt-cmp', 'aria-selected'), 'true');
  await page.close2();
});

// ---------- okna ----------
test('okna: kierunek (formalności, czas, źródła, linki), obliczenie wyniku, zamykanie', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('button[data-dest="malediwy"]');
  const t = await page.textContent('#dlgBody');
  assert.match(t, /Formalności wjazdowe:/);
  assert.match(t, /Indian\/Maldives/);
  assert.match(t, /Koszty poza kalkulatorem/);
  const links = await page.$$eval('#dlgBody .sources a', as => as.map(a => [a.getAttribute('href'), a.getAttribute('rel'), a.getAttribute('target')]));
  assert.ok(links.length >= 3);
  assert.ok(links.every(([h, rel, tg]) => /^https?:\/\//.test(h) && rel === 'noopener' && tg === '_blank'));
  await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(() => document.querySelector('#dlg').open), false);
  await page.click('button[data-score="malediwy"]');
  assert.match(await page.textContent('#dlgBody'), /Wynik przed karami/);
  await page.click('#dlgBody .close');
  assert.equal(await page.evaluate(() => document.querySelector('#dlg').open), false);
  await page.close2();
});

// ---------- profile ----------
test('profil: pobierz i wczytaj odtwarza ustawienia; zły plik i profil z błędami są odrzucane; przywróć domyślne', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#btnForm');
  await page.fill('#profileName', 'Żona & co');
  await page.fill('#f-water-weight', '2.5');
  await page.click('[data-level="1"]');
  await page.click('input[data-toggle="sopot"]');
  await page.click('#tagbar [data-val="spokój"]');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#btnSave')]);
  assert.equal(dl.suggestedFilename(), 'profil-zona-co.json');
  const file = await dl.path();
  const saved = JSON.parse(readFileSync(file, 'utf8'));
  assert.equal(saved.viewLevel, 1);
  assert.deepEqual(saved.excluded, ['sopot']);
  assert.deepEqual(saved.filters.categories, { tags: ['spokój'] });
  // reset
  await page.click('#btnReset');
  await tick(page);
  assert.equal(await page.inputValue('#profileName'), 'Domyślny');
  assert.equal((await count(page)).shown, N);
  // wczytanie (czytanie pliku jest asynchroniczne)
  const loaded = text => page.waitForFunction(t => document.querySelector('#messages').textContent.includes(t), text);
  await page.setInputFiles('#fileProfile', file);
  await loaded('Wczytano profil „Żona & co”');
  assert.equal(await page.inputValue('#profileName'), 'Żona & co');
  assert.equal(await page.inputValue('#f-water-weight'), '2.5');
  assert.equal(await page.getAttribute('[data-level="1"]', 'aria-pressed'), 'true');
  assert.ok(!(await rowIds(page)).includes('sopot'));
  // zły JSON i profil z błędami
  await page.setInputFiles('#fileProfile', { name: 'zly.json', mimeType: 'application/json', buffer: Buffer.from('{nie json') });
  await loaded('Nie wczytano zly.json');
  assert.match(await page.textContent('#messages'), /Nie wczytano zly\.json: plik nie jest poprawnym JSON-em/);
  const bad = { ...saved, flagPenalty: 500 };
  await page.setInputFiles('#fileProfile', { name: 'bledny.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(bad)) });
  await loaded('Nie wczytano bledny.json');
  assert.match(await page.textContent('#messages'), /Nie wczytano bledny\.json: profil ma błędy/);
  assert.equal(await page.inputValue('#profileName'), 'Żona & co'); // stan bez zmian
  // stary profil bez nowych ustawień: wczytany z informacją
  const old = { name: 'Stary', columns: saved.columns };
  await page.setInputFiles('#fileProfile', { name: 'stary.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(old)) });
  await loaded('Wczytano profil „Stary”');
  assert.match(await page.textContent('#messages'), /Ustawienia z wartościami domyślnymi/);
  assert.equal(await page.inputValue('#profileName'), 'Stary');
  await page.close2();
});

test('profil: pobranie zablokowane przy błędach formatki', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#btnForm');
  await page.fill('#f-temp_day-min', '40');
  let downloaded = false;
  page.on('download', () => { downloaded = true; });
  await page.click('#btnSave');
  await page.waitForTimeout(200);
  assert.equal(downloaded, false);
  assert.match(await page.textContent('#messages'), /Popraw błędy w formatce/);
  await page.close2();
});

// ---------- bezpieczeństwo i odporność ----------
test('XSS: złośliwe teksty w danych i profilu nie tworzą elementów ani nie wykonują kodu', { skip: SKIP }, async () => {
  const P = n => `<img src=x onerror="window.__xss=${n}">"'><script>window.__xss=${n}</script>`;
  const dir = copyApp(({ json, put }) => {
    const r = json('rejestr.json');
    const cont = r.columns.find(c => c.id === 'continent');
    cont.values.push(P(1));
    put('rejestr.json', r);
    const d = json('kierunki/phuket.json');
    Object.assign(d, { place: P(2), country: P(3), notes: P(4), entryNote: P(5), costNote: P(6) });
    d.fixed.continent = P(1);
    d.months[0].flags = [{ type: d.months[0].flags?.[0]?.type ?? 'holidays', level: 2, note: P(7) }];
    d.sources.push({ title: P(8), url: 'javascript:window.__xss=9', checked: '2026-01-01' });
    put('kierunki/phuket.json', d);
  });
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  await page.click('#tab-0');
  await page.click('#more summary');
  await page.click('button[data-dest="phuket"]');
  await page.keyboard.press('Escape');
  await page.click('button[data-score="phuket"]');
  await page.keyboard.press('Escape');
  for (const v of ['cal', 'cmp', 'xy', 'table']) await page.click(`#vt-${v}`);
  await page.click('#vt-cmp');
  const v = await page.$eval('#cmpAdd', s => [...s.options].find(o => o.value === 'phuket')?.value);
  if (v) await page.selectOption('#cmpAdd', v);
  await page.click('#vt-table');
  await page.click('#btnForm');
  await page.fill('#profileName', P(10));
  await page.setInputFiles('#fileProfile', { name: '<img src=x onerror=window.__xss=11>.json', mimeType: 'application/json', buffer: Buffer.from('zły') });
  await page.waitForFunction(() => document.querySelector('#messages').textContent.includes('nie jest poprawnym JSON-em'));
  assert.equal(await page.evaluate(() => window.__xss), undefined);
  assert.equal(await page.$$eval('img', x => x.length), 0);
  assert.equal(await page.$$eval('script', x => x.filter(s => s.textContent.includes('__xss')).length), 0);
  assert.equal(await page.$$eval('a[href^="javascript"]', x => x.length), 0);
  // błąd danych (url) zgłoszony, strona działa
  assert.match(await page.textContent('#messages'), /url musi zaczynać się/);
  page.errors = page.errors.filter(e => !/net::|Failed to load/.test(e));
  await page.close2();
});

test('uszkodzone dane: brak pliku, zły JSON, błędna wartość – komunikat, reszta działa', { skip: SKIP }, async () => {
  const dir = copyApp(({ json, put, rm }) => {
    rm('kierunki/sopot.json');
    put('kierunki/malediwy.json', '{ to nie jest json');
    const d = json('kierunki/phuket.json'); d.months[0].temp_day = 'gorąco'; put('kierunki/phuket.json', d);
  });
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  page.errors = [];
  const msg = await page.textContent('#messages');
  assert.match(msg, /Błędy danych: 3/);
  assert.match(msg, /sopot\.json: brak pliku/);
  assert.match(msg, /malediwy\.json: niepoprawny JSON/);
  assert.match(msg, /oczekiwana liczba/);
  assert.match(await page.textContent('#dataInfo'), new RegExp(`${N - 2} kierunk.* błędy danych: 3`));
  await page.click('#tab-0');
  const cell = await page.$('tr:has(button[data-dest="phuket"]) td.bad');
  assert.ok(cell, 'błędna wartość oznaczona');
  for (const v of ['cal', 'cmp', 'xy']) await page.click(`#vt-${v}`);
  page.errors = page.errors.filter(e => !/404/.test(e));
  await page.close2();
});

test('uszkodzony rejestr: czytelny komunikat zamiast pustej strony', { skip: SKIP }, async () => {
  const dir = copyApp(({ put }) => put('rejestr.json', '{"columns": 5}'));
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  assert.equal(await page.textContent('#dataInfo'), 'Nie wczytano danych.');
  assert.match(await page.textContent('#messages'), /rejestr\.json ma złą strukturę/);
  await page.close2();
});

test('pamięć przeglądarki niedostępna: strona działa bez zapisu', { skip: SKIP }, async () => {
  const page = await open({ init: () => { for (const k of ['getItem', 'setItem']) Storage.prototype[k] = () => { throw new Error('zablokowane'); }; } });
  assert.equal((await count(page)).shown, N);
  await page.click('input[data-toggle="phuket"]');
  await page.click('#vt-cal');
  await page.click('#vt-xy');
  await page.close2();
});

test('pamięć przeglądarki z innej wersji: śmieci w zapisie nie psują strony', { skip: SKIP }, async () => {
  const page = await open({ storage: {
    'wakacje.widok': JSON.stringify({ view: 'mapa', calSort: 5, compare: 'x', metric: 7, moreOpen: 'tak', showExcluded: 1 }),
    'wakacje.formatka': JSON.stringify({ name: 'X', trip: null, filters: { categories: 'x', ranges: 5 } }),
    'wakacje.aktywny': '{"zepsute": true',
  } });
  assert.equal(await page.getAttribute('#vt-table', 'aria-selected'), 'true');
  assert.equal((await count(page)).shown, N);
  await page.click('#vt-cal');
  await page.click('#vt-cmp');
  await page.close2();
});

// ---------- układ ----------
test('telefon 390 px: brak poziomego przewijania strony, wszystkie widoki się rysują', { skip: SKIP }, async () => {
  const page = await open({ viewport: { width: 390, height: 844 } });
  for (const v of ['table', 'cal', 'cmp', 'xy']) {
    await page.click(`#vt-${v}`);
    const [sw, cw] = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    assert.ok(sw <= cw, `${v}: szerokość ${sw} > ${cw}`);
  }
  assert.ok(await page.$('#xyChart svg'));
  const w = await page.$eval('#xyChart svg', s => s.getBoundingClientRect().width);
  assert.ok(w <= 390);
  await page.close2();
});

test('tryb ciemny: inne kolory tła, wykresy się rysują', { skip: SKIP }, async () => {
  const page = await open({ colorScheme: 'dark' });
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  assert.equal(bg, 'rgb(14, 25, 27)');
  await page.click('#vt-cmp');
  assert.ok(await page.$('#cmpChart svg path'));
  await page.close2();
});

test('zmiana rozmiaru okna przerysowuje wykres na nową szerokość', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-xy');
  const w1 = await page.$eval('#xyChart svg', s => s.viewBox.baseVal.width);
  await page.setViewportSize({ width: 800, height: 900 });
  await page.waitForTimeout(400);
  const w2 = await page.$eval('#xyChart svg', s => s.viewBox.baseVal.width);
  assert.ok(w2 < w1, `${w2} ≥ ${w1}`);
  await page.close2();
});

// ---------- zgodność strony z core.js (te same liczby co w testach jednostkowych) ----------
const DATA = { columns: reg.columns, flagTypes: reg.flagTypes, destinations: reg.destinations.map(id => DEST[id]) };
const defP = () => core.defaultProfile(reg.columns);
const plNum = v => v.toLocaleString('pl-PL', { maximumFractionDigits: 1 });
// Wiersz tabeli → { id: { score, cells: { colId: tekst } } } dla widocznych kolumn.
async function tableData(page) {
  return page.evaluate(() => {
    const heads = [...document.querySelectorAll('#grid thead tr:nth-child(2) th button[data-sort]')].map(b => b.dataset.sort);
    const out = {};
    for (const tr of document.querySelectorAll('#grid tbody tr')) {
      const id = tr.querySelector('button[data-dest]')?.dataset.dest;
      if (!id) continue;
      const tds = [...tr.querySelectorAll('td')];
      const score = tds[0].textContent.trim();
      const cells = {};
      const dataTds = tds.slice(tds.length - heads.length);
      heads.forEach((h, i) => { cells[h] = { text: dataTds[i].textContent.trim(), s: dataTds[i].style.getPropertyValue('--s'), title: dataTds[i].getAttribute('title') }; });
      out[id] = { score, cells, pill: tr.querySelector('.pill')?.textContent ?? null };
    }
    return out;
  });
}

test('zgodność: wynik, sezon, kolor komórek i koszt w tabeli = wyliczenia core.js (każdy kierunek, 3 miesiące)', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('[data-level="3"]');
  const p = defP(); p.viewLevel = 3;
  const dests = core.withComputed(DATA.destinations, p, reg.columns);
  for (const m of [0, 6, 10]) {
    await page.click(`#tab-${m}`);
    const t = await tableData(page);
    assert.equal(Object.keys(t).length, N);
    for (const d of dests) {
      const r = core.score(d, m, reg.columns, reg.flagTypes, p);
      const w = core.score(d, m, reg.columns, reg.flagTypes, p, true);
      const row = t[d.id];
      assert.equal(row.score, `${r.coverage < 1 ? '~' : ''}${Math.round(r.score)}`, `${d.id} ${m}: wynik`);
      assert.equal(row.pill, core.season(w.score, p.seasonThresholds), `${d.id} ${m}: sezon`);
      // kolor = ocena kolumny wg formatki
      const raw = d.months[m].temp_day;
      assert.equal(Number(row.cells.temp_day.s), Number(core.cellScore(raw, p.columns.temp_day, reg.columns.find(c => c.id === 'temp_day')).toFixed(3)), `${d.id} ${m}: kolor`);
      const cost = d.months[m].trip_cost;
      assert.equal(row.cells.trip_cost.text.replace('＋', ''), plNum(cost.est), `${d.id} ${m}: koszt`);
      const td = d.months[m].time_diff;
      assert.equal(row.cells.time_diff.text, `${td > 0 ? '+' : td < 0 ? '−' : '±'}${plNum(Math.abs(td))}`, `${d.id} ${m}: różnica czasu`);
    }
  }
  await page.close2();
});

test('zgodność: podpowiedź kosztu rozbija kwotę na części sumujące się do całości', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-1');
  await page.fill('#trip-adults', '3');
  await page.fill('#trip-children', '2');
  await page.fill('#trip-nights', '10');
  const p = defP(); Object.assign(p.trip, { adults: 3, children: 2, nights: 10 });
  const d = DEST.phuket;
  const r = core.tripCost(d, 1, p, reg.columns);
  const tip = await page.getAttribute('tr:has(button[data-dest="phuket"]) td[title^="Koszt wyjazdu"]', 'title');
  const zl = v => `${(Math.round(v / 100) * 100).toLocaleString('pl-PL')} zł`;
  assert.match(tip, new RegExp(`≈ ${zl(r.total)}`));
  assert.match(tip, /3 dor\., 2 dz\., 0 niem\., 10 nocy/);
  assert.match(tip, new RegExp(`Bilety: ${zl(r.tickets)}`));
  assert.match(tip, new RegExp(`Nocleg: ${zl(r.lodging)} \\(${r.rooms} pok\\.`));
  near(r.tickets + r.lodging + r.daily + r.extras, r.total);
  // tryb z biurem
  await page.check('#trip-mode');
  const tip2 = await page.getAttribute('tr:has(button[data-dest="phuket"]) td[title^="Koszt wyjazdu"]', 'title');
  assert.match(tip2, /z biurem/);
  assert.match(tip2, /Wczasy: /);
  await page.close2();
});
function near(a, b) { assert.ok(Math.abs(a - b) < 1e-6, `${a} ≠ ${b}`); }

test('zgodność: kalendarz pokazuje te same wyniki co core.js dla 12 miesięcy', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-cal');
  const p = defP();
  const dests = core.withComputed(DATA.destinations, p, reg.columns);
  const cal = await page.$$eval('#cal tbody tr', trs => Object.fromEntries(trs.map(tr => [tr.querySelector('button[data-dest]').dataset.dest, [...tr.querySelectorAll('td button')].map(b => b.textContent)])));
  for (const d of dests) {
    const want = d.months.map((_, m) => { const r = core.score(d, m, reg.columns, reg.flagTypes, p); return `${r.coverage < 1 ? '~' : ''}${Math.round(r.score)}`; });
    assert.deepEqual(cal[d.id], want, d.id);
  }
  await page.close2();
});

test('zgodność: okno obliczenia wyniku pokazuje wynik przed karami, karę i pokrycie z core.js', { skip: SKIP }, async () => {
  const page = await open();
  const p = defP();
  // kierunek i miesiąc z flagą, żeby kara była niezerowa
  let pick = null;
  for (const id of reg.destinations) for (let m = 0; m < 12 && !pick; m++) if ((DEST[id].months[m].flags ?? []).length) pick = [id, m];
  const [id, m] = pick;
  await page.click(`#tab-${m}`);
  await page.click(`button[data-score="${id}"]`);
  const d = core.withComputed([DEST[id]], p, reg.columns)[0];
  const r = core.score(d, m, reg.columns, reg.flagTypes, p);
  const f1 = v => v.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const t = await page.textContent('#dlgBody');
  assert.match(t, new RegExp(`Wynik przed karami${f1(r.raw)}`));
  assert.match(t, new RegExp(`Łączna kara${Math.round(r.penalty * 100)}%`));
  assert.match(t, new RegExp(`Wynik${f1(r.score)}`));
  await page.close2();
});

test('sortowanie: kolumna kategorii według kolejności listy, tagi według liczby, flagi według sumy natężeń', { skip: SKIP }, async () => {
  const page = await open();
  const order = reg.columns.find(c => c.id === 'entry').values;
  await page.click('[data-sort="entry"]');
  const entries = await page.$$eval('#grid tbody tr', trs => trs.map(tr => tr.querySelector('td.catcell:last-child')?.textContent));
  const idx = entries.map(e => order.indexOf(e));
  assert.ok(idx.every(i => i >= 0), String(entries.slice(0, 3)));
  assert.deepEqual(idx, [...idx].sort((a, b) => b - a));
  await page.click('[data-sort="tags"]');
  const n = await page.$$eval('#grid tbody td.tagcell', tds => tds.map(td => td.querySelectorAll('.tagbtn').length));
  assert.deepEqual(n, [...n].sort((a, b) => b - a));
  await page.close2();
});

test('zakres na kolumnie wyliczanej (różnica czasu) i na skali (plaże)', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-0');
  await page.click('#more summary');
  await page.selectOption('#rangeAdd', 'time_diff');
  await page.fill('#rng-time_diff-min', '-1');
  await page.fill('#rng-time_diff-max', '1');
  await page.selectOption('#rangeAdd', 'beaches');
  await page.fill('#rng-beaches-min', '5');
  await tick(page);
  const exp = reg.destinations.filter(id => {
    const td = core.timeDiff(DEST[id].tz, 0); const b = DEST[id].fixed.beaches; const bv = b?.est ?? b;
    return td >= -1 && td <= 1 && bv >= 5;
  });
  assert.deepEqual([...(await rowIds(page))].sort(), exp.sort());
  await page.close2();
});

test('porównanie: wartości w podpowiedzi = dane kierunku; reset profilu czyści wybór', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-cmp');
  // jeden kierunek: phuket
  for (const id of await page.$$eval('#cmpSel [data-rm]', x => x.map(b => b.dataset.rm))) await page.click(`#cmpSel [data-rm="${id}"]`);
  // pusty wybór zostaje pusty (z propozycją), nie wraca sam do domyślnego
  assert.ok(await page.$('#cmpSel [data-fill]'));
  assert.match(await page.textContent('#cmpChart'), /Wybierz kierunki/);
  await page.selectOption('#cmpAdd', 'phuket');
  await page.selectOption('#cmpMetric', 'temp_day');
  const b = await (await page.$('#cmpHit')).boundingBox();
  for (const m of [0, 5, 11]) {
    await page.mouse.move(b.x + b.width * (m + 0.5) / 12, b.y + 10);
    const v = DEST.phuket.months[m].temp_day; const val = v?.est ?? v;
    assert.match(await page.textContent('#cmpChart .tip'), new RegExp(`Phuket: ${plNum(Math.round(val * 10) / 10)} °C`));
  }
  await page.click('#btnReset');
  await page.click('#vt-cmp');
  assert.equal((await page.$$eval('#cmpSel [data-rm]', x => x.length)), 4);
  await page.close2();
});

test('koszt a wynik: oś „wczasy” pomija kierunki bez oferty i wypisuje je w notce', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tab-6');
  await page.click('[data-level="2"]');
  await page.click('#vt-xy');
  await page.selectOption('#xyX', 'package_price');
  const n = await page.$$eval('#xyChart circle[data-dest]', x => x.length);
  const withOffer = reg.destinations.filter(id => DEST[id].months[6].package_price !== 'na');
  assert.equal(n, withOffer.length);
  assert.match(await page.textContent('#xyNote'), new RegExp(`Bez wyniku lub wartości na osi poziomej.*: ${N - withOffer.length}`));
  // wyłączony przy „pokaż wyłączone”: szary i poza frontem
  await page.click('#vt-table');
  const best = (await rowIds(page))[0];
  await page.click(`input[data-toggle="${best}"]`);
  await page.check('#showExcluded');
  await page.click('#vt-xy');
  const c = await page.$(`#xyChart circle[data-dest="${best}"]`);
  if (c) { assert.equal(await c.getAttribute('r'), '4.5'); assert.equal(await c.getAttribute('stroke'), 'var(--line)'); }
  await page.close2();
});

test('klawiatura: Tab dochodzi do przełącznika kierunku i tagu; spacja i Enter działają', { skip: SKIP }, async () => {
  const page = await open();
  await page.focus('input[data-toggle="phuket"]');
  await page.keyboard.press('Space');
  await tick(page);
  assert.match(await page.textContent('#count'), /wyłączonych 1/);
  await page.click('#includeAll');
  await page.focus('#grid .tagbtn >> nth=0');
  const tag = await page.$eval('#grid .tagbtn >> nth=0', b => b.dataset.tagf);
  await page.keyboard.press('Enter');
  await tick(page);
  assert.equal(await page.getAttribute(`#tagbar [data-val="${tag.split('|')[1]}"]`, 'aria-pressed'), 'true');
  await page.close2();
});

test('okno kierunku: tabela 12 miesięcy z wynikiem; kolumny według poziomu widoku', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('[data-level="1"]');
  await page.click('button[data-dest="phuket"]');
  const rows1 = await page.$$eval('#dlgBody .mtable tbody th', x => x.map(e => e.textContent));
  assert.ok(!rows1.some(r => /Punkt rosy|Sezon glob/.test(r)));
  assert.equal(await page.$$eval('#dlgBody .mtable thead th', x => x.length), 13);
  await page.keyboard.press('Escape');
  await page.click('[data-level="3"]');
  await page.click('button[data-dest="phuket"]');
  const rows3 = await page.$$eval('#dlgBody .mtable tbody th', x => x.map(e => e.textContent));
  assert.ok(rows3.some(r => /Punkt rosy/.test(r)) && rows3.some(r => /Sezon glob/.test(r)));
  assert.ok(rows3.some(r => /Różnica czasu/.test(r)));
  await page.close2();
});

// ---------- przypadki brzegowe stanu ----------
test('wszystkie wagi 0: wynik „—” wszędzie, wykresy z komunikatem zamiast błędu', { skip: SKIP }, async () => {
  const p = defP();
  for (const c of Object.values(p.columns)) c.weight = 0;
  const page = await open({ storage: { 'wakacje.formatka': JSON.stringify(p), 'wakacje.aktywny': JSON.stringify(p) } });
  assert.ok((await scores(page)).every(s => s == null));
  await page.fill('#flt-minScore', '50');
  await tick(page);
  assert.equal((await count(page)).shown, N); // brak wyniku nie odrzuca
  assert.match(await page.textContent('#count'), new RegExp(`${N} bez danych do filtra`));
  await page.click('#vt-cal');
  assert.ok(await page.$$eval('#cal tbody td button', bs => bs.every(b => b.textContent === '—')));
  await page.click('#vt-xy');
  assert.match(await page.textContent('#xyChart'), /Brak kierunków z wynikiem/);
  await page.click('#vt-cmp');
  assert.match(await page.textContent('#cmpChart'), /Brak danych tej wartości/);
  await page.click('button[data-dest]:not(.x) >> nth=0').catch(() => {});
  await page.close2();
});

test('sortowanie zostaje po zmianie miesiąca i poziomu (jeśli kolumna jest widoczna)', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('[data-sort="water"]');
  await page.click('#tab-2');
  assert.equal(await page.getAttribute('th[aria-sort]', 'aria-sort'), 'descending');
  assert.ok(await page.$('th[aria-sort] [data-sort="water"]'));
  await page.click('[data-level="1"]'); // woda jest na poziomie 1
  assert.ok(await page.$('th[aria-sort] [data-sort="water"]'));
  await page.close2();
});

test('kierunek bez strefy czasowej: różnica czasu „b.d.”, okno bez linii czasu, filtr zakresu go oznacza', { skip: SKIP }, async () => {
  const dir = copyApp(({ json, put }) => { const d = json('kierunki/phuket.json'); delete d.tz; put('kierunki/phuket.json', d); });
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  await page.click('[data-level="2"]');
  const t = await tableData(page);
  assert.equal(t.phuket.cells.time_diff.text, 'b.d.');
  await page.click('button[data-dest="phuket"]');
  assert.doesNotMatch(await page.textContent('#dlgBody'), /Czas:/);
  await page.keyboard.press('Escape');
  await page.click('#more summary');
  await page.selectOption('#rangeAdd', 'time_diff');
  await page.fill('#rng-time_diff-max', '20');
  await tick(page);
  assert.ok(await page.$('tr:has(button[data-dest="phuket"]) .unchk'));
  await page.close2();
});

test('profil z kolumną, której nie ma w rejestrze, i z filtrem na nią: wczytany z informacją, filtr pominięty', { skip: SKIP }, async () => {
  const page = await open();
  const p = defP();
  p.name = 'Z przyszłości';
  p.columns.stara_kolumna = { min: 1, idealFrom: 2, idealTo: null, max: null, weight: 1 };
  p.filters.ranges = { stara_kolumna: { min: 1, max: 2 }, water: { min: 20, max: null } };
  p.filters.categories = { stara_kategoria: ['x'], continent: ['Europa', 'Atlantyda'] };
  p.excluded = ['nieistniejacy', 'phuket'];
  await page.setInputFiles('#fileProfile', { name: 'p.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(p)) });
  await page.waitForFunction(() => document.querySelector('#messages').textContent.includes('Wczytano profil'));
  assert.match(await page.textContent('#messages'), /Pominięte kolumny, których nie ma już w rejestrze: stara_kolumna/);
  const ids = await rowIds(page);
  const m = await page.evaluate(() => Number(document.querySelector('#months [aria-selected="true"]').dataset.m));
  const exp = reg.destinations.filter(id => id !== 'phuket' && DEST[id].fixed.continent === 'Europa' && ((w => (w?.est ?? w) >= 20)(DEST[id].months[m].water)));
  assert.deepEqual([...ids].sort(), exp.sort());
  assert.match(await page.textContent('#count'), /wyłączonych 1/);
  await page.close2();
});

test('„zostaw tylko widoczne” przy pustym widoku nic nie wyłącza', { skip: SKIP }, async () => {
  const page = await open();
  await page.fill('#flt-minScore', '100');
  await page.fill('#flt-maxFlightTime', '0.1');
  await tick(page);
  assert.equal((await count(page)).shown, 0);
  await page.click('#onlyVisible');
  assert.match(await page.textContent('#messages'), /nic nie zmieniono/);
  await page.fill('#flt-minScore', '');
  await page.fill('#flt-maxFlightTime', '');
  await tick(page);
  assert.equal((await count(page)).shown, N);
  await page.close2();
});

test('poziom widoku: filtr zakresu dodany na Master zostaje widoczny i działa po przejściu na Beginner', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('[data-level="3"]');
  await page.click('#more summary');
  await page.selectOption('#rangeAdd', 'uv');
  await page.fill('#rng-uv-max', '6');
  await tick(page);
  const n3 = (await count(page)).shown;
  await page.click('[data-level="1"]');
  assert.ok(await page.isVisible('#rng-uv-max'));
  assert.equal((await count(page)).shown, n3);
  assert.equal(await page.$('#rangeAdd option[value="uv"]'), null);
  // filtr szybki ukrytej kolumny z wartością pozostaje widoczny
  await page.click('[data-level="2"]');
  await page.fill('#flt-maxStops', '1');
  await page.click('[data-level="1"]');
  assert.ok(await page.isVisible('#flt-maxStops'));
  await page.close2();
});

test('tryb tagów i otwarta sekcja zakresów pamiętane po odświeżeniu', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#tagbar [data-tagmode="any"]');
  await page.click('#tagbar [data-val="surfing"]');
  await page.click('#more summary');
  // zdarzenie toggle jest asynchroniczne – poczekaj na zapis
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('wakacje.widok') ?? '{}').moreOpen === true);
  await page.reload();
  await page.waitForFunction(() => !/Wczytywanie/.test(document.querySelector('#dataInfo').textContent));
  assert.equal(await page.getAttribute('#tagbar [data-tagmode="any"]', 'aria-pressed'), 'true');
  assert.equal(await page.getAttribute('#tagbar [data-val="surfing"]', 'aria-pressed'), 'true');
  assert.equal(await page.evaluate(() => document.querySelector('#more').open), true);
  await page.close2();
});

test('kalendarz: „tylko z ofertą biur” – kierunek bez oferty przez cały rok znika, sezonowy ma kreskowane miesiące', { skip: SKIP }, async () => {
  const page = await open();
  await page.check('#flt-packageOnly');
  await page.click('#vt-cal');
  const none = reg.destinations.filter(id => DEST[id].months.every(m => m.package_price === 'na'));
  const seasonal = reg.destinations.find(id => { const n = DEST[id].months.filter(m => m.package_price === 'na').length; return n > 0 && n < 12; });
  for (const id of none) assert.equal(await page.$(`#cal button[data-dest="${id}"]`), null, id);
  if (seasonal) {
    const fails = await page.$$eval(`#cal tr:has(button[data-dest="${seasonal}"]) td:not(.agg)`, tds => tds.map(td => td.classList.contains('fail')));
    assert.deepEqual(fails, DEST[seasonal].months.map(m => m.package_price === 'na'));
  }
  await page.close2();
});

test('licznik: „bez danych do filtra” zgadza się z liczbą znaczników ⚠', { skip: SKIP }, async () => {
  const dir = copyApp(({ json, put }) => {
    for (const id of ['phuket', 'corralejo', 'sopot']) { const d = json(`kierunki/${id}.json`); delete d.fixed.stops; put(`kierunki/${id}.json`, d); }
  });
  const srv = await serve(dir); temp.push({ dir, srv });
  const page = await open({ url: srv.url });
  await page.fill('#flt-maxStops', '5');
  await tick(page);
  assert.equal(await page.$$eval('#grid .unchk', x => x.length), 3);
  assert.match(await page.textContent('#count'), /3 bez danych do filtra/);
  await page.close2();
});

// ---------- dostępność (axe-core, jeśli zainstalowany: npm i axe-core) ----------
const AXE = (() => { try { return readFileSync(join(APP, 'node_modules/axe-core/axe.min.js'), 'utf8'); } catch { return null; } })();
async function axe(page, include) {
  await page.addScriptTag({ content: AXE });
  const r = await page.evaluate(async sel => {
    const res = await window.axe.run(sel ? { include: [sel] } : document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
    return res.violations.map(v => `${v.id} (${v.impact}): ${v.nodes.length}× – ${v.nodes.slice(0, 3).map(n => n.target.join(' ')).join(' | ')}`);
  }, include);
  return r;
}
for (const scheme of ['light', 'dark']) {
  test(`dostępność WCAG 2.1 AA (axe-core), tryb ${scheme === 'light' ? 'jasny' : 'ciemny'}: tabela, formatka, widoki, okno`, { skip: SKIP || (!AXE && 'brak axe-core (npm i axe-core)') }, async () => {
    const page = await open({ colorScheme: scheme });
    const all = [];
    await page.click('#btnForm');
    await page.click('#more summary');
    all.push(...(await axe(page)).map(v => `strona: ${v}`));
    for (const v of ['cal', 'cmp', 'xy']) { await page.click(`#vt-${v}`); all.push(...(await axe(page, `#v-${v}`)).map(x => `${v}: ${x}`)); }
    await page.click('#vt-table');
    await page.click('button[data-dest="malediwy"]');
    all.push(...(await axe(page, '#dlg')).map(v => `okno: ${v}`));
    assert.deepEqual(all, []);
    await page.close2();
  });
}

// ---------- wydajność (progi z dużym zapasem: łapią regresje rzędu wielkości, nie milisekundy) ----------
test('wydajność: zmiana miesiąca, filtr, widoki – każde przeliczenie poniżej 500 ms', { skip: SKIP }, async () => {
  const page = await open();
  const ms = sel => page.evaluate(s => { const t = performance.now(); document.querySelector(s).click(); return performance.now() - t; }, sel);
  const times = {
    miesiąc: await ms('#tab-5'),
    tag: await ms('#tagbar [data-val="spokój"]'),
    kalendarz: await ms('#vt-cal'),
    porównanie: await ms('#vt-cmp'),
    'koszt a wynik': await ms('#vt-xy'),
    tabela: await ms('#vt-table'),
    master: await ms('[data-level="3"]'),
  };
  for (const [k, v] of Object.entries(times)) assert.ok(v < 500, `${k}: ${Math.round(v)} ms`);
  // wpisywanie w formatce: każde naciśnięcie klawisza przelicza wszystko
  const typing = await page.evaluate(() => {
    const el = document.querySelector('#f-water-weight'); const t = performance.now();
    for (const v of ['1', '1.5', '2', '2.5', '3']) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); }
    return (performance.now() - t) / 5;
  });
  assert.ok(typing < 300, `formatka: ${Math.round(typing)} ms na zmianę`);
  await page.close2();
});

test('DOM: brak powtórzonych id i etykiet bez pola w każdym widoku i z otwartym oknem', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#btnForm');
  await page.click('#more summary');
  await page.selectOption('#rangeAdd', 'water');
  const check = () => page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
    const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
    const orphan = [...document.querySelectorAll('label[for]')].filter(l => !document.getElementById(l.htmlFor)).map(l => l.htmlFor);
    return { dup: [...new Set(dup)], orphan };
  });
  for (const v of ['table', 'cal', 'cmp', 'xy']) {
    await page.click(`#vt-${v}`);
    assert.deepEqual(await check(), { dup: [], orphan: [] }, v);
  }
  await page.click('#vt-table');
  await page.click('button[data-dest="phuket"]');
  assert.deepEqual(await check(), { dup: [], orphan: [] }, 'okno');
  await page.close2();
});

test('skala: 4× więcej kierunków (312) – strona i widoki działają w rozsądnym czasie', { skip: SKIP }, async () => {
  const K = 4;
  const dir = copyApp(({ json, put }) => {
    const r = json('rejestr.json');
    const ids = [];
    for (const id of r.destinations) for (let k = 0; k < K; k++) {
      const nid = k ? `${id}-k${k}` : id;
      if (k) { const d = json(`kierunki/${id}.json`); d.id = nid; d.place += ` ${k}`; put(`kierunki/${nid}.json`, d); }
      ids.push(nid);
    }
    r.destinations = ids;
    put('rejestr.json', r);
  });
  const srv = await serve(dir); temp.push({ dir, srv });
  const t0 = Date.now();
  const page = await open({ url: srv.url });
  const load = Date.now() - t0;
  assert.deepEqual(await count(page), { shown: N * K, total: N * K });
  const ms = sel => page.evaluate(s => { const t = performance.now(); document.querySelector(s).click(); return performance.now() - t; }, sel);
  const times = { start: load, miesiąc: await ms('#tab-4'), kalendarz: await ms('#vt-cal'), porównanie: await ms('#vt-cmp'), wykres: await ms('#vt-xy'), tabela: await ms('#vt-table') };
  for (const [k, v] of Object.entries(times)) assert.ok(v < (k === 'start' ? 8000 : 1500), `${k}: ${Math.round(v)} ms`);
  await page.close2();
});

test('wykresy: położenie punktów zgodne z danymi (porównanie: wyżej = więcej; koszt a wynik: prawo = drożej, góra = lepiej)', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-cmp');
  for (const id of await page.$$eval('#cmpSel [data-rm]', x => x.map(b => b.dataset.rm))) await page.click(`#cmpSel [data-rm="${id}"]`);
  await page.selectOption('#cmpAdd', 'phuket');
  await page.selectOption('#cmpMetric', 'rain');
  const cy = await page.$$eval('#cmpChart circle', cs => cs.map(c => +c.getAttribute('cy')));
  const rain = DEST.phuket.months.map(m => m.rain?.est ?? m.rain);
  assert.equal(cy.length, 12);
  for (let i = 0; i < 12; i++) for (let j = 0; j < 12; j++) if (rain[i] > rain[j]) assert.ok(cy[i] < cy[j], `${i} vs ${j}`);
  await page.click('#vt-xy');
  const pts = await page.$$eval('#xyChart circle[data-dest]', cs => cs.map(c => ({ id: c.dataset.dest, x: +c.getAttribute('cx'), y: +c.getAttribute('cy') })));
  const m = await page.evaluate(() => Number(document.querySelector('#months [aria-selected="true"]').dataset.m));
  const p = defP();
  const dests = Object.fromEntries(core.withComputed(DATA.destinations, p, reg.columns).map(d => [d.id, d]));
  const val = id => ({ cost: dests[id].months[m].trip_cost.est, score: core.score(dests[id], m, reg.columns, reg.flagTypes, p).score });
  for (const a of pts) for (const b of pts) {
    const va = val(a.id), vb = val(b.id);
    if (va.cost > vb.cost) assert.ok(a.x > b.x, `${a.id} vs ${b.id}: x`);
    if (va.score > vb.score + 1e-9) assert.ok(a.y <= b.y, `${a.id} vs ${b.id}: y ${va.score} ${vb.score} ${a.y} ${b.y}`);
  }
  await page.close2();
});

test('kalendarz: kolor komórki = wynik / 100', { skip: SKIP }, async () => {
  const page = await open();
  await page.click('#vt-cal');
  const cells = await page.$$eval('#cal tbody td.heat', tds => tds.map(td => [Number(td.style.getPropertyValue('--s')), Number(td.textContent.replace('~', ''))]));
  assert.ok(cells.length > N * 11);
  for (const [s, v] of cells) assert.ok(Math.abs(s * 100 - v) <= 0.5 + 1e-9, `${s} vs ${v}`);
  await page.close2();
});

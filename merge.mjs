// Dołącza wyniki researchu: każdy kierunek to plik kierunki/<id>.json, a rejestr.json trzyma kolumny, typy flag i listę id.
// Kierunek:  node merge.mjs <plik>.json                   zapisuje kierunki/<id>.json (nowy id trafia do rejestru); wypisuje, co się zmieniło
// Kolumna:   node merge.mjs research/kolumna-<id>.json   ustawia tylko tę kolumnę w podanych kierunkach
// Usunięcie: node merge.mjs --drop <id kolumny>          usuwa dane kolumny, którą już skreślono z rejestru
// Profil:    node merge.mjs --profile                    zapisuje profil-domyslny.json z wartości domyślnych rejestru
// --dry przy każdym poleceniu: pokazuje zmiany bez zapisu.
// Gdy wynik ma nowe błędy struktury, nic nie jest zapisywane.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { isDeepStrictEqual as same } from 'node:util';
import { validateData, registryIds, assemble, isObj, defaultProfile, MONTHS, DEST_ID } from './core.js';

const REG = new URL('./rejestr.json', import.meta.url);
const PROFILE = new URL('./profil-domyslny.json', import.meta.url);
const destFile = id => new URL(`./kierunki/${id}.json`, import.meta.url);
const fail = msg => { console.error(msg); process.exit(1); };
const json = x => JSON.stringify(x, null, 2) + '\n';
const show = v => { const s = v === undefined ? '—' : JSON.stringify(v); return s.length > 60 ? s.slice(0, 57) + '…' : s; };
const shortName = url => decodeURIComponent(new URL(url).pathname.split('/').slice(-2).join('/'));

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const args = argv.filter(a => a !== '--dry');
if (!args.length) fail('Użycie: node merge.mjs <plik>.json [...]  |  --drop <id kolumny>  |  --profile   (opcjonalnie --dry)');

// Odpowiedź LLM bywa owinięta w blok ```json … ``` albo poprzedzona tekstem.
function readJson(file) {
  let text;
  try { text = readFileSync(file, 'utf8').trim(); } catch (e) { fail(`${file}: nie można odczytać pliku (${e.code ?? e.message}).`); }
  const candidates = [text];
  const fence = text.match(/```(?:json)?[ \t]*\r?\n([\s\S]*?)```/i);
  if (fence) candidates.push(fence[1]);
  const a = text.indexOf('{'), b = text.lastIndexOf('}');
  if (a >= 0 && b > a) candidates.push(text.slice(a, b + 1));
  let first;
  for (const c of candidates) {
    try { return JSON.parse(c); } catch (e) { first ??= e; }
  }
  fail(`${file}: niepoprawny JSON (${first.message}).`);
}

const reg = (() => { try { return JSON.parse(readFileSync(REG, 'utf8')); } catch (e) { fail(`rejestr.json: ${e.code === 'ENOENT' ? 'brak pliku' : `niepoprawny JSON (${e.message})`}.`); } })();
if (!isObj(reg) || !Array.isArray(reg.columns) || !Array.isArray(reg.flagTypes)) fail('rejestr.json: zła struktura (brak columns lub flagTypes).');
const listed = registryIds(reg);
const loaded = listed.ids.map(id => {
  if (!existsSync(destFile(id))) return { id, error: 'brak pliku.' };
  try { return { id, value: JSON.parse(readFileSync(destFile(id), 'utf8')) }; } catch (e) { return { id, error: `niepoprawny JSON (${e.message}).` }; }
});
const { data, errs: fileErrs } = assemble(reg, loaded);
const allErrors = () => [...listed.errs, ...fileErrs, ...validateData(data)];

// Błędy jako multizbiór: drugi identyczny błąd też jest nowy.
const tally = errs => errs.reduce((m, e) => m.set(e, (m.get(e) ?? 0) + 1), new Map());
const before = tally(allErrors());
const touched = new Set(); // id kierunków do zapisu
let regChanged = false;

// Co zmienia nadpisanie kierunku: pola stałe, kolumny miesięczne (w ilu miesiącach), reszta pól.
function diffDest(a, b) {
  const out = [];
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (k === 'fixed') {
      const fa = isObj(a.fixed) ? a.fixed : {}, fb = isObj(b.fixed) ? b.fixed : {};
      for (const c of new Set([...Object.keys(fa), ...Object.keys(fb)]))
        if (!same(fa[c], fb[c])) out.push(`stałe ${c}: ${show(fa[c])} → ${show(fb[c])}`);
    } else if (k === 'months') {
      const ma = Array.isArray(a.months) ? a.months : [], mb = Array.isArray(b.months) ? b.months : [];
      const keys = new Set([...ma, ...mb].filter(isObj).flatMap(Object.keys));
      for (const c of keys) {
        const idx = MONTHS.map((_, i) => i).filter(i => !same(ma[i]?.[c], mb[i]?.[c]));
        if (idx.length) out.push(`${c}: zmienione w ${idx.length} mies. (${idx.map(i => MONTHS[i].slice(0, 3).toLowerCase()).join(', ')})`);
      }
    } else if (!same(a[k], b[k])) {
      out.push(k === 'sources' ? `sources: zmienione (${a.sources?.length ?? 0} → ${b.sources?.length ?? 0} pozycji)`
        : k === 'notes' ? 'notes: zmienione' : `${k}: ${show(a[k])} → ${show(b[k])}`);
    }
  }
  return out;
}

if (args[0] === '--drop') {
  const id = args[1];
  if (!id) fail('Podaj id kolumny: node merge.mjs --drop <id>');
  if (data.columns.some(c => c?.id === id)) fail(`Kolumna "${id}" jest nadal w rejestrze; najpierw usuń jej wpis z columns.`);
  let n = 0;
  for (const d of data.destinations) {
    let k = 0;
    if (isObj(d.fixed) && id in d.fixed) { delete d.fixed[id]; k++; }
    for (const m of Array.isArray(d.months) ? d.months : []) if (isObj(m) && id in m) { delete m[id]; k++; }
    if (k) touched.add(d.id);
    n += k;
  }
  console.log(`Usunięto ${n} wartości kolumny ${id}.`);
} else if (args[0] === '--profile') {
  const errs = validateData({ ...reg, destinations: [] });
  if (errs.length) fail(`Rejestr ma błędy, profil nie zapisany:\n- ${errs.join('\n- ')}`);
  const text = json(defaultProfile(reg.columns));
  const old = existsSync(PROFILE) ? readFileSync(PROFILE, 'utf8') : null;
  console.log(old === text ? 'profil-domyslny.json jest aktualny.' : 'profil-domyslny.json: zaktualizowany według rejestru.');
  if (!dry && old !== text) writeFileSync(PROFILE, text);
  process.exit(0);
} else {
  for (const file of args) {
    const input = readJson(file);
    if (!isObj(input)) fail(`${file}: oczekiwany obiekt JSON.`);
    if ('column' in input) {
      const col = data.columns.find(c => c?.id === input.column);
      if (!col) fail(`${file}: kolumny "${input.column}" nie ma w rejestrze.`);
      if (col.type === 'flags') fail(`${file}: flag nie uzupełnia się trybem kolumny; popraw je w pliku kierunku.`);
      if (!isObj(input.values)) fail(`${file}: brak obiektu "values".`);
      let changed = 0;
      for (const [destId, value] of Object.entries(input.values)) {
        const dest = data.destinations.find(d => d.id === destId);
        if (!dest) fail(`${file}: nieznany kierunek "${destId}".`);
        if (col.scope === 'month' && (!Array.isArray(value) || value.length !== 12))
          fail(`${file}, ${destId}: kolumna miesięczna wymaga listy 12 wartości.`);
        if (col.scope === 'fixed') {
          if (dest.fixed !== undefined && !isObj(dest.fixed)) fail(`${file}, ${destId}: pole fixed nie jest obiektem.`);
          if (!same(dest.fixed?.[col.id], value)) changed++;
          (dest.fixed ??= {})[col.id] = value;
        } else {
          if (!Array.isArray(dest.months) || dest.months.length !== 12 || !dest.months.every(isObj))
            fail(`${file}, ${destId}: kierunek nie ma 12 miesięcy jako obiektów; popraw go przed uzupełnianiem kolumny.`);
          value.forEach((v, i) => { if (!same(dest.months[i][col.id], v)) changed++; dest.months[i][col.id] = v; });
        }
        touched.add(destId);
      }
      console.log(`${file}: kolumna ${col.id} w ${Object.keys(input.values).length} kierunkach, zmienionych wartości: ${changed}.`);
    } else if (typeof input.id === 'string' && input.id) {
      if (!DEST_ID.test(input.id)) fail(`${file}: id "${input.id}" musi składać się z małych liter, cyfr i -.`);
      const i = data.destinations.findIndex(d => d.id === input.id);
      if (i >= 0) {
        const diff = diffDest(data.destinations[i], input);
        data.destinations[i] = input;
        console.log(`${file}: kierunek ${input.id} nadpisany${diff.length ? ':\n  ' + diff.join('\n  ') : ' (bez zmian).'}`);
      } else {
        if (reg.destinations.includes(input.id)) fail(`${file}: kierunek ${input.id} jest w rejestrze, ale jego plik ma błąd; popraw lub usuń kierunki/${input.id}.json ręcznie.`);
        data.destinations.push(input);
        reg.destinations.push(input.id);
        regChanged = true;
        console.log(`${file}: kierunek ${input.id} dopisany.`);
      }
      touched.add(input.id);
    } else {
      fail(`${file}: to ani kierunek (brak "id"), ani kolumna (brak "column").`);
    }
  }
}

const left = new Map(before);
const added = allErrors().filter(e => {
  const n = left.get(e) ?? 0;
  if (n > 0) { left.set(e, n - 1); return false; }
  return true;
});
if (added.length) fail(`Nic nie zapisano, bo wynik ma nowe błędy struktury:\n- ${added.join('\n- ')}`);

const writes = new Map(); // URL pliku → treść
for (const id of touched) writes.set(destFile(id).href, json(data.destinations.find(d => d.id === id)));
if (regChanged) writes.set(REG.href, json(reg));
const changedFiles = [...writes].filter(([url, text]) => !existsSync(new URL(url)) || readFileSync(new URL(url), 'utf8') !== text);
if (dry) {
  console.log(`--dry: nic nie zapisano. Zmieniłyby się: ${changedFiles.map(([u]) => shortName(u)).join(', ') || 'nic'}.`);
} else {
  for (const [url, text] of changedFiles) {
    mkdirSync(new URL('.', url), { recursive: true });
    writeFileSync(new URL(url), text);
  }
  console.log(changedFiles.length ? `Zapisano: ${changedFiles.map(([u]) => shortName(u)).join(', ')}.` : 'Bez zmian w plikach.');
}

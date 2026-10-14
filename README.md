# Wyszukiwarka kierunków wakacyjnych

Statyczna strona: `index.html` czyta `rejestr.json` i pliki kierunków z `kierunki/`, i liczy wynik w przeglądarce. Bez backendu i kont.

## Uruchomienie

W tym folderze:

```
python3 -m http.server
```

i wejdź na http://localhost:8000. Otwarcie pliku z dysku (`file://`) nie działa, bo przeglądarka blokuje odczyt JSON. Na darmowym hostingu (GitHub Pages, Netlify Drop, Cloudflare Pages) wystarczy wrzucić cały folder.

## GitHub Pages

1. Utwórz repozytorium na GitHubie (może być prywatne tylko na płatnym planie; strona Pages z repozytorium publicznego jest publiczna).
2. Wrzuć zawartość tego folderu do gałęzi `main`, razem z ukrytymi `.github/`, `.nojekyll` i `.gitignore`: `git init`, `git add .`, `git commit`, `git push`. Przy wrzucaniu przez przeglądarkę („Add file → Upload files”) przeciągnij folder `.github` osobno, jeśli system go ukrywa.
3. W repozytorium: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Każdy push do `main` uruchamia `.github/workflows/pages.yml`. Najpierw idą testy (`node --test test.mjs`), a strona publikuje się tylko wtedy, gdy przejdą. Na stronę trafiają tylko `index.html`, `core.js`, `rejestr.json`, `profil-domyslny.json` i `kierunki/`; notatki z researchu i skrypty zostają w repozytorium. Adres: `https://<użytkownik>.github.io/<repozytorium>/` (zakładka Actions, krok „deploy”).

Bez Actions: **Source: Deploy from a branch**, gałąź `main`, folder `/ (root)`. Wtedy publikuje się cały folder, bez testów.

Zmiana danych: edytuj `kierunki/<id>.json` (albo dodaj kierunek przez `merge.mjs`), sprawdź lokalnie `node --test test.mjs` i zrób push.

## Pliki

| Plik | Rola |
| --- | --- |
| `index.html` | Strona: zakładki miesięcy, tabela, sortowanie, filtry, formatka, profile (pobierz, wczytaj, przywróć domyślne), podgląd obliczenia, widok kierunku |
| `core.js` | Punktacja i walidacja (bez DOM); używa jej strona i testy |
| `rejestr.json` | Wersja schematu (`version`), rejestr kolumn (`columns`), typy flag (`flagTypes`), lista id kierunków (`destinations`, w kolejności wyświetlania) |
| `kierunki/<id>.json` | Jeden plik na kierunek; nazwa pliku = `id` w środku. Strona wczytuje tylko kierunki z listy w rejestrze; brakujący lub zepsuty plik jest pomijany i zgłaszany jako błąd danych |
| `profil-domyslny.json` | Profil z wartościami domyślnymi z rejestru, generowany przez `node merge.mjs --profile` (test pilnuje zgodności) |
| `research-prompt.md` | Prompty: research kierunku, przebieg sprawdzający, nowa kolumna |
| `merge.mjs` | `node merge.mjs <plik>.json` sprawdza wynik researchu kierunku, zapisuje go jako `kierunki/<id>.json` (nowe id dopisuje do rejestru) i wypisuje zmienione pola; z plikiem `research/kolumna-<id>.json` ustawia jedną kolumnę w podanych kierunkach; `--drop <id>` usuwa dane kolumny skreślonej z rejestru; `--profile` odświeża `profil-domyslny.json`; `--dry` pokazuje zmiany bez zapisu. Gdy wynik ma nowe błędy struktury, nic nie zapisuje |
| `research/` | Notatki z researchu (`<id>-notatki.md`) i wyniki kolumnowe (`kolumna-<id>.json`), materiał roboczy; `pilotaz.md`: czas, koszt i wnioski z pilotażu |
| `test.mjs` | `node --test test.mjs`: testy punktacji, profilu, struktury danych i `merge.mjs` |

## Format danych

Wartość w `fixed` lub w miesiącu:

- zwykła: `31.2`, `4`, `"H"`
- szacunek: `{"est": 31.2}`
- nie dotyczy: `"na"`: w kolumnie niepogodowej ocena 0 (np. plaże bez morza); w kolumnie pogodowej (`weather: true`, np. woda bez morza) kolumna jest pomijana w wyniku, pokryciu i sezonie globalnym
- brak danych: `null` albo brak klucza (kolumna pomijana, wynik prowizoryczny)
- wartość błędna (zły typ, poza zakresem `valid`, ułamek w kolumnie `integer`, skala spoza 1–5): trafia na listę błędów i liczy się jak brak danych

Flagi miesiąca: lista `{"type": "<id z flagTypes>", "level": 1–3, "note": "…"}` w każdej kolumnie typu `flags`. Do kary, filtra „ukryj z flagą poziomu 3” i sortowania liczą się tylko flagi znanego typu z poziomem 1–3; kąpielowe tylko przy włączonych flagach kąpielowych.

Kolumna w rejestrze: `id` (małe litery, cyfry, `_`), `name`, `unit`, `type` (`number` | `scale` | `hml` | `flags`), `scope` (`month` | `fixed`), `group`, `weather` (wchodzi do globalnego sezonu), `valid` (zakres dla liczb), `integer` (opcjonalnie, `true` = tylko liczby całkowite), `definition` (instrukcja dla LLM), `default` (formatka: `min`, `idealFrom`, `idealTo`, `max`, `weight`). Nowa kolumna: dopisz wpis z `weight: 0`, `node merge.mjs --profile`, potem Prompt C.

## Profil

`name`, `columns` (formatka per id kolumny), `flagPenalty` (% za poziom flagi), `swimFlags` (czy flagi kąpielowe karzą), `seasonThresholds` (`low` = próg M, `high` = próg H), `filters` (`hideLevel3`, `maxFlightTime`, `maxStops`, `minCoverage` w %). Kierunek bez danych do filtra czasu lotu lub przesiadek nie jest ukrywany, tylko oznaczony ⚠; „pokrycie od” ukrywa kierunki z mniejszym pokryciem danych. Sezon globalny przy pokryciu danych pogodowych < 100% jest oznaczony „~”. Bieżąca formatka (także z błędami) i ostatnia poprawna wersja, z której liczone są wyniki, są pamiętane w przeglądarce; plik zmienia się tylko przy „Pobierz profil”. Kolumna albo ustawienie, którego nie ma w profilu, dostaje wartości domyślne (strona o tym informuje); wszystko, co w pliku jest, musi być poprawne, inaczej profil nie jest wczytywany. Sezon globalny porównuje wynik z progami po zaokrągleniu do 0,1, tak jak jest pokazywany.

## Dodanie kierunku

1. Prompt A z `research-prompt.md` + `rejestr.json` → zapisz wynik jako `kierunki/<id>.json` i notatki jako `research/<id>-notatki.md`.
2. `node merge.mjs kierunki/<id>.json` (sprawdza strukturę, formatuje plik i dopisuje id do rejestru; przy błędach nic nie zapisuje, popraw plik i uruchom ponownie).
3. `node --test test.mjs` (sprawdza między innymi strukturę danych i zgodność `kierunki/` z rejestrem), potem odśwież stronę.

Ręczna poprawka kierunku: edytuj `kierunki/<id>.json` i uruchom `node merge.mjs kierunki/<id>.json`, żeby ją sprawdzić.

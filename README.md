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
4. Każdy push do `main` uruchamia `.github/workflows/pages.yml`. Najpierw idą wszystkie testy (logika, dane, `merge.mjs` i strona w przeglądarce Chromium), a strona publikuje się tylko wtedy, gdy przejdą. Na stronę trafiają tylko `index.html`, `core.js`, `rejestr.json`, `profil-domyslny.json` i `kierunki/`; notatki z researchu i skrypty zostają w repozytorium. Adres: `https://<użytkownik>.github.io/<repozytorium>/` (zakładka Actions, krok „deploy”).

Bez Actions: **Source: Deploy from a branch**, gałąź `main`, folder `/ (root)`. Wtedy publikuje się cały folder, bez testów.

Zmiana danych: edytuj `kierunki/<id>.json` (albo dodaj kierunek przez `merge.mjs`), sprawdź lokalnie `npm test` (albo `node --test test.mjs test-core.mjs test-data.mjs`) i zrób push.

## Pliki

| Plik | Rola |
| --- | --- |
| `index.html` | Strona: zakładki miesięcy, widoki (tabela, kalendarz, porównanie, koszt a wynik), sortowanie, filtry, przełącznik kierunków, formatka, profile (pobierz, wczytaj, przywróć domyślne), podgląd obliczenia, widok kierunku |
| `core.js` | Punktacja i walidacja (bez DOM); używa jej strona i testy |
| `rejestr.json` | Wersja schematu (`version`), rejestr kolumn (`columns`), typy flag (`flagTypes`), lista id kierunków (`destinations`, w kolejności wyświetlania) |
| `kierunki/<id>.json` | Jeden plik na kierunek; nazwa pliku = `id` w środku. Strona wczytuje tylko kierunki z listy w rejestrze; brakujący lub zepsuty plik jest pomijany i zgłaszany jako błąd danych |
| `profil-domyslny.json` | Profil z wartościami domyślnymi z rejestru, generowany przez `node merge.mjs --profile` (test pilnuje zgodności) |
| `research-prompt.md` | Prompty: research kierunku, przebieg sprawdzający, nowa kolumna |
| `merge.mjs` | `node merge.mjs <plik>.json` sprawdza wynik researchu kierunku, zapisuje go jako `kierunki/<id>.json` (nowe id dopisuje do rejestru) i wypisuje zmienione pola; z plikiem `research/kolumna-<id>.json` ustawia jedną kolumnę w podanych kierunkach; `--drop <id>` usuwa dane kolumny skreślonej z rejestru; `--profile` odświeża `profil-domyslny.json`; `--dry` pokazuje zmiany bez zapisu. Gdy wynik ma nowe błędy struktury, nic nie zapisuje |
| `research/` | Notatki z researchu (`<id>-notatki.md`) i wyniki kolumnowe (`kolumna-<id>.json`), materiał roboczy; `pilotaz.md`: czas, koszt i wnioski z pilotażu |
| `test.mjs` | Testy punktacji, profilu, struktury danych, `merge.mjs` i statyczne sprawdzenie strony |
| `test-core.mjs` | Przypadki brzegowe `core.js` (granice zakresów, filtry, kalkulator, strefy czasowe, walidacja) i testy na losowych danych |
| `test-data.mjs` | Wiarygodność danych wszystkich kierunków: kompletność, fizyczny sens wartości (np. dzień ≥ noc, dni deszczowe ≤ dni miesiąca), spójność kolumn, źródła |
| `e2e.mjs` | Strona w przeglądarce (Playwright, Chromium): wszystkie widoki, filtry, profile, zgodność liczb z `core.js`, odporność na złe dane i XSS, telefon, tryb ciemny, dostępność WCAG (axe-core), wydajność |
| `package.json` | Tylko do testów: `npm test` (bez przeglądarki), `npm run test:e2e`, `npm run test:all` |

## Format danych

Wartość w `fixed` lub w miesiącu:

- zwykła: `31.2`, `4`, `"H"`
- szacunek: `{"est": 31.2}`
- nie dotyczy: `"na"`: w kolumnie niepogodowej ocena 0 (np. plaże bez morza); w kolumnie pogodowej (`weather: true`, np. woda bez morza) kolumna jest pomijana w wyniku, pokryciu i sezonie globalnym
- brak danych: `null` albo brak klucza (kolumna pomijana, wynik prowizoryczny)
- wartość błędna (zły typ, poza zakresem `valid`, ułamek w kolumnie `integer`, skala spoza 1–5): trafia na listę błędów i liczy się jak brak danych

Flagi miesiąca: lista `{"type": "<id z flagTypes>", "level": 1–3, "note": "…"}` w każdej kolumnie typu `flags`. Do kary, filtra „ukryj z flagą poziomu 3” i sortowania liczą się tylko flagi znanego typu z poziomem 1–3; kąpielowe tylko przy włączonych flagach kąpielowych.

Kolumny `category` i `tags` (stałe, `scope: "fixed"`) mają w rejestrze listę `values`: wartość `category` to jeden tekst z listy (np. kontynent), wartość `tags` to lista tekstów z listy bez powtórzeń (np. `["ruiny", "dżungla"]`). Nie wchodzą do wyniku; strona robi z nich filtry z przyciskami. Bez `"na"`.

Pola kierunku poza kolumnami: `tz` – strefa czasowa IANA (np. `"Asia/Bangkok"`), z której strona wylicza kolumnę `time_diff` (różnica czasu względem Polski w połowie każdego miesiąca, z czasem letnim po obu stronach); `entryNote` – szczegóły formalności wjazdowych (pokazywane w podpowiedzi kolumny „Formalności wjazdowe” i w widoku kierunku); `costNote` – patrz niżej. Metoda i źródła kolumn kontynent, region, formalności i tagi: `research/kolumny-polozenie-notatki.md`.

Kolumna w rejestrze: `id` (małe litery, cyfry, `_`), `name`, `unit`, `type` (`number` | `scale` | `hml` | `flags` | `category` | `tags`), `values` (tylko `category` i `tags`), `level` (poziom widoku 1–3), `scope` (`month` | `fixed`), `group`, `weather` (wchodzi do globalnego sezonu), `valid` (zakres dla liczb), `integer` (opcjonalnie, `true` = tylko liczby całkowite), `definition` (instrukcja dla LLM), `default` (formatka: `min`, `idealFrom`, `idealTo`, `max`, `weight`). Nowa kolumna: dopisz wpis z `weight: 0`, `node merge.mjs --profile`, potem Prompt C.

## Profil

`name`, `columns` (formatka per id kolumny), `flagPenalty` (% za poziom flagi), `swimFlags` (czy flagi kąpielowe karzą), `seasonThresholds` (`low` = próg M, `high` = próg H), `filters` (`hideLevel3`, `maxFlightTime`, `maxStops`, `minCoverage` w %, `minScore` 0–100, `maxTripCost`, `categories`, `tagMode`, `ranges`, `packageOnly`), `excluded` (lista id kierunków wyłączonych ręcznie). Kierunek bez danych do filtra nie jest ukrywany, tylko oznaczony ⚠; „pokrycie od” ukrywa kierunki z mniejszym pokryciem danych; „wynik od” ukrywa kierunki z wynikiem (po zaokrągleniu, jak w tabeli) niższym od progu.

Poziom widoku (`viewLevel` w profilu, przełącznik Beginner / Advanced / Master w nagłówku): 1 pokazuje tylko kolumny z `level: 1` w rejestrze (temperatura powietrza i wody, słońce, dni deszczowe, flagi, plaże, tagi, koszt wyjazdu, czas lotu, kontynent), 2 dodaje kolumny z `level: 2` (noc, opad, wiatr, sezony, zieleń, zwiedzanie, ceny, przesiadki, transfer, region, formalności, różnica czasu), 3 – wszystkie (także punkt rosy, UV i pokrycie danych). Kolumna bez `level` jest tylko w widoku Master. Poziom zmienia tabelę, formatkę, widok kierunku, listę filtrów zakresu i wartości na wykresach; wynik zawsze liczy wszystkie kolumny z wagą > 0 – formatka wypisuje te ukryte.

Tagi są nad widokiem jako przyciski filtra; tag w tabeli i w widoku kierunku też jest przyciskiem (klik włącza lub wyłącza filtr). Filtry ogólne (tagi i sekcja „Kategorie i zakresy”): `categories` – `{ "<id kolumny category/tags>": [wybrane wartości] }`; przy kolumnie `category` kierunek musi mieć jedną z wybranych wartości, przy `tags` – wszystkie wybrane tagi (`tagMode: "all"`) albo choć jeden (`"any"`). `ranges` – `{ "<id kolumny liczbowej lub skali>": { "min": …, "max": … } }` (puste pole nie ogranicza; „nie dotyczy”/„brak oferty” odrzuca, np. „woda od 24” ukrywa miejsca bez morza). `packageOnly` – tylko kierunki z ofertą wczasów (`package_price`) w wybranym miesiącu. Nowa kolumna `category`/`tags` albo liczbowa sama pojawia się w filtrach. Filtry kolumn, których nie ma już w rejestrze, są przy wczytaniu profilu pomijane.

Przełącznik kierunku (pole wyboru przy nazwie) dopisuje kierunek do `excluded`: znika z tabeli i wykresów. „Pokaż wyłączone” pokazuje je wyszarzone (to ustawienie widoku, nie profilu). „Wyłącz widoczne” wyłącza wszystkie spełniające teraz filtry, „Zostaw tylko widoczne” wyłącza wszystkie pozostałe, „Włącz wszystkie” czyści listę.

Widoki: **Tabela**; **Kalendarz** – wynik każdego kierunku w 12 miesiącach (kolor jak w tabeli; kreskowane miesiące nie spełniają filtrów; pokazane kierunki spełniające filtry w co najmniej jednym miesiącu; sortowanie: wynik w wybranym miesiącu, najlepszy miesiąc, liczba miesięcy z wynikiem ≥ 70, średnia, nazwa); **Porównanie** – linie 12 miesięcy dla 1–6 wybranych kierunków i wybranej wartości (wynik, wynik pogodowy albo dowolna kolumna miesięczna); **Koszt a wynik** – wynik w wybranym miesiącu względem kosztu wyjazdu (albo ceny wczasów, ceny lotu, czasu lotu) dla kierunków z tabeli, z wyróżnionym frontem: kierunkami, których nie przebija żaden tańszy z wyższym wynikiem. Zakładka, wybór do porównania i osie są pamiętane w przeglądarce.

Kalkulator kosztu wyjazdu: `trip` (`adults`, `children` 2–11 lat, `infants` 0–1, `nights`, `mode`: `self` = na własną rękę, `package` = z biurem) i `costs` (`ticketFactor` – mnożnik ceny lotu miesiąca, domyślnie 0,85 = korzystny zakup, ale nie mniej niż cena najtańszego miesiąca kierunku; `infantTicket` w zł, domyślnie 0; `childDaily` – udział dziecka w wydatkach dziennych; `lodging` i `daily` – stawki w zł dla poziomów cen na miejscu 1–5: pokój na noc i dorosły na dzień; `extras` – % od noclegu i wydatków dla zwiedzania 1 i 5, liniowo pomiędzy; `season` – mnożnik noclegu dla sezonu lokalnego miesiąca: `H` 1,25, `M` 1, `L` 0,85). Wydatki dzienne to jedzenie i transport lokalny; wycieczki i atrakcje są w dodatkowych. Kolumna `trip_cost` (tys. zł, szacunek, zaokrąglona do 0,5) jest wyliczana przez stronę dla każdego miesiąca: bilety (dorośli + dzieci) + nocleg (pokoje = dorośli ÷ 2 w górę, najwyżej 4 osoby bez niemowląt na pokój) + wydatki + dodatkowe. Bez ceny lotu albo poziomu cen kolumna jest pusta. Filtr `maxTripCost` („budżet do”, tys. zł). Kolumny z `computed: true` w rejestrze nie wpisuje się w plikach kierunków (walidacja to zgłasza). Tryb „z biurem”: zamiast biletów, noclegu i wydatków liczona jest kolumna `package_price` (wczasy z biurem od, zł/os. za 7 nocy); przy innej liczbie nocy część stała (bilet, najwyżej połowa ceny wczasów, bez ceny lotu 40%) zostaje, a reszta skaluje się z liczbą nocy; dzieci `costs.childPackage` × cena dorosłego (domyślnie 0,6), niemowlęta `costs.infantPackage` zł (domyślnie 300); dodatkowe wydatki jak na własną rękę. Miesiąc bez oferty biur (`package_price` = `"na"`) daje w kolumnie kosztu „brak oferty”, a filtr „budżet do” go ukrywa. Kolumna w rejestrze może mieć `naLabel` – tekst pokazywany zamiast „n/d” (np. „brak oferty”). Metoda i źródła kolumny `package_price`: `research/kolumna-package_price-notatki.md`. Opcjonalne pole kierunku `costNote` (tekst) opisuje istotne koszty, których kalkulator nie liczy (np. transfer hydroplanem na Malediwach): strona oznacza wtedy kwotę znakiem ＋ i pokazuje tekst w podpowiedzi i w widoku kierunku.

Formatka kolumny: `min`, `idealFrom`, `idealTo`, `max` są opcjonalne. W przedziale idealnym ocena 1; między min a ideałem od (i między ideałem do a max) liniowo; poniżej min i powyżej max 0. Strona z jedną wartością (np. sam „ideał od” bez min) to ostra granica: poza nią ocena 0. Strona bez wartości nie ogranicza. Kolumna z wagą > 0 potrzebuje co najmniej jednego pola zakresu. Sezon globalny przy pokryciu danych pogodowych < 100% jest oznaczony „~”. Bieżąca formatka (także z błędami) i ostatnia poprawna wersja, z której liczone są wyniki, są pamiętane w przeglądarce; plik zmienia się tylko przy „Pobierz profil”. Kolumna albo ustawienie, którego nie ma w profilu, dostaje wartości domyślne (strona o tym informuje); wszystko, co w pliku jest, musi być poprawne, inaczej profil nie jest wczytywany. Sezon globalny porównuje wynik z progami po zaokrągleniu do 0,1, tak jak jest pokazywany.

## Testy

```
npm test                      # logika, dane, merge.mjs – bez instalacji czegokolwiek (Node ≥ 18)
npm install && npx playwright install chromium
npm run test:e2e              # strona w przeglądarce (ok. 2–3 min)
```

Testy danych (`test-data.mjs`) to bramka jakości dla nowych kierunków: wartość fizycznie niemożliwa albo niespójna z innymi kolumnami (np. woda „nie dotyczy” przy plażach z oceną) zatrzymuje publikację z listą wszystkich naruszeń. Próg uznany za zbyt ostry zmienia się w teście z komentarzem, dlaczego.

## Dodanie kierunku

1. Prompt A z `research-prompt.md` + `rejestr.json` → zapisz wynik jako `kierunki/<id>.json` i notatki jako `research/<id>-notatki.md`.
2. `node merge.mjs kierunki/<id>.json` (sprawdza strukturę, formatuje plik i dopisuje id do rejestru; przy błędach nic nie zapisuje, popraw plik i uruchom ponownie).
3. `npm test` (struktura, zgodność `kierunki/` z rejestrem i wiarygodność danych), potem odśwież stronę.

Ręczna poprawka kierunku: edytuj `kierunki/<id>.json` i uruchom `node merge.mjs kierunki/<id>.json`, żeby ją sprawdzić.

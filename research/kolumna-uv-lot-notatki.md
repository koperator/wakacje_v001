# Kolumny `uv`, `flight_time`, `stops`: notatki (Prompt C, po doprecyzowaniu definicji)

Sprawdzono: 2026-10-04. Kierunki: `siem-reap`, `corralejo`, `phuket`.
Pliki wynikowe: `research/kolumna-uv.json`, `research/kolumna-flight_time.json`, `research/kolumna-stops.json`. Nie edytowano `data.json` i nie uruchamiano `merge.mjs`.

## Wyniki

| kierunek | UV I–XII | czas lotu | przesiadki | przyjęte połączenie |
|---|---|---|---|---|
| siem-reap | 7 8 9 9 8 8 6 8 8 8 7 7 | 19.4 | 1 | Emirates: WAW–DXB, potem EK370 DXB–(BKK)–SAI |
| corralejo | 5 6 7 8 8 9 9 9 8 7 5 4 | 7.9 | 1 | przez Monachium (MUC) |
| phuket | 8 9 9 9 8 8 7 8 8 8 6 7 | 15.7 | 1 | przez Stambuł (IST), Turkish Airlines |

- **Szacunki (`est`):** brak. Żadne źródło nie podało „11+” ani innej wartości wymagającej przeliczenia.
- **Brak danych (`null`):** brak.

**Zmiana względem pilota (wartości obecnie w `data.json`):**
- UV:
  - Siem Reap: było 9–12, z czego II–IX jako szacunek z „11+”. Teraz 6–9.
  - Corralejo: było 4–11. Teraz 4–9.
  - Phuket: było 8–12, wszystko jako szacunek. Teraz 6–9.
  - Przyczyna: nowa definicja wymaga UV z uwzględnieniem zachmurzenia (all-sky) zamiast UV przy czystym niebie.
- Czas lotu i przesiadki:
  - Siem Reap: 20.1 est / 2 est → 19.4 / 1.
  - Corralejo: 5.8 / 0 → 7.9 / 1, bo lot bezpośredni jest tylko zimowy.
  - Phuket: 15.7 / 1 bez zmian, ale całoroczność połączenia jest teraz potwierdzona.

## UV: źródło i metoda

**Jedno źródło dla wszystkich trzech kierunków i wszystkich 12 miesięcy: BestDateWeather, strony miesięczne** (`<miejsce>-weather-<miesiąc>`). Z każdej strony odczytano zdanie „The average UV index reaches X in <month> …”.

- **Dane:** według metodologii serwisu „The monthly average UV index comes from the Open-Meteo Historical Forecast API (`uv_index`)”.
  - Na każdej stronie miesięcznej: „Updated September 2026 · ERA5 · 10 years”.
  - Na stronach zbiorczych: „ERA5 · Open-Meteo · 10 years (2016–2025)”.
  - To wielolecie, nie pojedynczy rok, więc spełnia zasadę 2.
- **All-sky:** w Open-Meteo zwykły `uv_index` / `uv_index_max` uwzględnia zachmurzenie. Osobna zmienna `uv_index_clear_sky_max` „assumes cloud free conditions” (dokumentacja API). Serwis używa zmiennej bez „clear sky”. Wartości są wyraźnie niższe niż UV przy czystym niebie (weather2travel: 11+), co to potwierdza.
- **Średnia z dziennych maksimów:** serwis nie pisze tego wprost. Wartości 4–9 odpowiadają jednak maksimom południowym; średnia ze wszystkich godzin doby dawałaby ok. 2–4 (patrz „Do przeglądu”).
- **Zaokrąglenie:** strony zbiorcze podają dla jednego miesiąca wartość dziesiętną, zgodną z liczbami całkowitymi ze stron miesięcznych:
  - Phuket I: 7,9 → 8
  - Siem Reap I: 7,3 → 7
  - Fuerteventura VIII: 8,6 → 9

  Etykieta kategorii pozwala też odczytać połówki: „8 · high” to 7,5–7,99, a „8 · very high” to 8,0–8,49.

**Punkt danych dla każdego kierunku:**
- **siem-reap:** 13.36°N 103.86°E, czyli samo miasto.
- **phuket:** 7.88°N 98.39°E, czyli miasto Phuket. To ok. 10 km od plaż zachodniego wybrzeża (Patong/Kata/Karon) na tej samej wyspie, czyli ten sam punkt co stacja pogodowa użyta w pilocie.
- **corralejo:** serwis nie ma strony dla Corralejo (`best-time-to-visit-corralejo` i `corralejo-weather-january` zwróciły 404). Użyto stron „Fuerteventura”: 28.36°N 14.02°W, środek wyspy, ok. 40 km na S od Corralejo (28.73°N 13.87°W).
  - Ta sama wyspa, ten sam reżim pasatu i różnica szerokości 0,37°, czyli 1–2 oczka siatki modelu.
  - Wpisane jako zwykłe wartości, tak jak reszta pogody Corralejo, która pochodzi z lotniska Fuerteventura (ok. 30 km).

**Odrzucone lub tylko kontrolne:**
- **weather2travel** (używany w pilocie): UV przy czystym niebie („11+”), czyli inna miara. Odrzucony.
- **Weather Atlas:**
  - Phuket: tylko „The UV Index retains a high range from 10 to 12 throughout the year”, bez wartości miesięcznych i bez metody. Nieprzydatny.
  - Siem Reap i Corralejo: błąd 403.
- **NASA POWER** (`ALLSKY_SFC_UV_INDEX`) i **bezpośrednie API Open-Meteo:** niedostępne (robots.txt, blokada proxy). Nie ma więc drugiego niezależnego źródła tego samego typu. Według zasady 1 jedno wiarygodne źródło z podaną metodą wystarcza.

**Rozbieżności UV:**
- Z pilotem (weather2travel, clear-sky): np. Phuket I 11 → 8, Siem Reap IV 12 → 9, Corralejo VII 11 → 9. To różnica miary, nie błąd.
- BestDateWeather zgadza się z wartościami kontrolnymi z pilota (Phuket VI = 8, Fuerteventura VII = 9).

## Czas lotu i przesiadki: źródło i metoda

Metryka według definicji:
- typowy czas najszybszego regularnego połączenia z WAW, czyli rozkładowego, sprzedawanego jako sam lot i kursującego co najmniej ok. 6 miesięcy w roku;
- czas z wyszukiwarki (KAYAK: najkrótszy średni czas z N przesiadkami), nie pojedynczy rekord;
- połączenia sezonowe i czartery tylko w notatce.

### Phuket (HKT): 15.7 h, 1 przesiadka

- **KAYAK.pl (WAW–HKT):** „Stambuł (IST) oferuje najkrótszy lot z jedną przesiadką z lotniska Warszawa Chopina do Phuket — podróż w jedną stronę trwa 15 h 42 min”.
- **KAYAK.com** to samo, a dalej Abu Zabi 15 h 46 min i Helsinki 16 h 25 min.
- **Regularność:**
  - Turkish Airlines IST–HKT: 3× w tygodniu przez cały rok (FlightsFrom). Wikipedia podaje to połączenie bez oznaczenia „Seasonal”.
  - WAW–IST: LOT i Turkish Airlines, cały rok (Wikipedia).
  - Połączenie zapasowe o prawie tym samym czasie: Etihad przez AUH (15 h 46 min). AUH–HKT jest w Wikipedii bez oznaczenia sezonowego.
- **Wybór: 15,7 h, 1 przesiadka.** Źródła się zgadzają, więc wartości są zwykłe, bez szacunku.

### Corralejo (FUE): 7.9 h, 1 przesiadka

- **KAYAK.pl (WAW–FUE):** „Monachium (MUC) … najkrótszy średni całkowity czas podróży z jedną przesiadką — 7 h 55 min”, „o 2 h 10 min dłużej niż bezpośredni lot (5 h 45 min)”. Dalej: Zurych średnio 9 h 22 min, Mediolan (MXP) 11 h 04 min.
- **Regularność:**
  - MUC–FUE: Condor 2×, TUI fly 3× i Discover Airlines 1× w tygodniu (ok. 6 lotów tygodniowo). Rozkłady są także na V–VIII (FlightsFrom MUC–FUE i FUE–MUC). Wikipedia nie oznacza tego połączenia jako sezonowe.
  - WAW–MUC: Lufthansa, cały rok.
- **Wybór: 7,9 h, 1 przesiadka.**
- Lot bezpośredni WAW–FUE (5 h 45 min) odrzucony jako sezonowy: kursuje ok. 5 miesięcy (szczegóły niżej).

### Siem Reap (SAI): 19.4 h, 1 przesiadka

- **Połączenia bezpośrednie:** brak, podobnie jak lotów sezonowych i czarterów.
- **Najszybsze regularne połączenie na jednym bilecie:** Emirates WAW–DXB, potem EK370 DXB–BKK–SAI.
  - W Bangkoku samolot tylko ląduje po drodze, bez zmiany samolotu i numeru lotu.
  - EK370 kursuje 3× w tygodniu (wt, czw, sob) od 3.06.2025 (CambodgeMag). FlightsFrom BKK–SAI potwierdza: Emirates 3× w tygodniu, przez cały rok.
  - Przesiadka (zmiana samolotu) jest tylko w Dubaju, więc **1**.
- **Czas:** KAYAK nie ma dla WAW–SAI rozbicia na węzły przesiadkowe. Wszystkie warianty stron „flight-routes” i „loty” WAW–SAI zwróciły 404 albo nie zawierały danych.
  - Jedyna wartość KAYAK (strona „Polska → Siĕm Réab”): „Najkrótsza trasa to Lotnisko Warszawa Chopina (WAW) – Siem Reap (SAI), a średni czas lotu wynosi 19 h 25 min”, czyli **19,4 h**.
  - Sformułowanie szablonu „Bezpośredni lot … trwa zwykle” jest mylące, bo lotów bezpośrednich nie ma; chodzi o średni łączny czas na trasie.
- **Kontrola:**
  - Trip.com: najszybszy lot 19 h 05 min, „1 stop” (DXB), Emirates, wylot WAW 21:25 7.10, przylot SAI 21:30. Przylot zgadza się z rozkładem EK370. To pojedynczy rozkład, nie wartość typowa.
  - momondo.pl: „Najszybszy lot … zajmuje 20 h 05 min”, bez liczby przesiadek. Przykładowe oferty to 21 h 05 min z 2 przesiadkami (SHJ, KUL) i 27 h z 3 przesiadkami.
  - Rome2rio: Emirates, średnio 18 h 42 min. Jakość danych niższa.
- **Wybór: 19,4 h** (KAYAK, czas typowy). Mieści się między pojedynczym najszybszym rozkładem (19,1 h) a „najszybszym” lotem z momondo (20,1 h). Rozbieżność jest w „Do przeglądu”, bez oznaczenia szacunku.
- **Odrzucone: LOT WAW–BKK (lot bezpośredni) + BKK–SAI** (Bangkok Airways 3× dziennie, Cambodia Airways, Thai Airways od 25.10.2026).
  - Według RusTourismNews (8.07.2026) LOT nie ma umowy z Thai i nie sprzedaje biletów łączonych dalej z Bangkoku. To byłaby samodzielna przesiadka na dwóch biletach, a nie jedno połączenie.
  - Wikipedia podaje dla WAW–BKK „resumes 7 October 2026”, czyli w części 2026 była przerwa. Według Pasazer.com od zimy 2026/27 lot kursuje 5–6× w tygodniu, a latem 2027 3×.
  - Teoretyczny czas to ok. 16–17 h (własne wyliczenie z rozkładu LO65 i PG). Patrz „Do przeglądu”.

## Połączenia sezonowe i czartery (tylko do notatek kierunków)

- **Corralejo:** bezpośredni lot WAW–FUE tylko zimą.
  - infoloty.pl: Ryanair 3× w tygodniu (wt, czw, sob) od 27.10.2026 do 21.03.2027, wylot 11:15, przylot 16:00 (5 h 45 min).
  - KAYAK: Wizz Air 2× w tygodniu, 5 h 45 min.
  - Wikipedia (lotnisko FUE): „Wizz Air – Seasonal: … Warsaw–Chopin”.
  - Wikipedia (lotnisko WAW): „Enter Air – Seasonal charter: Fuerteventura” (biura podróży).
  - Połączenie kursuje ok. 5 miesięcy, czyli poniżej progu ok. 6 miesięcy.
- **Phuket:** bezpośredni lot ok. 10 h 10 min istnieje tylko jako czarter.
  - Wikipedia: „LOT Polish Airlines – Seasonal charter: Warsaw–Chopin” (HKT) i „Seasonal charter: Phuket” (WAW).
  - KAYAK wymienia LOT i Neos jako przewoźników bezpośrednich, ze statusem „Niedostępne”. momondo: „Nie ma bezpośrednich lotów”.
  - Air Arabia przez Szardżę jest po stronie HKT oznaczona jako sezonowa („Seasonal: Sharjah”).
- **Siem Reap:** brak połączeń sezonowych i czarterów z Polski.

**Proponowane dopiski do pola `notes` kierunków** (do ręcznego wpisania, `data.json` nie był ruszany):
- **corralejo** (zamiast obecnego zdania „Dojazd: …”): „Dojazd: regularnie z 1 przesiadką, najszybciej przez Monachium (typowo ok. 8 h). Bezpośredni lot WAW–FUE (5 h 45 min) tylko zimą, ok. koniec X – III, 2–3× w tygodniu; poza tym czartery biur podróży.”
- **phuket:** „Dojazd: regularnie z 1 przesiadką, najszybciej przez Stambuł lub Abu Zabi (ok. 15 h 45 min). Lot bezpośredni (ok. 10 h) tylko jako sezonowy czarter LOT w ofercie biur podróży.”
- **siem-reap:** „Dojazd: brak lotów bezpośrednich; najszybciej Emirates przez Dubaj (dalej tym samym samolotem z międzylądowaniem w Bangkoku, 3× w tygodniu), ok. 19–19,5 h.”

## Ceny lotów

Nie dotyczy tego przebiegu: kolumna `flight_price` nie była uzupełniana.

## Pomiar

Liczone ręcznie, możliwy błąd ±2.

- **Wyszukiwania w sieci:** 11.
- **Pobrane strony (WebFetch): 97, w tym 19 nieudanych** (404, 403, robots.txt, strona błędu Google Flights).
  - UV: 50 pobrań, 6 nieudanych. Obejmuje 36 stron miesięcznych BestDateWeather, z czego jedna pobrana dwukrotnie.
  - Loty: 47 pobrań, 13 nieudanych, głównie warianty adresów KAYAK dla SAI.
- **Próby bezpośredniego pobrania przez curl:** 5, wszystkie zablokowane przez proxy (403). Dotyczy BestDateWeather, API Open-Meteo, NASA POWER, Weather Atlas i KAYAK.

## Do przeglądu

1. **UV – metoda BestDateWeather.**
   - All-sky jest potwierdzone pośrednio: zmienna `uv_index` z Open-Meteo, nie wersja clear-sky.
   - To, że wartość miesięczna jest średnią z dziennych maksimów, wynika z wielkości liczb, a nie z opisu serwisu.
   - Opis źródła jest niespójny: strony podają „ERA5”, a metodologia „Open-Meteo Historical Forecast API”.
2. **UV – brak drugiego niezależnego źródła all-sky.** NASA POWER, API Open-Meteo i Weather Atlas były niedostępne albo nie miały wartości miesięcznych.
3. **UV – skoki między miesiącami.** Siem Reap VII = 6 przy VI = 8 i VIII = 8. Phuket XI = 6 przy X = 8 i XII = 7. Możliwy efekt zaokrąglenia i pochmurnych lat w 10-letniej próbie. Warto porównać z innym źródłem all-sky.
4. **UV – Corralejo z punktu dla całej wyspy** (28.36°N 14.02°W, ok. 40 km od Corralejo). Jeśli na północnym cyplu jest więcej chmur pasatowych, latem UV może być o ok. 0,5 niższe.
5. **UV – duży spadek wartości względem pilota** (o 2–4 punkty w porze suchej tropików). To skutek zmiany miary, ale wpływa na ocenę (`idealTo` 8): wszystkie trzy kierunki są teraz blisko progu.
6. **Czas lotu Siem Reap – rozbieżność źródeł:**
   - KAYAK (średnia): 19,4 h
   - Trip.com (pojedynczy rozkład Emirates): 19,1 h
   - momondo („najszybszy”): 20,1 h
   - Rome2rio (średnia Emirates): 18,7 h

   Wybrano KAYAK. KAYAK nie podaje, do ilu przesiadek odnosi się ta wartość.
7. **Przesiadki Siem Reap: 1 (DXB).** EK370 ląduje po drodze w Bangkoku bez zmiany samolotu, więc niektóre wyszukiwarki mogą pokazać „2 stops”. Połączenie kursuje tylko 3× w tygodniu; w pozostałe dni najszybsze opcje mają 2 przesiadki i trwają ok. 20–21 h.
8. **Siem Reap – pominięta samodzielna przesiadka LOT WAW–BKK + BKK–SAI** (ok. 16–17 h, własne wyliczenie). Przyjąłem, że „połączenie kupowane jako sam lot” oznacza jeden bilet. Jeśli dwa osobne bilety mają się liczyć, czas spadłby o ok. 2–3 h (nadal 1 przesiadka). Lot LOT do Bangkoku miał też przerwę w 2026 r. (wznowienie 7.10.2026).
9. **Corralejo – połączenie przez MUC.**
   - MUC–FUE ma tylko ok. 6 lotów tygodniowo, u trzech przewoźników.
   - Nie sprawdzono, które z nich da się kupić na jednym bilecie z odcinkiem WAW–MUC (Discover należy do grupy Lufthansa).
   - Następna opcja to Zurych, 9 h 22 min.
10. **Corralejo: 5,8 h / 0 → 7,9 h / 1.** Zmiana wynika z nowej definicji. Duży wpływ na ranking (`idealTo` 5 h, waga 1).
11. **Przewoźnik lotu bezpośredniego WAW–FUE** (tylko do notatki): KAYAK podaje Wizz Air 2× w tygodniu, infoloty.pl Ryanair 3× w tygodniu, Wikipedia Wizz Air sezonowo i czarter Enter Air.

## Źródła (do dopisania do listy `sources` kierunku)

Pozycje, które są już na liście kierunku (ten sam URL), są oznaczone komentarzem w tekście poniżej. Wystarczy dopisać nowe albo zaktualizować tytuł.

**siem-reap**

```json
[
  {"title": "BestDateWeather: Siem Reap – pogoda miesiąc po miesiącu (12 stron miesięcznych, np. /siem-reap-weather-january); UV all-sky z Open-Meteo, „ERA5 · 10 years (2016–2025)”, 13.36°N 103.86°E", "url": "https://bestdateweather.com/en/best-time-to-visit-siem-reap", "checked": "2026-10-04"},
  {"title": "BestDateWeather: metodologia (UV = Open-Meteo Historical Forecast API, uv_index)", "url": "https://bestdateweather.com/en/methodology", "checked": "2026-10-04"},
  {"title": "Open-Meteo: dokumentacja API (uv_index_max z zachmurzeniem vs uv_index_clear_sky_max)", "url": "https://open-meteo.com/en/docs", "checked": "2026-10-04"},
  {"title": "KAYAK.pl: loty z Polski do Siem Reap – najkrótsza trasa WAW–SAI, średni czas 19 h 25 min", "url": "https://www.kayak.pl/loty/Polska-PL0/Siem-Reab-KHSI", "checked": "2026-10-04"},
  {"title": "Trip.com: Warszawa – Siem Reap (najszybszy lot 19 h 05 min, 1 przesiadka w DXB, Emirates; kontrola)", "url": "https://www.trip.com/flights/warsaw-to-siem-reap/airfares-waw-sai/", "checked": "2026-10-04"},
  {"title": "momondo.pl: Lotnisko Chopina – Siem Reap (najszybszy lot 20 h 05 min, przykładowe oferty z 2–3 przesiadkami; kontrola)", "url": "https://www.momondo.pl/loty/lotnisko-chopina-w-warszawie/siem-reap", "checked": "2026-10-04"},
  {"title": "CambodgeMag: Emirates Dubaj–Bangkok–Siem Reap (EK370/371, 3× w tygodniu od 3.06.2025)", "url": "https://www.cambodgemag.com/en/post/tourisme-transports-emirates-expands-asian-network-with-dubai-siem-reap-route", "checked": "2026-10-04"},
  {"title": "FlightsFrom: Bangkok (BKK) – Siem Reap (SAI), przewoźnicy i częstotliwość", "url": "https://www.flightsfrom.com/BKK-SAI", "checked": "2026-10-04"},
  {"title": "Wikipedia: Siem Reap–Angkor International Airport – połączenia", "url": "https://en.wikipedia.org/wiki/Siem_Reap%E2%80%93Angkor_International_Airport", "checked": "2026-10-04"},
  {"title": "Rome2rio: Lotnisko Chopina – Siem Reap (kontrola)", "url": "https://www.rome2rio.com/s/Warsaw-Chopin-Airport-WAW/Siem-Reap-Angkor-International-Airport-SAI", "checked": "2026-10-04"},
  {"title": "Pasazer.com: LOT częściej do Bangkoku w zimie 2026/27", "url": "https://www.pasazer.com/news/470135/lot,poleci,czesciej,do,bangkoku,w,zimie.html", "checked": "2026-10-04"},
  {"title": "RusTourismNews: LOT bez biletów łączonych dalej z Bangkoku (07.2026)", "url": "https://www.rustourismnews.com/2026/07/08/lot-eyes-thai-airways-deal-after-launching-warsaw-bangkok-route/", "checked": "2026-10-04"}
]
```
Na liście kierunku są już (URL identyczny): KAYAK.pl Polska–Siem Reap i momondo.pl Lotnisko Chopina – Siem Reap. Wystarczy zaktualizować ich tytuły. Pozycję „Weather2Travel … UV” można zostawić, ale UV już z niej nie pochodzi.

**corralejo**

```json
[
  {"title": "BestDateWeather: Fuerteventura – pogoda miesiąc po miesiącu (12 stron miesięcznych, np. /fuerteventura-weather-january); UV all-sky z Open-Meteo, „ERA5 · 10 years (2016–2025)”, 28.36°N 14.02°W (środek wyspy)", "url": "https://bestdateweather.com/en/best-time-to-visit-fuerteventura", "checked": "2026-10-04"},
  {"title": "BestDateWeather: metodologia (UV = Open-Meteo Historical Forecast API, uv_index)", "url": "https://bestdateweather.com/en/methodology", "checked": "2026-10-04"},
  {"title": "Open-Meteo: dokumentacja API (uv_index_max z zachmurzeniem vs uv_index_clear_sky_max)", "url": "https://open-meteo.com/en/docs", "checked": "2026-10-04"},
  {"title": "KAYAK.pl: Warszawa Chopin – Fuerteventura (najkrótszy średni czas z 1 przesiadką: MUC 7 h 55 min; lot bezpośredni 5 h 45 min, Wizz Air)", "url": "https://www.kayak.pl/loty/Warszawa-Lotnisko-Chopina-i-inne-lotniska-WAW/Fuerteventura-FUE", "checked": "2026-10-04"},
  {"title": "FlightsFrom: Monachium (MUC) – Fuerteventura (FUE), przewoźnicy i rozkład całoroczny", "url": "https://www.flightsfrom.com/MUC-FUE", "checked": "2026-10-04"},
  {"title": "Wikipedia: Fuerteventura Airport – połączenia (Wizz Air sezonowo do Warszawy)", "url": "https://en.wikipedia.org/wiki/Fuerteventura_Airport", "checked": "2026-10-04"},
  {"title": "Wikipedia: Warsaw Chopin Airport – połączenia (Enter Air: sezonowy czarter do Fuerteventury)", "url": "https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport", "checked": "2026-10-04"},
  {"title": "infoloty.pl: Ryanair Warszawa – Fuerteventura (rozkład zima 2026/27, 27.10.2026–21.03.2027)", "url": "https://www.infoloty.pl/linie/ryanair/warszawa-fuerteventura-577.html", "checked": "2026-10-04"}
]
```
Na liście kierunku są już infoloty.pl i bestdateweather (strona lipcowa). Pozycja KAYAK ma na liście inny URL (`…/Fuerteventura-zzFRO`); powyższy wskazuje na kod lotniska FUE.

**phuket**

```json
[
  {"title": "BestDateWeather: Phuket – pogoda miesiąc po miesiącu (12 stron miesięcznych, np. /phuket-weather-january); UV all-sky z Open-Meteo, „ERA5 · 10 years (2016–2025)”, 7.88°N 98.39°E", "url": "https://bestdateweather.com/en/best-time-to-visit-phuket", "checked": "2026-10-04"},
  {"title": "BestDateWeather: metodologia (UV = Open-Meteo Historical Forecast API, uv_index)", "url": "https://bestdateweather.com/en/methodology", "checked": "2026-10-04"},
  {"title": "Open-Meteo: dokumentacja API (uv_index_max z zachmurzeniem vs uv_index_clear_sky_max)", "url": "https://open-meteo.com/en/docs", "checked": "2026-10-04"},
  {"title": "KAYAK.pl: Warszawa Chopin – Phuket (najkrótszy lot z 1 przesiadką: IST 15 h 42 min; lot bezpośredni 10 h 10 min niedostępny)", "url": "https://www.kayak.pl/loty/Warszawa-Lotnisko-Chopina-i-inne-lotniska-WAW/Phuket-HKT", "checked": "2026-10-04"},
  {"title": "KAYAK.com: Warsaw Chopin – Phuket (IST 15 h 42 min, AUH 15 h 46 min, HEL 16 h 25 min)", "url": "https://www.kayak.com/flight-routes/Warsaw-Chopin-WAW/Phuket-HKT", "checked": "2026-10-04"},
  {"title": "FlightsFrom: Stambuł (IST) – Phuket (HKT), Turkish Airlines, całorocznie", "url": "https://www.flightsfrom.com/IST-HKT", "checked": "2026-10-04"},
  {"title": "Wikipedia: Warsaw Chopin Airport – połączenia (LOT: sezonowy czarter do Phuket)", "url": "https://en.wikipedia.org/wiki/Warsaw_Chopin_Airport", "checked": "2026-10-04"},
  {"title": "momondo.pl: Warszawa – Phuket (brak lotów bezpośrednich; kontrola)", "url": "https://www.momondo.pl/loty/warszawa/phuket", "checked": "2026-10-04"}
]
```
Na liście kierunku są już (URL identyczny): KAYAK.pl WAW–HKT, KAYAK.com WAW–HKT i Wikipedia: Phuket International Airport (sezonowy czarter LOT, Air Arabia sezonowo). BestDateWeather był dotąd tylko jako strona czerwcowa, a Weather Atlas („10–12 przez cały rok”) nie jest już źródłem UV.

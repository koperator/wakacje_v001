# Aqaba – Tala Bay (Jordania) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain | Lotnisko Aqaba, Jordan Meteorological Department 1989–2018 | Stacja ok. 25 km od Tala Bay. weather2travel (CRU) podaje temperatury o 3–5 °C niższe (siatka obejmuje góry), więc go nie użyłem. |
| rain_days | Weather Spark (dni z samym deszczem) | Szacunek, praktycznie zero. |
| dew_point | Magnus (wilgotność stacji) | Szacunek. |
| sun | weather2travel (CRU) | Szacunek. |
| uv | BestDateWeather, Aqaba | |
| wind, water | Weather Spark, Aqaba | |

## Szacunki

- **beaches = 3:** zatoki resortowe z piaskiem, ale z rafą przy brzegu i miejscami z żwirem.
- **greenery = 1.**
- **sightseeing = 5:** Petra (ok. 2 h) i Wadi Rum (ok. 1 h) – wybitne atrakcje w zasięgu jednego dnia; poziom kotwicy Siem Reap.
- **local_prices = 3.**
- **flight_time = 11,3 h (szacunek), 2 przesiadki:**
  - Do Ammanu z 1 przesiadką średnio 7 h 52 min (Wiedeń), dalej lot ok. 1 h; najszybsza oferta do Akaby 11 h 20 min.
  - Loty tanich linii do Akaby są z innych lotnisk w Polsce, nie z WAW.
- **flight_price (szacunek):** ceny WAW–AMM (wartości spoza zakresu przycięte) + ok. 400 zł za lot Amman–Akaba.
- **transfer = 0,3 h:** lotnisko – Tala Bay ok. 20 km.
- **local_season:** H III–V, X–XI; M I–II, XII; L VI–IX.

## Flagi

- **holidays:** Ramadan w I–III, jak Muscat.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Ceny lotów:** zamiast trasy do Ammanu + 400 zł przyjęty zakres typowych cen WAW–Akaba z KAYAK.pl (2 313–4 780 zł; bez danych miesięcznych), miesiące według sezonu lokalnego. Akaba wychodzi drożej niż wcześniej (2 900–4 200 zł).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Akaba). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 4, 6, 8, 10, 11, 11+, 11+, 11+, 10, 7, 5, 4. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,039, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 4,2 / 5,8 / 7,9 / 9,7 / 10,8 / 11,5 / 11,8 / 11,3 / 9,6 / 7,1 / 4,8 / 3,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 274 DU): 5,5–5,8; model na 1.11 przy ozonie klimatologicznym (272 DU): 5,8.
- Wynik (I–XII): 4, 6, 8, 10, 11, 12, 12, 12, 10, 7, 5, 4.

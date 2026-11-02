# Senegal – Saly (Petite Côte) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: M'Bour – normy 1991–2020 (NOAA; opad w calach, przeliczony): temperatury i opad – ok. 5 km od Saly |
| rain | Wikipedia: M'Bour – normy 1991–2020 (NOAA; opad w calach, przeliczony): temperatury i opad – ok. 5 km od Saly |
| rain_days | Weather Spark Warang (dni z opadem ≥ 1 mm, model), szacunek |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (średnia z maksimum i minimum M’Bour; wilgotność Dakar), szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku sal z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

Weather Spark (Warang, ok. 10 km) podaje maksima o 2–3 °C niższe niż stacja M’Bour (31–34 °C vs 34–36 °C) – przyjęta stacja; rozbieżność do przeglądu.

## Szacunki

- **beaches 3, greenery 2, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: piaszczyste plaże z erozją (poziom Negombo); zieleń jak Santorini (sawanna); zwiedzanie jak Aruba; ceny jak Djerba.
- **local_season** HHHMLLLLLMHH – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Blaise Diagne – Saly ok. 40 km, ok. 40 min (szacunek).

## Flagi

- **smog 1** (XII, I, II, III): Harmattan (pył saharyjski z wiatrem z lądu): kilkudniowe epizody zamglenia, mniej słońca i suche powietrze, w części dni miesiąca.

## Dojazd

Przyjęte: **9,5 h, 1 przesiadka** (szacunek). Brak lotów bezpośrednich; z 1 przesiadką w Lizbonie (TAP) najszybciej 9 h 10 min, średnio 11 h 12 min (KAYAK).

## Ceny lotów (szacunek)

KAYAK: brak lotów bez przesiadek; z 1 przesiadką w Lizbonie (TAP) najszybciej 9 h 10 min, średnio 11 h 12 min; II 2 647 zł najtaniej, VIII 6 472 zł najdrożej, IX 4 123 zł, średnia 3 854 zł, typowo 3 416–4 198 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 4300 / 2900 / 4300 / 3900 / 3400 / 3400 / 3400 / 4800 / 4100 / 3900 / 4300 / 4300.

## Do przeglądu

1. Maksima M’Bour (stacja w głębi lądu?) vs Weather Spark Warang – różnica 2–3 °C.
2. UV zastępczo z Sal.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Dakar (ok. 60 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 9, 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,985, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,3 / 11,1 / 12,6 / 13,3 / 13,0 / 12,7 / 12,9 / 13,2 / 12,5 / 10,8 / 9,3 / 8,6.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 266 DU): 9,5–10; model na 1.11 przy ozonie klimatologicznym (259 DU): 10,0.
- Wynik (I–XII): 9, 11, 13, 13, 13, 13, 13, 13, 12, 11, 9, 8.

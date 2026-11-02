# Hiszpania – Barcelona (plaże Barceloneta / Costa del Maresme) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Barcelona – stacja centrum (Raval), średnie 1994–2020 (Meteocat): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain | Wikipedia: Barcelona – stacja centrum (Raval), średnie 1994–2020 (Meteocat): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 2, sightseeing 5, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: piaszczyste plaże miejskie, tłok (poziom Sopotu); zieleń jak Santorini; zwiedzanie jak Siem Reap (Gaudí, Gotyk, Montserrat); ceny jak Cypr.
- **local_season** LLMMHHHHHMLM – wiedza przewodnikowa, szacunek.
- **transfer 0,4 h** – lotnisko El Prat – centrum ok. 15 km, ok. 25 min; do Calelli ok. 1 h.

## Flagi

Brak.

## Dojazd

Przyjęte: **3,2 h, 0 przesiadek**. Wizz Air i LOT bez przesiadek ok. 3 h 10 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air i LOT, ok. 3 h 10 min; II 570 zł najtaniej, V 750 zł, VIII 790 zł najdrożej, średnia 707 zł, typowo 524–951 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 600 / 600 / 700 / 700 / 800 / 700 / 700 / 800 / 700 / 700 / 600 / 700.

## Do przeglądu

1. UV zastępczo z San Teodoro (kontrola: BestDateWeather Barcelona VII 8, jak San Teodoro).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Barcelona). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 4, 6, 7, 9, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,5 / 2,5 / 4,0 / 5,8 / 7,6 / 8,7 / 9,0 / 8,1 / 6,0 / 3,8 / 2,0 / 1,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 287 DU): 2,6–2,8; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,7.
- Wynik (I–XII): 2, 3, 4, 6, 7, 9, 9, 8, 6, 4, 2, 1.

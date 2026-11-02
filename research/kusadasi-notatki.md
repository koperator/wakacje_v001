# Turcja – Kuşadası – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Kuşadası – normy 1991–2020 (MGM): temperatury, opad, dni z opadem, wilgotność, nasłonecznienie |
| rain | Wikipedia: Kuşadası – normy 1991–2020 (MGM): temperatury, opad, dni z opadem, wilgotność, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku rodos-faliraki z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 3, sightseeing 5, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: piaszczyste plaże, ale tłok (poziom Sopotu); zieleń jak Cancún; Efez – poziom Siem Reap; ceny jak Djerba.
- **local_season** LLLLMHHHMMLL – wiedza przewodnikowa, szacunek.
- **transfer 1 h** – lotnisko Izmir – Kuşadası ok. 80 km autostradą, ok. 1 h.

## Flagi

Brak.

## Dojazd

Przyjęte: **2,6 h, 0 przesiadek** (szacunek). Pegasus i SunExpress bez przesiadek do Izmiru, 2 h 33 min; SunExpress latem 2× w tygodniu (od maja), w X wciąż po 1 rejsie tygodniowo – ok. 6 miesięcy, na granicy warunku (szacunek). Z 1 przesiadką w Stambule ok. 6 h.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Pegasus i SunExpress (sezonowo, od ok. V), 2 h 33 min; z 1 przesiadką w Stambule 6 h 08 min; II 774 zł najtaniej, VII 1 471 zł najdrożej, VIII 1 276 zł, średnia 964 zł, typowo 813–1 280 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 1200 / 1100 / 1200 / 1200 / 1300 / 1500 / 1800 / 1600 / 1300 / 1300 / 1200 / 1200.

## Do przeglądu

1. Lot bez przesiadek do Izmiru: sprawdzić długość sezonu (warunek 6 miesięcy).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Kuşadası). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,0 / 3,1 / 4,8 / 6,6 / 8,3 / 9,5 / 9,8 / 8,9 / 6,9 / 4,6 / 2,6 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 297 DU): 3–3,5; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,4.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2.

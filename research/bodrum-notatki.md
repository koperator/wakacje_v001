# Turcja – Bodrum (półwysep Bodrum) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Bodrum – normy 1991–2020 (NOAA, MGM): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (osobna tabela: średnie maksimum i minimum) |
| rain | Wikipedia: Bodrum – normy 1991–2020 (NOAA, MGM): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (osobna tabela: średnie maksimum i minimum) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku rodos-faliraki z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 2, greenery 3, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: wąskie plaże z żwirem i pomosty (poziom Alanyi); zieleń jak Cancún; zwiedzanie jak Malta; ceny jak Cypr (droższy kurort niż Riwiera Turecka).
- **local_season** LLLLMHHHHMLL – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Milas-Bodrum – Bodrum ok. 35 km, ok. 40 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **7,4 h, 1 przesiadka**. Regularnie z 1 przesiadką w Stambule, średnio 7 h 25 min (KAYAK); latem czartery biur bez przesiadek – nie liczą się jako lot rozkładowy.

## Ceny lotów (szacunek)

KAYAK: regularnie bez lotów bezpośrednich; z 1 przesiadką w Stambule średnio 7 h 25 min; latem czartery biur; XI 1 666 zł najtaniej, IV 3 547 zł najdrożej, VII 3 143 zł, średnia 2 362 zł, typowo 1 766–3 078 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 2000 / 2000 / 2000 / 3500 / 2400 / 3000 / 3100 / 3000 / 3000 / 2400 / 1700 / 2000.

## Do przeglądu

1. UV zastępczo z Rodos (ok. 100 km).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Bodrum). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,1 / 3,3 / 4,9 / 6,7 / 8,4 / 9,5 / 9,9 / 9,0 / 7,0 / 4,7 / 2,7 / 1,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 301 DU): 3,1–3,6; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,6.
- Wynik (I–XII): 2, 3, 5, 6, 8, 10, 10, 9, 7, 5, 3, 2.

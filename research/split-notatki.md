# Chorwacja – Split (Dalmacja Środkowa) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Split – stacja Marjan, normy 1991–2020 (DHMZ): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela Split) |
| rain | Wikipedia: Split – stacja Marjan, normy 1991–2020 (DHMZ): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela Split) |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 2, greenery 3, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: żwirowe plaże miejskie (poziom Malty); zieleń jak Cancún (Marjan, makia); zwiedzanie jak Malta; ceny jak Cypr.
- **local_season** LLLLMMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,5 h** – lotnisko Split (Kaštela) – centrum ok. 25 km, ok. 30 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **1,8 h, 0 przesiadek**. LOT (29.03–21.10.2026) i Wizz Air (30.03–23.10.2026) bez przesiadek ok. 1 h 50 min – ok. 7 miesięcy w roku, więc spełnia warunek; zimą z 1 przesiadką od 3 h 35 min.

## Ceny lotów (szacunek)

KAYAK: LOT bez przesiadek 1 h 50 min (sezonowo); z 1 przesiadką (Monachium, Wiedeń, Zagrzeb) od 3 h 35 min; V 746 zł najtaniej, II 1 426 zł, XI 1 320 zł, średnia 898 zł, typowo 685–1 206 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 800 / 1400 / 800 / 800 / 700 / 900 / 1100 / 1100 / 900 / 800 / 1300 / 800.

## Do przeglądu

1. UV zastępczo z San Teodoro (kontrola: Dubrownik VII 8, jak San Teodoro).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Split). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 4, 5, 7, 8, 8, 7, 5, 3, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,2 / 2,0 / 3,5 / 5,3 / 7,0 / 8,1 / 8,3 / 7,4 / 5,4 / 3,3 / 1,6 / 1,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 293 DU): 2–2,5; model na 1.11 przy ozonie klimatologicznym (287 DU): 2,3.
- Wynik (I–XII): 1, 2, 4, 5, 7, 8, 8, 7, 5, 3, 2, 1.

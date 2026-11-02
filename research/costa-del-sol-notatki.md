# Hiszpania – Costa del Sol (Torremolinos / Benalmádena) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Málaga – lotnisko, normy 1991–2020 (AEMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza i UV (tabela Málaga, okres niepodany) |
| rain | Wikipedia: Málaga – lotnisko, normy 1991–2020 (AEMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza i UV (tabela Málaga, okres niepodany) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku albufeira z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

UV w tabeli Wikipedii (Málaga) to wartości dla czystego nieba – niezgodne z definicją, nie użyte.

## Szacunki

- **beaches 3, greenery 2, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: długie plaże z ciemnym piaskiem i żwirem (poziom Sopotu); sucho jak Santorini; zwiedzanie jak Malta (Alhambra, Ronda); ceny jak Cypr.
- **local_season** LLMMMHHHMMLL – wiedza przewodnikowa, szacunek.
- **transfer 0,2 h** – lotnisko Málaga – Torremolinos ok. 8 km.

## Flagi

Brak.

## Dojazd

Przyjęte: **4,1 h, 0 przesiadek**. Wizz Air, Ryanair i LOT bez przesiadek, średnio ok. 4 h 07 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air, Ryanair, LOT, średnio 4 h 07 min; I 636 zł najtaniej, IV 813 zł, VII 864 zł najdrożej, średnia 766 zł, typowo 604–1 017 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 600 / 700 / 800 / 800 / 800 / 800 / 900 / 800 / 800 / 800 / 700 / 700.

## Do przeglądu

1. UV zastępczo z Albufeiry (podobna szerokość).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Torremolinos). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 4, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,2 / 3,4 / 5,0 / 6,8 / 8,4 / 9,6 / 10,0 / 9,2 / 7,1 / 4,8 / 2,8 / 2,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 289 DU): 3,3–3,7; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,6.
- Wynik (I–XII): 2, 4, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2.

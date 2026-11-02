# Włochy – Apulia (Monopoli / Polignano a Mare) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Bari – lotnisko Karol Wojtyła, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain | Wikipedia: Bari – lotnisko Karol Wojtyła, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 3, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: skaliste zatoczki i małe plaże (poziom Sopotu); zieleń jak Cancún (gaje oliwne); zwiedzanie jak Malta (Alberobello, Matera); ceny jak Cypr.
- **local_season** LLLLMMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,7 h** – lotnisko Bari – Monopoli ok. 55 km, ok. 45 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **2,2 h, 0 przesiadek**. Wizz Air (ok. 5× w tygodniu) i Ryanair (3×) bez przesiadek, średnio 2 h 13 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air (ok. 5× w tygodniu) i Ryanair (3×), średnio 2 h 13 min; I 302 zł najtaniej, IX 676 zł, XII 691 zł najdrożej, średnia 567 zł, typowo 423–744 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 700 / 800 / 800 / 800 / 900 / 900 / 900 / 900 / 1000 / 800 / 800 / 1000.

## Do przeglądu

1. Wczasy: Rainbow tylko objazd z pobytem (VII 3 862 zł), Itaka 4-dniowe – cena 7 nocy szacunkowa.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Bari (ok. 40 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 2, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,5 / 2,5 / 4,1 / 5,9 / 7,7 / 8,8 / 9,1 / 8,2 / 6,1 / 3,9 / 2,0 / 1,4.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 300 DU): 2,4–2,8; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,8.
- Wynik (I–XII): 2, 2, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1.

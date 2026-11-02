# Hiszpania – Costa Blanca (Benidorm) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Alicante – stacja 81 m, normy 1991–2020 (AEMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie, temperatura morza |
| rain | Wikipedia: Alicante – stacja 81 m, normy 1991–2020 (AEMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie, temperatura morza |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku albufeira z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 4, greenery 2, sightseeing 3, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: szerokie piaszczyste plaże z łagodnym wejściem (poziom Cancún); sucho jak Santorini; zwiedzanie jak Phuket; ceny jak Cypr.
- **local_season** MMMMMHHHMMLM – wiedza przewodnikowa, szacunek.
- **transfer 0,7 h** – lotnisko Alicante – Benidorm ok. 60 km autostradą, ok. 45 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **3,5 h, 0 przesiadek**. Wizz Air i Ryanair bez przesiadek, średnio 3 h 39 min (najkrócej 3 h 20 min), cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air i Ryanair, średnio 3 h 39 min (najkrócej 3 h 20 min); I 524 zł najtaniej, VII 920 zł najdrożej, XII 897 zł, średnia 749 zł, typowo 565–978 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 800 / 1000 / 1000 / 1000 / 1000 / 1100 / 1200 / 1100 / 1000 / 1000 / 900 / 1200.

## Do przeglądu

1. Wczasy z biurem: samolotem głównie krótkie pobyty (4–6 dni) – cena 7 nocy to szacunek.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Benidorm). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 9, 9, 7, 4, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,9 / 3,0 / 4,6 / 6,4 / 8,1 / 9,3 / 9,6 / 8,7 / 6,7 / 4,4 / 2,5 / 1,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 288 DU): 3,1–3,3; model na 1.11 przy ozonie klimatologicznym (284 DU): 3,3.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 9, 9, 7, 4, 3, 2.

# Albania – Durrës (plaża Golem / Shkëmbi i Kavajës) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Durrës – tabela klimatyczna 2011–2024 (Meteomanz; dni z opadem ≥ 0,1 mm; wilgotność, punkt rosy i słońce bez okresu) |
| rain | Wikipedia: Durrës – tabela klimatyczna 2011–2024 (Meteomanz; dni z opadem ≥ 0,1 mm; wilgotność, punkt rosy i słońce bez okresu) |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 3, greenery 2, sightseeing 3, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: plaża piaszczysta i płytka, ale zatłoczona i z mętną wodą (poziom Sopotu); zieleń jak Djerba; zwiedzanie jak Phuket (Tirana, Kruja, Berat); ceny jak Djerba.
- **local_season** LLLLLMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Tirana – Golem ok. 45 km drogą, ok. 35–45 min (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **2 h, 0 przesiadek**. LOT i Ryanair do Tirany przez cały rok, najszybciej 2 h 00 min.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek LOT i Ryanair, najszybciej 2 h 00 min; I 228 zł najtaniej, VII 723 zł, IX 746 zł najdrożej, średnia 627 zł, typowo 451–816 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 400 / 500 / 500 / 500 / 500 / 600 / 700 / 700 / 700 / 500 / 500 / 500.

## Do przeglądu

1. UV zastępczo z San Teodoro (Sardynia, podobna szerokość) – BestDateWeather nie ma strony dla Durrës.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Durrës). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 2, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,5 / 2,5 / 4,0 / 5,9 / 7,6 / 8,8 / 9,0 / 8,1 / 6,0 / 3,8 / 2,0 / 1,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 300 DU): 2,3–2,8; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,7.
- Wynik (I–XII): 2, 2, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1.

# Grecja – Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Elliniko (wybrzeże Aten) – normy 1955–2010 (HNMS): temperatury, opad, dni z opadem (próg niepodany), wilgotność, nasłonecznienie |
| rain | Wikipedia: Elliniko (wybrzeże Aten) – normy 1955–2010 (HNMS): temperatury, opad, dni z opadem (próg niepodany), wilgotność, nasłonecznienie |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku rodos-faliraki z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

Dni z opadem w tabeli Elliniko mają próg niepodany – przeliczone jak ≥ 0,1 mm (× 0,7).

## Szacunki

- **beaches 2, greenery 2, sightseeing 5, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: plaże miejskie, w części kamieniste i zatłoczone (poziom Malty); sucho jak Santorini; Akropol i Sounion – poziom Siem Reap; ceny jak Cypr.
- **local_season** LLLMMHHHHMLL – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Ateny – Glyfada ok. 35 km, ok. 40 min (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **2,4 h, 0 przesiadek**. Aegean, Sky Express i LOT bez przesiadek ok. 2 h 25 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Aegean, Sky Express, LOT, ok. 2 h 25 min; I 591 zł najtaniej, VIII 891 zł najdrożej, IX 883 zł, średnia 764 zł, typowo 611–993 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 600 / 700 / 700 / 800 / 800 / 800 / 800 / 900 / 900 / 800 / 700 / 700.

## Do przeglądu

1. UV zastępczo z Rodos.
2. Brak wczasów z biurem na Riwierze Ateńskiej w ofercie Rainbow i Itaki (sprawdzone 2026-10-26).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Ateny). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,0 / 3,1 / 4,8 / 6,6 / 8,3 / 9,4 / 9,8 / 8,9 / 6,8 / 4,6 / 2,6 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 304 DU): 2,8–3,5; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,4.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2.

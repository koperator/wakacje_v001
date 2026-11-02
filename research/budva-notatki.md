# Czarnogóra – Budva (Riwiera Budvańska) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Bar (Czarnogóra) – normy 1991–2020 (NOAA, HMS Czarnogóry): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie – ok. 30 km na SE od Budvy, to samo wybrzeże |
| rain | Wikipedia: Bar (Czarnogóra) – normy 1991–2020 (NOAA, HMS Czarnogóry): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie – ok. 30 km na SE od Budvy, to samo wybrzeże |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (średnia z maksimum i minimum), szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Tabela Weather.Directory dla Budvy (model) daje o 3–4 °C niższe maksima niż stacje Bar i Tivat, więc odrzucona; Bar leży na tym samym wybrzeżu.

## Szacunki

- **beaches 3, greenery 4, sightseeing 4, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: piasek z kamykami, tłok (poziom Sopotu); zieleń jak Mauritius (góry tuż nad morzem); zwiedzanie jak Malta (Kotor, Lovćen); ceny jak Djerba.
- **local_season** LLLLMMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 1 h** – Podgorica – Budva ok. 65 km przez góry, ok. 1 h (szacunek); Tivat byłby bliżej (ok. 20 min), ale bez lotów bezpośrednich.

## Flagi

Brak.

## Dojazd

Przyjęte: **2 h, 0 przesiadek**. LOT i Wizz Air do Podgoricy bez przesiadek, ok. 2 h 00 min, przez cały rok (KAYAK: ceny I–XII; latem LOT do 11 lotów tygodniowo). Do Tivatu tylko z przesiadką (Belgrad).

## Ceny lotów (szacunek)

KAYAK: bez przesiadek LOT i Wizz Air ok. 2 h 00 min; z 1 przesiadką (Belgrad) od 5 h 15 min; III 658 zł najtaniej, XI 1 465 zł najdrożej, XII 946 zł, średnia 856 zł, typowo 688–1 075 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 800 / 800 / 700 / 800 / 900 / 900 / 1000 / 1000 / 900 / 800 / 1200 / 900.

## Do przeglądu

1. UV zastępczo z San Teodoro.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Budva). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 4, 5, 7, 8, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,4 / 2,3 / 3,9 / 5,7 / 7,4 / 8,6 / 8,8 / 7,9 / 5,8 / 3,6 / 1,9 / 1,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 297 DU): 2,2–2,7; model na 1.11 przy ozonie klimatologicznym (286 DU): 2,6.
- Wynik (I–XII): 1, 2, 4, 5, 7, 8, 9, 8, 6, 4, 2, 1.

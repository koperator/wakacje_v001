# Włochy – Kampania (Sorrento / Zatoka Neapolitańska) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Neapol – lotnisko Capodichino, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie; temperatura morza (Riwiera Neapolitańska) |
| rain | Wikipedia: Neapol – lotnisko Capodichino, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie; temperatura morza (Riwiera Neapolitańska) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku san-teodoro z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 2, greenery 4, sightseeing 5, local_prices 4** – ocena redakcyjna względem kotwic w rejestrze: małe żwirowe plaże i pomosty (poziom Malty); zieleń jak Mauritius; Pompeje, Amalfi, Capri – poziom Siem Reap; ceny jak Barbados.
- **local_season** LLLMMHHHMMLL – wiedza przewodnikowa, szacunek.
- **transfer 1,2 h** – lotnisko Neapol – Sorrento ok. 50 km, ok. 1–1,5 h (korki), szacunek.

## Flagi

Brak.

## Dojazd

Przyjęte: **2,4 h, 0 przesiadek**. Wizz Air i Ryanair bez przesiadek codziennie, średnio 2 h 23 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air i Ryanair codziennie, średnio 2 h 23 min; VI 518 zł najtaniej, VII 701 zł, XI 946 zł najdrożej, średnia 614 zł, typowo 471–827 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 900 / 900 / 900 / 900 / 900 / 800 / 1000 / 1100 / 900 / 900 / 1200 / 900.

## Do przeglądu

1. UV zastępczo z San Teodoro.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Sorrento). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,6 / 2,6 / 4,2 / 6,0 / 7,7 / 8,8 / 9,1 / 8,2 / 6,1 / 3,9 / 2,1 / 1,4.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 302 DU): 2,5–2,9; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,8.
- Wynik (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1.

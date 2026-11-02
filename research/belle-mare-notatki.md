# Belle Mare / Palmar (Mauritius) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun, water | weather2travel, Belle Mare (CRU, liczby całkowite) | Brak tabel ze stacją dla wschodniego wybrzeża (Wikipedia: tylko Port Louis). Szacunek. |
| rain_days | CRU × 0,7 | Szacunek. |
| dew_point | Magnus ze stałą wilgotnością 78% | Szacunek, zgrubny. |
| uv, wind, flight_time, stops, flight_price, local_season, flags | Przeniesione z `mauritius.json` (ta sama wyspa i lotnisko) | Wiatr na wschodnim wybrzeżu jest raczej silniejszy (pasat). |

## Szacunki

- **beaches = 5:** długa biała plaża z laguną; jedna z najlepszych na wyspie (zachód, Flic en Flac = 4).
- **greenery = 4**, **sightseeing = 3**, **local_prices = 3:** jak Flic en Flac.
- **transfer = 0,8 h:** lotnisko MRU – Belle Mare ok. 45 km.

## Do przeglądu

1. **Opad z CRU** (ok. 2 800 mm/rok) jest prawdopodobnie zawyżony; Wikipedia podaje ok. 900 mm dla wybrzeża.
2. **Wiatr z Flic en Flac** jest prawdopodobnie zaniżony dla wschodu, zwłaszcza w VI–IX.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Opad:** zamieniony z CRU na oficjalne średnie Mauritius Meteorological Services 1991–2020 dla regionu Wschód (2 640 mm/rok, szacunek). CRU (ok. 2 800 mm) okazało się bliskie średniej regionu; „ok. 900 mm” z Wikipedii dotyczy zachodniego wybrzeża. Samo wybrzeże jest prawdopodobnie nieco suchsze niż średnia regionu. Uwaga 1 rozwiązana.
- **Wiatr z Flic en Flac:** zostaje (brak stacji na wschodzie); w VI–IX realnie silniejszy pasat. Uwaga 2 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Belle Mare). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 10, 7, 6, 6, 8, 10, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,987, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,4 / 14,3 / 13,0 / 10,0 / 7,2 / 5,9 / 6,1 / 7,9 / 10,2 / 12,4 / 13,5 / 14,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 275 DU): 12,7–14,1; model na 1.11 przy ozonie klimatologicznym (279 DU): 13,1.
- Wynik (I–XII): 14, 14, 13, 10, 7, 6, 6, 8, 10, 12, 13, 14.

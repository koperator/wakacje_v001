# Tsilivi / Kalamaki, Zakynthos (Grecja) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko Zakynthos, NOAA 1961–1990 | Starsze normy; dni ≥ 1 mm. |
| dew_point | Magnus | Szacunek. |
| sun, water | weather2travel, Tsilivi (CRU) | Słońce: szacunek. |
| uv, wind | Jak San Vito lo Capo (UV Sycylia, wiatr NASA Trapani) | climate-zone dla Zakynthos się nie wczytał. Szacunek. |

## Szacunki

- **beaches = 4:** piaszczyste plaże z łagodnym wejściem (Tsilivi, Kalamaki).
- **greenery = 4:** bardzo zielona wyspa.
- **sightseeing = 3:** Navagio, Błękitne Groty, Keri, żółwie.
- **local_prices = 2.**
- **flight_time = 5,3 h, 1 przesiadka** (Bergamo, KAYAK.pl). Latem czartery biur bez przesiadek – tylko w notatce.
- **flight_price (szacunek):** + 300 zł za bagaż.
- **transfer = 0,3 h.**
- **local_season:** H VI–VIII, M V, IX, L X–IV.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot Wizz Air WAW–ZTH:** tylko w szczycie lata (ostatni lot 19 IX 2026; flightsfrom.com), ok. 4 miesięcy – nie spełnia warunku. Zostaje **5,3 h, 1 przesiadka**. Czartery biur – tylko w notatce, bo kierunek nie jest oznaczony jako „tylko z biurem”.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Tsilivi). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,0 / 3,1 / 4,8 / 6,6 / 8,2 / 9,4 / 9,8 / 8,9 / 6,8 / 4,6 / 2,6 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 300 DU): 3–3,5; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,4.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2.

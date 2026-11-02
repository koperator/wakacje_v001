# Ölüdeniz / Fethiye (Turcja) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Fethiye, NOAA 1991–2020 | Stacja ok. 15 km; dni ≥ 1 mm. |
| dew_point | Magnus | Szacunek. |
| uv, wind, water | Przeniesione z Alanyi (UV Antalya, Weather Spark Alanya) | seatemperatu.re i climate-zone dla Ölüdeniz/Fethiye nie wczytały się. Szacunek. |

## Szacunki

- **beaches = 4:** Belcekız i Błękitna Laguna – bardzo spokojna, przejrzysta woda; drobne kamyki z piaskiem.
- **greenery = 4:** lasy sosnowe i góry.
- **sightseeing = 4:** Dolina Motyli, Kayaköy, Saklıkent, Tlos, Dalyan.
- **local_prices = 2:** jak Alanya.
- **flight_time = 8,7 h (szacunek), 1 przesiadka:** WAW–Stambuł ok. 2 h 45 min, średnia przesiadka 4 h 40 min (KAYAK.pl), Stambuł–Dalaman ok. 1 h 15 min. Czartery bez przesiadek tylko latem.
- **transfer = 1,0 h:** Dalaman – Ölüdeniz ok. 60 km.
- **local_season:** H VI–IX, M V, X, L XI–IV.

## Do przeglądu

1. Jeśli Ölüdeniz to wyjazd z biurem, czas lotu czarterem byłby ok. 3 h, bez przesiadek.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Czarter czy regularny lot:** decyzja: zostaje regularne połączenie (**8,7 h, 1 przesiadka**), bo tylko Marsa Alam jest oznaczona jako wyjazd wyłącznie z biurem. Z Chopina do Dalamanu latają tylko czartery (Enter Air, sezonowo). Uwaga zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Ölüdeniz). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 7, 9, 10, 11, 10, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,3 / 3,5 / 5,2 / 7,0 / 8,7 / 9,8 / 10,2 / 9,4 / 7,3 / 4,9 / 2,9 / 2,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 298 DU): 3,2–3,7; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,8.
- Wynik (I–XII): 2, 3, 5, 7, 9, 10, 11, 10, 7, 5, 3, 2.

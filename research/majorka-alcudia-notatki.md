# Playa de Muro / Alcúdia, Majorka (Hiszpania) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun, water | AEMET Puerto de Palma 1991–2020 (+ seatemperature.org) | Stacja zastępcza ok. 50 km, południowe wybrzeże. Szacunek. |
| dew_point | Magnus (wilgotność stacji) | Szacunek. |
| uv | BestDateWeather, Alcúdia | |
| wind | NASA POWER, Palma (climate-zone.com) | Model. Szacunek. |

## Szacunki

- **beaches = 5:** biały piasek, płytka, turkusowa woda; poziom kotwic Boracay / Turks and Caicos.
- **greenery = 3**, **sightseeing = 4** (Formentor, Pollença, Tramuntana, Palma), **local_prices = 3.**
- **flight_time = 3,2 h, 0 przesiadek** (KAYAK.pl: Ryanair, LOT, Wizz Air).
- **flight_price (szacunek):** + 300 zł za bagaż.
- **transfer = 0,9 h:** lotnisko PMI – Playa de Muro ok. 60 km.
- **local_season:** H VII–VIII, M V–VI, IX, L X–IV (większość hoteli zamknięta zimą).

## Do przeglądu

1. Pogoda z Palmy; północne wybrzeże bywa nieco chłodniejsze i bardziej wietrzne.
2. Czy lot bez przesiadek kursuje co najmniej ok. 6 miesięcy w roku (zimą możliwa przesiadka).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot WAW–PMI:** Ryanair lata z Lotniska Chopina przez cały rok, a LOT (od 30 V) i Wizz Air sezonowo (Wikipedia: Warsaw Chopin Airport, transinfo.pl). Zostaje **3,2 h, 0 przesiadek**. Uwaga 2 rozwiązana.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Alcúdia). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 9, 8, 6, 4, 2, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,7 / 2,7 / 4,3 / 6,1 / 7,8 / 8,9 / 9,2 / 8,3 / 6,3 / 4,1 / 2,2 / 1,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 291 DU): 2,7–3; model na 1.11 przy ozonie klimatologicznym (285 DU): 3,0.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 9, 8, 6, 4, 2, 2.

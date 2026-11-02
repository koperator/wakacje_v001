# Porto Santo – Vila Baleira / Cabeço da Ponta (Portugalia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Lotnisko Porto Santo, IPMA 1991–2020 (słońce DWD 2000–2020) | Stacja kilka km od plaży; dni ≥ 1 mm. |
| dew_point | Magnus (wilgotność stacji) | Szacunek. |
| uv | BestDateWeather, Madera (Funchal) | Strona Porto Santo nie działa. Szacunek. |
| wind, water | Weather Spark, Ilha de Porto Santo | |

## Szacunki

- **beaches = 5:** 9 km złotego piasku, łagodne wejście, spokojna woda (chłodna woda jest w kolumnie wody).
- **greenery = 1:** sucha wyspa.
- **sightseeing = 1:** poza plażą niewiele; Madera promem ok. 2,5 h, więc poza wycieczką jednodniową w rozsądnym sensie. Poziom kotwic Malediwy / Turks and Caicos.
- **local_prices = 3.**
- **flight_time = 11,0 h, 1 przesiadka** (Funchal, KAYAK.pl średnio 11 h 02 min).
- **transfer = 0,2 h.**
- **local_season:** H VII–VIII, M V–VI, IX, L X–IV.

## Flagi

Brak. Zimowe zamknięcia części hoteli opisane w notatce, bez flagi, jak przy innych kierunkach europejskich.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Porto Santo). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 3, 4, 6, 8, 9, 10, 10, 9, 8, 6, 4, 3. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,9 / 4,3 / 6,0 / 7,8 / 9,2 / 10,2 / 10,6 / 9,9 / 8,0 / 5,7 / 3,6 / 2,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 291 DU): 4,1–4,5; model na 1.11 przy ozonie klimatologicznym (278 DU): 4,5.
- Wynik (I–XII): 3, 4, 6, 8, 9, 10, 10, 9, 8, 6, 4, 3.

# Las Terrenas – Playa Bonita, Samaná (Dominikana) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun, water | weather2travel, Las Terrenas (CRU) | Brak tabel ze stacją dla półwyspu Samaná (Wikipedia: tylko ogólne dane); Puerto Plata bez źródła i okresu. Szacunek. |
| rain_days | CRU × 0,7 | Szacunek. |
| dew_point | Magnus ze stałą wilgotnością 80% | Szacunek, zgrubny. |
| uv, wind, local_season, flags (huragany) | Przeniesione z Punta Cany | Ta sama wyspa. Szacunek. |

## Szacunki

- **beaches = 4:** długie, jasne plaże z palmami; fala umiarkowana.
- **greenery = 4:** bujna roślinność, wzgórza.
- **sightseeing = 3:** El Limón, Los Haitises, humbaki (I–III).
- **local_prices = 3.**
- **flight_time = 16,9 h, 1 przesiadka** (Santo Domingo przez Madryt, KAYAK.pl). Strona KAYAK dla El Catey (AZS) nie wczytała się; to lotnisko obsługuje głównie czartery.
- **transfer = 2,2 h (szacunek):** Santo Domingo – Las Terrenas autostradą.
- **flight_price (szacunek):** KAYAK.pl WAW–SDQ: X 3 015 zł, V ok. 5 518 zł (wyliczone z różnicy), średnia 3 655 zł.

## Flagi

- **cyclone:** VIII–X = 1, jak Punta Cana.
- **Pominięte:** sargassum (północne wybrzeże mniej dotknięte niż wschód; bez źródła z sezonowością dla Samaná).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Las Terrenas). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 8, 10, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 8, 7. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,004, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 7,7 / 9,6 / 11,5 / 12,7 / 12,6 / 12,6 / 12,7 / 12,8 / 11,8 / 9,8 / 7,9 / 7,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 261 DU): 8,6–8,9; model na 1.11 przy ozonie klimatologicznym (261 DU): 8,8.
- Wynik (I–XII): 8, 10, 12, 13, 13, 13, 13, 13, 11, 10, 8, 7.

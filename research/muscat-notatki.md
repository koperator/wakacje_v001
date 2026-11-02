# Muscat – Qurum / Al Mouj (Oman) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun | Lotnisko Muscat, NOAA 1991–2020 | Lotnisko leży przy Al Mouj, ok. 20 km od Qurum. |
| rain_days | Weather Spark (≥ 0,04 in, reanaliza) | Stacja nie podaje dni z opadem. Szacunek. |
| dew_point | Magnus (wilgotność stacji) | Szacunek. |
| uv | BestDateWeather, Muscat | |
| wind, water | Weather Spark, Muscat | |

## Szacunki

- **beaches = 3:** długie, piaszczyste plaże miejskie, ale bez osłony i cienia, latem bardzo gorąco.
- **greenery = 2**, **sightseeing = 4** (Wielki Meczet, Mutrah, Nizwa, wadi), **local_prices = 3.**
- **flight_time = 9,8 h, 1 przesiadka** (Abu Zabi, KAYAK.pl średnio 9 h 45 min).
- **transfer = 0,4 h:** lotnisko – Al Mouj ok. 5 km, – Qurum ok. 20 km.
- **local_season:** H XI–III, M IV, X, L V–IX.

## Flagi

- **holidays:** Ramadan w I–III „zależnie od roku”. W Omanie zasady są surowsze niż w Dubaju: restauracje poza hotelami zamknięte w dzień.
- **Pominięte:** cyklony (bardzo rzadkie).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Maskat). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 6, 8, 11, 11+, 11+, 11+, 11+, 11+, 11, 9, 7, 6. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,017, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 6,3 / 8,2 / 10,4 / 11,9 / 12,1 / 12,2 / 12,2 / 12,2 / 11,0 / 8,7 / 6,7 / 5,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 264 DU): 7,3–7,6; model na 1.11 przy ozonie klimatologicznym (263 DU): 7,6.
- Wynik (I–XII): 6, 8, 11, 12, 12, 12, 12, 12, 11, 9, 7, 6.

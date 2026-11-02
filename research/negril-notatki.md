# Negril – Seven Mile Beach (Jamajka) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Montego Bay (Sangster), NOAA 1991–2020 (DWD 1961–1990 dla dni, wilgotności, słońca) | Stacja zastępcza ok. 70 km. Szacunek. |
| dew_point | Magnus | Szacunek. |
| uv | BestDateWeather, Jamajka (punkt w środku wyspy) | Szacunek. |
| wind | NASA POWER, Montego Bay | Model. Szacunek. |
| water | seatemperatu.re, Negril | |

## Szacunki

- **beaches = 4:** długa, jasna plaża ze spokojną wodą; nachalni sprzedawcy.
- **greenery = 4**, **sightseeing = 3** (West End, YS Falls, Black River), **local_prices = 4.**
- **flight_time = 15,7 h, 1 przesiadka** (Frankfurt, KAYAK.pl).
- **flight_price (szacunek):** VII 6 228 zł (poza zakresem) przycięte.
- **transfer = 1,3 h:** Montego Bay – Negril ok. 80 km.
- **local_season:** H XII–IV, M VII–VIII, L V–VI, IX–XI.

## Flagi

- **cyclone:** VIII–X = 1. Huragan Melissa (X 2025) mocno uderzył w zachodnią Jamajkę – do sprawdzenia stan infrastruktury przy planowaniu.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Huragan Melissa (X 2025):** bez osobnej flagi – flagi opisują typowe ryzyko miesiąca, a szkody po jednym huraganie to stan przejściowy. Informacja zostaje w notatce kierunku.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Negril). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 8, 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,013, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 8,1 / 10,0 / 11,9 / 13,0 / 12,9 / 12,8 / 12,9 / 13,1 / 12,1 / 10,1 / 8,3 / 7,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 258 DU): 8,6–9,5; model na 1.11 przy ozonie klimatologicznym (260 DU): 9,2.
- Wynik (I–XII): 8, 10, 12, 13, 13, 13, 13, 13, 12, 10, 9, 8.

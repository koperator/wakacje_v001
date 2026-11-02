# Maspalomas / Meloneras, Gran Canaria (Hiszpania) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain | AEMET, Maspalomas C. Insular Turismo, 2009–2024 | Stacja w bazie, krótszy okres niż 1991–2020. |
| rain_days | Lotnisko Gran Canaria, AEMET 1991–2020 (≥ 0,1 mm) × 0,7 | Szacunek. |
| dew_point | Magnus: średnia Maspalomas + wilgotność lotniska | Szacunek. |
| sun | Las Palmas, AEMET 1981–2010 | Północ wyspy jest bardziej pochmurna niż południe, więc dla Maspalomas raczej zaniżone. Szacunek. |
| uv | BestDateWeather, Gran Canaria, 27.92°N 15.39°W | |
| wind | NASA POWER, Las Palmas (climate-zone.com) | Brak Weather Spark. Szacunek. |
| water | seatemperatu.re, Maspalomas | |
| flags | Calima I–III, jak Corralejo | |

## Szacunki

- **beaches = 4:** szeroka plaża z wydmami i złotym piaskiem; Atlantyk z umiarkowaną falą.
- **greenery = 2**, **sightseeing = 3**, **local_prices = 3.**
- **flight_time = 7,6 h, 1 przesiadka** (Frankfurt, KAYAK.pl średnio 7 h 39 min). Bez przesiadek tylko czartery X–III (jak Corralejo).
- **flight_price (szacunek):** + 300 zł za bagaż (tanie linie), jak Corralejo.
- **transfer = 0,5 h:** lotnisko LPA – Maspalomas ok. 30 km.
- **local_season:** H I–III, XI–XII, VIII; M IV, VII, X; L V–VI, IX.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Maspalomas). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 4, 6, 8, 9, 10, 11, 11, 11, 9, 7, 5, 4. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 4,5 / 6,2 / 8,2 / 9,8 / 10,6 / 11,1 / 11,2 / 10,9 / 9,4 / 7,2 / 5,1 / 4,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 286 DU): 5,2–6,1; model na 1.11 przy ozonie klimatologicznym (268 DU): 6,0.
- Wynik (I–XII): 4, 6, 8, 9, 10, 11, 11, 11, 9, 7, 5, 4.

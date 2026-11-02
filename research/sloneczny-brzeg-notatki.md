# Słoneczny Brzeg / Nesebyr (Bułgaria) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Burgas, NOAA 1991–2020 (słońce 1953–2011) | Stacja ok. 30 km, to samo wybrzeże; dni ≥ 1 mm. |
| dew_point | Magnus | Szacunek. |
| uv | BestDateWeather, Sardynia (40°N) | Brak strony (Sunny Beach nie działa). Dla 42,5°N raczej lekko zawyżone. Szacunek. |
| wind | NASA POWER, Burgas | Model. Szacunek. |
| water | weather2travel, Słoneczny Brzeg | |

## Szacunki

- **beaches = 4:** długa, szeroka plaża z drobnym piaskiem i łagodnym wejściem; tłok w VII–VIII.
- **greenery = 3**, **sightseeing = 3** (Nesebyr UNESCO, Sozopol).
- **local_prices = 1:** tanio; poziom kotwic Goa / Siem Reap.
- **flight_time = 2,3 h, 0 przesiadek** (Wizz Air).
- **flight_price (szacunek):** X ok. 265 zł (poniżej zakresu) podniesione do 500 zł; + 300 zł za bagaż.
- **transfer = 0,5 h:** lotnisko Burgas – Słoneczny Brzeg ok. 30 km.
- **local_season:** H VII–VIII, M VI, IX, L X–V (kurort zimą zamknięty).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot WAW–BOJ:** Wizz Air z Lotniska Chopina (3 razy w tygodniu, loty jeszcze pod koniec X; statystyki cen III–X – flightsfrom.com, KAYAK.pl). Przyjmuję sezon ok. 6–7 miesięcy – zostaje **2,3 h, 0 przesiadek**. Wizz Air z Radomia (21 VII–12 IX) się nie liczy. Gdyby trasa z Chopina okazała się krótsza niż ok. 6 miesięcy: przez Pragę ok. 6,0 h, 1 przesiadka.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Słoneczny Brzeg). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 4, 5, 7, 8, 9, 8, 5, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,3 / 2,2 / 3,7 / 5,5 / 7,2 / 8,4 / 8,6 / 7,7 / 5,6 / 3,5 / 1,8 / 1,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 295 DU): 2,2–2,5; model na 1.11 przy ozonie klimatologicznym (286 DU): 2,5.
- Wynik (I–XII): 1, 2, 4, 5, 7, 8, 9, 8, 5, 4, 2, 1.

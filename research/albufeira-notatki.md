# Albufeira / Praia da Falésia, Algarve (Portugalia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Lotnisko Faro, IPMA 1991–2020 (słońce 1971–1995) | Ok. 35 km, to samo wybrzeże; dni ≥ 1 mm. |
| dew_point | Magnus (wilgotność NOAA 1961–1990) | Szacunek. |
| uv | BestDateWeather, Algarve, 37.10°N 8.68°W | |
| wind | Weather Spark, Faro | |
| water | seatemperatu.re, Albufeira | |

## Szacunki

- **beaches = 4:** długa, złota plaża pod klifami; atlantycka fala i chłodna woda (woda jest w osobnej kolumnie).
- **greenery = 3**, **sightseeing = 4** (Benagil, Lagos, Sagres, Tavira), **local_prices = 3.**
- **flight_time = 4,3 h, 0 przesiadek** (Wizz Air, KAYAK.pl).
- **flight_price (szacunek):** + 300 zł za bagaż (tanie linie).
- **transfer = 0,6 h:** lotnisko Faro – Albufeira ok. 40 km.
- **local_season:** H VI–VIII, M IV–V, IX–X, L XI–III.

## Do przeglądu

1. Czy lot Wizz Air WAW–FAO kursuje co najmniej ok. 6 miesięcy w roku. Jeśli nie: 6,4 h i 1 przesiadka (Frankfurt).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot Wizz Air WAW–FAO:** trasa z Lotniska Chopina od 31 III 2026, 2 razy w tygodniu, w sezonie letnim (koniec III – koniec X, ok. 7 miesięcy; pasazer.com, transinfo.pl). Spełnia warunek ≥ ok. 6 miesięcy – zostaje **4,3 h, 0 przesiadek**. Uwaga rozwiązana.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Albufeira). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 4, 5, 7, 8, 9, 9, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,1 / 3,3 / 4,9 / 6,7 / 8,3 / 9,5 / 9,9 / 9,0 / 7,0 / 4,7 / 2,7 / 1,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 288 DU): 3,3–3,6; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,5.
- Wynik (I–XII): 2, 4, 5, 7, 8, 9, 9, 9, 7, 5, 3, 2.

# Nikiti / Sarti, Chalkidiki (Grecja) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun | Lotnisko Saloniki (normy 1991–2020; opad 1971–2000) | Stacja zastępcza ok. 70 km; Sithonia jest zimą nieco łagodniejsza. Tabela dla Polygyros to stacja górska z 2 lat – odrzucona. Szacunek. |
| rain_days | Ta sama tabela × 0,7 | Szacunek. |
| dew_point | Magnus | Szacunek. |
| uv | BestDateWeather, Sardynia (ta sama szerokość) | Szacunek. |
| wind | NASA POWER, Saloniki | Model; bardzo słaby wiatr (6–9 km/h). Szacunek. |
| water | seatemperatu.re, Nikiti | |

## Szacunki

- **beaches = 4:** piaszczyste zatoki, bardzo czysta woda, łagodne wejście.
- **greenery = 4:** lasy sosnowe do samej plaży.
- **sightseeing = 3** (Athos z morza, Saloniki), **local_prices = 2.**
- **flight_time = 2,3 h, 0 przesiadek** (LOT; zakładam co najmniej ok. 6 miesięcy w roku – do sprawdzenia).
- **flight_price (szacunek):** + 300 zł za bagaż.
- **transfer = 1,3 h:** lotnisko Saloniki – Nikiti ok. 95 km.
- **local_season:** H VII–VIII, M VI, IX, L X–V.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot LOT WAW–SKG:** od zimy 2026/27 tylko w sezonie letnim: ostatni lot 24 X, wznowienie 28 III (pasazer.com), codziennie. To ok. 7 miesięcy – spełnia warunek, zostaje **2,3 h, 0 przesiadek**.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Chalkidiki). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,6 / 2,7 / 4,2 / 6,0 / 7,8 / 8,9 / 9,2 / 8,3 / 6,2 / 4,0 / 2,2 / 1,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 300 DU): 2,5–3,1; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,9.
- Wynik (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 2.

# Ksamil / Saranda (Albania) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Korfu, HNMS 1955–2010 | Stacja zastępcza ok. 15–20 km przez cieśninę; dni × 0,7 (próg 0,1 mm). Szacunek. |
| dew_point | Magnus | Szacunek. |
| uv, wind | Jak San Teodoro (UV Sardynia, NASA Olbia) | Szacunek. |
| water | Jak Zakynthos (weather2travel) | seatemperatu.re dla Ksamil się nie wczytał. Szacunek. |

## Szacunki

- **beaches = 4:** bardzo przejrzysta woda, zatoki i wysepki; jasne kamyki z piaskiem; latem tłok.
- **greenery = 3**, **sightseeing = 4** (Butrint i Gjirokastra – UNESCO, Niebieskie Oko), **local_prices = 2.**
- **flight_time = 2,4 h, 0 przesiadek** do Korfu (Wizz Air). Zakładam co najmniej ok. 6 miesięcy w roku – do sprawdzenia. Alternatywa całoroczna: Tirana (2,1 h), ale ok. 4,5–5 h drogi.
- **flight_price (szacunek):** XI 2 485 zł (poza zakresem typowych cen) przycięte; + 300 zł za bagaż.
- **transfer = 2,0 h (szacunek):** port w Korfu, prom do Sarandy 30–70 min, odprawa graniczna, ok. 20 min do Ksamilu.
- **local_season:** H VII–VIII, M VI, IX, L X–V.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot Wizz Air WAW–CFU:** z Lotniska Chopina, 3 razy w tygodniu, ok. III–X (flightsfrom.com; KAYAK.pl: oferty bezpośrednie jeszcze w drugiej połowie X). Spełnia warunek – zostaje **2,4 h, 0 przesiadek** do Korfu.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Saranda (ok. 15 km od Ksamilu)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,7 / 2,7 / 4,3 / 6,1 / 7,8 / 8,9 / 9,2 / 8,3 / 6,3 / 4,1 / 2,2 / 1,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 298 DU): 2,7–3,1; model na 1.11 przy ozonie klimatologicznym (284 DU): 3,0.
- Wynik (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 2.

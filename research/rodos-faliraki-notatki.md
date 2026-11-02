# Faliraki / Kolymbia, Rodos (Grecja) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun, water | Lotnisko Rodos (HNMS 1955–2010; słońce i morze Weather Atlas) | Stacja ok. 20 km. |
| rain_days | Ta sama tabela × 0,7 | Próg niepodany (HNMS zwykle ≥ 0,1 mm). Szacunek. |
| dew_point | Magnus | Szacunek. |
| uv, wind | Jak Kreta (Santorini UV, NASA POWER Chania) | climate-zone dla Rodos się nie wczytał. Szacunek. |

## Szacunki

- **beaches = 4:** długie piaszczyste plaże i zatoki na zawietrznym wybrzeżu wschodnim.
- **greenery = 3**, **sightseeing = 4** (Stare Miasto UNESCO, Lindos), **local_prices = 2.**
- **flight_time = 3,0 h, 0 przesiadek** (KAYAK.pl; sezon letni).
- **flight_price (szacunek):** + 300 zł za bagaż.
- **transfer = 0,4 h.**
- **local_season:** H VI–IX, M V, X, L XI–IV.

## Flagi

Brak. Meltemi dotyczy głównie zachodniego wybrzeża (Ialyssos, Prasonisi).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot WAW–RHO:** z Lotniska Chopina lata Wizz Air (aktywna trasa, ok. III–X, do 4 razy w tygodniu; flightsfrom.com). Ryanair lata z Modlina, nie liczy się. Spełnia warunek – zostaje **3,0 h, 0 przesiadek**.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Faliraki). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,2 / 3,4 / 5,1 / 6,8 / 8,5 / 9,6 / 10,0 / 9,2 / 7,1 / 4,9 / 2,9 / 2,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 302 DU): 3,2–3,6; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,7.
- Wynik (I–XII): 2, 3, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2.

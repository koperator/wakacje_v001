# Porto de Galinhas (Pernambuco, Brazylia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Recife, INMET 1991–2020 (tabela Wikipedii) | Stacja ok. 50 km na północ. Szacunek. Climatempo dla Porto de Galinhas podaje mniej opadu (ok. 1 230 vs 2 155 mm), więc opad może być zawyżony. |
| dew_point | Magnus: średnia dobowa i wilgotność INMET | Szacunek. |
| uv | BestDateWeather, Salvador (ok. 500 km na południe) | Strona Recife się nie wczytała. Szacunek. |
| wind | NASA POWER, Recife (climate-zone.com) | Model. Szacunek. |
| water | surf-forecast.com: maks. ok. 28 °C w III, min. ok. 26 °C w VIII, X 26,6 °C | Miesiące wyliczone z tych punktów (krzywa sezonowa). Szacunek. |
| local_season | Brazylijskie ferie: XII–II (lato, karnawał), VII (ferie zimowe) | Szacunek. |

## Szacunki

- **beaches = 4:** jasny piasek, ciepła woda, baseny w rafie; tłok i kamienie rafy przy brzegu; Muro Alto i Carneiros blisko.
- **greenery = 3**, **sightseeing = 3**, **local_prices = 2.**
- **flight_time = 17,4 h, 1 przesiadka (Lizbona):** KAYAK.pl średnio 17 h 21 min (z długą przesiadką; przy dobrej przesiadce ok. 14–15 h). TAP lata do Recife codziennie przez cały rok.
- **transfer = 1,0 h.**
- **flight_price (szacunek):** III ok. 8 593 zł (VI + 4 977 zł) przycięte do 115% górnej granicy typowych cen; średnia = środek zakresu typowych cen (KAYAK.pl jej nie podaje).
- **local_season:** H XII–II i VII, M III i X–XI, L IV–VI i VIII–IX.

## Flagi

- **holidays:** II–III = 1 (karnawał, zależnie od roku).
- **Pominięte:** rekiny (ostrzeżenia dotyczą głównie plaż w Recife i Jaboatão, nie Porto de Galinhas).

## Do przeglądu

1. **Opad z Recife** – prawdopodobnie zawyżony dla bazy.
2. **UV z Salvadoru.**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Opad:** zamieniony z Recife (2 155 mm) na klimatologię Climatempo dla Porto de Galinhas (ok. 1 230 mm/rok), szacunek. Dni deszczowe zostają z Recife. Uwaga 1 rozwiązana.
- **UV z Salvadoru:** zostaje (strony Recife i Natal w BestDateWeather się nie wczytują). Uwaga 2 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Recife (ok. 50 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11+, 10, 9, 9, 11, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IV, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,997, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 13,5 / 14,4 / 14,2 / 12,4 / 10,1 / 8,9 / 9,3 / 11,0 / 12,8 / 13,7 / 13,4 / 13,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 271 DU): 13,4–13,9; model na 1.11 przy ozonie klimatologicznym (271 DU): 13,7.
- Wynik (I–XII): 14, 14, 14, 12, 10, 9, 9, 11, 13, 14, 13, 13.

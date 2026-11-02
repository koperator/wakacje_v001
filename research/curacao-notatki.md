# Curaçao – Jan Thiel / Mambo Beach – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Lotnisko Hato, normy 1991–2020 (Meteorological Department Curaçao; tabela Wikipedii) | Stacja ok. 12–15 km od bazy, dni ≥ 1 mm. |
| dew_point, wind | Meteorological Department Curaçao, oficjalne średnie 1991–2020 (PDF) | Punkt rosy wprost; wiatr 10 m w węzłach × 1,852. |
| uv | BestDateWeather, Curaçao (12.17°N 68.98°W) | |
| water | seatemperature.org, Willemstad | seatemperatu.re i weather2travel się nie wczytały. |
| local_season | Wiedza przewodnikowa | Szacunek. |

Odrzucone: tabela Wikipedii „Willemstad” (weather.directory, model: różnica dzień–noc tylko ok. 1 °C) oraz strona Weather Spark o id 30976 (inna lokalizacja, wiatr 3–4 mph).

## Szacunki

- **beaches = 3:** Mambo i Jan Thiel to małe, częściowo sztuczne plaże przy beach clubach (płatne leżaki, tłok), ale spokojna, czysta woda; ładne zatoczki na zachodzie są dalej niż 15 min.
- **greenery = 2:** sucha wyspa, kaktusy i krzewy.
- **sightseeing = 3:** Willemstad (UNESCO), park Christoffel, Shete Boka, nurkowanie, Klein Curaçao.
- **local_prices = 4:** ceny zbliżone do holenderskich, restauracje w beach clubach drogie.
- **flight_time = 15,0 h (szacunek), 1 przesiadka:** KAYAK.pl nie podaje średniej, najszybsze połączenie przez Amsterdam 14 h 55 min (KLM AMS–CUR codziennie, cały rok).
- **transfer = 0,4 h:** Hato – Jan Thiel ok. 20 km.
- **flight_price (szacunek):** III 4 483 zł; XII ok. 9 344 zł wyliczone z „o 4 861 zł mniej niż najdroższy miesiąc” i przycięte do 115% górnej granicy typowych cen (6 400 zł).
- **local_season:** H XII–IV, M VII–VIII (wakacje w Holandii), L V–VI i IX–XI.

## Flagi

Brak. Pominięte: huragany (Curaçao leży na południe od głównych torów, jak Aruba), karnawał II–III (bez zamknięć).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Czas lotu 15,0 h (szacunek):** zostaje; KLM AMS–CUR lata codziennie przez cały rok.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Curaçao). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 9. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,001, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,0 / 11,8 / 13,2 / 13,7 / 13,1 / 12,6 / 12,8 / 13,3 / 12,9 / 11,4 / 10,0 / 9,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 258 DU): 10,6–11,7; model na 1.11 przy ozonie klimatologicznym (261 DU): 10,7.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 11, 10, 9.

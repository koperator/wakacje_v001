# Aruba – Palm Beach – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Departamento Meteorologico Aruba, normy 1991–2020 (tabela Wikipedii „Oranjestad”) | Stacja lotniska, ok. 10 km od Palm Beach. Dni ≥ 1 mm. |
| dew_point, wind | Climate summary Aruba, lotnisko Beatrix 1971–2000 (Meteorological Department Curaçao) | Punkt rosy podany wprost i średni wiatr na 10 m ze stacji – dokładnie według definicji, więc zwykłe wartości. Weather Spark (średnia obszarowa) podaje podobny wiatr (25–34 km/h). Aruba ma najsilniejszy wiatr w bazie (22–32 km/h). |
| sun | weather2travel (CRU, liczby całkowite) | Brak nasłonecznienia w normach stacji (tylko zachmurzenie). Szacunek. |
| uv | BestDateWeather, Aruba (Open-Meteo `uv_index`, ERA5 2016–2025) | Ta sama metoda. |
| water | seatemperatu.re, Aruba | weather2travel i Weather Spark (79–83 °F) zgodne. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 5:** Eagle Beach (ok. 5 min) i Palm Beach: biały piasek, spokojna, płytka woda po zawietrznej stronie; poziom kotwic Boracay / Turks and Caicos (Palm Beach sama jest zatłoczona, stąd szacunek).
- **greenery = 1:** sucha wyspa z kaktusami i krzewami; poziom kotwic Marsa Alam / Corralejo.
- **flight_time = 14,0 (szacunek):** KAYAK się nie wczytał, momondo podaje „najszybszy lot” 23 h 50 min, co nie pasuje do codziennego KLM Amsterdam–Aruba (ok. 2 h + ok. 10 h + przesiadka).
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

**sightseeing = 2** i **local_prices = 4** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Arubę.

## Flagi

Brak. Aruba leży poza pasem sargassum (All-Inclusive Guide) i zwykle poza torem huraganów.

## Ceny lotów

Momondo: najtaniej kwiecień–maj (ok. 3 664 zł średnio); inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 24 pobrane strony. Nieudane: KAYAK, meteo.aw (dane tylko w plikach), weather.gov.aw (robots.txt), seatemperatu.re Palm Beach.

## Do przeglądu

1. **Czas lotu jako szacunek.**
2. **Nasłonecznienie** z CRU.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: IV 3 662; najtaniej IV, najdrożej VIII; średnia 12 mies. 4 812 zł; typowo 4 398–5 452 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 100 / 5 100 / 5 100 / 3 700 / 4 300 / 4 300 / 4 800 / 5 500 / 4 300 / 4 300 / 4 300 / 5 100.

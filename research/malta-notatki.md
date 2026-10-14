# Malta – Sliema / St Julian's – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Luqa (lotnisko), normy 1991–2020 (Meteo Climat; nasłonecznienie MaltaWeather.com) | Stacja ok. 7 km od Sliemy. Dni ≥ 1 mm. |
| dew_point | Wzór Magnusa: średnia temp. 1991–2020 + wilgotność Luqa 1961–1990 (NOAA) | Szacunek. |
| uv | BestDateWeather, Malta (Open-Meteo `uv_index`, ERA5 2016–2025), 35.90°N 14.51°E | Punkt praktycznie w Sliemie. |
| wind | Weather Spark, „Malta” (średnia obszarowa) | Brak strony dla Sliemy. Szacunek. |
| water | seatemperature.org (tabela w Wikipedii „Climate of Malta”) | Zgodne z MaltaWeather.com i weather2travel co do 1,5 °C. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki (po jednym zdaniu)

- **greenery = 2:** sucha, skalista wyspa z nielicznymi drzewami; poziom kotwic Santorini / Djerba.
- **local_season:** H VI–IX, M IV–V i X, L XI–III.

**beaches = 2**, **sightseeing = 4** i **local_prices = 3** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Maltę.

## Flagi

Brak. Meduzy (Pelagia noctiluca) pojawiają się latem przy Malcie, ale nie znalazłem źródła z sezonowością.

## Czas lotu

Przyjęte: **3,1 h, 0 przesiadek** (KAYAK: Wizz Air codziennie, LOT 3× w tygodniu, średnio 3 h 05 min).

## Ceny lotów

KAYAK: najtaniej marzec (mediana 120 USD w obie strony). Wszystkie miesiące: `null`.

## Pomiar

Ok. 0 wyszukiwań i 18 pobranych stron.

## Do przeglądu

1. **Flaga meduz** latem, jeśli znajdzie się źródło.
2. **Wiatr** dla całej wyspy.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: III 469, X 829, XI 771; najtaniej III, najdrożej X; średnia 12 mies. 592 zł; typowo 431–866 zł + bagaż 300.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 800 / 800 / 800 / 900 / 900 / 1 000 / 1 000 / 1 000 / 1 000 / 1 100 / 1 100 / 800.

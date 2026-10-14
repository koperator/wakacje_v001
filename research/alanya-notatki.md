# Alanya (Turcja) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun, water | Alanya, normy 1991–2020 (NOAA, Turkish State Meteorological Service), tabele Wikipedii | Stacja w mieście. Dni ≥ 1 mm. Temperatura morza z osobnej tabeli dla Alanyi; Weather Spark (62–83 °F) zgodny. |
| dew_point | Wzór Magnusa: średnia temp. + wilgotność 1991–2020 | Szacunek. |
| uv | BestDateWeather, Antalya (Open-Meteo `uv_index`, ERA5 2016–2025), 36.90°N 30.69°E | Brak strony dla Alanyi (błąd pobrania); Antalya ok. 115 km na W, to samo wybrzeże. Szacunek. |
| wind | Weather Spark, Alanya | Ta sama metoda. |
| local_season | Wiedza przewodnikowa (szczyt VI–IX) | Szacunek. |

## Szacunki (po jednym zdaniu)

- **sightseeing = 3:** twierdza, jaskinie, kanion Sapadere, a w zasięgu Side, Aspendos i Antalya; poziom kotwicy Phuket.
- **local_prices = 2:** jedzenie i transport tanie, choć ceny w euro rosną przez inflację; poziom Phu Quoc / Djerba.
- **local_season:** H VI–IX, M IV–V i X, L XI–III.

**beaches = 2** i **greenery = 3** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Alanyę.

## Flagi

Brak. Święta (Ramazan i Kurban Bayramı) zwiększają tylko ruch turystów krajowych.

## Czas lotu

Przyjęte: **3,1 h, 0 przesiadek** (KAYAK: SunExpress, Corendon i Pegasus bezpośrednio Warszawa–Antalya, średnio 3 h 07 min, także jesienią i zimą). Z lotniska w Antalyi ok. 2 h drogi (nie wliczone); latem bliżej Gazipaşa.

## Ceny lotów

KAYAK: najtaniej luty (mediana 184 USD w obie strony); inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 0 wyszukiwań i 20 pobranych stron. Nieudane: BestDateWeather Alanya.

## Do przeglądu

1. **Całoroczność lotów bezpośrednich** (KAYAK pokazuje oferty X–III, ok. 6 rejsów tygodniowo).
2. **UV z Antalyi.**

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: II 719, VII 1 251, VIII 1 239; najtaniej II, najdrożej VII; średnia 12 mies. 1 051 zł; typowo 849–1 270 zł + bagaż 300.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 1 200 / 1 000 / 1 200 / 1 400 / 1 400 / 1 500 / 1 600 / 1 500 / 1 500 / 1 400 / 1 200 / 1 200.

# Djerba (Tunezja) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Strefa hotelowa na wschodnim wybrzeżu (Sidi Mahrez, Midoun). Stacja Djerba na lotnisku Mellita (ok. 20 km).

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Stacja Djerba, normy 1981–2010 (Institut National de la Météorologie; nasłonecznienie NOAA 1961–1990) | Stacja na wyspie. Dni ≥ 1 mm. |
| dew_point | Wzór Magnusa: średnia temp. + wilgotność (NOAA 1961–1990) | Szacunek. |
| uv | BestDateWeather, Djerba (Open-Meteo `uv_index`, ERA5 2016–2025), 33.81°N 10.86°E | Punkt na wyspie. |
| wind | Weather Spark, Midoun | Ta sama metoda; Midoun leży w strefie hotelowej. |
| water | seatemperatu.re, Djerba (środek podanego przedziału °F) | Weather Spark Midoun zgodny co do 1 °F. |
| local_season | Champion Traveler (szczyt VII–VIII, wrzesień, najmniej II) | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 3:** szerokie, piaszczyste plaże ze spokojną wodą, ale bardzo płytkie wejście i okresowo trawa morska (posidonia) na brzegu; poziom kotwic Sopot / Negombo.
- **sightseeing = 3:** Houmt Souk, El Ghriba, Djerbahood, a w zasięgu wycieczki Matmata i plany Gwiezdnych Wojen; poziom kotwicy Phuket.
- **local_season:** H VII–VIII, M V–VI i IX–X, L XI–IV.

**greenery = 2** i **local_prices = 2** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Djerbę.

## Flagi

Brak. Nie znalazłem źródła na sezonowe meduzy ani wodorosty dla Djerby; Ramadan w strefie hotelowej praktycznie nie zmienia usług (bez źródła, więc bez flagi).

## Czas lotu

Przyjęte: **6,9 h, 1 przesiadka** (Trip.com: najkrótsza oferta przez Monachium, Lufthansa, 6 h 55 min). Regularnych lotów bezpośrednich brak (Nouvelair zawieszony); latem czartery biur podróży ok. 3,5 h.

## Ceny lotów

Nie ustalono typowych cen miesięcznych. Wszystkie miesiące: `null`.

## Pomiar

Ok. 4 wyszukiwania i 23 pobrane strony. Nieudane: KAYAK (2×), momondo.

## Do przeglądu

1. **Czas lotu z pojedynczej oferty** Trip.com (powrót DJE–WAW), nie z typowych czasów.
2. **Woda zimą 15–17 °C** – Djerba to kierunek głównie V–X.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VII 2 515, IX 1 420; najtaniej IX, najdrożej VII; średnia 12 mies. 1 981 zł; typowo 1 419–2 426 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 1 700 / 1 700 / 1 700 / 1 700 / 2 000 / 2 000 / 2 500 / 2 200 / 1 400 / 2 000 / 1 700 / 1 700.

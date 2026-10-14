# Cancún – strefa hotelowa (Meksyk) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun | Cancún (lotnisko/obserwatorium), normy 1991–2020 (Servicio Meteorológico Nacional, Weather.Directory) | Stacja w Cancún. |
| rain_days | Ta sama stacja, dni ≥ 0,1 mm × 0,7 | Jak w Punta Canie: przeliczenie z progu 0,1 mm na 1 mm, szacunek. Weather Spark (≥ 1 mm z reanalizy) daje więcej (4–14 dni), bo model zawyża liczbę dni z małym opadem. |
| dew_point | Wzór Magnusa ze średniej temp. i wilgotności stacji | Szacunek. |
| uv | BestDateWeather, Cancún (Open-Meteo `uv_index`, ERA5 2016–2025) | Ta sama metoda. |
| wind | Weather Spark, Cancún | Ta sama metoda. |
| water | seatemperatu.re, Cancún | Tabela w Wikipedii (bez źródła) zgodna co do 1 °C. |
| local_season | Wiedza przewodnikowa | Szacunek. |
| flags | All-Inclusive Guide (sargassum miesiąc po miesiącu) | |

## Szacunki (po jednym zdaniu)

- **local_prices = 3:** strefa hotelowa droga, centrum miasta tańsze; poziom Cypru / Malty.
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

**beaches = 4**, **greenery = 3** i **sightseeing = 4** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Cancún.

## Flagi – uzasadnienie

- **algae (sargassum):** V = 1, VI–IX = 2, X = 1 (All-Inclusive Guide: wysoko VI–VIII, lipiec najgorszy, wrzesień umiarkowanie-wysoko; wschodnia część strefy hotelowej mocno, północna słabiej).
- **cyclone:** VIII–X = 1 (szczyt sezonu huraganów; wiedza ogólna, do przeglądu).

## Czas lotu

Przyjęte: **14,1 h, 1 przesiadka** przez Amsterdam (KAYAK: 14 h 05 min; KLM lata do Cancún cały rok). Najczęściej Frankfurt.

## Ceny lotów

KAYAK: najtaniej maj (mediana 929 USD); inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 0 wyszukiwań i 22 pobrane strony.

## Do przeglądu

1. **Dni deszczowe** przeliczone z progu 0,1 mm (jak Punta Cana).
2. **Flaga huraganów** bez osobnego źródła.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: V 3 643, VIII 4 690, X 4 694; najtaniej V, najdrożej X; średnia 12 mies. 4 299 zł; typowo 3 899–4 790 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 500 / 4 500 / 4 500 / 4 500 / 3 600 / 4 000 / 4 300 / 4 700 / 4 000 / 4 700 / 4 000 / 4 500.

# Protaras (Cypr) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Paralimni (Meteorological Service of Cyprus), tabela Wikipedii | Stacja ok. 3 km od Protaras. Okres niepodany. Dni ≥ 1 mm. |
| sun | Larnaka, lotnisko, normy 1991–2020 (NOAA) | Paralimni nie ma nasłonecznienia; Larnaka ok. 45 km, to samo wybrzeże południowo-wschodnie. Zwykłe wartości, jak przy Negombo/Kolombo. |
| dew_point | Wzór Magnusa: średnia temp. Paralimni + wilgotność Larnaki | Szacunek. |
| uv | BestDateWeather, Larnaka (Open-Meteo `uv_index`, ERA5 2016–2025) | Brak stron dla Protaras i Ayia Napa. |
| wind | Weather Spark, Protaras | Ta sama metoda. |
| water | seatemperatu.re, Protaras | Weather Spark (62–82 °F) zgodny. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Fig Tree Bay i sąsiednie zatoki: drobny piasek, bardzo czysta woda, łagodne wejście; poziom kotwic Cancún / Punta Cana.
- **greenery = 2:** suche zarośla i niskie wzgórza, latem brązowo; poziom kotwic Santorini / Djerba.
- **sightseeing = 3:** przylądek Greco, Ayia Napa, Larnaka, Nikozja i Famagusta w zasięgu wycieczki; poziom kotwicy Phuket.
- **local_season:** H VII–VIII, M IV–VI i IX–X, L XI–III.

**local_prices = 3** jako zwykła wartość: kotwica w rejestrze wymienia Cypr.

## Flagi

Brak. Zamknięte hotele i restauracje poza sezonem (XI–III) są w notatce kierunku; nie znalazłem źródła, które by to potwierdzało, więc bez flagi.

## Czas lotu

Przyjęte: **3,5 h, 0 przesiadek** (KAYAK: Wizz Air i LOT bezpośrednio do Larnaki codziennie, średnio 3 h 29 min). Z lotniska ok. 45 min drogi.

## Ceny lotów

KAYAK: najtaniej styczeń (mediana 147 USD w obie strony). Wszystkie miesiące: `null`.

## Pomiar

Ok. 0 wyszukiwań i 21 pobranych stron. Nieudane: BestDateWeather Protaras i Ayia Napa.

## Do przeglądu

1. **Flaga „inne” XI–III** za zamknięte obiekty w Protaras, jeśli znajdzie się źródło.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 574, VIII 1 239, X 1 254; najtaniej I, najdrożej X; średnia 12 mies. 849 zł; typowo 602–1 215 zł + bagaż 300.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 900 / 1 000 / 1 000 / 1 100 / 1 100 / 1 100 / 1 400 / 1 500 / 1 100 / 1 600 / 1 000 / 1 000.

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

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Protaras). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 4, 5, 7, 9, 10, 11, 10, 8, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,5 / 3,8 / 5,4 / 7,2 / 8,8 / 10,0 / 10,4 / 9,6 / 7,6 / 5,2 / 3,1 / 2,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 290 DU): 3,8–3,9; model na 1.11 przy ozonie klimatologicznym (282 DU): 4,0.
- Wynik (I–XII): 2, 4, 5, 7, 9, 10, 11, 10, 8, 5, 3, 2.

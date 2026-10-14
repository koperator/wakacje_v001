# Zanzibar – Nungwi / Kendwa (Tanzania) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Nungwi i Kendwa, północny kraniec Unguji; pływy praktycznie niewidoczne (Altezza Travel), więc kąpiel o każdej porze. Stacja Zanzibar/Kisauni przy lotnisku, ok. 55 km na S.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Zanzibar/Kisauni, normy 1991–2020 (NOAA, Tokyo Climate Center; tabela Wikipedii) | Jedyna stacja na wyspie z normami. Dni ≥ 1 mm. Zwykłe wartości jak przy Corralejo (stacja na tej samej wyspie), choć północ jest raczej suchsza. |
| dew_point | Wzór Magnusa: średnia temp. Kisauni + wilgotność Dar es Salaam (DWD) | Brak wilgotności dla Zanzibaru; Dar es Salaam leży ok. 70 km po drugiej stronie kanału, ten sam reżim monsunowy. Szacunek. |
| sun | Dar es Salaam (DWD) | Jak wyżej; weather2travel (CRU) dla Zanzibaru: 6–8 h, zgodnie. Szacunek. |
| uv | BestDateWeather, Zanzibar (Open-Meteo `uv_index`, ERA5 2016–2025), 6.16°S 39.20°E | Punkt to Stone Town; ta sama wyspa. |
| wind | Weather Spark, Nungwi (mph → km/h) | Ta sama metoda. |
| water | meerestemperatur.de, Nungwi | Weather Spark (78–84 °F) zgodny. |
| local_season | Altezza Travel (szczyt VI–X, XII–II, niski IV–V) | Szacunek. |
| flags | Altezza Travel (zamknięte hotele IV–V), Wego (Ramadan 2027) | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** biały piasek i turkusowa woda bez problemu pływów; na granicy 5 (Kendwa), ale łodzie i sprzedawcy na Nungwi.
- **greenery = 3:** palmy i zarośla na koralowym podłożu, w porze suchej brązowo.
- **sightseeing = 4:** Stone Town (UNESCO) w zasięgu ok. 1 h, Jozani, Mnemba, farmy przypraw; poniżej kotwicy Siem Reap.
- **local_prices = 3:** jedzenie w strefie turystycznej i wycieczki na poziomie Cypru / Malty, lokalnie taniej.
- **local_season:** H I–II i VI–IX oraz XII, M III i X–XI, L IV–V.

## Flagi – uzasadnienie

- **holidays:** Ramadan w I–III „zależnie od roku” (2027: ok. 8.02–9.03; w kolejnych latach coraz wcześniej). Restauracje poza hotelami zamknięte w dzień.
- **other:** IV–V – część hoteli i restauracji zamknięta w długich deszczach. Poziom 1.
- **Pominięte:** wodorosty (problem głównie wschodniego wybrzeża: Paje, Jambiani), fale (północ osłonięta).

## Czas lotu

Przyjęte: **13,9 h, 1 przesiadka** przez Stambuł (KAYAK: 13 h 56 min). Dojazd z lotniska ok. 1 h nie jest wliczony.

## Ceny lotów

KAYAK: najtaniej listopad (mediana 848 USD w obie strony), najdrożej grudzień (1 196 USD); inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 26 pobranych stron. Nieudane: seatemperatu.re Nungwi, The Citizen (treść artykułu się nie wczytała).

## Do przeglądu

1. **Punkt rosy i słońce z Dar es Salaam** (zastępstwo).
2. **Opad dla północy wyspy** prawdopodobnie niższy niż na stacji przy lotnisku.
3. **Plaże 4 czy 5** (Kendwa).

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VII 4 436, XI 3 314, XII 4 674; najtaniej XI, najdrożej XII; średnia 12 mies. 3 903 zł; typowo 3 405–4 615 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 300 / 4 300 / 3 900 / 3 600 / 3 600 / 4 300 / 4 400 / 4 300 / 4 300 / 3 900 / 3 300 / 4 700.

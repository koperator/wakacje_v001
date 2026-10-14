# Nadi / Denarau (Viti Levu, Fidżi) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Baza pobytu

Wyspa Denarau (strefa resortów i marina) przy Nadi, na zachodniej, suchszej stronie Viti Levu. Stacja lotniska Nadi jest ok. 10 km na północ, na tej samej równinie przybrzeżnej, więc wartości ze stacji wpisałem jako zwykłe.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Lotnisko Nadi, normy 1991–2020 (WMO; tabela Wikipedii) | Stacja ok. 10 km od bazy, dni ≥ 1 mm. Nasłonecznienie: godziny w miesiącu ÷ dni. |
| dew_point | Wzór Magnusa: średnia (maks.+min.)/2 i wilgotność 1962–1990 (NOAA/DWD) | Szacunek. Wilgotność ze starszych norm może pochodzić z porannych pomiarów, więc punkt rosy w porze deszczowej (ok. 24 °C) może być lekko zawyżony. timeanddate (punkt rosy wprost) się nie wczytał. |
| uv | BestDateWeather, Fidżi (Open-Meteo `uv_index`, ERA5 2016–2025), 17.71°S 177.99°E | Brak strony dla Nadi lub Denarau. Punkt leży w górzystym, bardziej zachmurzonym środku Viti Levu (ok. 60 km od bazy), więc UV dla suchego zachodu jest raczej zaniżone (np. V = 5). Szacunek. |
| wind | Weather Spark, Nadi | Ta sama metoda. |
| water | Weather Spark, Nadi (°F → °C) | seatemperatu.re (Denarau) się nie wczytał. |
| local_season | Wiedza przewodnikowa | Szacunek. |
| flags | Fiji Meteorological Service (przez Asia Pacific Report) | |

## Szacunki (po jednym zdaniu)

- **beaches = 2:** plaże na Denarau są szarobrązowe, a woda mętna od delty rzeki Nadi. Dobre plaże są dopiero na wyspach Mamanuca (rejs 30–60 min), więc poza zasięgiem 15 min. Poziom kotwic Malta / Alanya.
- **greenery = 3:** ogrody resortów, pola trzciny cukrowej, zielone góry Sabeto; w porze suchej trawy brązowieją. Poziom kotwic Cancún / Alanya.
- **sightseeing = 3:** rejsy na Mamanuca (Cloud 9, Malolo, Monuriki), Ogród Śpiącego Olbrzyma, źródła Sabeto, świątynia Sri Siva Subramaniya, wydmy Sigatoka; poziom kotwic Phuket / Mauritius.
- **local_prices = 3:** restauracje i wycieczki na Denarau drogie, w Nadi tanio; poziom kotwic Cypr / Malta.
- **flight_time = 30,0 (szacunek):** KAYAK.pl pokazuje tylko pojedyncze oferty (najszybsza 29 h 50 min z 2 przesiadkami przez Dubaj i Hongkong; powrót 28 h 50 min przez Hongkong i Stambuł), bez typowego czasu.
- **local_season:** H VI–IX (pora sucha i ferie w Australii i Nowej Zelandii), XII–I (Boże Narodzenie, Nowy Rok); M IV–V i X; L II–III i XI.

## Flagi – uzasadnienie

- **cyclone:** I–III = 1. Fiji Meteorological Service: sezon XI–IV, najwięcej w I–II, średnio 7 cyklonów w regionie RSMC Nadi (szerszym niż Fidżi). Skutki to ulewy, odwołane rejsy i loty oraz powodzie w Nadi (np. 2009, 2012). XII i IV nie mają flagi (mniejsza częstość, jak przy szczycie huraganów na Karaibach).
- **Pominięte:** Diwali i inne święta (bez zamknięć ponad zwykły sezon).

## Czas lotu

Przyjęte: **30,0 h (szacunek), 2 przesiadki.**

- KAYAK.pl: wszystkie połączenia z 1 przesiadką idą przez Los Angeles, ale z długimi przesiadkami (np. 32 h 35 min przez San Francisco), więc nie są szybsze.
- Fiji Airways lata do Nadi z Hongkongu, Singapuru, Los Angeles, Sydney i Auckland.

## Ceny lotów

KAYAK.pl: mediana od 6 198 zł (czerwiec) do 9 665 zł (sierpień), średnio 6 798 zł w obie strony. To inny scenariusz, więc wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i ok. 20 pobranych stron. Nieudane: timeanddate (Nadi), BestDateWeather (Nadi, Denarau), seatemperatu.re (Denarau).

## Do przeglądu

1. **UV z punktu w środku wyspy,** prawdopodobnie zaniżone.
2. **Plaże = 2:** baza na Denarau a dobre plaże na wyspach. Gdyby bazą była wyspa Mamanuca, plaże ok. 5, ale dojazd z lotniska z rejsem.
3. **Czas lotu jako szacunek.**

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VI 6 198, VII 8 762, VIII 9 665; najtaniej VI, najdrożej VIII; średnia 12 mies. 6 798 zł; typowo 6 338–7 758 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 7 900 / 6 500 / 6 500 / 6 800 / 6 800 / 6 200 / 8 800 / 8 900 / 7 900 / 6 800 / 6 500 / 7 900.

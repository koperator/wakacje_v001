# Langkawi (Malezja) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Pantai Cenang, zachodnie wybrzeże. Stacja Pulau Langkawi (MetMalaysia) stoi na lotnisku, ok. 3 km od plaży, więc to najlepiej dopasowana stacja w bazie.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, dew_point | MetMalaysia, stacja Pulau Langkawi (tabela Wikipedii) | Okres niepodany. Climates to Travel podaje identyczne opady i dni deszczowe, a temperatury dla 2000–2020 różnią się o najwyżej 0,7 °C, więc to raczej ta sama stacja. Próg dni deszczowych niepodany (MetMalaysia zwykle liczy ≥ 1 mm, ale nie mam tego na piśmie), więc szacunek. Punkt rosy wzorem Magnusa ze średniej temp. i średniej wilgotności stacji (szacunek). |
| sun | Climates to Travel (sumy ÷ liczba dni) | Jedyne źródło nasłonecznienia; okres niepodany. |
| uv | BestDateWeather, Langkawi (Open-Meteo `uv_index`, ERA5 2016–2025), 6.35°N 99.73°E | Ta sama metoda; punkt praktycznie na Pantai Cenang. |
| wind | Weather Spark, Pantai Cenang (mph → km/h) | Ta sama metoda. |
| water | seatemperatu.re, Langkawi | Zgodne z Weather Spark (83–87 °F) i Climates to Travel (28,5–30,5 °C). BestDateWeather podaje do 31 °C. |
| local_season | The World Pursuit (najdrożej I–III i XII, tanio VI i IX–X, letni szczyt) | Szacunek. |
| flags | Langkawi Book (dane szpitalne o meduzach), The Vibes (statystyki 2023–2025) | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Pantai Cenang to szeroka plaża z drobnym piaskiem i łagodnym wejściem, ale meduzy i skutery wodne; poziom kotwic Cancún / Punta Cana.
- **sightseeing = 3:** SkyCab i Sky Bridge, geopark i namorzyny Kilim, wodospady; poziom kotwicy Phuket.
- **local_prices = 2:** wyspa bezcłowa, tanie jedzenie lokalne, droższe wycieczki; poziom Phu Quoc / Djerba.
- **local_season:** H XII–III, M IV, VII–VIII (wakacje letnie) i XI, L V–VI i IX–X.

**greenery = 5** jako zwykła wartość: kotwica w rejestrze wprost wymienia Langkawi.

## Flagi – uzasadnienie

- **jellyfish:** VII i X–XII = 1 (dane szpitalne 2012–2014). Poparzenia zdarzają się przez cały rok (2024: 73 przypadki, śmiertelny w XI 2025), ale flaga tylko w miesiącach szczytu.
- **holidays:** Hari Raya Aidilfitri w I–III „zależnie od roku”. Święto przesuwa się o ok. 11 dni rocznie przez wszystkie miesiące, więc oflagowałem tylko miesiące, w których wypada w latach 2027–2030 (do decyzji, jak traktować święta księżycowe).
- **Pominięte:** fale (brak źródła na wyraźne pogorszenie kąpieli przy monsunie SW na Cenang), mgła z pożarów na Sumatrze (tylko w latach suchych, VIII–X), Chiński Nowy Rok (na Langkawi głównie tłok).

## Czas lotu

Przyjęte: **23,1 h** (KAYAK.com.my: najkrótszy czas z Warszawy), **1 przesiadka** (Skyscanner: oferty Emirates z 1 przesiadką; flydubai lata Dubaj–Penang–Langkawi). Rozbieżność: samo połączenie przez Dubaj powinno dawać ok. 15–17 h; 23 h wygląda na połączenie z długą przesiadką albo przez Kuala Lumpur. LOT lata tylko sezonowym czarterem.

## Ceny lotów

Nie ustalono typowych cen miesięcznych. Wszystkie miesiące: `null`.

## Pomiar

Ok. 6 wyszukiwań i 27 pobranych stron. Nieudane: momondo (2×), flydubai (404).

## Do przeglądu

1. **Czas lotu 23,1 h** wobec ok. 15–17 h możliwych przez Dubaj; sprawdzić w KAYAK.pl.
2. **Święta księżycowe** (Hari Raya, Tết, Chiński Nowy Rok): przyjąć zasadę „miesiące w najbliższych 4 latach” czy flagować wszystkie możliwe.
3. **Brak flagi fal** w porze monsunu SW.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VII 3 238, XII 5 272; najtaniej VII, najdrożej XII; średnia 12 mies. 4 234 zł; typowo 3 727–5 142 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 800 / 4 800 / 4 800 / 4 200 / 3 700 / 3 700 / 3 200 / 4 200 / 3 700 / 3 700 / 4 200 / 5 300.

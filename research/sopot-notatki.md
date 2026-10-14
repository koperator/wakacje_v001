# Sopot (Polska) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun, dew_point | Gdańsk, normy 1991–2020 (IMGW, meteomodel.pl; tabela Wikipedii) | Stacja ok. 10 km. Punkt rosy podany wprost (timeanddate 2005–2015), więc zwykła wartość. Nasłonecznienie: sumy ÷ liczba dni. |
| rain_days | Weather Spark, Gdańsk, dni ≥ 0,04 in (≈ 1 mm) | IMGW w tabeli liczy dni od 0,1 mm (14–18 dni), czyli inną definicję. Weather Spark ma właściwy próg, ale to reanaliza; zimą może zaniżać (śnieg). Szacunek. |
| uv | BestDateWeather, Gdańsk (Open-Meteo `uv_index`, ERA5 2016–2025) | Ta sama metoda. Weather Atlas (w tabeli Wikipedii) podaje 1–5, podobnie. |
| wind | Weather Spark, Gdańsk | Ta sama metoda. |
| water | seatemperatu.re, Sopot | |
| local_season | kb.pl (szczyt od połowy VI do końca VIII; taniej V, początek VI, IX) | Szacunek. |
| flags | RMF24 (2020), TVN24 (2022) – zamknięte kąpieliska przez sinice | |

## Szacunki (po jednym zdaniu)

- **greenery = 3:** lasy parku krajobrazowego i parki tuż za plażą, ale zimą bez liści; poziom kotwic Cancún / Alanya.
- **sightseeing = 4:** Gdańsk (Główne Miasto) w 15 min i Malbork w ok. 1 h; poziom kotwic Malta / Cancún.
- **local_prices = 3:** Sopot to jedno z droższych miejsc w Polsce, poziom zbliżony do Cypru / Malty.
- **local_season:** H VII–VIII, M V–VI i IX, L X–IV.

**beaches = 3** jako zwykła wartość: kotwica w rejestrze wprost wymienia Sopot.

## Flagi – uzasadnienie

- **algae:** VII–VIII = 1 (zakwity sinic po upałach zamykają kąpieliska w części lat i dni; w 2022 r. wszystkie kąpieliska w Sopocie). Poziom 1, bo nie co roku.

## Czas lotu

Przyjęte: **1,0 h, 0 przesiadek** (KAYAK: LOT, 33 rejsy tygodniowo, średnio 57 min). Pociąg ok. 2,5–3 h.

## Ceny lotów

Nie ustalono. Wszystkie miesiące: `null`.

## Pomiar

Ok. 2 wyszukiwania i 21 pobranych stron. Nieudane: BestDateWeather Sopot, TVN24 (pobranie), PAP (robots.txt).

## Do przeglądu

1. **Dni deszczowe** z reanalizy (Weather Spark 5,5–8,6) wobec ok. 8–10 dni ≥ 1 mm, których można się spodziewać z danych IMGW; prawdopodobnie zaniżone.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 309, IV 450, XII 422; najtaniej I, najdrożej IV; średnia 12 mies. 356 zł; typowo 305–504 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 300 / 300 / 300 / 500 / 400 / 400 / 400 / 400 / 400 / 300 / 300 / 400.

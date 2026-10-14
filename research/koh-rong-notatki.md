# Koh Rong (Kambodża) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Koh Touch (przystań promów) i plaża Long Set (4K) na południowo-wschodnim krańcu wyspy. Stacja pogodowa w Sihanoukville, ok. 25 km przez morze. Dla Koh Rong słabo z danymi: brak stacji na wyspie i brak pełnych norm z jednym źródłem, więc szacunków jest więcej niż zwykle.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain | WMO World Weather Information Service, Sihanoukville, 1982–2024 (tabela Wikipedii) | Jedyna seria ze stacją. Okres dłuższy niż 1991–2020, ale to norma wieloletnia. |
| rain_days | Weather Spark, dni z opadem ≥ 0,04 in (≈ 1 mm), reanaliza | WMO WWIS podaje dni deszczowe, ale strona WWIS się nie wczytała. Próg zgodny z definicją, ale to model, nie stacja, więc szacunek. What's the Weather Like (bez źródła) daje podobny przebieg (2–22 dni). |
| sun | What's the Weather Like (liczby całkowite, bez źródła) | Jedyny wiarygodny przebieg: 8 h w porze suchej, 5 h w VI–IX. Zgodny z C3S 1991–2020 (weather-and-climate: I 9,0 h, IX 4,9 h). Climate-Data.org (8,6–9,5 h przez cały rok) i partir.com (do 11 h w maju) odrzucone jako nierealne w porze monsunu. Szacunek. |
| dew_point | Wzór Magnusa: średnia z maks. i min. WMO + wilgotność z Climate-Data.org (1991–2021) | Brak źródła z punktem rosy. Szacunek. |
| uv | BestDateWeather, Phu Quoc (Open-Meteo `uv_index`, ERA5 2016–2025), 10.23°N 103.97°E | Serwis nie ma stron Sihanoukville ani Koh Rong. Phu Quoc leży ok. 100 km na W, w tej samej zatoce i z tym samym monsunem SW, więc zastępstwo sensowne, ale to szacunek. |
| wind | Weather Spark, Sihanoukville (mph → km/h) | Ta sama metoda co dla pozostałych kierunków. Wyspa jest bardziej otwarta na morze niż ląd, więc wiatr może być nieco silniejszy. |
| water | seatemperatu.re, Koh Rong (°F → °C) | Dane dla wyspy; Weather Spark (Sihanoukville) różni się o najwyżej 1 °F. |
| local_season | IDC Travel (tłok i ceny miesiąc po miesiącu) | Szacunek. |
| flags | IDC Travel (morze, promy), North Vietnam (zamknięcia w porze deszczowej) | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Long Set i Sok San to białe, drobne piaski z łagodnym wejściem; przy Koh Touch śmieci i łodzie, ale najlepsza plaża w zasięgu 15 min decyduje.
- **greenery = 4:** wnętrze wyspy to dżungla; poziom kotwic Phuket / Mauritius, nie 5, bo baza to zabudowana wioska Koh Touch.
- **sightseeing = 2:** rejsy po wyspach, bioluminescencyjny plankton i wodospady, bez wybitnej atrakcji w zasięgu wycieczki; poziom kotwic Aruba / Marsa Alam.
- **local_prices = 2:** Kambodża jest tania (Siem Reap to kotwica 1), ale na wyspie wszystko jest dowożone promem, więc drożej niż na lądzie.
- **stops = 2:** momondo nie podaje liczby przesiadek; KOS ma loty tylko z Azji (Kuala Lumpur, Ho Chi Minh, Siem Reap, Dżakarta, Chiny), więc z Warszawy to co najmniej 2 przesiadki.
- **local_season:** H XII–II, M III–IV i XI, L V–X (IDC Travel).

## Rozbieżności między źródłami i wybór

- **Opad:** WMO 1982–2024: VIII 617 mm, rocznie 3 217 mm. Climate-Data.org (1991–2021, model): VIII 566 mm, rocznie ok. 3 350 mm. North Vietnam (bez źródła): VIII 297 mm, rocznie ok. 2 140 mm, czyli wyraźnie mniej. Przyjęto WMO (stacja). Wyspa może mieć mniej deszczu niż wybrzeże przy górach Elephant/Cardamom, ale nie ma na to danych.
- **Temperatury:** WMO 30,3–32,6 / 21,7–24,8 °C; What's the Weather Like 30–33 / 22–27 °C; Climate-Data.org podaje wartości modelu (maks. 28–29,5 °C), więc odrzucone.

## Ceny lotów

Nie ustalono typowych cen miesięcznych; momondo podaje tylko najniższą cenę ok. 3 937 zł. Wszystkie miesiące: `null`.

## Czas lotu

Przyjęte: **18,0 h** (momondo: „najszybszy lot”), **2 przesiadki** (szacunek). Alternatywa: Phnom Penh (lotnisko Techo) z 1 przesiadką, potem ok. 4 h drogi do Sihanoukville. Prom (45 min) i dojazd do przystani nie są wliczone.

## Flagi – uzasadnienie

- **waves:** V = 1, VI–VIII = 2 (IDC Travel: „Heaviest rainfall and roughest seas. Ferry schedules are unreliable”), IX = 1, X = 1 (do połowy miesiąca). Zamknięcia obiektów na wyspie są w notatkach tej samej flagi, bo to skutek tego samego monsunu.
- **holidays:** IV Khmerski Nowy Rok.
- **Pominięte:** Pchum Ben (IX/X) i Święto Wody (XI) – dotyczą głównie lądu i Phnom Penh; Full Moon Party (rozrywka, nie zamknięcie); kubomeduzy (pojedyncze doniesienia, bez źródła z sezonowością dla Kambodży).

## Pomiar

Ok. 6 wyszukiwań i 22 pobrane strony. Nieudane: WMO WWIS (strona główna bez danych), weather2travel (2×), cabaigne, BestDateWeather Sihanoukville i Koh Rong (strony nie istnieją), momondo Phnom Penh.

## Do przeglądu

1. **Najwięcej szacunków w bazie:** nasłonecznienie, dni deszczowe, UV i punkt rosy to szacunki. Dla Koh Rong nie znalazłem pełnej normy ze stacji poza temperaturą i opadem.
2. **Opad na wyspie a na lądzie** (WMO 3 217 mm/rok wobec 2 140 mm w North Vietnam).
3. **Czas lotu 18 h z 2 przesiadkami** i transfer promem; Phnom Penh + droga może być w praktyce wygodniejsze.
4. **Zwiedzanie 2** (czy Kampot i Bokor liczyć jako wycieczkę jednodniową z wyspy).

## Przegląd 2026-10-14 (stacje zastępcze)

- **sun:** zamiast What's the Weather Like (liczby całkowite, bez źródła) nasłonecznienie z Phu Quoc (Climates to Travel, sumy miesięczne ÷ dni), ok. 100 km na W, ta sama zatoka i monsun SW. Przebieg prawie ten sam (8,1–8,2 h w porze suchej, 4,4–4,8 h w VI–IX). Szacunek.
- **rain_days:** bez zmian. Kontrola ze stacją Trat (Tajlandia, NOAA 1991–2020, ≥ 1 mm, ok. 150 km na NW, to samo wybrzeże): 2,4–24,6 dnia, zgodnie z Weather Spark (2,7–23,2).
- **Czas lotu:** sprawdziłem LOT do Bangkoku jako drogę na Koh Rong. Lotów Bangkok–Sihanoukville już nie ma (ostatnie Air Cambodia i Thai AirAsia w 2025–2026, flightsfrom.com). Zostaje 18 h z 2 przesiadkami. Alternatywa przez Bangkok i Phnom Penh (Techo) daje ok. 14,5 h lotu, ale ok. 4 h drogi i promu.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl nie podaje średniej ani median; mediany z ofert na stronie: XI 4 550 zł, XII 5 063 zł; typowo 4 970–6 525 zł (średnia przyjęta jako środek zakresu).
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 400 / 5 400 / 5 700 / 5 700 / 5 100 / 5 100 / 5 100 / 5 100 / 5 100 / 5 100 / 4 600 / 5 100.

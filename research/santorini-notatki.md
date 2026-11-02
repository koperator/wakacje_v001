# Santorini (Grecja) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun, water | Climats et Voyages, Santorini, normy 1991–2020 | Jedyne źródło z normą 1991–2020 i pełnym zestawem. Stacja niepodana (najpewniej lotnisko). Temperatury zgodne co do 0,6 °C z biuletynami NOA 2013–2025 (stacja 183 m n.p.m.). |
| rain_days | Climats et Voyages | Próg niepodany, więc szacunek. |
| dew_point | Wzór Magnusa ze średniej temp. i wilgotności (Climats et Voyages) | Szacunek. |
| uv | BestDateWeather, Santorini (Open-Meteo `uv_index`, ERA5 2016–2025) | Punkt na wyspie. |
| wind | Weather Spark, Santorini (wyspa) | Ta sama metoda; Climats et Voyages podaje 18–24 km/h, podobnie. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Rozbieżności

- **Opad:** Climats et Voyages 1991–2020: 555 mm/rok; NOA 2013–2025 (stacja 183 m): 271 mm/rok. Duża różnica; możliwe, że ostatnie lata były suchsze albo stacje mierzą inaczej. Przyjęto normę 1991–2020.

## Szacunki (po jednym zdaniu)

- **sightseeing = 4:** kaldera, Oia, Akrotiri i wulkan to atrakcje wybitne, ale na jednej wyspie; poniżej kotwicy Siem Reap.
- **local_prices = 4:** jedzenie, transport i wycieczki wyraźnie droższe niż na Malcie czy Cyprze; poziom kotwic Barbados / Aruba.
- **flight_time = 6,0 (szacunek):** KAYAK nie podaje czasu przez Ateny (91% połączeń); WAW–ATH ok. 2 h 45 min + ATH–JTR ok. 45 min + przesiadka. Najszybsze połączenie przez Kraków (4 h 52 min) jest sezonowe.
- **local_season:** H VI–IX, M IV–V i X, L XI–III.

**beaches = 1** i **greenery = 2** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Santorini.

## Flagi – uzasadnienie

- **waves:** VII–VIII = 1 (meltemi, wzburzone morze i odwołane rejsy w części dni).
- **Pominięte:** zamknięte obiekty zimą (w notatce kierunku, bez źródła na zakres).

## Pomiar

Ok. 0 wyszukiwań i 22 pobrane strony. Nieudane: weather2travel.

## Do przeglądu

1. **Opad 1991–2020 a 2013–2025** (555 wobec 271 mm).
2. **Czas lotu jako szacunek.**

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 621, II 1 673, V 1 485; najtaniej I, najdrożej II; średnia 12 mies. 1 207 zł; typowo 938–1 525 zł + bagaż 300.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 1 100 / 2 000 / 1 300 / 1 500 / 1 800 / 1 700 / 1 700 / 1 700 / 1 700 / 1 500 / 1 300 / 1 300.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Santorini). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,2 / 3,4 / 5,1 / 6,8 / 8,5 / 9,6 / 10,0 / 9,2 / 7,2 / 4,9 / 2,8 / 2,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 304 DU): 3,2–3,7; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,7.
- Wynik (I–XII): 2, 3, 5, 7, 8, 10, 10, 9, 7, 5, 3, 2.

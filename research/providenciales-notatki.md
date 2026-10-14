# Providenciales – Grace Bay (Turks and Caicos) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Baza pobytu

Grace Bay, północne wybrzeże Providenciales. Nie znalazłem norm ze stacji: Wikipedia nie ma tabeli dla Providenciales, a tabela „Grand Turk” (Weather.Directory, różnica maks.–min. ok. 1 °C) wygląda na dane modelowe nad morzem, więc ją odrzuciłem.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun | weather2travel, Providenciales (CRU, Met Office, KNMI; liczby całkowite) | Jedyne pełne źródło. Brak stacji, więc szacunek. |
| rain_days | weather2travel („rain days”) × 0,7 | CRU liczy dni od ok. 0,1 mm; przeliczenie jak dla Punta Cany i Cancún. Szacunek. |
| dew_point | Wzór Magnusa: średnia (maks.+min.)/2 i stała wilgotność 77% (weather.now, średnia roczna) | Brak wilgotności miesięcznej. Szacunek, zgrubny. |
| uv | BestDateWeather, Turks and Caicos (Open-Meteo `uv_index`, ERA5 2016–2025), 21.77°N 72.34°W | Punkt na Providenciales, ok. 17 km od Grace Bay. |
| wind | Weather Spark, Cockburn Town (Grand Turk, ok. 150 km) | Jedyna strona Weather Spark dla wysp. Szacunek. |
| water | weather2travel, Providenciales | weather.now: ok. 26 °C w I–III i 30 °C w VI–X; Weather Spark (Grand Turk): 78–84 °F. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki (po jednym zdaniu)

- **Cała pogoda poza UV i wodą** to szacunek (brak stacji).
- **greenery = 2:** niska, sucha roślinność krzewiasta na płaskiej wyspie; poziom kotwic Santorini / Djerba.
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

**beaches = 5**, **sightseeing = 1** i **local_prices = 5** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Turks and Caicos.

## Flagi – uzasadnienie

- **cyclone:** VIII–X = 1 (szczyt sezonu huraganów; Irma i Maria w 2017 r.). Wiedza ogólna, bez osobnego źródła klimatologicznego.
- **Pominięte:** sargassum (All-Inclusive Guide: niskie ryzyko przez cały rok).

## Czas lotu

Przyjęte: **17,4 h, 2 przesiadki** (Trip.com: najszybciej American Airlines przez Miami i Frankfurt, 17 h 24 min, w kierunku powrotnym). Przez Nowy Jork z 1 przesiadką (LOT + JetBlue/American) może być ok. 15–16 h, ale bez potwierdzenia typowego czasu.

## Ceny lotów

Nie ustalono. Wszystkie miesiące: `null`.

## Pomiar

Ok. 2 wyszukiwania i 24 pobrane strony. Nieudane: KAYAK, momondo, Climats et Voyages, Weather Atlas, seatemperatu.re.

## Do przeglądu

1. **Brak stacji – cała pogoda z CRU** (najsłabsze dane klimatyczne w bazie obok Koh Rong).
2. **Punkt rosy ze stałej wilgotności.**
3. **Czas lotu przez Nowy Jork** (1 przesiadka) mógłby być krótszy.

## Przegląd 2026-10-14 (stacja zastępcza)

- **temp_day, temp_night, rain, rain_days:** zamiast CRU (liczby całkowite) stacja Matthew Town na Great Inagua (WMO; tabela Wikipedii), ok. 140 km na W. To ta sama, płaska i sucha wyspa pasatowa, a CRU dla Providenciales i tak interpoluje m.in. z tej stacji. Szacunek.
- **Różnice względem CRU:**
  - maks. latem wyższe o ok. 1 °C (VIII 33,0 wobec 32);
  - noce zimą niższe o ok. 0,5 °C;
  - opad roczny 658 mm wobec ok. 770 mm, najsuchiej VI–VII;
  - dni deszczowe 4–10 (bez przeliczania × 0,7) wobec 6–12.
- **dew_point:** przeliczony wzorem Magnusa ze średniej temperatury dobowej stacji i tej samej wilgotności 77%.
- **sun:** z CRU (stacja nie ma nasłonecznienia). **wind:** z Grand Turk.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: II 3 239, VII 6 271; najtaniej II, najdrożej VII; średnia 12 mies. 4 692 zł; typowo 4 040–5 164 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 300 / 3 400 / 5 300 / 5 300 / 4 100 / 4 100 / 5 900 / 4 700 / 4 100 / 4 100 / 4 100 / 5 300.

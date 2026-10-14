# Seszele – Mahé (Beau Vallon) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Beau Vallon, północno-zachodnie wybrzeże Mahé. Stacja WMO na lotnisku (wschodnie wybrzeże, ok. 20 km). Góry Mahé dzielą wyspę, więc Beau Vallon może mieć nieco mniej deszczu w porze pasatów SE niż strona wschodnia, ale nie ma na to danych.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, dew_point, sun | WMO, Seychelles International Airport, normy 1991–2020 (tabela Wikipedii) | Punkt rosy podany wprost (zwykła wartość, po raz drugi w bazie). Nasłonecznienie: Seychelles Meteorological Authority 1972–2011. |
| rain_days | Weather Spark, „Seychelles”, dni z opadem ≥ 0,04 in (≈ 1 mm) | Tabela WMO nie ma dni deszczowych. Próg zgodny, ale reanaliza, więc szacunek. |
| uv | BestDateWeather, Seszele (Open-Meteo `uv_index`, ERA5 2016–2025), 4.68°S 55.49°E | Punkt na Mahé, przy lotnisku. |
| wind | Weather Spark, „Seychelles” (średnia obszarowa) | Brak strony dla Mahé. Szacunek; Beau Vallon jest osłonięte od pasatu SE, więc lokalnie słabiej. |
| water | seatemperatu.re, Beau Vallon | Weather Spark (79–85 °F) zgodny. |
| local_season | Champion Traveler (najwięcej turystów V–VII i XII–I), wiedza przewodnikowa (Wielkanoc) | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Beau Vallon to długa plaża z białym piaskiem i łagodnym wejściem, z ratownikami; najpiękniejsze plaże Seszeli (La Digue, Praslin) są poza zasięgiem 15 min.
- **sightseeing = 3:** Vallée de Mai (UNESCO) i La Digue wymagają promu (wycieczka jednodniowa), na Mahé park narodowy i Victoria; poziom kotwic Phuket / Mauritius.
- **local_prices = 4:** bardzo drogo (wszystko importowane), ale nieco taniej niż Malediwy z resortami all-inclusive; poziom kotwic Barbados / Aruba.
- **local_season:** H I, IV (Wielkanoc), VII–VIII, XII; M pozostałe.

**greenery = 5** jako zwykła wartość: kotwica w rejestrze wprost wymienia Seszele.

## Flagi

Brak. Koek.sc: Beau Vallon „calm, consistent” w XI–III, „less predictable” w V–IX (pasat SE), ale bez zakazów kąpieli i z ratownikami. Champion Traveler poleca w porze pasatów plaże zachodnie jako spokojniejsze. Przy sprzecznych opisach i bez wyraźnego pogorszenia kąpieli flagi nie dodałem.

## Czas lotu

Przyjęte: **13,5 h, 1 przesiadka** (Rome2rio: najszybciej 13 h 30 min; Emirates i flydubai przez Dubaj, codziennie). KAYAK.com nie wczytał się.

## Ceny lotów

Nie ustalono. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 24 pobrane strony. Nieudane: KAYAK.com.

## Do przeglądu

1. **Flaga fal w V–IX** dla Beau Vallon (sprzeczne źródła).
2. **Wiatr** dla całego kraju; na osłoniętej Beau Vallon słabszy.
3. **Czas lotu** z Rome2rio (bez rozbicia na przesiadki).

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: V 3 348, VI 3 348, VIII 3 727, XII 3 829; najtaniej V, najdrożej XII; średnia 12 mies. 3 511 zł; typowo 3 200–3 851 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 700 / 3 500 / 3 500 / 3 700 / 3 300 / 3 300 / 3 700 / 3 700 / 3 500 / 3 500 / 3 500 / 3 800.

# Tamarindo (Guanacaste, Kostaryka) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Baza pobytu

Plaża Tamarindo, wybrzeże Pacyfiku w Guanacaste. W pobliżu brak stacji z normami. Najbliższa jest Liberia (lotnisko, ok. 60 km w głębi lądu, 144 m n.p.m.), gdzie w porze suchej jest wyraźnie goręcej w dzień (do 35,9 °C w kwietniu) i chłodniej w nocy niż na wybrzeżu.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night | weather2travel, Tamarindo (CRU, Met Office, KNMI; liczby całkowite) | Siatka dla wybrzeża jest bliższa bazie niż stacja w głębi lądu. Szacunek. Kontrolnie Liberia: maks. 30,9–35,9 °C, min. 20,7–23,4 °C. |
| rain, rain_days, sun, dew_point | Stacja Liberia (IMN; tabela Wikipedii) | Seria ze stacji, dni ≥ 1 mm, punkt rosy podany wprost. Odległość ok. 60 km, więc szacunek. CRU dla Tamarindo podaje podobny opad (2–362 mm), ale zawyżone dni deszczowe (7 dni w styczniu przy 3 mm), więc go nie użyłem. |
| uv | BestDateWeather, Nikaragua (Open-Meteo `uv_index`, ERA5 2016–2025), 12.11°N 86.27°W | Strony Tamarindo i Guanacaste nie działają, a punkt Kostaryki to San José (góry, ok. 1 150 m). Punkt Nikaragui leży na pacyficznych nizinach, ok. 230 km na północ, w tym samym typie klimatu. Szacunek. |
| wind | Weather Spark, Santa Cruz (ok. 25 km) | Najbliższa strona Weather Spark. Szacunek. W porze suchej wiatr Papagayo nad samym wybrzeżem może być silniejszy. |
| water | seatemperatu.re, Tamarindo (°F → °C) | weather2travel (27–29 °C) zgodny. |
| local_season | Wiedza przewodnikowa | Szacunek. |
| flags | Costa Rica Vibes (Semana Santa) | |

## Szacunki (po jednym zdaniu)

- **Cała pogoda poza wodą** to szacunek (brak stacji przy bazie).
- **beaches = 3:** szeroka, piaszczysta plaża, ale z falą surfingową i mętniejszą wodą przy ujściu estuarium (obniżenie o 1); Conchal i Langosta są ładniejsze, ale Conchal jest dalej niż 15 min. Poziom kotwic Sopot / Negombo.
- **greenery = 3:** suchy las tropikalny – zielony V–XII, w III–IV w dużej części bezlistny; poziom kotwic Cancún / Alanya.
- **sightseeing = 3:** Rincón de la Vieja, Llanos de Cortés, Palo Verde, estuarium, żółwie; Arenal i Monteverde poza zasięgiem jednego dnia (ok. 3–4 h w jedną stronę). Poziom kotwic Phuket / Mauritius.
- **local_prices = 4:** Kostaryka jest droga, a Tamarindo to jedno z droższych miejsc w kraju (ceny w restauracjach zbliżone do USA); poziom kotwic Barbados / Aruba.
- **flight_time = 18,0 (szacunek):** WAW–JFK (LOT, ok. 9 h 50 min) + JFK–LIR (KAYAK: średnio 5 h 07 min, JetBlue/Delta/American) + przesiadka ok. 2,5 h. Nie znalazłem typowego czasu całego połączenia w wyszukiwarce.
- **local_season:** H XII–IV, M VII–VIII (veranillo i wakacje w USA i Europie) i XI, L V–VI i IX–X.

## Flagi – uzasadnienie

- **holidays:** Semana Santa w III i IV „zależnie od roku” (święta państwowe w Wielki Czwartek i Piątek: zamknięte urzędy, banki i część firm, autobusy według ograniczonego rozkładu, plaże pełne rodzin). Tak samo jak Wielki Tydzień na Boracay.
- **Pominięte:**
  - huragany (wybrzeże Pacyfiku Kostaryki prawie nie jest na ich torach, a pośrednie ulewy z systemów karaibskich są już w opadzie);
  - fale (Tamarindo to plaża dla początkujących surferów, a nie znalazłem źródła o sezonowym pogorszeniu kąpieli);
  - wiatr Papagayo XII–III (jest już w kolumnie wiatru).

## Czas lotu

Przyjęte: **18,0 h (szacunek), 1 przesiadka** przez Nowy Jork.

- KAYAK.pl: najkrótszy średni czas z 1 przesiadką to 17 h 13 min przez Zurych, ale to Edelweiss/SWISS, który lata do Liberii tylko zimą (2 razy w tygodniu, w stronę Liberii z międzylądowaniem w San José). Nie spełnia więc warunku ok. 6 miesięcy w roku.
- Najczęstsza przesiadka to JFK (60%).
- Delta lata do Liberii cały rok z Atlanty, Bostonu, Detroit i Minneapolis (Tico Times), więc z WAW wyszłyby wtedy 2 przesiadki.
- Trip.com podaje najszybciej 17 h 25 min z 1 przesiadką, bez nazwy lotniska przesiadkowego.

## Ceny lotów

KAYAK.pl: średnia historyczna 4 043 zł w obie strony, najtaniej sierpień; Lufthansa od 4 038 zł. To inny scenariusz, więc wszystkie miesiące: `null`.

## Pomiar

Ok. 5 wyszukiwań i ok. 26 pobranych stron. Nieudane: KAYAK.com (WAW–LIR), momondo, BestDateWeather (Tamarindo, Guanacaste), Rome2rio (brak czasu samego lotu do LIR).

## Do przeglądu

1. **Brak stacji przy bazie.** Temperatury z CRU, reszta z Liberii w głębi lądu.
2. **UV z punktu w Nikaragui.**
3. **Czas lotu wyliczony z odcinków,** nie z wyszukiwarki. Do sprawdzenia, czy JetBlue JFK–LIR kursuje cały rok.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 5 098, VIII 4 043; najtaniej VIII, najdrożej I; średnia 12 mies. 4 654 zł; typowo 4 151–4 929 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 100 / 4 900 / 4 900 / 4 900 / 4 300 / 4 300 / 4 700 / 4 000 / 4 300 / 4 300 / 4 700 / 4 900.

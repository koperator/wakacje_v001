# Malediwy – Atol Malé Północny – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Wyspa-resort na Atolu Malé Północnym (15–60 min łodzią z lotniska Velana). Stacja WMO na lotnisku (Hulhulé) leży na tym samym atolu.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | WMO, Velana International Airport, normy 1991–2020 (tabela Wikipedii) | Stacja na atolu bazy. Dni ≥ 1 mm. Nasłonecznienie: sumy ÷ liczba dni. weather2travel (CRU) zgodny co do 1 °C i 1 h. |
| dew_point | Wzór Magnusa: średnia temp. 1991–2020 + wilgotność WMO 1981–2010 | Szacunek (brak źródła z punktem rosy). |
| uv | BestDateWeather, „Maldives” (Open-Meteo `uv_index`, ERA5 2016–2025), 3.20°N 73.22°E | Serwis nie ma strony dla Malé; punkt krajowy leży ok. 110 km na S, w tym samym reżimie monsunowym. Szacunek. |
| wind | Weather Spark, „Maldives” (średnia obszarowa dla kraju) | Brak strony dla Malé. Szacunek. |
| water | seatemperatu.re, Malé | Weather Spark (83–85 °F), weather2travel (28–30 °C) zgodne. |
| local_season | DMC Quote (ceny i sezon miesiąc po miesiącu) | Szacunek, jak w pozostałych kierunkach. |
| flags | DMC Quote, 360 Degree World (transfery, morze, dopłaty świąteczne) | |

## Szacunki (po jednym zdaniu)

- **beaches = 5:** biały piasek i płytkie laguny przy resortach, poziom kotwic Boracay / Turks and Caicos.
- **greenery = 3:** palmy i krzewy na małych, płaskich wyspach, bez wzgórz i lasu; poziom kotwic Cancún / Alanya.
- **local_season:** H XII–III, M IV i X–XI, L V–IX.

**sightseeing = 1** i **local_prices = 5** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Malediwy.

## Flagi – uzasadnienie

- **waves:** V, VI, VIII = 1, VII = 2 (DMC Quote: lipiec „very rough; speedboat cancellations and seaplane delays possible”). Kąpiel w lagunie zwykle możliwa, więc nie wyżej.
- **holidays:** XII – dopłaty 50–100%, minimalne pobyty 7–14 nocy i obowiązkowe kolacje galowe (jak na Phukecie).
- **Pominięte:** ramadan (resorty działają normalnie; brak źródła).

## Czas lotu

Przyjęte: **14,2 h, 1 przesiadka** przez Stambuł (KAYAK: 14 h 11 min; Turkish lata do Malé cały rok). Przez Wiedeń szybciej (13 h 03 min), ale Austrian lata do Malé tylko zimą, więc to połączenie sezonowe – tylko w notatce. Neos bezpośrednio raz w tygodniu (8 h 54 min) to czarter.

## Ceny lotów

KAYAK: najtaniej kwiecień (mediana 848 USD w obie strony), najdrożej grudzień (1 173 USD); inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 26 pobranych stron. Nieudane: BestDateWeather Malé.

## Do przeglądu

1. **UV i wiatr** z punktów dla całego kraju (szacunek).
2. **Transfer z lotniska** (łódź / hydroplan) poza czasem lotu.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: II 4 017, IV 3 317, XII 4 588; najtaniej IV, najdrożej XII; średnia 12 mies. 3 669 zł; typowo 3 221–4 311 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 100 / 4 000 / 4 100 / 3 300 / 3 500 / 3 500 / 3 500 / 3 500 / 3 500 / 3 700 / 3 700 / 4 600.

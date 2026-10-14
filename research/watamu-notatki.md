# Watamu (Kenia) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Plaże Watamu przy parku morskim. Stacja WMO Malindi ok. 20 km na N, to samo wybrzeże.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain | WMO Malindi, normy 1991–2020 (tabela Wikipedii) | Najbliższa stacja z normami. |
| rain_days | WMO Malindi | Próg niepodany (w normach WMO zwykle ≥ 1 mm), więc szacunek. weather2travel (CRU, „days with some rain”) podaje więcej (3–21). |
| dew_point | Wzór Magnusa: średnia temp. Malindi + wilgotność Mombasy (DWD 1962–1993) | Brak wilgotności dla Malindi. Szacunek. |
| sun | Mombasa, NOAA 1961–1990 | Zastępstwo (ok. 100 km, to samo wybrzeże); weather2travel dla Watamu 7–9 h, zgodnie. Szacunek. |
| uv | BestDateWeather, Mombasa (Open-Meteo `uv_index`, ERA5 2016–2025) | Brak stron dla Watamu i Malindi. Szacunek. |
| wind | Weather Spark, Malindi | Ta sama metoda. |
| water | Weather Spark, Malindi | weather2travel dla Watamu zgodny co do 1 °F. seatemperatu.re i meerestemperatur.de nie wczytały się. |
| local_season | African Mecca Safaris (szczyt cen VII–X i XII–II), Champion Traveler | Częściowo sprzeczne (Champion: luty najmniej odwiedzany). Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** biały piasek i laguny parku morskiego, ale silne pływy (przy odpływie daleko do wody); na granicy z 3 według zasady o utrudnionym wejściu.
- **greenery = 3:** las przybrzeżny, baobaby i palmy; poziom kotwic Cancún / Alanya.
- **sightseeing = 3:** ruiny Gede, Arabuko Sokoke, Mida Creek, park morski; safari w Tsavo East na granicy wycieczki jednodniowej.
- **local_prices = 2:** jedzenie i transport tanie, wycieczki i parki droższe; poziom Phu Quoc / Djerba.
- **local_season:** H I–II, VII–VIII, XII; M III, IX–X; L IV–VI, XI.

## Flagi

Brak. Nie znalazłem źródła na sezonowe wodorosty ani zamykanie hoteli w porze deszczowej w Watamu (to częste na wybrzeżu Kenii w V–VI, ale bez potwierdzenia nie flaguję).

## Czas lotu

Przyjęte: **18,7 h, 2 przesiadki** do Malindi (Trip.com: Air Arabia przez Szardżę i Nairobi, 18 h 40 min). Trip.com pokazuje też 17 h 25 min z 1 przesiadką bez nazwy węzła (raczej łączenie biletów). Alternatywa: Mombasa z 1 przesiadką (momondo: najszybciej 11 h) i ok. 2 h drogi – w praktyce szybciej, ale to nie lotnisko bazy.

## Ceny lotów

Nie ustalono (momondo: Mombasa najtaniej w listopadzie, średnio 3 242 zł; inny scenariusz). Wszystkie miesiące: `null`.

## Pomiar

Ok. 4 wyszukiwania i 27 pobranych stron. Nieudane: BestDateWeather Watamu i Malindi, KAYAK (2×), seatemperatu.re, meerestemperatur.de.

## Do przeglądu

1. ~~Lotnisko bazy: Malindi czy Mombasa~~ – rozstrzygnięte 2026-10-14: Mombasa.
2. **Punkt rosy, słońce i UV z Mombasy** (szacunki).
3. **Flagi**: wodorosty i zamknięte hotele w V–VI do sprawdzenia.

## Przegląd 2026-10-14 (decyzja użytkownika: lotnisko Mombasa)

- **Czas lotu: 13,4 h, 1 przesiadka** przez Frankfurt (KAYAK.pl: najkrótszy średni czas z 1 przesiadką 13 h 21 min). Condor lata Frankfurt–Mombasa przez cały rok (lato 2026, zima 2026/27, lato 2027; 3–4 razy w tygodniu, część rejsów przez Zanzibar). Dalej: Stambuł 14 h 47 min (Turkish), Addis Abeba 15 h 20 min (Ethiopian). Enter Air bez przesiadek (11 h 00 min) to czarter, tylko w notatce. Poprzednio: Malindi, 18,7 h i 2 przesiadki.
- Droga z lotniska w Mombasie do Watamu (ok. 115 km, ok. 2,5 h) trafia do nowej kolumny transferu.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: III 3 021, V 4 291, VIII 4 056; najtaniej III, najdrożej V; średnia 12 mies. – zł; typowo 3 103–4 000 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 900 / 3 900 / 3 000 / 3 300 / 4 300 / 3 300 / 3 900 / 4 100 / 3 600 / 3 600 / 3 300 / 3 900.

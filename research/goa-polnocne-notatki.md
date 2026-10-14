# Goa Północne – Calangute / Baga (Indie) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Calangute i Baga. Stacja IMD Panaji ok. 12 km na S, nad ujściem Mandovi, ta sama ekspozycja na morze.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain | IMD Panaji, normy 1991–2020 (tabela Wikipedii) | Najbliższa stacja z normami. |
| rain_days | IMD Panaji | IMD liczy dzień deszczowy od 2,5 mm, nie od 1 mm, więc szacunek (zaniżony głównie w miesiącach przejściowych). |
| sun | IMD 1971–2000 | Seria ze stacji; starszy okres. |
| dew_point | Wzór Magnusa: średnia temp. dobowa 1991–2020 + wilgotność o 17:30 | Brak źródła z punktem rosy. Wilgotność popołudniowa jest niższa od średniej dobowej, więc punkt rosy raczej zaniżony, najbardziej w porze suchej (I: 17,1 °C). Szacunek. |
| uv | BestDateWeather, Goa (Open-Meteo `uv_index`, ERA5 2016–2025), 15.49°N 73.82°E | Punkt ok. 5 km od Calangute. Lipiec 4 (pełne zachmurzenie monsunu). |
| wind | Weather Spark, Calangute (mph → km/h) | Ta sama metoda. |
| water | seatemperatu.re, Calangute | Weather Spark (81–85 °F) zgodny. |
| local_season | SOTC (szczyt XI–II, tańsze III–V i X, monsun VI–IX najtańszy) | Szacunek. |
| flags | Herald Goa (Drishti: zakaz kąpieli i sportów wodnych VI–VIII, odradzanie do IX) | |

## Szacunki (po jednym zdaniu)

- **beaches = 3:** Calangute i Baga są szerokie i piaszczyste, ale zatłoczone, z łodziami i skuterami, piasek ciemniejszy; poziom kotwic Sopot / Negombo.
- **greenery = 3:** palmy kokosowe i ogrody wokół wiosek, bardzo zielono po monsunie, w III–V sucho; poziom kotwic Cancún / Alanya.
- **sightseeing = 3:** Stare Goa (UNESCO), forty, targi, Dudhsagar; brak atrakcji klasy Angkor; poziom kotwicy Phuket.
- **local_season:** H XI–II, M III–IV i X, L V–IX.

**local_prices = 1** jako zwykła wartość: kotwica w rejestrze wprost wymienia Goa.

## Flagi – uzasadnienie

- **waves:** V = 1 (koniec sezonu, fala przed monsunem), VI–VIII = **3** (władze zamykają plaże dla kąpieli i sportów wodnych, czerwone flagi na wszystkich plażach, większość shacków nieczynna – „brak kąpieli” z definicji poziomu 3), IX = 2 (Drishti nadal odradza wchodzenie do morza). To pierwsze flagi poziomu 3 w bazie; filtr „ukryj z flagą poziomu 3” ukryje Goa w VI–VIII.
- **Pominięte:** święta (Boże Narodzenie, Nowy Rok, Sunburn, karnawał – tłok i ceny, czyli zwykły szczyt sezonu).

## Czas lotu

Przyjęte: **15,2 h, 1 przesiadka** (KAYAK.co.in: średni czas WAW–GOI 15 h 10 min; lotów bezpośrednich regularnych brak). KAYAK nie podaje węzła; typowo Zatoka (Dubaj, Doha, Abu Zabi). Lotnisko Mopa (GOX) jest bliżej północnych plaż (ok. 30 km wobec ok. 40 km z Dabolim).

## Ceny lotów

Nie ustalono. Wszystkie miesiące: `null`.

## Pomiar

Ok. 5 wyszukiwań i 24 pobrane strony. Nieudane: KAYAK.com (WAW–GOI), meerestemperatur.de (adres).

## Do przeglądu

1. **Dni deszczowe z progiem 2,5 mm** (IMD).
2. **Punkt rosy zaniżony** w porze suchej (wilgotność popołudniowa).
3. **Flagi poziomu 3** w VI–VIII: zgodne z definicją („brak kąpieli”), ale to pierwsze w bazie.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: II 3 224, III 4 128; najtaniej II, najdrożej III; średnia 12 mies. 3 264 zł; typowo 3 067–3 760 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 700 / 3 200 / 4 100 / 3 300 / 3 200 / 3 200 / 3 200 / 3 200 / 3 200 / 3 300 / 3 700 / 3 700.

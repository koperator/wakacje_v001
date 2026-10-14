# Bora Bora (Polinezja Francuska) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Baza pobytu

Resorty na motu (wysepkach rafy) i plaża Matira. Stacja lotniska leży na Motu Mute, w tej samej lagunie, ok. 5–10 km od resortów, więc wartości ze stacji wpisałem jako zwykłe.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko Bora Bora (Motu Mute), normy 1991–2020 (Météo-France; tabela Wikipedii) | Stacja w lagunie, dni ≥ 1 mm. |
| sun | Ta sama tabela, NOAA 1961–1990 (godziny w miesiącu ÷ dni) | Starsze normy, ale ze stacji. |
| dew_point | Wzór Magnusa: średnia (maks.+min.)/2 i stała wilgotność 78% | weather-and-climate.com podaje 76–79% przez cały rok (średnio 78%, Foreca / Copernicus); brak wartości miesięcznych. Szacunek, zgrubny (jak w Providenciales). |
| uv | BestDateWeather, Bora Bora (Open-Meteo `uv_index`, ERA5 2016–2025), 16.50°S 151.74°W | Punkt na Bora Bora. |
| wind, water | Weather Spark, Bora Bora | Ta sama metoda; woda w °F → °C. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 5:** biały piasek i spokojna, płytka, turkusowa laguna przy resortach na motu i na Matira; poziom kotwic Boracay / Turks and Caicos.
- **greenery = 4:** palmy na motu i porośnięta lasem góra Otemanu w tle; poziom kotwic Mauritius / Phuket.
- **sightseeing = 2:** jedna mocna atrakcja (laguna: snorkeling z płaszczkami i rekinami, ogrody koralowe), poza tym 4×4 i armaty z II wojny światowej; poziom kotwic Aruba / Marsa Alam.
- **flight_time = 31,5 (szacunek):** KAYAK.pl pokazuje tylko pojedyncze oferty (31 h 40 min z 3 przesiadkami, 36 h 10 min z 2), bez typowego czasu. Wyliczenie z odcinków: WAW–Paryż ok. 2,5 h + przesiadka + Paryż–Los Angeles–Papeete ok. 22 h + przesiadka + Papeete–Bora Bora ok. 50 min, razem ok. 31 h.
- **local_season:** H VI–IX (pora sucha i wakacje w Europie), M IV–V, X i XII (Boże Narodzenie), L I–III i XI.

**local_prices = 5** jako zwykła wartość: kotwica w rejestrze wprost wymienia Bora Bora.

## Flagi

Brak.

- **Pominięte:**
  - cyklony (Wyspy Towarzystwa leżą zwykle poza torami, a cyklony zdarzają się głównie w latach El Niño; jak Aruba i Waikīkī);
  - Heiva w VII (festiwal, bez zamknięć).

## Czas lotu

Przyjęte: **31,5 h (szacunek), 3 przesiadki** (Paryż, Los Angeles, Papeete). Lot Paryż–Papeete Air Tahiti Nui lub Air France ma międzylądowanie w Los Angeles (albo Seattle/Vancouver), więc liczę je jako przesiadkę, tak jak KAYAK. Lotnisko bazy to Bora Bora (BOB), a dalej resort łodzią.

## Ceny lotów

KAYAK.pl: średnio 12 938 zł w obie strony, najtaniej maj, najdrożej lipiec. To inny scenariusz, więc wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i ok. 21 pobranych stron. Nieudane: timeanddate (Vaitape, Bora Bora), Weather Atlas, climate-data.org (zła lokalizacja – Peru), Wikipedia Papeete (brak wilgotności).

## Do przeglądu

1. **Punkt rosy ze stałej wilgotności.**
2. **Czas lotu jako szacunek,** 3 przesiadki.
3. **Transfer łodzią z lotniska** (jak Malediwy) nie jest liczony w czasie lotu.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: V 11 094; najtaniej V, najdrożej VII; średnia 12 mies. 12 938 zł; typowo 12 550–15 708 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 12 000 / 12 000 / 12 000 / 12 900 / 11 100 / 14 300 / 15 700 / 14 300 / 14 300 / 12 900 / 12 000 / 12 900.

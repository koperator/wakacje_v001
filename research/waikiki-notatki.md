# Waikīkī, Oʻahu (Hawaje) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Baza pobytu

Plaża Waikīkī, południowe (zawietrzne) wybrzeże Oʻahu. Stacja lotniska Honolulu (HNL) jest ok. 8 km na zachód, na tym samym suchym wybrzeżu, więc wartości ze stacji wpisałem jako zwykłe.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain | Lotnisko Honolulu, normy 1991–2020 (NOAA; tabela Wikipedii) | Stacja ok. 8 km od bazy. |
| sun | Ta sama stacja, 1961–1990 (godziny w miesiącu ÷ dni) | Starsze normy, ale ze stacji (jak w Punta Canie). |
| dew_point | timeanddate, lotnisko Honolulu 1992–2021 | Punkt rosy podany wprost (°F → °C). Zgodny z Magnusem dla wilgotności NOAA (±1 °C). |
| rain_days | Weather Spark, lotnisko Honolulu (dni ≥ 0,04 in, tj. ok. 1 mm, z reanalizy) | NOAA liczy dni od 0,01 in (0,25 mm): 5,7–8,9 dni. Przeliczenie × 0,7 uzasadniłem dla progu 0,1 mm, nie 0,25 mm, a latem w Honolulu przeważają śladowe nocne przelotne opady, więc wybrałem Weather Spark. Szacunek. |
| uv | BestDateWeather, Honolulu (Open-Meteo `uv_index`, ERA5 2016–2025), 21.31°N 157.86°W | Ta sama metoda. Wiersz UV w tabeli Wikipedii (6,0–12,2, UV Index Today) to inna metoda, więc go nie użyłem. |
| wind | Weather Spark, lotnisko Honolulu | Ta sama metoda. timeanddate podaje więcej (14–22 mph), ale to prawdopodobnie średnia z godzin obserwacji. |
| water | Wikipedia, tabela temperatury morza dla Honolulu (seatemperature.org, Weather Atlas) | seatemperatu.re dla Waikīkī się nie wczytał. |
| local_season | Wiedza przewodnikowa | Szacunek. |
| flags | Hawaii News Now (meduzy kostkowe) | |

## Szacunki (po jednym zdaniu)

- **beaches = 3:** drobny piasek i spokojna woda za rafą, ale plaża wąska (sztucznie zasypywana, erozja), bardzo zatłoczona, miejscami z rafą i kamieniami przy wejściu. Lepsze plaże (Lanikai, Kailua, Hanauma) są ok. 25–40 min dalej. Poziom kotwic Sopot / Negombo.
- **greenery = 3:** miasto z wieżowcami, ale park Kapiʻolani, Diamond Head i zielone góry Koʻolau w tle; poziom kotwic Cancún / Alanya.
- **sightseeing = 4:** Pearl Harbor, Diamond Head, Hanauma Bay, North Shore, Kualoa, pałac ʻIolani; poziom kotwic Malta / Cancún.
- **local_prices = 5:** Hawaje to jeden z najdroższych regionów USA (jedzenie, parkingi, atrakcje); poziom kotwic Malediwy / Bora Bora / Turks and Caicos.
- **local_season:** H I–III, VI–VIII, XII; M IV (ferie wiosenne, Wielkanoc) i XI (Święto Dziękczynienia); L V, IX–X.

## Flagi – uzasadnienie

- **jellyfish:** wszystkie miesiące = 1. Meduzy kostkowe przypływają na południowe plaże Oʻahu, w tym Waikīkī, co miesiąc ok. 8–10 dni po pełni (Hawaii News Now; w maju 2019 r. ponad 900 poparzonych w jeden dzień, tablice ostrzegawcze). Zjawisko dotyczy kilku dni w miesiącu, a termin zależy od fazy Księżyca, stąd poziom 1 we wszystkich miesiącach.
- **Pominięte:**
  - huragany (sezon VI–XI na środkowym Pacyfiku, ale bezpośrednie uderzenia w Oʻahu są bardzo rzadkie; jak Aruba);
  - fale (letnie fale z południa w Waikīkī to fale do surfowania za rafą, a zimowe wielkie fale dotyczą North Shore);
  - święta (bez zamknięć).

## Czas lotu

Przyjęte: **23,4 h, 1 przesiadka** przez Los Angeles (KAYAK.pl: średnio 23 h 25 min; LAX to 93% połączeń z 1 przesiadką; LOT lata WAW–LAX bezpośrednio). Najszybciej przez San Francisco (22 h 08 min), ale to tylko 6% połączeń.

## Ceny lotów

KAYAK.pl: mediana 4 537 zł (styczeń) do 5 436 zł (sierpień), średnio 5 008 zł w obie strony. To inny scenariusz (dowolna długość pobytu, bez gwarancji bagażu), więc wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i ok. 19 pobranych stron. Nieudane: seatemperatu.re (Waikīkī), Waikiki Aquarium (robots.txt), surf-forecast (inne Waikiki – w Peru).

## Do przeglądu

1. **Flaga meduz we wszystkich miesiącach.** Nie różnicuje miesięcy, ale obniża kąpiel względem innych kierunków.
2. **Dni deszczowe** z reanalizy (inny próg w normach NOAA).
3. **Ocena plaż = 3** dla tak znanej plaży. Możliwe 4, jeśli liczyć osłoniętą wodę bardziej niż tłok i wąski pas piasku.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 4 537, VII 5 417, VIII 5 436; najtaniej I, najdrożej VIII; średnia 12 mies. 5 008 zł; typowo 4 527–5 507 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 500 / 5 200 / 5 200 / 5 000 / 4 800 / 5 200 / 5 400 / 5 400 / 4 800 / 4 800 / 5 000 / 5 200.

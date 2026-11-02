# Rarotonga – Muri Beach (Wyspy Cooka) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain | Stacja Rarotonga Intl, normy 1991–2020 z NOAA GHCN (climate-zone.com, °F i cale) | Wikipedia nie ma tabeli dla Rarotongi (Avarua: Climate-Data.org, model). Liczby całkowite w °F, więc szacunek. Lotnisko ok. 10 km od Muri, po drugiej stronie wyspy. |
| dew_point | Magnus: średnia (maks.+min.)/2 i wilgotność NASA POWER | Szacunek. Kontrolnie beach-weather.com: II 25 °C, VIII 20 °C (wyliczone 23,4 i 18,5) – raczej zaniżony o 1–2 °C. |
| sun, rain_days | Bora Bora (Météo-France), jak w kierunku `bora-bora` | Brak norm dla Rarotongi w dostępnych źródłach (raporty Cook Islands Statistics mają tylko sumy kwartalne i roczne). Szacunek. Kontrolnie beach-weather.com: słońce I 6,4 h, VIII 7,8 h. |
| uv | BestDateWeather, Rarotonga (21.24°S 159.78°W) | |
| wind, water | Weather Spark, Avarua | |
| local_season | Wiedza przewodnikowa (ferie w Nowej Zelandii i Australii, pora sucha) | Szacunek. |

## Szacunki

- **beaches = 4:** spokojna, płytka laguna z motu, ale wąska plaża i miejscami trawa morska; poziom 5 dopiero na Aitutaki.
- **greenery = 5**, **sightseeing = 3**, **local_prices = 4.**
- **flight_time = 33,0 h (szacunek), 2 przesiadki:** KAYAK.pl nie podaje średniej; najkrótsze oferty przez Dohę i Sydney 32 h 35 min, przez Paryż, Los Angeles i Papeete 33 h 15 min (3 przesiadki). Air New Zealand lata z Auckland codziennie.
- **transfer = 0,4 h.**
- **flight_price (szacunek):** XII ok. 13 477 zł (VIII + 6 711 zł) przycięte do 115% górnej granicy typowych cen. VIII (najtaniej wg KAYAK.pl) mimo sezonu H.
- **local_season:** H VI–IX i XII, M IV i X, L I–III, V i XI. Styczeń w sezonie L (choć wakacje w NZ), bo cyklony i deszcze; do przeglądu.

## Flagi

- **cyclone:** I–III = 1, jak Nadi.

## Do przeglądu

1. **Słońce i dni deszczowe z Bora Bory.**
2. **Punkt rosy zaniżony?**
3. **Sezon w I** (wakacje w Nowej Zelandii).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Punkt rosy:** zostaje. Weather Spark podaje liczbę dni parnych (punkt rosy ≥ ok. 18 °C): I 30 z 31, VIII 15 z 31, co pasuje do wyliczonych 23 °C i 18,5 °C. Uwaga 2 zamknięta.
- **Sezon w I:** zmieniony z L na M (wakacje w Nowej Zelandii; deszcze i cyklony są w pogodzie i flagach). Ceny przeliczone. Uwaga 3 rozwiązana.
- **Słońce i dni deszczowe z Bora Bory:** zostają (brak norm dla Rarotongi). Uwaga 1 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Avarua (Rarotonga)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 10, 7, 6, 6, 8, 10, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,999, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,5 / 14,4 / 12,9 / 9,8 / 7,0 / 5,7 / 5,9 / 7,6 / 10,0 / 12,3 / 13,5 / 14,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 280 DU): 12,7–13,4; model na 1.11 przy ozonie klimatologicznym (281 DU): 13,1.
- Wynik (I–XII): 15, 14, 13, 10, 7, 6, 6, 8, 10, 12, 14, 14.

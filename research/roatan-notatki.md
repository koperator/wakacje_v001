# Roatán – West Bay (Honduras) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun, water | weather2travel, Roatán (dane siatkowe, liczby całkowite) | Wikipedia nie ma tabeli dla Roatánu; brak stacji z normami. Szacunek. |
| rain_days | weather2travel × 0,7 | Dni deszczowe z siatki CRU są zawyżone (jak w Tamarindo); przeliczenie jak dla progu 0,1 mm. Szacunek. |
| dew_point | Magnus: średnia (maks.+min.)/2 i wilgotność z La Ceiby (1970–1990, ok. 60 km) | Szacunek. Kontrolnie beach-weather.com: I 23 °C, IX 26 °C (wyliczone: 21,0 i 24,3) – raczej zaniżony o ok. 1 °C. |
| uv | BestDateWeather, Roatán (16.32°N 86.53°W) | |
| wind | NASA POWER, Montego Bay (jak `negril`) | Zastępczo. Szacunek. beach-weather.com: VI 20 km/h, XI 11 km/h. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki

- **beaches = 4:** biały piasek, spokojna woda i rafa przy brzegu (poziom bliski 5), ale tłok w dni statków wycieczkowych i meszki.
- **greenery = 4**, **sightseeing = 3** (głównie nurkowanie), **local_prices = 3.**
- **flight_time = 21,0 h (szacunek), 2 przesiadki:** KAYAK.pl nie ma strony WAW–RTB. RTB obsługują linie z USA (Atlanta, Houston, Miami, Dallas, Charlotte), więc z Polski 2 przesiadki: np. Amsterdam + Atlanta (KLM/Delta, jeden bilet). Z odcinków: ok. 2 + 2 + 10 + 2,5 + 2,8 h.
- **flight_price (szacunek):** bez statystyk dla RTB; przyjęte statystyki WAW–Liberia (Kostaryka), jak w Tamarindo. Realnie Roatán raczej droższy.
- **transfer = 0,4 h.**
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

## Flagi

- **cyclone:** VIII–X = 1.
- **holidays:** III–IV = 1 (Semana Santa, zależnie od roku), jak Tamarindo.
- **Pominięte:** sargassum (West Bay na zachodnim krańcu jest zwykle osłonięta; zdarzało się na północnym i wschodnim wybrzeżu).

## Do przeglądu

1. **Cała pogoda z danych siatkowych** (brak stacji), wiatr z Jamajki.
2. **Czas lotu i ceny wyliczone.**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Pogoda z danych siatkowych, wiatr z Jamajki, czas lotu i ceny wyliczone:** brak lepszych źródeł (KAYAK.pl nie ma statystyk dla RTB, Wikipedia nie ma tabeli dla wyspy). Zostaje jako szacunek; kierunek ma najsłabsze dane w etapie 2 obok Cayo Guillermo.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Roatán). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 9, 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,010, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 8,8 / 10,7 / 12,4 / 13,3 / 13,2 / 12,9 / 13,1 / 13,3 / 12,5 / 10,6 / 9,0 / 8,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 260 DU): 9,4–9,7; model na 1.11 przy ozonie klimatologicznym (259 DU): 9,7.
- Wynik (I–XII): 9, 11, 12, 13, 13, 13, 13, 13, 12, 11, 9, 8.

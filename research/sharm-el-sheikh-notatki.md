# Sharm el-Sheikh – Naama Bay / Sharks Bay (Egipt) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night | Wikipedia (WMO / Climate-Data.org, okres niepodany) | Średnie minimum niespójne ze średnią dobową (np. I: min 13,3, średnia 15,6, maks. 21,7). Szacunek. |
| dew_point | Ta sama tabela (timeanddate 2005–2015, liczby całkowite) | Podany wprost. |
| rain, rain_days | Ta sama tabela | Praktycznie zero. |
| sun | Ta sama tabela (Weather Atlas, h/dzień) | Szacunek. |
| uv | BestDateWeather, 27.98°N 34.38°E | |
| wind | Weather Spark, Marsa Alam (zastępstwo) | Brak strony Weather Spark dla Sharm. Szacunek. |
| water | seatemperatu.re, Sharm el-Sheikh | |
| flags | Jak Marsa Alam (burze piaskowe wiosną) | |

## Szacunki

- **beaches = 3:** Naama Bay piaszczysta i spokojna, ale przy większości hoteli rafa i wejście z pomostu.
- **greenery = 1**, **sightseeing = 3** (Ras Mohammed, Synaj, Dahab), **local_prices = 2.**
- **flight_time = 9,0 h, 1 przesiadka** (Kair, KAYAK.pl średnio 8 h 59 min). Bez przesiadek tylko czarter (SkyUp, 4 h 10 min).
- **transfer = 0,3 h:** lotnisko – Naama Bay ok. 15 km.
- **local_season:** H III–IV, X–XII; M I–II, V, IX; L VI–VIII.

## Do przeglądu

1. **Czarter czy regularny lot:** jeśli Sharm, tak jak Marsa Alam, to wyjazd tylko z biurem, czas lotu powinien wynosić ok. 4,2 h i 0 przesiadek.
2. **Temperatury z niespójnej tabeli.**
3. **Wiatr z Marsa Alam.**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Czarter czy regularny lot:** decyzja: zostaje regularne połączenie (**9,0 h, 1 przesiadka**), bo tylko Marsa Alam jest oznaczona jako wyjazd wyłącznie z biurem. Z Chopina do Sharm latają tylko czartery (Enter Air). Jeśli Sharm ma być „tylko z biurem”, wystarczy zmienić na 4,2 h i 0 przesiadek. Uwaga 1 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Sharm el-Sheikh). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 5, 6, 8, 11, 11, 11+, 11+, 11, 10, 8, 5, 4. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące VI, VII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,009, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 4,6 / 6,3 / 8,4 / 10,1 / 10,9 / 11,4 / 11,6 / 11,3 / 9,7 / 7,4 / 5,2 / 4,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 265 DU): 5,9–6,5; model na 1.11 przy ozonie klimatologicznym (269 DU): 6,2.
- Wynik (I–XII): 5, 6, 8, 11, 11, 12, 12, 11, 10, 8, 5, 4.

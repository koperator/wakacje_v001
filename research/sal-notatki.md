# Sal – Santa Maria (Republika Zielonego Przylądka) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun | Lotnisko Amílcar Cabral, NOAA 1991–2020 | Stacja ok. 18 km. |
| rain_days | Ta sama stacja (≥ 0,1 mm) × 0,7 | Szacunek; i tak bliskie zera. |
| dew_point | Magnus (wilgotność INMG 1981–2010) | Szacunek. |
| uv | BestDateWeather, Sal, 16.73°N 22.93°W | |
| wind, water | Weather Spark, Santa Maria | Wiatr 18–27 km/h, jeden z najsilniejszych w bazie (jak Aruba). |

## Szacunki

- **beaches = 5:** długa, biała plaża po zawietrznej stronie, łagodne wejście; chłodna woda jest już w kolumnie wody, nie w ocenie plaży.
- **greenery = 1:** pustynia; poziom kotwic Marsa Alam / Corralejo.
- **sightseeing = 2:** saliny, Buracona, Shark Bay; poziom kotwic Aruba / Marsa Alam.
- **local_prices = 3.**
- **flight_time = 12,2 h, 1 przesiadka:** Lizbona (TAP, cały rok), KAYAK.pl średnio 12 h 09 min. Zurych (11 h 09 min) to raczej zimowy Edelweiss, więc tylko w notatce. Bez przesiadek tylko czarter Enter Air.
- **flight_price (szacunek):** KAYAK.pl: I 1 893 zł, IX 3 260 zł, VIII 5 157 zł (przycięte do 3 400 zł). Lato podrożone przez wakacje w Europie.
- **transfer = 0,3 h:** lotnisko – Santa Maria ok. 18 km.
- **local_season:** H XII–IV, M VII–VIII, X–XI, L V–VI, IX.

## Flagi

Brak. Pył z Sahary (bruma seca) zdarza się zimą, ale bez źródła z sezonowością.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Ceny w lecie:** VIII (5 157 zł według KAYAK.pl) zostaje przycięty do 3 400 zł zgodnie z definicją (wartości ponad 115% górnej granicy typowych cen). Decyzja: bez zmian.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Santa Maria (Sal)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 8, 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,988, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 8,6 / 10,4 / 12,1 / 13,0 / 12,8 / 12,6 / 12,8 / 13,0 / 12,2 / 10,3 / 8,7 / 7,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 271 DU): 8,2–9,3; model na 1.11 przy ozonie klimatologicznym (259 DU): 9,4.
- Wynik (I–XII): 8, 10, 12, 13, 13, 13, 13, 13, 12, 10, 9, 8.

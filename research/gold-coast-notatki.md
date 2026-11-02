# Gold Coast – Broadbeach / Surfers Paradise (Australia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, dew_point | Gold Coast Seaway, BoM 1992–2020 (tabela Wikipedii) | Stacja ok. 5–10 km od bazy. Dni ≥ 1 mm, punkt rosy wprost. Coolangatta (ok. 25 km na południe) liczy dni od 0,2 mm, więc nieużyta. |
| sun | Brisbane, BoM 1999–2024 | Gold Coast nie ma serii nasłonecznienia w tabeli. Szacunek. |
| uv | BestDateWeather, Gold Coast (28.02°S 153.43°E) | |
| wind, water | Weather Spark, Gold Coast | Woda XI–XII ucięta na stronie – wpisane 75 i 77 °F jako szacunek między X a I. |
| local_season | Australijskie ferie szkolne i święta (XII–I, Wielkanoc, VII, IX–X) | Szacunek. |

## Szacunki

- **beaches = 4:** szeroka, długa plaża ze złotym piaskiem, ale fala oceaniczna (kąpiel tylko między flagami) i wieżowce za plażą.
- **greenery = 3:** miasto; lasy deszczowe w hinterlandzie ok. 1 h.
- **sightseeing = 4:** parki rozrywki, Lamington i Springbrook (UNESCO), Byron Bay, wieloryby.
- **local_prices = 4.**
- **flight_time = 23,6 h, 1 przesiadka (Dubaj; Emirates DXB–BNE codziennie):** lotnisko bazy to Brisbane. Do Gold Coast (OOL) KAYAK.pl pokazuje tylko połączenia z 2 przesiadkami (od 28 h 10 min).
- **transfer = 1,2 h:** Brisbane – Broadbeach ok. 85 km (samochód lub pociąg + tramwaj).
- **flight_price (szacunek):** statystyki KAYAK.pl WAW–BNE.
- **local_season:** H XII–I, IV, VII; M III, VI, IX–X; L II, V, VIII, XI.

## Flagi

- **jellyfish:** XII–II = 1 (bluebottles przy wiatrach z NE).
- **cyclone:** II–III = 1 (pozostałości cyklonów: fale, erozja, zamknięte plaże; Alfred 2025).

## Do przeglądu

1. **Zima (VI–VIII) chłodna**: woda 21 °C – profil i tak to oceni przez temperatury.
2. **Flaga cyklonów** dla miejsca poza strefą tropikalną – może lepiej typ „waves”?

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Flaga cyklonów zamieniona na „fale i prądy” (poziom 1, II–III):** skutkiem na plaży są wielkie fale i zamknięte kąpieliska, a deszcz jest już w kolumnie opadu. Flaga kąpielowa, więc wyłącza się razem z przełącznikiem flag kąpielowych. Uwaga 2 rozwiązana.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Gold Coast). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11, 7, 5, 4, 4, 5, 7, 10, 11, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,957, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 13,1 / 12,5 / 10,6 / 7,3 / 4,7 / 3,6 / 3,7 / 5,2 / 7,5 / 10,0 / 11,7 / 12,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 295 DU): 10,8–11,9; model na 1.11 przy ozonie klimatologicznym (298 DU): 11,0.
- Wynik (I–XII): 13, 12, 11, 7, 5, 4, 4, 5, 7, 10, 11, 13.

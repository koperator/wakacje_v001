# San Andrés – Spratt Bight (Kolumbia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, sun | Lotnisko Gustavo Rojas Pinilla, IDEAM 1971–2000 (tabela Wikipedii) | Stacja ok. 1 km od plaży. Starsze normy. |
| rain_days | Ta sama tabela × 0,7 | IDEAM nie podaje progu (prawdopodobnie ≥ 0,1 mm), więc przeliczenie jak w innych kierunkach. Szacunek. |
| dew_point | Magnus: średnia dobowa i wilgotność IDEAM | Szacunek. |
| uv | Średnia BestDateWeather z Curaçao i Roatánu | Brak strony dla San Andrés. Szacunek. |
| wind | Weather Spark, San Andrés (Kolumbia) | mph → km/h. |
| water | weather2travel, San Andres Island (liczby całkowite) | Weather Spark: „82 °F ± 2 °F przez cały rok” (ok. 27–29 °C), zgodne. Szacunek. |
| local_season | Wiedza przewodnikowa (kolumbijskie ferie: XII–I, Semana Santa, VI–VII, tydzień w X) | Szacunek. |

## Szacunki

- **beaches = 4:** biały piasek i bardzo kolorowa, płytka woda, ale plaża miejska i tłoczna; lepsze plaże na Johnny Cay i w San Luis.
- **greenery = 3**, **sightseeing = 3**, **local_prices = 2** (Kolumbia, strefa wolnocłowa; turyści płacą opłatę wjazdową na wyspę).
- **flight_time = 21,5 h (szacunek), 2 przesiadki:** WAW–Bogota (KAYAK.pl: średnio 16 h 52 min przez Barcelonę) + przesiadka ok. 2,5 h + Bogota–San Andrés ok. 2 h. Alternatywnie przez Panamę (Copa).
- **flight_price (szacunek):** KAYAK.pl nie ma strony WAW–ADZ. Przyjęte statystyki WAW–Bogota + 600 zł za lot krajowy w obie strony (szacunek). Wynik może przekraczać przycięcie o te 600 zł.
- **transfer = 0,1 h:** lotnisko na skraju miasta.
- **local_season:** H XII–I i VI–VII, M II–IV, VIII i X, L V, IX i XI.

## Flagi

- **cyclone:** X–XI = 1 (Iota 2020). Wyspa leży na południowym skraju strefy huraganów, szczyt jest tu późniejszy niż na północnych Karaibach.
- **holidays:** III–IV = 1 (Semana Santa).

## Do przeglądu

1. **UV zastępcze**, ceny z trasy do Bogoty + dopłata.
2. **Flaga cyklonów w X–XI** (inne miesiące niż standardowe VIII–X).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Ceny lotów:** KAYAK.pl (Polska – San Andrés) podaje typową dobrą cenę ok. 3 815 zł (dolne 25%), czyli na poziomie dolnej granicy typowych cen do Bogoty (3 764 zł). Dopłata 600 zł usunięta – ceny jak WAW–Bogota. Uwaga 1 rozwiązana.
- **UV zastępcze i flaga cyklonów w X–XI:** zostają; szczyt huraganów na zachodnich Karaibach na tej szerokości przypada na X–XI. Uwaga 2 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (San Andrés). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 9. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,002, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,9 / 11,7 / 13,2 / 13,7 / 13,1 / 12,6 / 12,8 / 13,3 / 12,9 / 11,3 / 9,9 / 9,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 258 DU): 10,4–11,1; model na 1.11 przy ozonie klimatologicznym (260 DU): 10,6.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 11, 10, 9.

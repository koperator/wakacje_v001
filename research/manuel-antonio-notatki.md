# Manuel Antonio – Playa Espadilla (Kostaryka) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Quepos, WMO 1984–2003 (tabela Wikipedii) | Stacja ok. 7 km od bazy. Starsze normy. |
| dew_point | Magnus: średnia (maks.+min.)/2 i wilgotność z Panamy (WMO 1991–2020) | Zastępczo. Szacunek; w porze suchej na wybrzeżu Quepos prawdopodobnie wilgotniej niż w Panamie. |
| sun | weather2travel, Quepos (liczby całkowite) | Szacunek. Kontrolnie Puntarenas (WMO): 5,0–9,1 h, ale to suchsza Zatoka Nicoya. |
| uv | BestDateWeather, Panama (8.98°N 79.52°W) | Punkt dla Kostaryki to San José w górach. Szacunek. |
| wind | Weather Spark, Quepos | Wybrzeże osłonięte górami, bardzo mało wiatru. |
| water | seatemperature.org, Quepos | |
| local_season | Jak Tamarindo | Szacunek. |

## Szacunki

- **beaches = 4:** Espadilla jest długa i jasna, ale z falą i prądami; zatoczki w parku (Manuel Antonio, Espadilla Sur) na poziomie 5, płatne i z limitem wejść.
- **greenery = 5:** las deszczowy przy samej plaży; poziom kotwic Seszele / Langkawi.
- **sightseeing = 4:** park narodowy (zwierzęta), namorzyny, rafting, wodospady, rejsy.
- **local_prices = 4**, jak Tamarindo.
- **flight_time = 17,2 h, 1 przesiadka (Paryż):** KAYAK.pl: najkrótsza średnia przez Frankfurt (15 h 56 min), ale Lufthansa i Condor latają do SJO głównie zimą; Air France (Paryż) i Iberia (Madryt) przez cały rok, więc przyjęta średnia przez Paryż.
- **transfer = 3,3 h:** SJO – Manuel Antonio ok. 170 km drogą. Krajowy lot SJO–Quepos (ok. 25 min) skraca podróż, ale wymaga kolejnej przesiadki.
- **flight_price (szacunek):** statystyki KAYAK.pl WAW–SJO.
- **local_season:** jak Tamarindo: H XII–IV, M VII–VIII i XI, L V–VI i IX–X.

## Flagi

- **holidays:** III–IV = 1 (Semana Santa), jak Tamarindo.
- **Pominięte:** prądy wsteczne na Espadilli (całoroczne, nie sezonowe), huragany (Pacyfik Kostaryki prawie poza torami).

## Do przeglądu

1. **Transfer 3,3 h** obniża wynik dojazdu; z lotem krajowym ok. 1,5 h.
2. **Punkt rosy i UV z Panamy.**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Transfer 3,3 h:** zostaje – liczony drogą, bez kolejnej przesiadki na lot krajowy. Punkt rosy i UV z Panamy zostają jako szacunek.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Quepos (ok. 7 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,013, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,9 / 12,5 / 13,8 / 14,0 / 13,0 / 12,3 / 12,5 / 13,3 / 13,3 / 12,0 / 10,8 / 10,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 257 DU): 11,2–12; model na 1.11 przy ozonie klimatologicznym (263 DU): 11,4.
- Wynik (I–XII): 11, 13, 14, 14, 13, 12, 12, 13, 13, 12, 11, 10.

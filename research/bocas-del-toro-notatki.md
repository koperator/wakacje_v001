# Panama – Bocas del Toro (Isla Colón) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | undefined |
| rain | undefined |
| rain_days | WMO 1971–2000, próg niepodany i wysoka liczba dni → × 0,7, szacunek |
| dew_point | zastępczo punkt rosy kierunku san-andres z bazy, szacunek |
| sun | h/dzień podane wprost |
| uv | zastępczo krzywa UV kierunku manuel-antonio z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Brak wilgotności dla Bocas – punkt rosy zastępczo z San Andrés (Karaiby, ok. 400 km), szacunek.

## Szacunki

- **beaches 3, greenery 5, sightseeing 3, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: przy bazie mało plaż, najlepsze dopiero łodzią (poziom Negombo); dżungla jak Langkawi; zwiedzanie przyrodnicze jak Phuket; ceny jak Cypr.
- **local_season** HHHHLLMMLLLH – wiedza przewodnikowa, szacunek.
- **transfer 0,1 h** – lotnisko w Bocas Town – hotele w zasięgu spaceru lub kilku minut taksówką.

## Flagi

Brak.

## Dojazd

Przyjęte: **19,5 h, 2 przesiadki** (szacunek). Do Panamy z 1 przesiadką (KLM przez Amsterdam) ok. 17 h, dalej lot krajowy do Bocas (Air Panama z Albrook lub Copa z Tocumen, ok. 1 h) – ok. 19–20 h z 2 przesiadkami (szacunek).

## Ceny lotów (szacunek)

KAYAK: KAYAK.pl bez strony trasy do BOC (tylko oferty z przesiadkami z WAW i KRK); szacunek: Warszawa – Panama (I 3 511, III 4 995, XII 5 023 zł, średnia 4 343 zł) + ok. 800 zł za lot krajowy w obie strony (Air Panama z Albrook / Copa z Tocumen, ok. 1 h). Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 4300 / 5500 / 5800 / 5500 / 4700 / 4700 / 5100 / 5100 / 4700 / 4700 / 4700 / 5800.

## Do przeglądu

1. Lot do Bocas: KAYAK bez danych – czas i cena jako Panama + lot krajowy (szacunek).
2. Punkt rosy zastępczo z San Andrés.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Bocas del Toro). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,009, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,8 / 12,5 / 13,8 / 13,9 / 13,0 / 12,2 / 12,4 / 13,3 / 13,3 / 12,0 / 10,8 / 10,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 256 DU): 11,1–12,1; model na 1.11 przy ozonie klimatologicznym (263 DU): 11,3.
- Wynik (I–XII): 11, 13, 14, 14, 13, 12, 12, 13, 13, 12, 11, 10.

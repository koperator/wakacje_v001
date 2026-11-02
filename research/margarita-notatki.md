# Wenezuela – Isla Margarita (Playa El Agua / Pampatar) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Porlamar – normy 1991–2020 (NOAA, INAMEH): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela Margarita) |
| rain | Wikipedia: Porlamar – normy 1991–2020 (NOAA, INAMEH): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela Margarita) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku curacao z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 4, greenery 2, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: szerokie plaże z jasnym piaskiem, fale (poziom Cancún); sucho jak Santorini; zwiedzanie jak Aruba; ceny jak Djerba.
- **local_season** HHMMLLMMLLLH – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Del Caribe – Playa El Agua ok. 30 km, ok. 35 min; do Pampatar ok. 20 min (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **21,5 h, 2 przesiadki** (szacunek). KAYAK.de (z Niemiec): najszybciej ok. 21 h 25 min z 2 przesiadkami (Madryt, Caracas); KAYAK.pl bez strony trasy. Zimą czartery biur z Katowic (nie liczą się jako lot rozkładowy).

## Ceny lotów (szacunek)

KAYAK: KAYAK.pl bez strony trasy; KAYAK.de Niemcy – Porlamar: średnia 1 982 €, typowo 1 778–1 982 € (ok. 7 600–8 500 zł), z 2–3 przesiadkami (Madryt, Caracas, Bogota), najszybciej ok. 21 h 30 min. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 8500 / 8500 / 8400 / 8400 / 8000 / 8000 / 8400 / 8400 / 7600 / 8000 / 8000 / 8500.

## Do przeglądu

1. Bezpieczeństwo: MSZ odradza wszelkie podróże do Wenezueli (stan XII 2025) – sprawdzić aktualny komunikat.
2. Cena lotu z KAYAK.de (Niemcy, euro) – szacunek.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Isla Margarita). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,000, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,3 / 12,0 / 13,4 / 13,7 / 13,0 / 12,4 / 12,6 / 13,2 / 13,0 / 11,6 / 10,3 / 9,6.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 264 DU): 10,6–10,9; model na 1.11 przy ozonie klimatologicznym (262 DU): 10,9.
- Wynik (I–XII): 10, 12, 13, 14, 13, 12, 13, 13, 13, 12, 10, 10.

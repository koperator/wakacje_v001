# Brazylia – Cumbuco (Fortaleza), Ceará – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Fortaleza – normy 1991–2020 (INMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain | Wikipedia: Fortaleza – normy 1991–2020 (INMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku porto-de-galinhas z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

Cumbuco nie ma osobnej stacji; Fortaleza leży ok. 30 km na wschód, na tym samym wybrzeżu. UV: BestDateWeather Salvador (ok. 1 000 km na południe), szacunek.

## Szacunki

- **beaches 3, greenery 1, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: szeroka plaża, ale wiatr i fale (poziom Negombo); zieleń jak Corralejo (wydmy); zwiedzanie jak Aruba; ceny jak Phu Quoc.
- **local_season** HMLLLLHHHHMH – wiedza przewodnikowa, szacunek.
- **transfer 0,7 h** – lotnisko Fortaleza – Cumbuco ok. 35 km, ok. 40–50 min (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **13,3 h, 1 przesiadka**. TAP przez Lizbonę, najszybciej ok. 13 h 15 min (KAYAK).

## Ceny lotów (szacunek)

KAYAK: z 1 przesiadką, najszybciej 13 h 15 min (TAP przez Lizbonę); III 3 674 zł najtaniej, XII ok. 7 166 zł najdrożej, średnia 5 389 zł, typowo 4 549–6 172 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 6200 / 5400 / 3900 / 4600 / 4600 / 4600 / 6200 / 6200 / 6200 / 6200 / 5400 / 7100.

## Do przeglądu

1. UV z Salvadoru (inna szerokość, 4° S vs 13° S) – realnie w Fortalezie wyżej w VI–VIII.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Fortaleza (ok. 30 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11+, 11, 10, 10, 11, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IV, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,996, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 12,7 / 13,9 / 14,2 / 12,9 / 11,0 / 9,9 / 10,3 / 11,8 / 13,2 / 13,4 / 12,7 / 12,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 270 DU): 12,9–13,8; model na 1.11 przy ozonie klimatologicznym (272 DU): 13,1.
- Wynik (I–XII): 13, 14, 14, 13, 11, 10, 10, 11, 13, 13, 13, 12.

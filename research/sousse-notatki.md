# Tunezja – Sousse / Port El Kantaoui – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Sousse – tabela klimatyczna (okres niepodany): temperatury, opad, dni z opadem (próg niepodany), nasłonecznienie (h/dzień, liczby całkowite), temperatura morza |
| rain | Wikipedia: Sousse – tabela klimatyczna (okres niepodany): temperatury, opad, dni z opadem (próg niepodany), nasłonecznienie (h/dzień, liczby całkowite), temperatura morza |
| rain_days | tabela Sousse (próg niepodany), szacunek |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (wilgotność Monastyr), szacunek |
| sun | h/dzień podane wprost |
| uv | zastępczo krzywa UV kierunku malta z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 4, greenery 2, sightseeing 4, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: szerokie piaszczyste plaże z płytkim wejściem (poziom Cancún); zieleń jak Djerba; zwiedzanie jak Malta (medyna, El Jem, Kairuan); ceny jak Djerba.
- **local_season** LLLLMMHHMMLL – wiedza przewodnikowa, szacunek.
- **transfer 1,8 h** – lotnisko Tunis-Kartagina – Sousse ok. 140 km autostradą, ok. 1 h 45 min; z Monastyru ok. 20 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **6 h, 1 przesiadka** (szacunek). Do Tunisu brak lotów bezpośrednich; z 1 przesiadką (Lufthansa przez Monachium) od 5 h 15 min, średnio 6 h 22 min. Nouvelair Warszawa – Monastyr bez przesiadek 3 h 05 min – rozkład sezonowy niepotwierdzony.

## Ceny lotów (szacunek)

KAYAK: brak lotów bez przesiadek; z 1 przesiadką (Monachium – Lufthansa) od 5 h 15 min, średnio 6 h 22 min; I 1 037 zł najtaniej, IX 1 794 zł, XII 1 989 zł najdrożej, średnia 1 479 zł, typowo 1 113–1 819 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1000 / 1300 / 1300 / 1300 / 1500 / 1500 / 1700 / 1700 / 1800 / 1500 / 1300 / 2000.

## Do przeglądu

1. Lot: Nouvelair Warszawa – Monastyr bez przesiadek (KAYAK) – jeśli kursuje ≥ 6 miesięcy, czas lotu 3,1 h i transfer 0,3 h.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Sousse). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 4, 5, 7, 9, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,3 / 3,5 / 5,2 / 7,0 / 8,6 / 9,8 / 10,2 / 9,3 / 7,3 / 5,0 / 3,0 / 2,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 296 DU): 3,3–3,9; model na 1.11 przy ozonie klimatologicznym (282 DU): 3,8.
- Wynik (I–XII): 2, 4, 5, 7, 9, 10, 10, 9, 7, 5, 3, 2.

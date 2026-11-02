# Włochy – Rimini (Riwiera Adriatycka) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Rimini – stacja Miramare, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain | Wikipedia: Rimini – stacja Miramare, normy 1991–2020 (Aeronautica Militare): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | BestDateWeather: Wenecja (45.44°N 12.33°E) – UV all-sky z Open-Meteo: I 2, IV 5, VII 7, X 2; pozostałe miesiące interpolowane |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 2, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: szeroka, piaszczysta i płytka plaża, ale tłok i mętna woda (poziom Sopotu); zieleń jak Santorini; zwiedzanie jak Malta (San Marino, Rawenna); ceny jak Cypr.
- **local_season** LLLLMHHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 1,3 h** – lotnisko Bolonia – Rimini ok. 120 km autostradą, ok. 1 h 20 min (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **2,1 h, 0 przesiadek**. Wizz Air (5× w tygodniu) i Ryanair (3×) bez przesiadek do Bolonii, średnio 2 h 06 min, cały rok. Do Rimini (RMI) brak lotów bezpośrednich z Warszawy.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air (5× w tygodniu), Ryanair (3×), sezonowo LOT, średnio 2 h 06 min; II 330 zł najtaniej, IX 628 zł, XII 640 zł najdrożej, średnia 508 zł, typowo 345–713 zł; do Rimini (RMI) brak lotów bez przesiadek. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 700 / 600 / 700 / 700 / 800 / 900 / 900 / 900 / 900 / 700 / 700 / 900.

## Do przeglądu

1. Wczasy: Rimini w ofercie biur głównie z dojazdem autokarowym lub własnym – brak oferty samolotowej.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Rimini). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 4, 5, 7, 8, 8, 7, 5, 3, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,1 / 2,0 / 3,4 / 5,2 / 6,9 / 8,0 / 8,2 / 7,3 / 5,2 / 3,2 / 1,5 / 1,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 292 DU): 2–2,4; model na 1.11 przy ozonie klimatologicznym (287 DU): 2,2.
- Wynik (I–XII): 1, 2, 4, 5, 7, 8, 8, 7, 5, 3, 2, 1.

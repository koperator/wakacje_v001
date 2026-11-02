# Maroko – Agadir – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Agadir – stacja Inezgane, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, nasłonecznienie |
| rain | Wikipedia: Agadir – stacja Inezgane, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (wilgotność z reanalizy Avionero), szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku maspalomas z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Tabela Inezgane nie podaje wilgotności – wilgotność z reanalizy (Avionero, 76–87%), punkt rosy szacunkowy (prawdopodobnie zawyżony latem o ok. 1–2 °C).

## Szacunki

- **beaches 4, greenery 2, sightseeing 3, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: szeroka piaszczysta plaża w zatoce (poziom Cancún), ale woda chłodna; zieleń jak Santorini; zwiedzanie jak Phuket; ceny jak Djerba.
- **local_season** HHHMLLHHMMHH – wiedza przewodnikowa, szacunek.
- **transfer 0,4 h** – lotnisko Al Massira – Agadir ok. 25 km, ok. 25 min.

## Flagi

Brak.

## Dojazd

Przyjęte: **5,2 h, 0 przesiadek** (szacunek). Wizz Air bez przesiadek od 27.10.2025, 2× w tygodniu, ok. 5 h 10 min; KAYAK ma ceny także na VII–VIII, ale ciągłości latem nie potwierdziłem (szacunek). Z 1 przesiadką (Zurych) ok. 8 h 37 min.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air ok. 3× w tygodniu, 5 h 10 min; z 1 przesiadką (Zurych) ok. 8 h 37 min; X ok. 623 zł najtaniej, VII 1 560 zł, VIII 2 210 zł najdrożej, średnia 957 zł, typowo 643–1 286 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 1500 / 1500 / 1500 / 1300 / 1100 / 1100 / 1800 / 1800 / 1300 / 900 / 1500 / 1500.

## Do przeglądu

1. Lot bez przesiadek: Wizz Air od X 2025 – sprawdzić, czy kursuje latem (warunek 6 miesięcy).
2. UV zastępczo z Maspalomas (Gran Canaria, ok. 2° dalej na południe).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Agadir). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 4, 5, 7, 9, 10, 11, 11, 11, 9, 6, 4, 3. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 3,7 / 5,2 / 7,1 / 8,9 / 10,0 / 10,8 / 11,0 / 10,5 / 8,8 / 6,5 / 4,3 / 3,4.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 284 DU): 4,8–5,3; model na 1.11 przy ozonie klimatologicznym (273 DU): 5,3.
- Wynik (I–XII): 4, 5, 7, 9, 10, 11, 11, 11, 9, 6, 4, 3.

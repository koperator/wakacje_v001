# Gambia – Kololi (Senegambia Strip) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Banjul – normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela, okres niepodany) |
| rain | Wikipedia: Banjul – normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie; temperatura morza (tabela, okres niepodany) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku sal z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 3, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: szeroka plaża z falami Atlantyku (poziom Negombo); zieleń jak Cancún; zwiedzanie jak Aruba (przyroda, mało zabytków); ceny jak Djerba.
- **local_season** HHHMLLLLLMHH – wiedza przewodnikowa, szacunek.
- **transfer 0,4 h** – lotnisko Banjul – Kololi ok. 20 km.

## Flagi

- **smog 1** (XII, I, II, III): Harmattan (pył saharyjski z wiatrem z lądu): kilkudniowe epizody zamglenia, mniej słońca i suche powietrze, w części dni miesiąca.

## Dojazd

Przyjęte: **11,5 h, 1 przesiadka**. Regularnie z 1 przesiadką (Stambuł), średnio ok. 11 h 28 min; czartery Enter Air zimą bez przesiadek ok. 8 h 15 min – nie spełniają warunku lotu rozkładowego.

## Ceny lotów (szacunek)

KAYAK: z 1 przesiadką (Stambuł), średnio 11 h 28 min; zimą czarter Enter Air bez przesiadek (ok. 8 h 15 min); XI 2 105 zł najtaniej, VI 4 406 zł i IX 4 367 zł najdrożej, średnia 2 958 zł, typowo 2 261–4 143 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3700 / 3700 / 3700 / 3000 / 2500 / 4400 / 2500 / 2500 / 4400 / 3000 / 2100 / 3700.

## Do przeglądu

1. UV zastępczo z Sal (Wyspy Zielonego Przylądka, ok. 3° dalej na północ).
2. Wiza: R.pl podaje brak wizy (stan 09.2025) – warto potwierdzić.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Kololi). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 9. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,003, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,7 / 11,5 / 13,0 / 13,6 / 13,2 / 12,8 / 13,0 / 13,4 / 12,8 / 11,2 / 9,7 / 9,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 266 DU): 9,8–10,4; model na 1.11 przy ozonie klimatologicznym (260 DU): 10,4.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 11, 10, 9.

# Egipt – El Alamein (Riwiera Śródziemnomorska) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Aleksandria – lotnisko El Nouzha, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie; temperatura morza (okres niepodany) – ok. 100 km na E od El Alamein, to samo wybrzeże – stacja zastępcza ok. 100 km |
| rain | Wikipedia: Aleksandria – lotnisko El Nouzha, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie; temperatura morza (okres niepodany) – ok. 100 km na E od El Alamein, to samo wybrzeże |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku djerba z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

Climate-Data.org (model) dla El Alamein: maksima o ok. 0,5–1 °C niższe niż w Aleksandrii, opad podobny – kontrola. Weather Spark El Alamein: woda III 17 °C, VIII 27 °C (zgodne z Aleksandrią).

## Szacunki

- **beaches 5, greenery 1, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: biały piasek i turkusowa, płytka woda (poziom Boracay); pustynia jak Marsa Alam; zwiedzanie jak Marsa Alam (muzeum i cmentarze, Aleksandria daleko); ceny jak Djerba.
- **local_season** LLLLLMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 3 h** – Kair – El Alamein ok. 250 km autostradą, ok. 3 h (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **4,2 h, 0 przesiadek**. Regularnie: LOT do Kairu codziennie, ok. 4 h 10 min, przez cały rok. Czartery biur na lotnisko El Alamein (DBB) tylko w sezonie.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek LOT codziennie, średnio 4 h 10 min; VI 1 035 zł najtaniej, VII 1 883 zł najdrożej, VIII 1 650 zł, średnia 1 298 zł, typowo 1 082–1 694 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1200 / 1200 / 1200 / 1200 / 1200 / 1000 / 1900 / 1700 / 1300 / 1200 / 1200 / 1200.

## Do przeglądu

1. Temperatury i słońce ze stacji Aleksandria (ok. 100 km) – szacunek.
2. Transfer z Kairu 3 h; czartery na lotnisko El Alamein skracają dojazd do ok. 20 min, ale tylko w sezonie.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Aleksandria (ok. 100 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 3, 5, 7, 9, 10, 11, 11+, 11, 9, 6, 4, 3. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące VII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,004, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 3,6 / 5,1 / 7,1 / 8,9 / 10,1 / 10,9 / 11,2 / 10,6 / 8,9 / 6,5 / 4,3 / 3,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 285 DU): 4,9–5; model na 1.11 przy ozonie klimatologicznym (274 DU): 5,2.
- Wynik (I–XII): 3, 5, 7, 9, 10, 11, 12, 11, 9, 6, 4, 3.

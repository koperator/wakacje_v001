# Katar – Doha – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Doha – normy 1992–2021 (Qatar Meteorology Department): temperatury, opad, wilgotność, nasłonecznienie |
| rain | Wikipedia: Doha – normy 1992–2021 (Qatar Meteorology Department): temperatury, opad, wilgotność, nasłonecznienie |
| rain_days | zastępczo dni ≥ 1 mm z Manamy (ok. 140 km, ten sam klimat), szacunek |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku dubaj z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Tabela dla Doha nie podaje dni z opadem – zastępczo Manama (opad roczny podobny).

## Szacunki

- **beaches 2, greenery 1, sightseeing 3, local_prices 4** – ocena redakcyjna względem kotwic w rejestrze: plaże głównie hotelowe i sztuczne (poziom Malty); pustynia jak Marsa Alam; zwiedzanie jak Phuket (muzea, suk, wydmy); ceny jak Aruba.
- **local_season** HHHMLLLLLMHH – wiedza przewodnikowa, szacunek.
- **transfer 0,3 h** – lotnisko Hamad – West Bay ok. 15 km, ok. 20 min.

## Flagi

- **holidays 1** (I, II, III): Ramadan (zależnie od roku; w latach 2027–2030 przypada w I–III): restauracje poza hotelami otwarte dopiero po zachodzie słońca, jedzenie i picie publicznie w dzień źle widziane, krótsze godziny muzeów; hotele działają.

## Dojazd

Przyjęte: **5,5 h, 0 przesiadek**. Qatar Airways bez przesiadek ok. 5 h 30 min, cały rok.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Qatar Airways, 5 h 30 min; X 2 588 zł najtaniej, V 3 632 zł i XI 3 613 zł najdrożej, średnia 3 087 zł, typowo 2 607–3 759 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3400 / 3400 / 3400 / 3100 / 3600 / 2800 / 2800 / 2800 / 2800 / 2600 / 3600 / 3400.

## Do przeglądu

1. Wczasy z biurem: tylko 4-dniowe pakiety Itaki i objazd Rainbow – brak oferty 7 nocy.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Doha). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 6, 8, 10, 11+, 11+, 11+, 11+, 11+, 10, 8, 6, 5. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,011, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 5,7 / 7,5 / 9,7 / 11,4 / 11,7 / 11,8 / 11,8 / 11,8 / 10,5 / 8,2 / 6,1 / 5,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 261 DU): 6,6–7,4; model na 1.11 przy ozonie klimatologicznym (264 DU): 7,0.
- Wynik (I–XII): 6, 8, 10, 12, 12, 12, 12, 12, 10, 8, 6, 5.

# Tajlandia – Pattaya / Jomtien – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Pattaya – normy 1991–2020 (WMO, TMD): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain | Wikipedia: Pattaya – normy 1991–2020 (WMO, TMD): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku koh-samui z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 2, greenery 2, sightseeing 3, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: wąskie plaże miejskie z mętną wodą (poziom Alanyi); zieleń jak Santorini; zwiedzanie jak Phuket; ceny jak Phu Quoc.
- **local_season** HHHMLLLLLMHH – wiedza przewodnikowa, szacunek.
- **transfer 1,8 h** – lotnisko Suvarnabhumi – Pattaya ok. 120 km autostradą, ok. 1,5–2 h.

## Flagi

- **holidays 1** (IV): Songkran (13–15 kwietnia, w Pattayi „Wan Lai” do ok. 19 kwietnia): uliczne bitwy wodne, tłok, droższe noclegi.
- **holidays 1** (XII): Boże Narodzenie i Nowy Rok (ok. 20.12–10.01): najwyższe ceny, minimalne długości pobytu i obowiązkowe kolacje galowe w części hoteli.

## Dojazd

Przyjęte: **10,3 h, 0 przesiadek**. LOT bez przesiadek do Bangkoku 6× w tygodniu, 10 h 20 min, cały rok (od 7.10.2026).

## Ceny lotów (szacunek)

KAYAK: bez przesiadek LOT 6× w tygodniu, 10 h 20 min; z 1 przesiadką (Stambuł) średnio 14 h 28 min; V 2 973 zł najtaniej, VII 3 518 zł, XII 3 806 zł najdrożej, średnia 3 394 zł, typowo 2 952–3 927 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3600 / 3600 / 3600 / 3400 / 3000 / 3200 / 3500 / 3200 / 3200 / 3400 / 3600 / 3800.

## Do przeglądu

1. UV zastępczo z Koh Samui.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Pattaya). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 9. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,002, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,8 / 11,6 / 13,1 / 13,6 / 13,1 / 12,7 / 12,9 / 13,4 / 12,9 / 11,2 / 9,8 / 9,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 264 DU): 10–10,6; model na 1.11 przy ozonie klimatologicznym (260 DU): 10,5.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 11, 10, 9.

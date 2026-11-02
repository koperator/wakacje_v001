# Maroko – Saïdia (wybrzeże śródziemnomorskie) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Melilla – stacja 52 m, normy 1991–2020 (NOAA NCEI, Météo Climat): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie – ok. 50 km na W od Saïdii, to samo wybrzeże |
| rain | Wikipedia: Melilla – stacja 52 m, normy 1991–2020 (NOAA NCEI, Météo Climat): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie – ok. 50 km na W od Saïdii, to samo wybrzeże |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku albufeira z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 4, greenery 2, sightseeing 2, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: długa, piaszczysta i płytka plaża (poziom Cancún); sucho jak Santorini; zwiedzanie jak Aruba; ceny jak Djerba.
- **local_season** LLLLLMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 1 h** – lotnisko Oujda-Angads – Saïdia ok. 60 km, ok. 1 h (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **7,5 h, 1 przesiadka** (szacunek). Brak lotów bezpośrednich do Oujdy i Nadoru z Warszawy; z 1 przesiadką (Paryż, Bruksela, Madryt), ok. 7–8 h – szacunek bez strony KAYAK.

## Ceny lotów (szacunek)

KAYAK: KAYAK.pl i momondo bez strony trasy Warszawa – Oujda/Nador; połączenia z 1 przesiadką (Paryż, Bruksela, Madryt, Marsylia), ok. 7–8 h. Szacunek: Agadir z przesiadką (średnia 957 zł, ale głównie bez przesiadek) + ok. 50%. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1300 / 1100 / 1300 / 1300 / 1300 / 1500 / 1800 / 2100 / 1500 / 1300 / 1300 / 1300.

## Do przeglądu

1. Lot i cena lotu bez danych KAYAK – szacunek.
2. UV zastępczo z Albufeiry.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Al Hoceima (ok. 150 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 3, 4, 6, 7, 9, 10, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,5 / 3,7 / 5,4 / 7,2 / 8,8 / 9,9 / 10,3 / 9,5 / 7,5 / 5,2 / 3,1 / 2,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 288 DU): 3,7–4,1; model na 1.11 przy ozonie klimatologicznym (282 DU): 4,0.
- Wynik (I–XII): 3, 4, 6, 7, 9, 10, 10, 9, 7, 5, 3, 2.

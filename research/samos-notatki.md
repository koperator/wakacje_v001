# Grecja – Samos (Pythagoreio / Kokkari) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Samos – lotnisko, normy 1978–2010 (HNMS): temperatury, opad, dni z opadem (próg niepodany), wilgotność |
| rain | Wikipedia: Samos – lotnisko, normy 1978–2010 (HNMS): temperatury, opad, dni z opadem (próg niepodany), wilgotność |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku rodos-faliraki z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Nasłonecznienie i temperatura morza z Kuşadası (MGM, Weather Spark) po drugiej stronie cieśniny – szacunek; Weather Spark Pythagoreio podaje tylko III ok. 16 °C i VIII ok. 24 °C (zgodne).

## Szacunki

- **beaches 3, greenery 4, sightseeing 3, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: czyste plaże z kamykami (poziom Sopotu); zielona wyspa jak Mauritius; zwiedzanie jak Phuket (zabytki UNESCO, Efez promem); ceny jak Djerba.
- **local_season** LLLLMHHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,2 h** – lotnisko Samos – Pythagoreio ok. 3 km; do Kokkari ok. 25 min.

## Flagi

- **waves 1** (VII, VIII): Meltemi (silny wiatr z północy) wieje po kilka dni z rzędu: wysoka fala na plażach północnego wybrzeża (Kokkari), odwołane rejsy w części dni; południe (Pythagoreio) osłonięte.

## Dojazd

Przyjęte: **6,6 h, 1 przesiadka** (szacunek). Regularnie z 1 przesiadką w Atenach (Aegean / Olympic, LOT do Aten), najkrótszy powrót 6 h 35 min (KAYAK); czartery Enter Air latem.

## Ceny lotów (szacunek)

KAYAK: regularnie z 1 przesiadką w Atenach (najkrótszy powrót 6 h 35 min); latem czartery Enter Air; V ok. 720 zł najtaniej, VIII ok. 2 490 zł najdrożej, średnia 1 306 zł, typowo 721–1 826 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1000 / 1000 / 1000 / 1000 / 700 / 1700 / 1700 / 2100 / 1300 / 1000 / 1000 / 1000.

## Do przeglądu

1. Lot: brak strony KAYAK z przesiadką najszybszą w obie strony – przyjęty najkrótszy powrót 6 h 35 min.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Samos). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,0 / 3,2 / 4,8 / 6,6 / 8,3 / 9,5 / 9,8 / 9,0 / 6,9 / 4,6 / 2,6 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 299 DU): 3–3,5; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,5.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 10, 9, 7, 5, 3, 2.

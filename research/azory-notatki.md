# Portugalia – Azory (São Miguel, Ponta Delgada) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Ponta Delgada – obserwatorium Afonso Chaves, normy 1991–2020 (IPMA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain | Wikipedia: Ponta Delgada – obserwatorium Afonso Chaves, normy 1991–2020 (IPMA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | BestDateWeather: Azory (37.75°N 25.67°W) – UV all-sky z Open-Meteo: I 3, IV 7, VII 7, X 5; pozostałe miesiące interpolowane |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 2, greenery 5, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: czarny piasek i skały, chłodna woda (poziom Malty); zieleń jak Seszele; jeziora kraterowe i Furnas – poziom Malty; ceny jak Cypr.
- **local_season** LLLLMHHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,2 h** – lotnisko – centrum Ponta Delgady ok. 3 km.

## Flagi

Brak.

## Dojazd

Przyjęte: **8,5 h, 1 przesiadka** (szacunek). Brak lotów bezpośrednich; z 1 przesiadką w Lizbonie (TAP) od 7 h 50 min, średnio ok. 10 h 40 min (KAYAK) – przyjęte 8,5 h.

## Ceny lotów (szacunek)

KAYAK: brak lotów bez przesiadek; z 1 przesiadką w Lizbonie (TAP) od 7 h 50 min, średnio 10 h 40 min; III ok. 1 381 zł najtaniej, V ok. 2 269 zł najdrożej, VIII 2 206 zł, średnia 1 698 zł, typowo 1 430–2 278 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1500 / 1500 / 1400 / 1500 / 2300 / 2000 / 2000 / 2200 / 1700 / 1500 / 1500 / 1500.

## Do przeglądu

1. UV: BestDateWeather Azory – 4 miesiące odczytane, reszta interpolowana.
2. Wczasy: tylko objazdy Rainbow (od ok. 4 900 zł) – brak oferty pobytowej.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (São Miguel). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 4, 5, 7, 8, 9, 9, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 2,0 / 3,2 / 4,8 / 6,6 / 8,3 / 9,5 / 9,8 / 9,0 / 6,9 / 4,6 / 2,6 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 284 DU): 3,2–3,7; model na 1.11 przy ozonie klimatologicznym (283 DU): 3,4.
- Wynik (I–XII): 2, 4, 5, 7, 8, 9, 9, 9, 7, 5, 3, 2.

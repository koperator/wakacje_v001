# Chorwacja – Istria (Rovinj / Poreč) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Rovinj – tabela DHMZ (okres niepodany): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność, nasłonecznienie; temperatura morza 1961–1990 |
| rain | Wikipedia: Rovinj – tabela DHMZ (okres niepodany): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność, nasłonecznienie; temperatura morza 1961–1990 |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | BestDateWeather: Wenecja (45.44°N 12.33°E) – UV all-sky z Open-Meteo: I 2, IV 5, VII 7, X 2; pozostałe miesiące interpolowane |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 2, greenery 4, sightseeing 4, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: żwir, skały i platformy (poziom Malty); dużo zieleni jak Mauritius; zwiedzanie jak Malta; ceny jak Cypr.
- **local_season** LLLLMMHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Pula – Rovinj ok. 40 km, ok. 40 min; do Poreča ok. 1 h (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **4 h, 1 przesiadka** (szacunek). Do Puli brak lotów bezpośrednich z Warszawy; z 1 przesiadką (Zagrzeb) średnio ok. 3 h 57 min (KAYAK).

## Ceny lotów (szacunek)

KAYAK: brak lotów bez przesiadek; z 1 przesiadką (najczęściej Zagrzeb), średnio 3 h 57 min w jedną stronę; VIII 990 zł najtaniej, IX ok. 1 826 zł najdrożej, średnia 1 093 zł, typowo 974–1 505 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 1000 / 1000 / 1000 / 1000 / 1100 / 1100 / 1400 / 1000 / 1700 / 1000 / 1000 / 1000.

## Do przeglądu

1. UV z Wenecji (BestDateWeather, 4 miesiące odczytane, reszta interpolowana).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Rovinj). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 3, 5, 7, 8, 8, 7, 5, 3, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,0 / 1,8 / 3,3 / 5,1 / 6,8 / 7,9 / 8,2 / 7,2 / 5,1 / 3,0 / 1,4 / 0,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 290 DU): 1,9–2,3; model na 1.11 przy ozonie klimatologicznym (288 DU): 2,1.
- Wynik (I–XII): 1, 2, 3, 5, 7, 8, 8, 7, 5, 3, 2, 1.

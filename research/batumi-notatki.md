# Gruzja – Batumi (Adżaria) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia (ru): Batumi – tabela „Pogoda i klimat” (okres niepodany): temperatury i opad; dni z opadem ≥ 1 mm i nasłonecznienie z tabeli en.wikipedia (lotnisko Batumi, 1981–2010) |
| rain | Wikipedia (ru): Batumi – tabela „Pogoda i klimat” (okres niepodany): temperatury i opad; dni z opadem ≥ 1 mm i nasłonecznienie z tabeli en.wikipedia (lotnisko Batumi, 1981–2010) |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (wilgotność z reanalizy Avionero), szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | BestDateWeather: Tbilisi (41.72°N 44.79°E) – UV all-sky z Open-Meteo: I 2, IV 6, VII 7, X 4; pozostałe interpolowane – zastępczo dla Batumi (ta sama szerokość; wybrzeże bardziej pochmurne) |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Tabela klimatyczna en.wikipedia dla Batumi jest uszkodzona (przesunięte wiersze) – temperatury i opad z ru.wikipedia, dni z opadem i słońce z en.wikipedia. Wilgotność 77–89% z reanalizy (Avionero) – punkt rosy szacunkowy.

## Szacunki

- **beaches 2, greenery 4, sightseeing 3, local_prices 1** – ocena redakcyjna względem kotwic w rejestrze: kamienista plaża z otoczakami, głęboko od brzegu (poziom Alanyi); bujna zieleń jak Phuket; zwiedzanie jak Phuket; ceny jak Goa.
- **local_season** LLLLMHHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 2,2 h** – Kutaisi – Batumi ok. 150 km, ok. 2–2,5 h busem lub taksówką (szacunek).

## Flagi

Brak.

## Dojazd

Przyjęte: **3,4 h, 0 przesiadek**. Wizz Air Warszawa – Kutaisi bez przesiadek ok. 5× w tygodniu, 3 h 20–3 h 30 min, cały rok (KAYAK: ceny I–XII). Do Batumi bez przesiadek tylko LOT zimą raz w tygodniu (infoloty.pl) – nie spełnia warunku 6 miesięcy.

## Ceny lotów (szacunek)

KAYAK: bez przesiadek Wizz Air ok. 5× w tygodniu, 3 h 20–3 h 30 min; II 357 zł najtaniej, VII 1 141 zł, VIII 1 235 zł najdrożej, średnia 778 zł, typowo 521–1 121 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`), +300 zł za bagaż (głównie tanie linie).
Wynik (I–XII, zł): 900 / 700 / 900 / 900 / 1100 / 1300 / 1400 / 1500 / 1100 / 900 / 900 / 900.

## Do przeglądu

1. UV z Tbilisi (ta sama szerokość, ale Batumi bardziej pochmurne – realnie niższe).
2. Punkt rosy z wilgotności reanalizy (może być zawyżony).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Batumi). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 1, 2, 4, 6, 7, 9, 10, 9, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,5 / 2,5 / 4,0 / 5,9 / 7,6 / 8,8 / 9,1 / 8,1 / 6,0 / 3,8 / 2,0 / 1,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 274 DU): 2,5–3,1; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,7.
- Wynik (I–XII): 1, 2, 4, 6, 7, 9, 10, 9, 6, 4, 2, 1.

# Brazylia – Salvador (Barra / Rio Vermelho), Bahia – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Salvador (Bahia) – normy 1991–2020 (INMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain | Wikipedia: Salvador (Bahia) – normy 1991–2020 (INMET): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | BestDateWeather Salvador (te same dane, które w bazie służą zastępczo dla Porto de Galinhas) |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 3, sightseeing 4, local_prices 2** – ocena redakcyjna względem kotwic w rejestrze: plaże miejskie, przyzwoite, w części z rafą przy brzegu (poziom Negombo); zieleń jak Cancún; Pelourinho i okolice – poziom Malty; ceny jak Phu Quoc.
- **local_season** HHMLLLHLLMMH – wiedza przewodnikowa, szacunek.
- **transfer 0,7 h** – lotnisko – Barra ok. 30 km, ok. 40–50 min (szacunek).

## Flagi

- **holidays 1** (II, III): Karnawał w Salvadorze (zależnie od roku luty lub początek marca): kilka dni parad i bloków na ulicach Barra i centrum, zamknięte ulice, bardzo wysokie ceny noclegów i tłok.

## Dojazd

Przyjęte: **13,9 h, 1 przesiadka**. Najszybciej Air France przez Paryż, ok. 13 h 55 min (KAYAK).

## Ceny lotów (szacunek)

KAYAK: z 1 przesiadką, najszybciej 13 h 55 min (Air France przez Paryż); XI 4 289 zł najtaniej, XII ok. 7 286 zł najdrożej, średnia 5 654 zł, typowo 4 794–7 288 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 6500 / 6500 / 5700 / 5000 / 5000 / 5000 / 6500 / 5000 / 5000 / 5700 / 4300 / 7300.

## Do przeglądu

1. Bezpieczeństwo: w Salvadorze wysoka przestępczość uliczna – notatka nie zmienia ocen, warto sprawdzić komunikaty MSZ.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Salvador). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11, 9, 8, 8, 10, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,994, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,3 / 14,8 / 14,1 / 11,7 / 9,2 / 8,0 / 8,3 / 10,2 / 12,2 / 13,7 / 14,0 / 13,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 264 DU): 14,1–14,7; model na 1.11 przy ozonie klimatologicznym (268 DU): 14,0.
- Wynik (I–XII): 14, 15, 14, 11, 9, 8, 8, 10, 12, 14, 14, 14.

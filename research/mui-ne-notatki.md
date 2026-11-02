# Wietnam – Mui Ne (Phan Thiet) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | undefined |
| rain | undefined |
| rain_days | Weather Spark Phan Thiet (dni z opadem ≥ 1 mm, model), szacunek |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (średnia z maksimum i minimum; wilgotność Nha Trang), szacunek |
| sun | h/dzień podane wprost |
| uv | zastępczo krzywa UV kierunku phu-quoc z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 3, greenery 2, sightseeing 3, local_prices 1** – ocena redakcyjna względem kotwic w rejestrze: plaża z erozją i falami w sezonie wiatru (poziom Negombo); sucho jak Santorini; zwiedzanie jak Phuket (wydmy, Fairy Stream); ceny jak Goa.
- **local_season** HHHMLLLLLLMH – wiedza przewodnikowa, szacunek.
- **transfer 3,3 h** – lotnisko Tân Sơn Nhất – Mui Ne ok. 200 km, autostradą ok. 3–3,5 h (szacunek).

## Flagi

- **holidays 1** (I, II): Tết (wietnamski Nowy Rok, zależnie od roku styczeń lub luty): przez kilka dni zamknięta część sklepów, restauracji i usług, wyprzedany transport, wyższe ceny.
- **waves 1** (XII, I, II, III): Silny wiatr z północnego wschodu: fale i wzburzone morze w części dni, kąpiel utrudniona; najlepsze warunki do kitesurfingu.

## Dojazd

Przyjęte: **13,8 h, 1 przesiadka** (szacunek). LOT bez przesiadek do Bangkoku (10 h 20 min) i lot Bangkok – Ho Chi Minh (ok. 1 h 30 min, wiele rejsów dziennie) – osobne bilety, ok. 13,8 h; na jednym bilecie z 1 przesiadką (Doha, Stambuł) ok. 15–16 h. KAYAK pokazuje też LOT bez przesiadek do Ho Chi Minh (11 h 30 min) – to czartery biur, nie rejs całoroczny.

## Ceny lotów (szacunek)

KAYAK: na jednym bilecie z 1 przesiadką (Doha, Dubaj, Stambuł, Pekin); KAYAK pokazuje też LOT bez przesiadek 11 h 30 min (rejsy czarterowe biur, nie w sprzedaży całorocznej); V 3 282 zł najtaniej, VII 3 888 zł najdrożej, VIII 3 837 zł, średnia 3 408 zł, typowo 3 004–3 931 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3600 / 3600 / 3600 / 3400 / 3300 / 3300 / 3900 / 3800 / 3300 / 3300 / 3400 / 3600.

## Do przeglądu

1. Punkt rosy z wilgotności Nha Trang (ok. 200 km, bardziej wilgotne) – szacunek.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Mui Ne). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,008, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,4 / 12,1 / 13,5 / 13,8 / 13,1 / 12,5 / 12,7 / 13,3 / 13,1 / 11,7 / 10,4 / 9,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 265 DU): 10,4–11,2; model na 1.11 przy ozonie klimatologicznym (262 DU): 11,0.
- Wynik (I–XII): 11, 12, 14, 14, 13, 12, 13, 13, 13, 12, 10, 10.

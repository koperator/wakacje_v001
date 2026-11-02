# Wietnam – Nha Trang – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Nha Trang – tabela Vietnam Institute for Building Science and Technology (okres niepodany): temperatury, opad, dni z opadem (próg niepodany), wilgotność, nasłonecznienie |
| rain | Wikipedia: Nha Trang – tabela Vietnam Institute for Building Science and Technology (okres niepodany): temperatury, opad, dni z opadem (próg niepodany), wilgotność, nasłonecznienie |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku hoi-an z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Dni z opadem w tabeli z progiem niepodanym i wysoką liczbą – przeliczone jak ≥ 0,1 mm (× 0,7).

## Szacunki

- **beaches 4, greenery 3, sightseeing 3, local_prices 1** – ocena redakcyjna względem kotwic w rejestrze: długa piaszczysta plaża z łagodnym wejściem (poziom Cancún); zieleń jak Cancún; zwiedzanie jak Phuket; ceny jak Goa.
- **local_season** HHMMMHHHMLLL – wiedza przewodnikowa, szacunek.
- **transfer 0,6 h** – lotnisko Cam Ranh – Nha Trang ok. 35 km, ok. 40 min.

## Flagi

- **holidays 1** (I, II): Tết (wietnamski Nowy Rok, zależnie od roku styczeń lub luty): przez kilka dni zamknięta część sklepów, restauracji i usług, wyprzedany transport, wyższe ceny.
- **cyclone 1** (X, XI): Sezon tajfunów w środkowym i południowo-środkowym Wietnamie (szczyt X–XI): przy tajfunie 1–3 dni ulew, wichury i fali sztormowej, odwołane rejsy i loty.
- **waves 1** (XI, XII): Monsun NE: wyższe fale i mętna woda na plaży miejskiej w wielu dniach, rejsy po wyspach odwoływane.

## Dojazd

Przyjęte: **14,5 h, 1 przesiadka** (szacunek). LOT bez przesiadek do Bangkoku i lot do Cam Ranh – osobne bilety, ok. 14,5 h; na jednym bilecie najszybciej z 1 przesiadką w Bangkoku 16 h 45 min, zwykle z 2 przesiadkami (KAYAK).

## Ceny lotów (szacunek)

KAYAK: brak lotów bez przesiadek; najszybciej z 1 przesiadką w Bangkoku 16 h 45 min, zwykle z 2 przesiadkami; VI 3 142 zł najtaniej, V 5 384 zł, XII 7 249 zł najdrożej, średnia 4 235 zł, typowo 3 604–6 915 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 5700 / 5700 / 4200 / 4200 / 5400 / 3100 / 5700 / 5700 / 4200 / 3700 / 3700 / 7200.

## Do przeglądu

1. UV zastępczo z Hoi An (ok. 400 km na północ).
2. Wczasy: Nha Trang niewidoczne w Rainbow i Itace – szacunek jak Mui Ne (Coral Travel XII, 10 nocy, ok. 5 700 zł/os.).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Nha Trang). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,011, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,1 / 11,9 / 13,3 / 13,8 / 13,2 / 12,7 / 12,9 / 13,5 / 13,1 / 11,5 / 10,1 / 9,4.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 269 DU): 9,7–10,5; model na 1.11 przy ozonie klimatologicznym (261 DU): 10,7.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 12, 10, 10.

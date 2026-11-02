# Bahrajn – Manama (Bahrajn) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Manama – lotnisko Bahrain International, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain | Wikipedia: Manama – lotnisko Bahrain International, normy 1991–2020 (NOAA): temperatury, opad, dni z opadem ≥ 1 mm, wilgotność, punkt rosy, nasłonecznienie |
| rain_days | dni ≥ 1 mm ze stacji |
| dew_point | punkt rosy podany wprost |
| sun | suma miesięczna ÷ liczba dni |
| uv | zastępczo krzywa UV kierunku dubaj z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

## Szacunki

- **beaches 2, greenery 1, sightseeing 3, local_prices 4** – ocena redakcyjna względem kotwic w rejestrze: plaże głównie hotelowe i sztuczne (poziom Malty i Alanyi); zieleń jak Marsa Alam; zwiedzanie średnie (fort UNESCO, suk); ceny jak Aruba.
- **local_season** HHHMLLLLLMHH – wiedza przewodnikowa, szacunek.
- **transfer 0,3 h** – lotnisko w Muharraq – centrum Manamy ok. 10 km.

## Flagi

- **holidays 1** (I, II, III): Ramadan (zależnie od roku; w latach 2027–2030 przypada w I–III): część restauracji otwarta dopiero po zachodzie słońca, alkohol tylko w hotelach, krótsze godziny pracy; hotele i atrakcje działają.

## Dojazd

Przyjęte: **8,3 h, 1 przesiadka** (szacunek). Brak lotów bezpośrednich; Turkish przez Stambuł ok. 8 h 15 min, Etihad przez Abu Zabi ok. 8 h 30 min (KAYAK, kierunek odwrotny).

## Ceny lotów (szacunek)

KAYAK: KAYAK.pl bez strony trasy; momondo: brak statystyk miesięcznych, oferty z 1 przesiadką (Etihad przez Abu Zabi, Turkish przez Stambuł, LOT + Aegean przez Ateny) od ok. 8 h 15–9 h, najtańsza w obie strony 1 881 zł (Kraków); KAYAK Bahrajn → Warszawa: 974–3 491 zł, IX poza sezonem, I najpopularniejszy. Średnia przyjęta szacunkowo 2 300 zł (między Doha 3 087 zł a Dubajem). Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3000 / 2700 / 2700 / 2300 / 2100 / 2100 / 2100 / 2100 / 1900 / 2300 / 2700 / 2700.

## Do przeglądu

1. Cena lotu bez statystyk miesięcznych (KAYAK.pl nie ma strony trasy) – szacunek między Doha a Dubajem.
2. UV zastępczo z Dubaju.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Manama). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 5, 7, 9, 11, 11+, 11+, 11+, 11+, 10, 8, 6, 5. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,004, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 5,3 / 7,0 / 9,2 / 10,9 / 11,3 / 11,6 / 11,7 / 11,5 / 10,2 / 7,9 / 5,8 / 4,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 262 DU): 6,2–7,2; model na 1.11 przy ozonie klimatologicznym (265 DU): 6,7.
- Wynik (I–XII): 5, 7, 9, 11, 12, 12, 12, 12, 10, 8, 6, 5.

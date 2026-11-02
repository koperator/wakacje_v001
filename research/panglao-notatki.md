# Panglao – Alona / Dumaluan, Bohol (Filipiny) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain | PAGASA Tagbilaran, 1981–2010 | Stacja ok. 10 km. |
| rain_days | PAGASA (≥ 0,1 mm) × 0,7 | Szacunek. |
| dew_point | Magnus (wilgotność stacji) | Szacunek. |
| sun | weather2travel, Bohol (CRU) | Szacunek. |
| uv | BestDateWeather, Cebu (ok. 80 km) | Strony Panglao i Bohol nie działają. Szacunek. |
| wind | NASA POWER, Cebu City (climate-zone.com) | Model. Szacunek. |
| water | weather2travel, Bohol | |
| season, flags | bohol-philippines.com | |

## Szacunki

- **beaches = 4:** biały piasek, ale Alona płytka i zatłoczona; Dumaluan szersza.
- **greenery = 3:** Panglao płaska i zabudowana.
- **sightseeing = 3:** Chocolate Hills, wyraki, Loboc, Balicasag, delfiny.
- **local_prices = 2.**
- **flight_time = 22,2 h (szacunek), 2 przesiadki:** KAYAK.pl dla WAW–TAG się nie wczytał. Wyliczenie: do Manili przez Stambuł średnio 17 h 47 min, ok. 3 h przesiadki i ok. 1 h 25 min lotu.
- **flight_price (szacunek):** WAW–MNL + ok. 400 zł za lot do Boholu w obie strony.
- **transfer = 0,3 h:** lotnisko na Panglao, ok. 10 km do Alony.
- **local_season:** H I, IV–V, XII; M II–III, VII–VIII; L VI, IX–XI.

## Flagi

- **waves:** amihan I–II = 1 (odwołane rejsy na Balicasag i Pamilacan), habagat VI–IX = 1 (martwa fala na Alonie). Ta sama kategoria flagi dla dwóch różnych monsunów, w różnych miesiącach.
- **cyclone:** XI–I = 1.
- **holidays:** Wielki Tydzień w III–IV. Boże Narodzenie jest tylko szczytem sezonu (H), bez flagi.

## Do przeglądu

1. UV z Cebu, wiatr z modelu, czas lotu wyliczony.
2. Normy 1981–2010.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Bohol). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,007, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,8 / 12,4 / 13,7 / 13,9 / 13,0 / 12,2 / 12,4 / 13,2 / 13,2 / 11,9 / 10,7 / 10,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 269 DU): 10,6–11,3; model na 1.11 przy ozonie klimatologicznym (263 DU): 11,3.
- Wynik (I–XII): 11, 12, 14, 14, 13, 12, 12, 13, 13, 12, 11, 10.

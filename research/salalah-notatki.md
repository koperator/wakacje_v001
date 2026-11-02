# Salalah – Hawana Salalah (Oman) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko Salalah, NOAA 1991–2020 | Dni ≥ 1 mm; stacja ok. 30 km od Hawany, to samo wybrzeże. |
| sun | Ta sama tabela, 1961–1990 | VII–VIII tylko ok. 1,4 h/dzień (khareef). |
| dew_point | Magnus (wilgotność 1961–1990) | Szacunek. |
| uv | BestDateWeather, Salalah | VII–VIII tylko 4 (chmury khareef). |
| wind, water | Weather Spark, lotnisko Salalah | |
| flags | LNK Oman (kąpiel w khareef) | |

## Szacunki

- **beaches = 4:** szeroka, jasna plaża resortowa; poza khareef spokojniej.
- **greenery = 2:** pustynne wybrzeże; zieleń gór tylko w khareef.
- **sightseeing = 3:** Wadi Darbat, Mughsayl, Al Baleed i Ziemia Kadzidła (UNESCO).
- **local_prices = 3.**
- **flight_time = 11,0 h, 1 przesiadka** (Doha, KAYAK.pl).
- **flight_price:** XII 5 087 zł przycięte do ok. 4 700 zł.
- **transfer = 0,5 h:** lotnisko – Hawana ok. 35 km.
- **local_season:** H VII–VIII (khareef, turyści z Zatoki) i XI–II (Europejczycy), M III–IV, IX–X, L V–VI.

## Flagi

- **waves (khareef):** VI = 2, VII–VIII = 3 (kilkumetrowe fale, prądy, kąpiel odradzana), IX = 2.
- **holidays:** Ramadan w I–III, jak Muscat.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Salalah). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 9, 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,025, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 8,7 / 10,6 / 12,4 / 13,4 / 13,2 / 13,1 / 13,2 / 13,4 / 12,5 / 10,6 / 8,9 / 8,0.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 266 DU): 9–9,4; model na 1.11 przy ozonie klimatologicznym (259 DU): 9,7.
- Wynik (I–XII): 9, 11, 12, 13, 13, 13, 13, 13, 13, 11, 9, 8.

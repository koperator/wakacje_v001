# Nosy Be – Andilana (Madagaskar) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Nosy Be/Fascene, NOAA 1991–2020 (słońce 1961–1990) | Stacja ok. 15 km, dni ≥ 1 mm. |
| dew_point | Magnus ze stałą wilgotnością 78% | Brak danych o wilgotności. Szacunek, zgrubny. |
| uv | BestDateWeather, Nosy Be, 13.33°S 48.27°E | |
| wind | **brak danych (`null`)** | Brak Weather Spark i NASA POWER dla Nosy Be; Windfinder bez liczb. Wyspa osłonięta od pasatu. |
| water | seatemperatu.re, Nosy Be | |

## Szacunki

- **beaches = 4:** szeroka, jasna plaża ze spokojną wodą.
- **greenery = 4:** Lokobe, plantacje, zielone wzgórza.
- **sightseeing = 3:** Lokobe, Nosy Komba, Tanikely, Iranja, rekiny wielorybie.
- **local_prices = 2.**
- **flight_time = 19,0 h (szacunek), 2 przesiadki:** KAYAK.pl pokazuje tylko oferty – najszybsza 17 h 40 min (Ethiopian przez Wiedeń i Addis Abebę), z 1 przesiadką 22 h (Mediolan).
- **transfer = 0,8 h:** lotnisko – Andilana ok. 25 km.
- **local_season:** H VII–VIII, X–XII; M IV–VI, IX; L I–III.

## Flagi

- **cyclone:** I–III = 1.

## Do przeglądu

1. Brak wiatru.
2. Punkt rosy ze stałej wilgotności.
3. Czas lotu z pojedynczych ofert.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Wiatr (wcześniej brak danych):** NASA POWER dla Antsohihy (climate-zone.com, model), zastępczo – to samo osłonięte północno-zachodnie wybrzeże, ok. 150 km. Szacunek: 12–17 km/h. Antsiranana (Diego Suarez) odrzucona – leży na wietrznym północnym cyplu (do 23 km/h w VIII–IX). Weather Spark i weather-and-climate.com nie mają danych miesięcznych dla Nosy Be.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Nossi-be). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11, 9, 8, 8, 10, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,986, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,2 / 14,7 / 13,9 / 11,5 / 9,0 / 7,8 / 8,2 / 10,0 / 12,0 / 13,6 / 13,9 / 13,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 277 DU): 13,2–13,6; model na 1.11 przy ozonie klimatologicznym (268 DU): 13,9.
- Wynik (I–XII): 14, 15, 14, 11, 9, 8, 8, 10, 12, 14, 14, 14.

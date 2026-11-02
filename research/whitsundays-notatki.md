# Whitsundays – Hamilton Island, Catseye Beach (Australia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko Hamilton Island, BoM 2002–2024 (tabela Wikipedii) | Stacja na wyspie, dni ≥ 1 mm. |
| dew_point | Stara stacja Hamilton Island, BoM 1985–2002 | Ok. 1,5 km od lotniska; punkt rosy wprost. |
| sun | Mackay Aero, BoM 1983–2016 | Zastępczo (ok. 100 km). Szacunek. |
| uv | BestDateWeather, Whitsundays (20.28°S 148.95°E) | |
| wind | BoM Hamilton Island (033255): średnia z pomiarów o 9:00 i 15:00 | Tylko pory dzienne, stacja na wzgórzu. Szacunek, raczej zawyżony. |
| water | weather2travel, Airlie Beach (°F → °C) | Szacunek. |
| local_season | Pora sucha i australijskie ferie | Szacunek. |

## Szacunki

- **beaches = 4:** jasny piasek i turkusowa, płytka woda; przy odpływie szeroka płycizna, a w sezonie meduz kąpiel w kombinezonie. Whitehaven (poziom 5) to wycieczka łodzią.
- **greenery = 4**, **sightseeing = 4** (Whitehaven, rafa, rejsy), **local_prices = 5** (wyspa-resort, wszystko drogie).
- **flight_time = 27,8 h (szacunek), 2 przesiadki:** WAW–Brisbane przez Dubaj (KAYAK.pl średnio 23 h 35 min) + przesiadka ok. 2,5 h + Brisbane–Hamilton Island ok. 1 h 45 min (Jetstar, Virgin, Qantas). Strona KAYAK.pl dla HTI się nie wczytała.
- **transfer = 0,2 h:** lotnisko na wyspie.
- **flight_price (szacunek):** statystyki WAW–Brisbane + 800 zł za lot krajowy w obie strony (szacunek).
- **local_season:** H VI–X, M I, IV, XII, L II–III, V, XI.

## Flagi

- **jellyfish:** XII–III = 2 (szczyt sezonu meduz kostkowych i Irukandji), XI i IV–V = 1. Poziom 2, bo poparzenie może być groźne dla życia, a kąpiel bez kombinezonu jest odradzana.
- **cyclone:** I–III = 1 (Debbie 2017).

## Do przeglądu

1. **Wiatr ze stacji na wzgórzu** (tylko 9:00 i 15:00).
2. **Flaga meduz poziom 2** – pierwsza taka w bazie; porównać z innymi kierunkami.
3. **Czas lotu i cena wyliczone.**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Ceny lotów:** KAYAK.pl (Polska – Proserpine/Whitsunday Coast) podaje typową dobrą cenę ok. 7 318 zł (dolne 25%), ok. 2 350 zł więcej niż dolna granica typowych cen do Brisbane. Dopłata zmieniona z 800 na 2 400 zł. Uwaga 3 (cena) rozwiązana.
- **Czas lotu:** zostaje 27,8 h (szacunek z odcinków).
- **Wiatr ze stacji na wzgórzu:** zostaje (jedyne pomiary na wyspie).
- **Flaga meduz poziom 2:** zostaje – meduzy Irukandji i kostkowe są groźne dla życia, kąpiel bez kombinezonu odradzana; to inna skala niż bluebottles na Gold Coast (poziom 1).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Hamilton Island). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 10, 7, 6, 6, 8, 10, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,987, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,4 / 14,3 / 13,0 / 9,9 / 7,2 / 5,8 / 6,1 / 7,8 / 10,2 / 12,4 / 13,5 / 14,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 273 DU): 12,9–14,2; model na 1.11 przy ozonie klimatologicznym (279 DU): 13,1.
- Wynik (I–XII): 14, 14, 13, 10, 7, 6, 6, 8, 10, 12, 13, 14.

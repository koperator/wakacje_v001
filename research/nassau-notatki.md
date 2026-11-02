# Nassau – Cable Beach / Paradise Island (Bahamy) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, dew_point, sun | Lotnisko Lynden Pindling, normy 1991–2020 (Bahamas Dept. of Meteorology; tabela Wikipedii) | Stacja ok. 5–10 km od Cable Beach. Punkt rosy podany wprost, dni ≥ 1 mm. |
| uv | BestDateWeather, Nassau (25.05°N 77.34°W) | |
| wind | Weather Spark, Nassau | mph → km/h. |
| water | seatemperatu.re, Nassau (°F → °C) | Wikipedia (bez źródła) podaje o 1–2 °C więcej. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki

- **beaches = 4:** szerokie, białe plaże z turkusową wodą, ale zabudowane wielkimi resortami; lepsze plaże na Exumach i Harbour Island.
- **greenery = 3:** płaska wyspa, palmy i ogrody resortów.
- **sightseeing = 3:** stare miasto i forty, rejsy na Exumy (całodniowe, łodzią motorową lub samolotem), snorkeling.
- **local_prices = 5:** jeden z najdroższych kierunków na Karaibach.
- **transfer = 0,4 h:** lotnisko – Cable Beach ok. 15 min, Paradise Island ok. 30 min.
- **local_season:** H XII–IV, M VI–VIII (wakacje w USA), L V i IX–XI.

## Czas lotu

Przyjęte: **17,5 h, 1 przesiadka** przez Miami (KAYAK.pl: średnio 17 h 31 min). Najczęściej rezerwowane jest połączenie przez Londyn (67% rezerwacji, 20 h 25 min, British Airways), ale Miami ma najkrótszy typowy czas, a loty MIA–NAS są codziennie przez cały rok.

## Ceny lotów

KAYAK.pl: V 2 886 zł (najtaniej), VIII 5 558 zł, VI 7 069 zł (najdrożej, przycięte do 115% górnej granicy typowych cen); średnio 3 118 zł; typowo 2 961–3 988 zł. Lipiec (sezon M) ze średniej wychodzi 3 100 zł, taniej niż VI i VIII – to skutek reguły uzupełniania.

## Flagi

- **cyclone:** VIII–X = 1 (Matthew 2016 przeszedł nad Nassau; Dorian 2019 zniszczył Abaco i Grand Bahama).

## Do przeglądu

1. **Cena lipca** niższa niż czerwca i sierpnia (reguła uzupełniania według sezonu).

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Cena lipca:** zostaje według reguły uzupełniania (sezon M = średnia).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Nassau). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 6, 8, 10, 11, 11, 11, 11, 11, 10, 8, 6, 5. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 5,6 / 7,4 / 9,6 / 11,2 / 11,4 / 11,5 / 11,5 / 11,4 / 10,2 / 8,1 / 6,0 / 5,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 265 DU): 6,6–7,3; model na 1.11 przy ozonie klimatologicznym (263 DU): 6,9.
- Wynik (I–XII): 6, 8, 10, 11, 11, 11, 11, 11, 10, 8, 6, 5.

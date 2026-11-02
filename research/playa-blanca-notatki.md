# Panama – Playa Blanca (Río Hato, wybrzeże Pacyfiku) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | undefined |
| rain | undefined |
| rain_days | Climates to Travel (próg niepodany), szacunek |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności (średnia z maksimum i minimum; wilgotność Panamy z reanalizy Avionero), szacunek |
| sun | h/dzień podane wprost |
| uv | zastępczo krzywa UV kierunku manuel-antonio z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | temperatura morza w °C |

## Szacunki

- **beaches 3, greenery 2, sightseeing 2, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: szaro-jasny piasek, spokojna woda (poziom Negombo); zieleń jak Santorini (sucha sawanna w porze suchej); zwiedzanie jak Aruba; ceny jak Cypr.
- **local_season** HHHHLLLLLLLH – wiedza przewodnikowa, szacunek.
- **transfer 2,3 h** – lotnisko Tocumen – Playa Blanca ok. 140 km, ok. 2–2,5 h (szacunek); lotnisko Río Hato tuż obok obsługuje głównie czartery.

## Flagi

Brak.

## Dojazd

Przyjęte: **16,9 h, 1 przesiadka**. KLM przez Amsterdam, średnio najkrócej ok. 16 h 51 min (KAYAK).

## Ceny lotów (szacunek)

KAYAK: z 1 przesiadką (Amsterdam – KLM), najszybciej średnio 16 h 51 min; I 3 511 zł najtaniej, III 4 995 zł, XII 5 023 zł najdrożej, średnia 4 343 zł, typowo 3 769–5 156 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 3500 / 4700 / 5000 / 4700 / 3900 / 3900 / 3900 / 3900 / 3900 / 3900 / 3900 / 5000.

## Do przeglądu

1. Nasłonecznienie z Panamy (miasto, bardziej pochmurne) – na wybrzeżu Coclé w porze suchej realnie więcej słońca.
2. Wczasy: Rainbow ma Panamę tylko w objazdach; czeskie biura sprzedają Playa Blanca z Pragi.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Panama (ok. 120 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,007, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 11,1 / 12,7 / 13,9 / 13,9 / 12,9 / 12,0 / 12,2 / 13,2 / 13,3 / 12,1 / 10,9 / 10,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 258 DU): 11,1–12,4; model na 1.11 przy ozonie klimatologicznym (264 DU): 11,5.
- Wynik (I–XII): 11, 13, 14, 14, 13, 12, 12, 13, 13, 12, 11, 10.

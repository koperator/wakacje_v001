# Varadero (Kuba) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night | climate-zone.com: lotnisko Varadero (dane dzienne NOAA 1991–2020) | Liczone przez serwis, nie oficjalne normy. Szacunek. |
| rain, rain_days, sun | Hawana Casa Blanca, WMO 1991–2020 | Stacja zastępcza ok. 140 km, to samo wybrzeże. Opad z climate-zone dla Varadero (np. I 15 mm) wygląda na niepełny – odrzucony. Szacunek. |
| dew_point | Magnus (wilgotność NASA POWER) | Szacunek. |
| uv | Jak Cancún | Brak strony BestDateWeather dla Varadero. Szacunek. |
| wind | NASA POWER (climate-zone.com) | Model. Szacunek. |
| water | seatemperatu.re, Varadero | |

## Szacunki

- **beaches = 5:** ok. 20 km białej, płytkiej plaży ze spokojną wodą.
- **greenery = 2:** wąski półwysep z zaroślami i resortami.
- **sightseeing = 4:** Hawana (UNESCO) jako wycieczka jednodniowa, Matanzas, Bellamar.
- **local_prices = 3.**
- **flight_time = 16,3 h (szacunek), 1 przesiadka:** KAYAK.pl nie podaje czasów ani cen dla VRA i HAV. Wyliczenie: WAW–Madryt ok. 3 h 50 min, przesiadka ok. 2,5 h, Madryt–Hawana ok. 10 h.
- **transfer = 2,0 h:** Hawana – Varadero ok. 140 km.
- **flight_price (szacunek):** poziom przeniesiony z trasy WAW–Cancún (podobna odległość i siatka połączeń), rozkład według sezonu lokalnego.
- **local_season:** H XII–IV, M VII–VIII, L V–VI, IX–XI.

## Flagi

- **cyclone:** IX–X = 1.

## Do przeglądu

1. Jeśli Varadero to wyjazd z biurem: czartery z Polski zimą bez przesiadek (ok. 11–12 h).
2. Kuba ma częste przerwy w dostawie prądu i niedobory, niezależnie od sezonu – tylko w notatce.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Czarter czy regularny lot:** decyzja: zostaje regularne połączenie (**16,3 h, 1 przesiadka**), bo tylko Marsa Alam jest oznaczona jako wyjazd wyłącznie z biurem. Uwaga 1 zamknięta.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Varadero). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 6, 8, 10, 11+, 11+, 11+, 11, 11, 11, 9, 7, 6. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,988, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 6,3 / 8,1 / 10,2 / 11,7 / 11,8 / 11,9 / 11,9 / 11,9 / 10,8 / 8,6 / 6,6 / 5,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 263 DU): 7,2–8,4; model na 1.11 przy ozonie klimatologicznym (262 DU): 7,5.
- Wynik (I–XII): 6, 8, 10, 12, 12, 12, 11, 11, 11, 9, 7, 6.

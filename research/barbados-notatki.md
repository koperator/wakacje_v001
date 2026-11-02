# Barbados – zachodnie wybrzeże (Holetown) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun | Lotnisko Grantley Adams, normy 1991–2020 (Barbados Meteorological Services) | Jedyna stacja z normami; ok. 25 km od Holetown, na południowo-wschodnim krańcu (bardziej otwarta na pasat). Zachodnie wybrzeże może być nieco suchsze i cieplejsze. |
| rain_days | Ta sama stacja | Próg niepodany, więc szacunek (139 dni/rok sugeruje próg niższy niż 1 mm). |
| dew_point | Wzór Magnusa ze średniej temp. i wilgotności stacji | Szacunek. |
| uv | BestDateWeather, Barbados (Open-Meteo `uv_index`, ERA5 2016–2025) | Ta sama metoda. |
| wind | Weather Spark, „Barbados” (średnia obszarowa) | Brak strony dla Holetown; zachodnie wybrzeże jest osłonięte od pasatu, więc lokalnie słabiej. Szacunek. |
| water | seatemperatu.re, Holetown | Caribbean Magazine: 79–84 °F, zgodnie. |
| local_season | Caribbean Magazine (szczyt od połowy XII do IV, niski VIII–X) | Szacunek. |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** spokojne zatoki z jasnym piaskiem na zachodnim wybrzeżu, wąskie miejscami; poziom kotwic Cancún / Punta Cana.
- **greenery = 3:** ogrody, trzcina cukrowa, zielone wąwozy, ale wyspa jest płaska i gęsto zabudowana na zachodzie.
- **sightseeing = 3:** Bridgetown (UNESCO), Harrison's Cave, plantacje, Bathsheba; poziom kotwicy Phuket.
- **local_season:** H XII–IV, M V–VII i XI, L VIII–X.

**local_prices = 4** jako zwykła wartość: kotwica w rejestrze wprost wymienia Barbados.

## Flagi – uzasadnienie

- **cyclone:** VIII–X = 1 (szczyt sezonu huraganów; Caribbean Magazine: wyspa zwykle poza najgorszymi torami).
- **Pominięte:** sargassum (zachodnie wybrzeże w dużej mierze osłonięte – All-Inclusive Guide), Crop Over (festiwal, bez zamknięć).

## Czas lotu

Przyjęte: **15,8 h, 1 przesiadka** (momondo: najszybszy lot 15 h 45 min; KLM, British Airways). KAYAK się nie wczytał.

## Ceny lotów

Nie ustalono. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 22 pobrane strony. Nieudane: KAYAK, Virgin Atlantic (brak danych).

## Do przeglądu

1. **Stacja na południowym wschodzie** a baza na zachodzie.
2. **Dni deszczowe** z nieznanym progiem.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: III 3 400, XII 4 472; najtaniej III, najdrożej XII; średnia 12 mies. 3 938 zł; typowo 3 433–4 412 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 200 / 4 200 / 3 400 / 4 200 / 3 900 / 3 900 / 3 900 / 3 700 / 3 700 / 3 700 / 3 900 / 4 500.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Barbados). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10, 9. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,006, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,8 / 11,6 / 13,1 / 13,7 / 13,2 / 12,8 / 13,0 / 13,4 / 12,9 / 11,3 / 9,8 / 9,1.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 263 DU): 10,2–10,7; model na 1.11 przy ozonie klimatologicznym (260 DU): 10,5.
- Wynik (I–XII): 10, 12, 13, 14, 13, 13, 13, 13, 13, 11, 10, 9.

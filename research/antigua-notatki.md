# Antigua – Dickenson Bay – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko V. C. Bird (Antigua/Barbuda Meteorological Services; tabela Wikipedii) | Stacja ok. 8 km od bazy, dni ≥ 1 mm. Okres nie podany. |
| sun | P. J. Tyson, Sunshine Guide (climates.com) | Godziny dziennie, okres nie podany. Szacunek. |
| dew_point | Magnus: średnie maksimum i wilgotność popołudniowa (Tyson) | Szacunek, raczej o ok. 1 °C zawyżony. |
| uv | BestDateWeather, Antigua (17.12°N 61.85°W) | |
| wind | Weather Spark, Saint John’s | mph → km/h. |
| water | weather2travel, St John’s (liczby całkowite) | Szacunek. seatemperatu.re i seatemperature.org się nie wczytały. |
| local_season | Wiedza przewodnikowa | Szacunek. |

## Szacunki

- **beaches = 4:** długa, biała, spokojna plaża; zabudowa resortami i sprzedawcy.
- **greenery = 3**, **sightseeing = 3** (Nelson’s Dockyard, Shirley Heights, Barbuda), **local_prices = 4.**
- **flight_time = 19,0 h (szacunek), 1 przesiadka:** KAYAK.pl nie podaje średniej. W stronę Antigui tylko połączenia z długim postojem (ok. 31 h), powrót przez Gatwick 20 h 30 min. Z odcinków: WAW–Londyn ok. 2,5 h + przesiadka (BA lata do ANU z Gatwick, Virgin z Heathrow) + ok. 8,5–9 h lotu.
- **transfer = 0,3 h.**
- **flight_price (szacunek):** KAYAK.pl podaje tylko zakres typowych cen 3 520–5 862 zł, bez miesięcy. Średnia = środek zakresu, miesiące według sezonu lokalnego.
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

## Flagi

- **cyclone:** VIII–X = 1 (Irma 2017).

## Do przeglądu

1. **Czas lotu** wyliczony, nie z wyszukiwarki.
2. **Ceny bez danych miesięcznych.**
3. **Punkt rosy** z wilgotności popołudniowej i maksimum – szacunek.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Ceny:** KAYAK.pl nadal podaje tylko zakres typowych cen (3 520–5 862 zł), bez miesięcy. Zostaje wyliczenie ze środka zakresu. Uwaga 2 zamknięta.
- **Czas lotu 19,0 h:** zostaje jako szacunek (KAYAK.pl nie podaje średniej). Uwaga 1 zamknięta.
- **Punkt rosy:** zostaje (szacunek).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Antigua). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 8, 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,997, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 8,4 / 10,3 / 12,1 / 13,0 / 12,9 / 12,7 / 12,9 / 13,1 / 12,2 / 10,3 / 8,6 / 7,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 265 DU): 9–9,4; model na 1.11 przy ozonie klimatologicznym (259 DU): 9,4.
- Wynik (I–XII): 8, 10, 12, 13, 13, 13, 13, 13, 12, 10, 9, 8.

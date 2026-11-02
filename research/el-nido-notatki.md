# El Nido – Lio / Nacpan, Palawan (Filipiny) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | PAGASA Coron, 1991–2020 | Stacja zastępcza ok. 100 km, ta sama zachodnia strona i monsun; dni ≥ 1 mm. Tabela Wikipedii dla El Nido to model (World Weather Online), odrzucona. weather2travel (CRU) dla El Nido zgodny. Szacunek. |
| dew_point | Magnus (Coron) | Szacunek. |
| sun | weather2travel (CRU, liczby całkowite) | Szacunek. |
| uv | BestDateWeather, El Nido, 11.19°N 119.39°E | |
| wind | NASA POWER, Puerto Princesa (climate-zone.com) | Model, inne wybrzeże; brak Weather Spark. Szacunek. |
| water | weather2travel, El Nido | |

## Szacunki

- **beaches = 5:** Nacpan, Lio i plaże na wyspach zatoki Bacuit; poziom kotwicy Boracay.
- **greenery = 5:** wapienne wyspy i turnie w dżungli; poziom kotwic Seszele / Langkawi.
- **sightseeing = 3:** rejsy po zatoce Bacuit (laguny); jak Krabi i Phuket.
- **local_prices = 2:** jak Boracay.
- **flight_time = 22,0 h (szacunek), 2 przesiadki:**
  - KAYAK.pl do Manili: Stambuł średnio 17 h 47 min, Abu Zabi 19 h 47 min, Doha 19 h 48 min.
  - Dalej ok. 3 h przesiadki i lot AirSWIFT ok. 1 h 15 min.
  - KAYAK.com dla trasy Manila–El Nido nie pokazuje lotów bez przesiadek, choć AirSWIFT lata tam bezpośrednio.
- **flight_price (szacunek):** ceny WAW–MNL z KAYAK + ok. 1 000 zł za lot krajowy Manila–El Nido w obie strony (KAYAK: średnio 294 USD).
- **transfer = 0,2 h:** baza Lio przy lotnisku.
- **local_season:** H XII–V, M XI, L VI–X.

## Flagi

- **waves (habagat):** VI = 1, VII–VIII = 2, IX = 1. Straż przybrzeżna zawiesza rejsy w wiele dni (Pamasahe, ogólnie dla Filipin), a rejsy to główna atrakcja.
- **holidays:** Wielki Tydzień w III–IV, jak Boracay.
- **Pominięte:** tajfuny (Palawan rzadziej trafiany niż Visayas; tylko w notatce).

## Do przeglądu

1. Pogoda ze stacji Coron, wiatr z modelu dla Puerto Princesa.
2. Poziom 2 habagat bez źródła dla samego El Nido.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (El Nido). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,015, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,4 / 12,2 / 13,6 / 13,9 / 13,2 / 12,6 / 12,8 / 13,5 / 13,2 / 11,7 / 10,4 / 9,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 268 DU): 10,3–11,1; model na 1.11 przy ozonie klimatologicznym (262 DU): 11,0.
- Wynik (I–XII): 11, 12, 14, 14, 13, 13, 13, 13, 13, 12, 10, 10.

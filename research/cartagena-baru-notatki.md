# Cartagena – Isla Barú, Playa Blanca (Kolumbia) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, sun | Lotnisko Rafael Núñez, 1991–2020 (IDEAM; słońce 1971–2010; tabela Wikipedii) | Stacja ok. 35 km od bazy, ten sam typ wybrzeża. |
| rain, rain_days | Ta sama tabela | Szacunek ze względu na odległość. Dni ≥ 1 mm. |
| dew_point | Magnus: średnia dobowa i wilgotność IDEAM | Szacunek. |
| uv | BestDateWeather, Cartagena (10.39°N 75.51°W) | Wiersz UV w tabeli Wikipedii (10–15, Nomadseason) to inna metoda, nieużyty. |
| wind | NASA POWER przez climate-zone.com | Model. Szacunek. Weather Spark dla Cartageny nie znalazłem. |
| water | weather2travel, Cartagena (liczby całkowite) | Szacunek. seatemperature.org się nie wczytał. |
| local_season | Kolumbijskie ferie, jak San Andrés | Szacunek. |

## Szacunki

- **beaches = 4:** biały piasek i spokojna, przejrzysta woda (poziom 5), ale dzienne tłumy i sprzedawcy.
- **greenery = 3**, **sightseeing = 4** (Cartagena UNESCO, Rosario, Totumo), **local_prices = 2.**
- **flight_time = 17,2 h, 1 przesiadka (Amsterdam, KAYAK.pl średnio 17 h 14 min).** Do sprawdzenia, czy KLM lata do Cartageny przez cały rok (≥ ok. 6 miesięcy); inaczej przez Madryt/Bogotę.
- **transfer = 1,2 h:** lotnisko – Playa Blanca ok. 50 km przez most na Barú.
- **flight_price (szacunek):** VIII ok. 6 898 zł (III + 2 945 zł) przycięte do 115% górnej granicy typowych cen.
- **local_season:** jak San Andrés.

## Flagi

- **holidays:** III–IV = 1 (Semana Santa).
- **Pominięte:** huragany (10°N, bardzo rzadko), wiatr w I–III (jest w kolumnie wiatru).

## Do przeglądu

1. **Baza na Barú vs w Cartagenie:** w mieście plaże są słabe (Bocagrande – szary piasek, ok. 2), stąd Playa Blanca.
2. **Lot KLM przez cały rok?**

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **KLM AMS–CTG:** trasa działa od III 2024 i ma rejsy także latem (np. KL741 w VII 2026), więc kursuje ponad 6 miesięcy w roku. Zostaje **17,2 h, 1 przesiadka**. Uwaga 2 rozwiązana.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Cartagena). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 10. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,018, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 10,7 / 12,4 / 13,8 / 14,0 / 13,2 / 12,5 / 12,7 / 13,4 / 13,3 / 11,9 / 10,6 / 9,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 260 DU): 10,7–11,6; model na 1.11 przy ozonie klimatologicznym (262 DU): 11,2.
- Wynik (I–XII): 11, 12, 14, 14, 13, 12, 13, 13, 13, 12, 11, 10.

# Saint Lucia – Rodney Bay (Reduit Beach) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Lotnisko George F. L. Charles (Castries), NOAA 1991–2020 (tabela Wikipedii) | Stacja ok. 8 km od bazy, dni ≥ 1 mm. |
| sun, wilgotność | Ta sama tabela, ale źródło Weather.Directory (prawdopodobnie model) | Szacunek. |
| dew_point | Magnus: średnia (maks.+min.)/2 i wilgotność | Szacunek. |
| uv | BestDateWeather, Saint Lucia (13.91°N 60.98°W) | |
| wind | Weather Spark, Barbados (jak w kierunku `barbados`) | Zastępczo, ok. 180 km. Szacunek; Rodney Bay leży po zawietrznej. |
| water | weather2travel, Gros Islet (liczby całkowite) | Szacunek. beach-weather.com podaje o ok. 1 °C więcej zimą. |
| local_season | Wiedza przewodnikowa, jak Barbados | Szacunek. |

## Szacunki

- **beaches = 4:** szeroka plaża ze złotym piaskiem, spokojna woda; nie biała jak na Antigui.
- **greenery = 4:** las deszczowy i zielone góry, ale sama Rodney Bay to zabudowana marina.
- **sightseeing = 4:** Pitony, Soufrière, Sulphur Springs, wodospady, Pigeon Island – dużo jak na wyspę, część ok. 1–1,5 h jazdy.
- **local_prices = 4.**
- **flight_time = 15,5 h (szacunek), 1 przesiadka:** KAYAK.pl bez średniej; najszybsze oferty przez Heathrow 15 h 15 min i 15 h 40 min (Virgin z LHR, BA z Gatwick).
- **transfer = 1,5 h:** z Hewanorra (UVF) na południu ok. 65 km krętą drogą. Lotnisko George F. L. Charles obok Castries ma tylko loty regionalne.
- **flight_price (szacunek):** KAYAK.pl nie ma statystyk dla UVF; przyjęte statystyki trasy WAW–Barbados (ten sam hub, Londyn). Oferty WAW–UVF (2 964–3 554 zł) są na tym samym poziomie.
- **local_season:** H XII–IV, M V–VII i XI, L VIII–X.

## Flagi

- **cyclone:** VIII–X = 1 (Tomas 2010).

## Do przeglądu

1. **Wiatr z Barbadosu**, ceny z trasy na Barbados.
2. **Transfer 1,5 h** – duży koszt dla bazy na północy; baza w Soufrière byłaby bliżej UVF (ok. 1 h), ale z gorszą plażą.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Nasłonecznienie:** zamienione z modelu Weather.Directory (8,5–9,7 h) na stację Grantley Adams na Barbadosie (7,5–8,8 h), szacunek. Uwaga zamknięta.
- **Wiatr i ceny z Barbadosu:** zostają. Oferty WAW–UVF z KAYAK.pl (2 964–3 554 zł) potwierdzają poziom trasy na Barbados.
- **Transfer 1,5 h:** zostaje – to realny czas dla bazy na północy.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Saint Lucia). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 9, 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 9, 8. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,987, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 9,4 / 11,2 / 12,7 / 13,3 / 13,0 / 12,6 / 12,8 / 13,2 / 12,6 / 10,9 / 9,5 / 8,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 266 DU): 9,6–10,3; model na 1.11 przy ozonie klimatologicznym (259 DU): 10,1.
- Wynik (I–XII): 9, 11, 13, 13, 13, 13, 13, 13, 13, 11, 9, 8.

# Krabi – Ao Nang / Railay (Tajlandia) – notatki z researchu

Sprawdzono: 2026-10-15. Prompt A, jeden przebieg.

## Baza pobytu

Ao Nang (plaża i miejscowość), skąd łodzią longtail 10–15 min na Railay West i Phra Nang. Stacja Krabi (miasto, TMD) ok. 15 km na wschód, przy estuarium.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun | Stacja Krabi, TMD 1981–2010 (tabela Wikipedii; nasłonecznienie i wilgotność: Royal Irrigation Department) | Jedyna tabela ze stacją w Krabi. Starszy okres niż 1991–2020. |
| rain_days | Ta sama stacja × 0,7 | TMD liczy dni od 0,1 mm (4,5–21,5 dnia; stacja Ko Lanta przy progu ≥ 1 mm: 1,8–17,9). Przeliczenie jak w Punta Canie i Cancún. Szacunek. |
| dew_point | Wzór Magnusa: średnia temp. dobowa + wilgotność stacji | Szacunek. |
| uv | BestDateWeather, Krabi (Open-Meteo `uv_index`, ERA5 2016–2025), 8.09°N 98.91°E | Ta sama metoda. |
| wind | Weather Spark, Krabi | Ta sama metoda, ale wynik (5–8 km/h) wyraźnie niższy niż Phuket (8–13 km/h). Punkt prawdopodobnie nad lądem, więc wiatr na plaży jest raczej zaniżony. Szacunek. |
| water | Weather Spark, Krabi (°F → °C) | seatemperatu.re (Ao Nang) się nie wczytał. |
| local_season | Wiedza przewodnikowa (jak Phuket) | Szacunek. |
| flags | TAT News (monsun SW: rejsy odwoływane, czerwone flagi) | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** sama plaża Ao Nang jest przeciętna (gruby piasek, longtaile), ale Railay West i Phra Nang (10–15 min łodzią) to jedne z najładniejszych plaż Tajlandii; liczy się najlepsza plaża w zasięgu ok. 15 min.
- **greenery = 5:** wapienne turnie i dżungla tuż za plażą; poziom kotwic Seszele / Langkawi.
- **sightseeing = 3:** Phi Phi, Hong, 4 wyspy, Railay, Tiger Cave Temple, Emerald Pool; poziom kotwicy Phuket (ta sama oferta wysp).
- **local_prices = 2:** Ao Nang nieco tańsze od Phuket; poziom Phu Quoc / Djerba.
- **flight_time = 14,4 h (szacunek), 1 przesiadka:** reguła z Phuket (LOT do Bangkoku, przylot 6:35, samodzielna przesiadka min. 2,5 h, lot ok. 9:10, ok. 1 h 27 min).
- **transfer = 0,6 h (szacunek):** lotnisko KBV – Ao Nang ok. 30 km.
- **local_season:** H XII–III, M IV, VII–VIII, XI, L V–VI, IX–X.

## Flagi – uzasadnienie

- **waves:** V–X = 1. Ao Nang jest mniej otwarte na fale niż zachodnie plaże Phuket (osłona wysp zatoki Phang Nga), ale w monsunie są czerwone flagi w części dni i odwoływane rejsy (TAT News). Bez źródła na poziom 2.
- **holidays:** I, IV (Songkran), XII – jak Phuket.

## Czas lotu

Przyjęte: **14,4 h (szacunek), 1 przesiadka** przez Bangkok, na osobnych biletach.
- Na jednym bilecie KAYAK.pl: Etihad przez Abu Zabi od 14 h 20 min, średnio 16 h 38 min (Kopenhaga) i 16 h 58 min (Abu Zabi).
- Lot bez przesiadek LOT (10 h 40 min) to sezonowy czarter.

## Ceny lotów (szacunek, poluzowana definicja)

KAYAK.pl: X 2 686 zł (najtaniej), VII 3 929 zł, XII 4 475 zł (najdrożej); średnia 3 822 zł; typowo 3 349–4 355 zł. Pozostałe miesiące według sezonu lokalnego.

## Pomiar

Ok. 5 wyszukiwań i ok. 22 pobrane strony. Nieudane: seatemperatu.re (Ao Nang), Weather Spark dla Ao Nang (brak strony), strona Wikipedii prowincji Krabi (bez tabeli).

## Do przeglądu

1. **Nasłonecznienie** (RID 1981–2010) w porze suchej to tylko 6,4–7,6 h, a Phuket według WMO 1991–2020 ma 8,7–9 h. Stacje RID mogą zaniżać.
2. **Wiatr** z Weather Spark (5–8 km/h) jest prawdopodobnie zaniżony dla plaży.
3. **Normy 1981–2010** zamiast 1991–2020.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Nasłonecznienie:** zamienione na Phuket (WMO/TMD 1991–2020, ok. 45 km przez zatokę Phang Nga), szacunek. Stacja RID zaniżała porę suchą o ok. 2 h dziennie. Uwaga 1 rozwiązana.
- **Wiatr i normy 1981–2010:** zostają (brak lepszego źródła; wiatr ma wagę 0,5). Uwagi 2–3 zamknięte.

# San Teodoro – La Cinta / Cala Brandinchi, Sardynia (Włochy) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Olbia, ISPRA / Aeronautica Militare 1981–2010 | Stacja ok. 25 km; próg dni z opadem niepodany (we włoskich normach zwykle ≥ 1 mm). |
| dew_point | Magnus | Szacunek. |
| uv | BestDateWeather, Sardynia (punkt w środku wyspy) | Szacunek. |
| wind | NASA POWER, Olbia (climate-zone.com) | Model. Szacunek. |
| water | seatemperatu.re, San Teodoro | |

## Szacunki

- **beaches = 5:** La Cinta i Cala Brandinchi – biały piasek, płytka turkusowa woda.
- **greenery = 3**, **sightseeing = 3** (Tavolara, La Maddalena, Costa Smeralda), **local_prices = 4** (Sardynia latem droga).
- **flight_time = 5,1 h, 1 przesiadka** (Wiedeń). Wizz Air bez przesiadek (2 h 35 min) traktuję jako połączenie sezonowe (letnie), tylko w notatce – do sprawdzenia.
- **flight_price (szacunek):** + 300 zł za bagaż.
- **transfer = 0,4 h:** lotnisko Olbia – San Teodoro ok. 25 km.
- **local_season:** H VII–VIII, M VI, IX, L X–V.

## Do przeglądu

1. Sezonowość lotu Wizz Air WAW–OLB.
2. Normy 1981–2010.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Lot Wizz Air WAW–OLB:** KAYAK.pl pokazuje bezpośrednie oferty Wizz Air z Lotniska Chopina w kwietniu i w październiku, więc trasa kursuje ok. IV–X (≥ 6 miesięcy). Przyjęte: **2,6 h, 0 przesiadek** (wcześniej 5,1 h z przesiadką w Wiedniu). Uwaga 1 rozwiązana.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Olbia (ok. 25 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,5 / 2,5 / 4,1 / 5,9 / 7,6 / 8,8 / 9,1 / 8,1 / 6,1 / 3,9 / 2,1 / 1,4.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 293 DU): 2,6–2,8; model na 1.11 przy ozonie klimatologicznym (285 DU): 2,8.
- Wynik (I–XII): 2, 3, 4, 6, 8, 9, 9, 8, 6, 4, 2, 1.

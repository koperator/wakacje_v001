# San Vito lo Capo, Sycylia (Włochy) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain | Trapani-Birgi, NOAA 1991–2020 | Stacja ok. 35 km, to samo wybrzeże. |
| rain_days | Palermo Punta Raisi 1961–1990 | Próg niepodany. Szacunek. |
| dew_point | Magnus (wilgotność Punta Raisi) | Szacunek. |
| sun | Przebieg miesięczny z Olbii przeskalowany do ok. 2 530 h/rok (Palermo, Wikipedia) | Brak miesięcznych danych dla zachodniej Sycylii (weather2travel nie wczytał się). Szacunek – ekstrapolacja z podobnego klimatu. |
| uv | BestDateWeather, Sycylia (środek wyspy) | Szacunek. |
| wind | NASA POWER, Trapani | Model. Szacunek. |
| water | seatemperatu.re, San Vito lo Capo | |

## Szacunki

- **beaches = 5:** biały piasek i płytka turkusowa woda w osłoniętej zatoce.
- **greenery = 2**, **sightseeing = 4** (Zingaro, Erice, Segesta, Egady), **local_prices = 3.**
- **flight_time = 4,7 h, 1 przesiadka** (Palermo przez Monachium; KAYAK.pl). Trapani (TPS) ma loty tanich linii z innych lotnisk, nie z WAW.
- **flight_price (szacunek):** IV 1 663 zł przycięte; + 300 zł za bagaż.
- **transfer = 1,4 h:** lotnisko Palermo – San Vito ok. 100 km.
- **local_season:** H VII–VIII, M VI, IX, L X–V.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Trapani (ok. 35 km)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 2, 3, 5, 6, 8, 9, 9, 9, 7, 5, 3, 2. Odczyty liczbowe (także „11”) przyjęte wprost.
- Wszystkie miesiące to odczyty liczbowe – bez modelu.
- Model (I–XII, kontrola): 1,9 / 3,1 / 4,7 / 6,5 / 8,2 / 9,4 / 9,7 / 8,8 / 6,8 / 4,5 / 2,5 / 1,8.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 297 DU): 3–3,5; model na 1.11 przy ozonie klimatologicznym (284 DU): 3,4.
- Wynik (I–XII): 2, 3, 5, 6, 8, 9, 9, 9, 7, 5, 3, 2.

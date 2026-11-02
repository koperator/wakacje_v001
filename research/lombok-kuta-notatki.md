# Lombok – Kuta / Tanjung Aan (Indonezja) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun, dew_point | Przeniesione z Nusa Dua (stacja Ngurah Rai, Bali, ok. 80 km) | Brak tabeli ze stacją dla Lomboku (Wikipedia: Praya, lotnisko Lombok, Mataram – bez danych lub bez źródła). weather2travel (CRU) dla Kuta Lombok jest podobny: maks. 31 °C, opad 39–299 mm. Szacunek. |
| uv | BestDateWeather, Lombok, 8.65°S 116.32°E | |
| wind | Weather Spark, Kuta (Bali / Ngurah Rai) | Szacunek. |
| water | weather2travel, Kuta Lombok | |

## Szacunki

- **beaches = 4:** Tanjung Aan i okoliczne zatoki (jasny piasek, spokojna woda); Kuta sama w sobie słabsza; przy odpływie płytko.
- **greenery = 3**, **sightseeing = 2** (Gili i Rinjani poza wycieczką jednodniową), **local_prices = 2.**
- **flight_time = 21,4 h (szacunek), 2 przesiadki:** do Denpasar z 1 przesiadką 18,2 h (wartość z Nusa Dua), ok. 2,5 h przesiadki i ok. 40 min lotu. KAYAK.pl: najszybsza oferta z 2 przesiadkami 23 h 20 min, średnio ok. 34 h.
- **flight_price (szacunek):** KAYAK.pl WAW–LOP: VII 4 974 zł (najtaniej), I ok. 7 116 zł (wyliczone z różnicy), średnia 5 862 zł.
- **transfer = 0,4 h:** lotnisko LOP – Kuta ok. 20 km.
- **local_season:** H VII–VIII, M V–VI, IX–X, XII, L I–IV, XI.

## Flagi

Brak. Nyepi zamyka lotnisko na Bali na 24 h (przesiadka przez Denpasar), ale nie dotyczy samego Lomboku.

## Do przeglądu

1. Cała pogoda poza UV i wodą z Bali.
2. Ceny KAYAK dla LOP: najdroższy jest styczeń (pora deszczowa), co wygląda nietypowo.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Pogoda z Bali:** zostaje (brak norm stacji Lombok w dostępnych źródłach), szacunek.
- **Ceny (najdrożej styczeń):** zostają zgodnie z danymi KAYAK.pl – w I drożeje cała trasa przez Bali (ferie i Nowy Rok).

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Kuta (Lombok)). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11+, 11, 9, 10, 11+, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IV, VIII, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,028, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,0 / 14,9 / 14,7 / 12,7 / 10,3 / 9,1 / 9,5 / 11,3 / 13,2 / 14,1 / 13,9 / 13,6.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 264 DU): 13,9–14,7; model na 1.11 przy ozonie klimatologicznym (270 DU): 14,1.
- Wynik (I–XII): 14, 15, 15, 13, 11, 9, 10, 12, 13, 14, 14, 14.

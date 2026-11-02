# Mauritius – Flic en Flac – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Flic en Flac, zachodnie (zawietrzne) wybrzeże. Klimat wyspy silnie zależy od strony: zachód jest suchy (ok. 700 mm/rok), a wschód i płaskowyż mokre. Dlatego wybrałem stację Port Louis (ok. 15 km, to samo wybrzeże) zamiast lotniska (Plaisance, południowy wschód, znacznie bardziej deszczowe).

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Port Louis, WMO (tabela Wikipedii; nasłonecznienie BBC Weather / Weather.Directory) | Okres niepodany, ale stacja i źródło są. Dni ≥ 1 mm. Nasłonecznienie to zaokrąglone h/dzień × liczba dni (7–9 h). |
| dew_point | Wzór Magnusa: średnia temp. + średnia wilgotność Port Louis | Szacunek. |
| uv | BestDateWeather, Mauritius (Open-Meteo `uv_index`, ERA5 2016–2025), 20.35°S 57.55°E | Punkt w środku wyspy (płaskowyż, więcej chmur), ok. 15 km od Flic en Flac; na suchym zachodzie UV raczej wyższe. Szacunek. |
| wind | Weather Spark, „Mauritius” (średnia obszarowa) | Średnia dla wyspy (22–28 km/h) zawyża wiatr na osłoniętym zachodzie. Szacunek. |
| water | seatemperatu.re, Flic en Flac | Weather Spark (74–82 °F) zgodny. |
| local_season | 30 Sundays (tłok: szczyt XII, bardzo dużo X, mało II–III), Fleewinter (wysoki sezon XI–I) | Źródła częściowo sprzeczne. Szacunek. |
| flags | 30 Sundays, Fleewinter (cyklony I–III, nie co roku) | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** długa plaża z białym piaskiem i laguną za rafą, łagodne wejście; poziom kotwic Cancún / Punta Cana.
- **local_prices = 3:** jedzenie lokalne tanie, restauracje i wycieczki na poziomie Cypru / Malty.
- **local_season:** H X–I, M IV–IX, L II–III.

**greenery = 4** i **sightseeing = 3** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Mauritius.

## Flagi – uzasadnienie

- **cyclone:** I–III = 1 (ostrzeżenia klasy 2–3 zamykają plaże i loty na 1–3 dni; cyklony nie co roku).
- **Pominięte:** pasat VII–VIII (dotyczy wschodu i południa; zachód osłonięty), chłodniejsza woda VII–X (jest już w kolumnie Woda).

## Czas lotu

Przyjęte: **15,4 h, 1 przesiadka** przez Stambuł (KAYAK: 15 h 26 min; Turkish lata cały rok). Przez Genewę szybciej (14 h 59 min), ale nie mam potwierdzenia, że to połączenie całoroczne. Najczęściej wybierana przesiadka to Dubaj (35%).

## Ceny lotów

KAYAK: najtaniej styczeń (mediana 973 USD w obie strony), najdrożej grudzień i lipiec; inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 2 wyszukiwania i 22 pobrane strony.

## Do przeglądu

1. **UV z punktu w środku wyspy** (bardziej pochmurno niż na zachodnim wybrzeżu).
2. **Wiatr dla całej wyspy** zawyżony dla Flic en Flac.
3. **Sezon lokalny:** sprzeczne źródła (luty niski czy wysoki).

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 3 803, VII 4 850, XII 5 049; najtaniej I, najdrożej XII; średnia 12 mies. 4 239 zł; typowo 3 821–4 791 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 800 / 4 000 / 4 000 / 4 200 / 4 200 / 4 200 / 4 900 / 4 200 / 4 200 / 4 600 / 4 600 / 5 000.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Flic en Flac). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 10, 7, 6, 6, 8, 10, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,993, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 14,5 / 14,4 / 13,1 / 10,0 / 7,2 / 5,9 / 6,1 / 7,9 / 10,2 / 12,5 / 13,6 / 14,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 276 DU): 13–14,3; model na 1.11 przy ozonie klimatologicznym (279 DU): 13,2.
- Wynik (I–XII): 14, 14, 13, 10, 7, 6, 6, 8, 10, 12, 14, 14.

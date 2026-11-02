# Punta Cana – Bávaro (Dominikana) – notatki z researchu

Sprawdzono: 2026-10-14. Prompt A, jeden przebieg.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain | Lotnisko Punta Cana, normy 1991–2020 (NOAA) | Stacja ok. 20 km od Bávaro. |
| rain_days | Tabela 1961–1990 (WMO/NOAA, Cabo Engaño), dni ≥ 0,1 mm × 0,7 | Jedyne źródło liczy od 0,1 mm. Przeliczenie: w tropikalnym klimacie morskim dni ≥ 1 mm to zwykle ok. 70% dni ≥ 0,1 mm (np. Malé: 133 dni ≥ 1 mm przy ok. 1 980 mm). Szacunek. |
| sun | Tabela 1961–1990 (WMO/NOAA) | Seria ze stacji. |
| dew_point | Wzór Magnusa: średnia temp. 1991–2020 + wilgotność 1961–1990 | Szacunek. |
| uv | BestDateWeather, Punta Cana (Open-Meteo `uv_index`, ERA5 2016–2025) | Punkt w Punta Cana. |
| wind | Weather Spark, „Dominican Republic” (średnia dla kraju) | Brak strony dla Punta Cany; średnia dla kraju obejmuje osłonięte góry, więc pasat na wschodnim wybrzeżu jest raczej silniejszy. Szacunek. |
| water | seatemperatu.re, Bávaro | |
| local_season | Wiedza przewodnikowa (szczyt XII–IV, wakacje VII–VIII) | Szacunek. |
| flags | Punta Cana Travel Blog, All-Inclusive Guide (sargassum) | |

## Szacunki (po jednym zdaniu)

- **greenery = 3:** palmy kokosowe i ogrody resortów na płaskim wybrzeżu; poziom kotwic Cancún / Alanya.
- **sightseeing = 3:** wyspa Saona, Altos de Chavón, Hoyo Azul; Santo Domingo na granicy wycieczki jednodniowej.
- **local_prices = 3:** strefa resortów i wycieczki drogie, poza nią tanio.
- **local_season:** H XII–IV, M VII–VIII, L V–VI i IX–XI.

**beaches = 4** jako zwykła wartość: kotwica w rejestrze wprost wymienia Punta Canę.

## Flagi – uzasadnienie

- **algae (sargassum):** V = 1, VI–VIII = 2 (wodorosty w 13–14 z 15 ostatnich lat, w 2025 r. kąpiel przez kilka dni prawie niemożliwa), IX = 1.
- **cyclone:** VIII–X = 1 (szczyt sezonu huraganów na Atlantyku; bez osobnego źródła dla Punta Cany – wiedza ogólna, do przeglądu).

## Czas lotu

Przyjęte: **16,2 h, 1 przesiadka** przez Frankfurt (KAYAK: 16 h 10 min; 58% połączeń z 1 przesiadką; Condor lata do Punta Cany cały rok). Szybciej przez Zurych (13 h 51 min) i Monachium (14 h 25 min), ale bez pewności, że to połączenia całoroczne (Edelweiss lata głównie zimą). Neos bezpośrednio raz w tygodniu (czarter).

## Ceny lotów

KAYAK: najtaniej październik (mediana 971 USD), najdrożej grudzień i sierpień; inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 2 wyszukiwania i 23 pobrane strony.

## Do przeglądu

1. **Dni deszczowe** przeliczone z progu 0,1 mm.
2. **Wiatr** dla całego kraju.
3. **Czas lotu:** czy Zurych/Monachium są całoroczne (wtedy ok. 14 h).
4. **Flaga huraganów** bez osobnego źródła.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VIII 5 023, X 3 799, XII 5 144; najtaniej X, najdrożej XII; średnia 12 mies. 4 229 zł; typowo 3 745–4 874 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 700 / 4 700 / 4 700 / 4 700 / 4 000 / 4 000 / 4 200 / 5 000 / 4 000 / 3 800 / 4 000 / 5 100.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Punta Cana). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 8, 10, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 10, 8, 7. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące III, IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,002, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 7,9 / 9,8 / 11,7 / 12,8 / 12,7 / 12,6 / 12,7 / 12,9 / 11,9 / 9,9 / 8,2 / 7,3.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 263 DU): 8,5–9,1; model na 1.11 przy ozonie klimatologicznym (260 DU): 9,0.
- Wynik (I–XII): 8, 10, 12, 13, 13, 13, 13, 13, 12, 10, 8, 7.

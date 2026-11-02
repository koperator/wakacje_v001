# Negombo (Sri Lanka) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Hotelowa część plaży Negombo (Ethukale / Lewis Place), na północ od miasta. Lotnisko CMB w Katunayake jest ok. 10 km dalej. Zwiedzanie: Kolombo, laguna Negombo i kanał holenderski, Pinnawala, Kandy jako długa wycieczka jednodniowa.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Colombo, normy 1991–2020 (NOAA), tabela Wikipedii „Colombo” | Najbliższa stacja z normami 1991–2020 (ok. 35 km na S). To samo płaskie wybrzeże zachodnie, stacja przy morzu, czyli ta sama ekspozycja co plaża. Dni deszczowe z progiem ≥ 1,0 mm. Stacja lotniska Katunayake (WMO 43450, ok. 7 km) ma tylko średnie 1994–2005 (MeteoNews, NOAA), czyli 12 lat, nie normę; posłużyła do kontroli. |
| sun | Colombo, NOAA 1961–1990, godz./miesiąc ÷ liczba dni | Jedyna seria ze stacją. weather2travel (CRU) zgodny co do 0,5 h. |
| dew_point | Wzór Magnusa (a = 17,625, b = 243,04) ze średniej temp. dobowej 1991–2020 i wilgotności „w ciągu dnia” (NOAA) dla Colombo | Żadne pobrane źródło nie podało punktu rosy (timeanddate: błąd pobrania). Szacunek zgodnie z definicją. |
| uv | BestDateWeather, 12 stron miesięcznych dla Colombo (Open-Meteo `uv_index`, ERA5, 2016–2025), 6.93°N 79.84°E | Ta sama metoda co dla pozostałych kierunków. Serwis nie ma stron dla Negombo (błąd pobrania). Colombo to ten sam reżim monsunowy, ok. 35 km, jak Fuerteventura dla Corralejo. |
| wind | Weather Spark, Negombo (średnia godzinowa na 10 m, średnia obszarowa), mph → km/h | Ta sama metoda co dla Phuketu i Koh Samui. Kontrola: HIDMC (windsurfing) podaje 15–25 węzłów w V–X; to wiatr w dzień przy dobrych warunkach, więc zawyżony, ale przebieg ten sam (maksimum VI–VII). |
| water | seatemperatu.re, Negombo (°F → °C) | Dane dla samej plaży. Weather Spark różni się o najwyżej 1 °F; Tripbase podaje 28–30 °C. |
| local_season | Tripbase (tłok w skali 1–10), Champion Traveler | Brak źródła hotelowego, wszystkie miesiące jako szacunek. |
| flags | Tripbase (morze wzburzone V–IX, Poya), HIDMC (fale V–X), Daily FT (zakazy alkoholu na Nowy Rok i Vesak) | |
| flight_time, stops | momondo.pl (Warszawa – Kolombo) | KAYAK niedostępny (patrz Koh Samui). |

## Szacunki (po jednym zdaniu)

- **dew_point (wszystkie miesiące):** wyliczony ze średniej temperatury dobowej i wilgotności podawanej jako „w ciągu dnia”; wilgotność dobowa jest wyższa, więc punkt rosy jest raczej zaniżony o ok. 0,5–1,5 °C (21,0–24,7 °C wobec 23,4–25,6 °C na Phukecie i Samui).
- **greenery = 3:** strefa wilgotna, palmy kokosowe i namorzyny laguny, zielono cały rok, ale baza to płaska, zabudowana miejscowość bez zalesionych wzgórz; na granicy z 4.
- **sightseeing = 3:** sama Negombo ma mało atrakcji, ale w zasięgu wycieczki są Kolombo i Kandy (Świątynia Zęba); Sigiriya i Dambulla (ok. 3,5–4 h w jedną stronę) są poza zasięgiem wycieczki jednodniowej.
- **local_prices = 2:** jedzenie i transport lokalny tanie, ale opłaty za atrakcje dla cudzoziemców wysokie i ceny wzrosły po kryzysie z 2022 r.; poziom kotwic Phu Quoc / Djerba.
- **local_season:** H w XII–III, M w IV i X–XI, L w V–IX, według skali tłoku z Tripbase i opisu Champion Traveler.

**beaches = 3** jako zwykła wartość, bo kotwica w rejestrze wprost wymienia Negombo (plaże 3).

## Rozbieżności między źródłami i wybór

- **Colombo a Katunayake (1994–2005):** opad roczny podobny (ok. 2 400 wobec ok. 2 260 mm), ale rozkład miesięczny inny w II–III (Katunayake: II 100, III 90 mm; Colombo: II 77, III 103 mm). Maksima Katunayake 30–33 °C, Colombo 30,3–32,0 °C. Wybrano Colombo: norma 1991–2020 i stacja nad morzem; lotnisko leży w głębi lądu przy lagunie. To zwykłe wartości (wybór stacji wg zasady 3), nie szacunek, jak przy Corralejo (lotnisko 30 km).
- **Wikipedia Negombo:** tabela bez źródła, liczby całkowite (maks. 29–31 °C, opad 2 345 mm). Tylko kontrola.
- **weather2travel:** opad zgodny w przebiegu (I 48, V 297, X 351 mm), dni deszczowe podobne.
- **UV:** maj 6 jest niższy niż kwiecień i czerwiec (9 i 8) w BestDateWeather. Pasuje do maksymalnego zachmurzenia na początku monsunu SW (maj to najmokrzejszy miesiąc w Colombo poza X–XI), więc zostawiono.

## Ceny lotów

Typowych cen miesięcznych dla scenariusza nie dało się ustalić. Wszystkie miesiące: `null`. Momondo (średnie wszystkich wyszukiwań, inny scenariusz): najtaniej czerwiec, ok. 2 988 zł, kwiecień ok. 3 024 zł. Najczęściej wybierane linie: Air Arabia (32%), Etihad, flydubai.

## Czas lotu i przesiadki

Przyjęte: **11,2 h, 1 przesiadka** (momondo: „najszybszy lot Warszawa–Kolombo zajmuje 11 h 10 min”; brak lotów bezpośrednich). Momondo nie podaje węzła; z rozkładów najpewniej Etihad przez Abu Zabi (ok. 6 h + 4,5 h). To najszybszy wynik, a nie typowy czas z KAYAK, więc może zaniżać (typowo ok. 11,5–13 h przez Zatokę).

## Flagi – uzasadnienie

- **waves:** V–IX = 2 (monsun SW, Tripbase: „rough; swimming inadvisable” V–IX), X = 1 (morze zmienne). Bez osobnej flagi `monsoon`, bo deszcz jest w opadzie i dniach deszczowych.
- **holidays:** IV Nowy Rok syngaleski i tamilski (zamknięcia na 2–4 dni, zakaz alkoholu). Vesak w IV i V z notatką „zależnie od roku” (pełnia; np. Daily FT podaje zamknięcia 29–30 kwietnia w roku, gdy Vesak wypadł w kwietniu).
- **Pominięte:** comiesięczne dni Poya (1 dzień w miesiącu, zakaz alkoholu i krótsze godziny; opisane w notatce kierunku, bez flagi, żeby nie flagować 12 miesięcy), Boże Narodzenie (zwykły szczyt sezonu w katolickim Negombo).

## Pomiar

Ok. 12 wyszukiwań i 28 pobranych stron. Nieudane: Climats et Voyages (brak zgody), populationreview (robots.txt), NCEI (błąd), kupi.com, BestDateWeather Negombo, timeanddate (błędy pobrania).

## Do przeglądu

1. **Stacja Colombo zamiast Katunayake:** brak norm 1991–2020 dla Negombo i lotniska. Do decyzji, czy oznaczyć całą pogodę jako szacunek (zastępstwo z 35 km) zamiast zwykłych wartości.
2. **Punkt rosy prawdopodobnie zaniżony** (wilgotność „w ciągu dnia”). Przy formatce karzącej za duszność Negombo wypada lepiej niż powinno.
3. **Czas lotu 11,2 h** to „najszybszy lot” momondo, nie typowy czas; sprawdzić w KAYAK.
4. **Nasłonecznienie z 1961–1990** (najstarsza seria w bazie).
5. **Zieleń 3 czy 4.**
6. **Para monsunowa z Trincomalee:** sprawdzić przy wprowadzaniu Trincomalee, że V–IX tam jest sucho, a XI–I mokro.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: VI 3 017, VII 3 650, XII 3 638; najtaniej VI, najdrożej VII; średnia 12 mies. 3 356 zł; typowo 2 938–3 795 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 500 / 3 500 / 3 500 / 3 400 / 3 200 / 3 000 / 3 700 / 3 200 / 3 200 / 3 400 / 3 400 / 3 600.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Negombo). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11+, 11, 11. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące II, III, IV, V, VI, VII, VIII, IX, X – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,000, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 11,2 / 12,8 / 14,0 / 13,8 / 12,6 / 11,7 / 11,9 / 12,9 / 13,2 / 12,2 / 11,1 / 10,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 276 DU): 10,7–11,5; model na 1.11 przy ozonie klimatologicznym (265 DU): 11,6.
- Wynik (I–XII): 11, 13, 14, 14, 13, 12, 12, 13, 13, 12, 11, 11.

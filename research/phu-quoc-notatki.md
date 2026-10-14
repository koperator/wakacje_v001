# Phu Quoc (Wietnam) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Long Beach (Bai Truong) przy Duong Dong, zachodnie wybrzeże. Stacja pogodowa Phu Quoc jest w Duong Dong. Zwiedzanie: wyspy An Thoi, kolejka na Hon Thom, VinWonders, plantacje pieprzu.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night | Climates to Travel, Phu Quoc, 2000–2020 | Jedyne temperatury z podanym wieloleciem. Wikipedia (Vietnam Building Code, okres niepodany) zgodna co do 0,5 °C w maksimach, minima o 0,5–1 °C niższe; MeteoNews (NOAA 1994–2005) zgodne. |
| rain | Wikipedia, tabela Vietnam Building Code (stacja Phu Quoc) | Wartości dokładne, zgodne z Climates to Travel (zaokrąglenia do 5 mm) i MeteoNews. |
| rain_days | Wikipedia (Vietnam Building Code) | Próg niepodany; wietnamskie tabele liczą zwykle od 0,1 mm, więc szacunek. Climates to Travel podaje prawie to samo. |
| sun | Climates to Travel (sumy miesięczne ÷ liczba dni) | Okres niepodany; weather2travel (CRU) zgodny co do 1 h. Wartość zwykła. |
| dew_point | Wzór Magnusa: średnia temp. dobowa (Climates to Travel) + wilgotność z Sihanoukville (Climate-Data.org, 1991–2021) | Brak źródła wilgotności dla Phu Quoc; Sihanoukville to ta sama zatoka i ten sam monsun, ok. 100 km. Szacunek. |
| uv | BestDateWeather, Phu Quoc (Open-Meteo `uv_index`, ERA5 2016–2025), 10.23°N 103.97°E | Ta sama metoda co dla pozostałych; punkt na wyspie. |
| wind | Weather Spark, Dương Đông (mph → km/h) | Ta sama metoda. |
| water | seatemperatu.re, Phu Quoc | Zgodne z Climates to Travel (27,5–30,5 °C) i Weather Spark (82–87 °F). |
| local_season | Vietnam Tourism, T Island (szczyt XII–I i Tết, najtaniej V–IX) | Szacunek. |
| flags | Vietnam Tourism (czerwone flagi V–IX, zamykane strefy kąpieli VI–VIII, odwoływane rejsy), T Island | |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Long Beach ma 20 km piasku i łagodne wejście; Sao i Khem są ładniejsze (biały piasek), ale ok. 30–40 min jazdy; poziom kotwic Cancún / Punta Cana.
- **greenery = 4:** park narodowy z lasem na ponad połowie wyspy, zielono cały rok; poziom kotwicy Phuket.
- **sightseeing = 3:** wyspy An Thoi i kolejka na Hon Thom, parki rozrywki, plantacje; brak wybitnej atrakcji kulturowej; poziom kotwicy Phuket.
- **local_season:** H XI–III, M IV i X, L V–IX.

**local_prices = 2** jako zwykła wartość: kotwica w rejestrze wprost wymienia Phu Quoc.

## Rozbieżności

- **Temperatury minimalne:** Climates to Travel 23,9–26,5 °C, weather2travel (CRU) 21–24 °C, Wikipedia 23,0–25,8 °C. Przyjęto Climates to Travel (podany okres 2000–2020).
- **UV:** sierpień 9, a lipiec i wrzesień 6–7 w BestDateWeather. Skok wygląda na szum 10-letniej próby, ale źródło jest jedno; zostawiono do przeglądu.

## Ceny lotów

Nie ustalono typowych cen miesięcznych (momondo pokazuje tylko pojedyncze oferty, np. 4 678 zł przez Bangkok). Wszystkie miesiące: `null`.

## Czas lotu

Przyjęte: **13,9 h, 1 przesiadka** (momondo: najszybsza oferta WAW–PQC 13 h 55 min przez Bangkok-Suvarnabhumi). To najpewniej LOT WAW–BKK (od X 2026, całorocznie) + lot Thai VietJet / Thai AirAsia do PQC. Czy na jednym bilecie, momondo nie mówi. Typowe połączenia przez Zatokę lub Europę: 2 przesiadki, ok. 18–24 h (tanie-loty.com.pl). Sezonowe loty bezpośrednie LOT w listopadzie (10 h 55 min) to oferta czarterowa, tylko w notatce.

Tę samą zasadę („najszybsza oferta momondo bez czarterów i lotów sezonowych”) przyjąłem dla Koh Samui, Negombo i Koh Rong. Dla Koh Samui momondo nie pokazało oferty przez Bangkok, dlatego tam wyszło 15,6 h z 2 przesiadkami.

## Flagi – uzasadnienie

- **waves:** V = 1, VI–IX = 2 („Jun–Sep rough to poor”, czerwone flagi, zamykane strefy kąpieli przy resortach), X = 1.
- **holidays:** Tết w I i II, „zależnie od roku” (zamknięte lokalne usługi przez kilka dni, przepełnione loty i hotele).
- **Pominięte:** tajfuny (rzadko dochodzą do wyspy, szczyt w XI), meduzy (bez źródła sezonowości).

## Pomiar

Ok. 8 wyszukiwań i 21 pobranych stron. Nieudane: momondo Warszawa–Phu Quoc, kupi.com, seatemperatu.re (pierwszy adres).

## Do przeglądu

1. **Czas lotu 13,9 h** zależy od nowego połączenia LOT do Bangkoku i może wymagać osobnych biletów.
2. **Punkt rosy z wilgotności Sihanoukville** (zastępstwo).
3. **Dni deszczowe** z nieznanym progiem (prawdopodobnie 0,1 mm, czyli zawyżone względem definicji).
4. **UV w sierpniu (9)** wyraźnie wyżej niż w sąsiednich miesiącach.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** brak statystyk dla WAW–PQC; poziom przeniesiony z tras przez Bangkok (Phuket 3 374 zł, Koh Samui 5 192 zł – Bangkok Airways drożej, Langkawi 4 234 zł) i oferty momondo 4 678 zł. Przyjęto średnią 4 300 zł, typowo 3 800–4 900 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 600 / 4 600 / 4 600 / 4 300 / 4 100 / 4 100 / 4 100 / 4 100 / 4 100 / 4 300 / 4 600 / 4 600.

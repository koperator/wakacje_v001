# Koh Samui (Tajlandia) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Chaweng na wschodnim wybrzeżu, najpopularniejsza plaża wyspy; Lamai ok. 15 min na południe. Pogoda ze stacji WMO 48550 Ko Samui (MeteoNews: 9°28'N 100°03'E, 4 m n.p.m.), ok. 6 km na S od Chaweng, ta sama wschodnia część wyspy. Woda i plaże: Chaweng/Lamai. Zwiedzanie: Ang Thong, Koh Phangan, Koh Tao, Big Buddha, Na Muang.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, dew_point | WMO 1991–2020, stacja 48550, tabela Wikipedii „Ko Samui” | Normy 1991–2020 ze stacją. Dni deszczowe z progiem ≥ 1,0 mm, zgodnie z definicją. Punkt rosy podany wprost w tabeli, więc wartość zwykła, bez wzoru Magnusa. Climats et Voyages (1991–2020) zgadza się co do 0,5 °C i kilku mm. |
| sun | Royal Irrigation Department 1981–2010 (ta sama tabela), godziny/miesiąc ÷ liczba dni | Jedyna seria z podaną instytucją; WMO 1991–2020 dla tej stacji nie ma nasłonecznienia. Starszy okres jest dopuszczalny (1991–2020 to preferencja). Climats et Voyages i BestDateWeather podają te same liczby, więc to raczej kopie jednej serii. |
| uv | BestDateWeather, 12 stron miesięcznych (Open-Meteo `uv_index`, ERA5, 10 lat), 9.51°N 100.06°E | To samo źródło i metoda co UV dla 3 kierunków pilotażu. Punkt danych to praktycznie Chaweng. |
| wind | Weather Spark (średnia godzinowa na 10 m, średnia obszarowa), mph → km/h | Ta sama metoda co dla Phuketu. Drugiego źródła średniej dobowej nie znaleziono (Climats et Voyages nie podaje wiatru dla Samui). |
| water | seatemperatu.re, Chaweng Beach (°F → °C) | Dane dla samej plaży. Zgodne w granicach ±0,5 °C z Climats et Voyages (28–30), Weather Spark (82–86 °F) i BestDateWeather (28–32 °C, liczby całkowite). |
| local_season | Islaguru (szczyt XII–II, tanio V–VI i IX–XI) + wiedza przewodnikowa | Brak źródła z oficjalnymi sezonami hotelowymi, więc wszystkie miesiące jako szacunek. |
| flags | The Koh Samui Guide, Pattaya Mail (monsun NE, fale), The Thailand Life (kubomeduzy), Islaguru (święta) | |
| flight_time, stops | momondo.pl (WAW–USM) | KAYAK.pl i KAYAK.com nie zostały pobrane (wymagały zgody, która nie przyszła). |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** Chaweng to długa plaża z białym piaskiem i łagodnym wejściem, kąpiel możliwa przez większość roku, na poziomie Phuketu i kotwic Cancún / Punta Cana; fale monsunu są we flagach, nie w ocenie.
- **greenery = 4:** wnętrze wyspy to zalesione wzgórza i gaje kokosowe tuż za zabudową plaży, poziom kotwicy Phuket (4).
- **sightseeing = 3:** jedna wybitna atrakcja (archipelag Ang Thong) plus Koh Phangan/Koh Tao, świątynie i wodospady; poziom kotwicy Phuket (3), raczej nie wyżej, bo Phuket ma Phang Nga i Phi Phi.
- **local_prices = 2:** jedzenie lokalne tanie, ale taksówki, wycieczki łodziami i strefa Chaweng drogie; poziom zbliżony do Phuketu (2), na granicy z 3.
- **local_season (wszystkie miesiące):** brak źródła hotelowego, układ z przewodników: H w XII–II, M w III–IV i VII–VIII (wakacje europejskie), L w V–VI i IX–XI.

## Rozbieżności między źródłami i wybór

- **Temperatury:** WMO 1991–2020 i Climats et Voyages (1991–2020) zgodne co do zaokrągleń. BestDateWeather (ERA5, siatka) podaje maksima o 1–2 °C niższe (28–31 °C); to wartości siatki modelu, nie stacji. Przyjęto WMO.
- **Temperatura morza:** BestDateWeather daje wyższy szczyt (31–32 °C w IV–VI) niż seatemperatu.re i Climats et Voyages (30 °C). Przyjęto seatemperatu.re, bo dotyczy samej plaży Chaweng i zgadza się z 2 innymi serwisami.
- **Pora deszczowa:** BestDateWeather w FAQ nazywa najmokrzejszym październik, a w tabeli listopad. WMO: listopad 445 mm, październik 295 mm. Przyjęto WMO.

## Para monsunowa z Phuketem (sprawdzenie)

| | Phuket | Koh Samui |
|---|---|---|
| Najsuchiej | XII–IV (24–82 mm) | II–IV (64–116 mm) |
| Najmokrzej | V–X (237–350 mm) | X–XII (263–445 mm) |
| V–IX | monsun SW, fale, flagi 2 | 102–134 mm, morze spokojne |
| XI | 178 mm, koniec monsunu | 445 mm, fale, flaga 2 |

Pory są odwrócone zgodnie z oczekiwaniem. Okres II–IV jest dobry na obu wyspach.

## Ceny lotów

Typowych cen miesięcznych dla scenariusza (bagaż, ok. 2 tygodnie, zakup 2–3 mies. wcześniej) nie dało się ustalić. Wszystkie miesiące: `null`.

Liczby tylko do wiadomości:
- momondo.pl (WAW): najtańszy miesiąc listopad, średnio 4 263 zł; maj 4 560 zł; średnio ok. 5 345 zł przy rezerwacji 26 tygodni wcześniej. To średnie wszystkich wyszukiwań, inny scenariusz.
- Skyscanner (INR, ceny „od”): najtaniej listopad, najdrożej III, V, VII, IX. Tylko kontrola.
- Bilety na Samui są wyraźnie droższe niż na Phuket (ok. 4,3–5,3 tys. zł wobec 2,7–3,8 tys. zł), bo lotnisko USM obsługuje głównie Bangkok Airways.

## Czas lotu i przesiadki

- **Przyjęte: 15,6 h, 2 przesiadki** (Turkish Airlines WAW–IST–BKK + Bangkok Airways BKK–USM; momondo pokazuje 15 h 35 min). Wszystkie odcinki kursują przez cały rok. Lotów bezpośrednich brak (momondo, Skyscanner).
- **Uwaga: LOT Warszawa–Bangkok od 7.10.2026,** całorocznie (zimą 5×, latem 3× w tygodniu), ok. 10 h 20 min. Z przesiadką w Bangkoku na Bangkok Airways (ok. 1 h 5 min lotu, wiele rejsów dziennie) dałoby to ok. 13–14 h i 1 przesiadkę. LOT nie ma jednak umowy z Bangkok Airways (szuka porozumienia z Thai Airways), więc to dwa osobne bilety z samodzielną przesiadką. Trasa jest nowa, wyszukiwarki nie mają jeszcze typowych czasów. Dlatego nie przyjęto.
- Momondo jako jedyne źródło: 15 h 35 min to pojedynczy wynik z listy, a nie średnia jak w KAYAK.

## Flagi – uzasadnienie

- **waves:** X = 1 (od drugiej połowy miesiąca), XI = 2 (szczyt monsunu NE, odradzana kąpiel, zamknięte rejsy i Ang Thong), XII = 1 (głównie pierwsza połowa). Podtopienia dróg i przerwy w prądzie w notatce tej samej flagi (jedno zjawisko = jedna flaga). Brak osobnej flagi `monsoon`, bo deszcz jest już w opadzie i dniach deszczowych.
- **jellyfish:** VII–X = 1. Badanie z 2016 r. (15 przypadków z Koh Samui/Phangan): VIII 33%, IX i X po 20%, VII 13%. Poparzenia są rzadkie (ryzyko niskie), ale to flaga kąpielowa, więc karze tylko przy włączonych flagach kąpielowych. Poziom 1, bo sama możliwość rzadkiego, poważnego zdarzenia nie daje poziomu 3.
- **holidays:** I, IV, XII jak na Phukecie (szczyt noworoczny z minimalnymi długościami pobytu i kolacjami galowymi, Songkran).
- **Pominięte:** Full Moon Party (na Koh Phangan, nie na Samui), Loy Krathong (XI, ciekawostka bez zamknięć), Chiński Nowy Rok (tylko tłok i ceny, czyli zwykły szczyt sezonu), Samui Regatta (V).

## Pomiar

Ok. 9 wyszukiwań i 25 pobranych stron. Nieudane: KAYAK.pl i KAYAK.com (brak zgody na pobranie), artykuł BMC Research Notes o kubomeduzach (proxy, HTTP 429).

## Do przeglądu

1. **Czas lotu i przesiadki:** 15,6 h / 2 przesiadki z jednego wyniku momondo. Sprawdzić w KAYAK. Do decyzji, czy LOT + Bangkok Airways na osobnych biletach (ok. 13–14 h, 1 przesiadka) spełnia definicję „kupowanego jako sam lot”.
2. **LOT WAW–BKK dotyczy też innych kierunków:** Phuket (BKK–HKT ok. 1 h 25 min) dałby ok. 13–14 h z 1 przesiadką zamiast 15,7 h przez Stambuł; Siem Reap (BKK–SAI) ok. 13–14 h zamiast 19,4 h przez Dubaj. Warto przeliczyć kolumnę czasu lotu, gdy wyszukiwarki pokażą typowe czasy.
3. **Nasłonecznienie z serii 1981–2010,** a nie 1991–2020 (inna seria niż dla Phuketu).
4. **Wiatr:** jedno źródło (Weather Spark, średnia obszarowa, także nad morzem). Samui wychodzi wyraźnie bardziej wietrzne niż Phuket (12–19 wobec 8–13 km/h).
5. **Sezon lokalny VII–VIII:** M, bo Islaguru pisze o mniejszym ruchu w sierpniu, a część przewodników o drugim szczycie (wakacje europejskie). Może H.
6. **Kubomeduzy:** czy flagować VII w ogóle (2 przypadki z 15 w badaniu).
7. **local_prices 2 czy 3** (podobnie jak na Phukecie).

## Przegląd 2026-10-14 (LOT Warszawa–Bangkok)

Zasada (jak przy Phu Quoc): LOT lata Warszawa–Bangkok przez cały rok (start 7.10.2026; zimą do 6 razy, latem 3 razy w tygodniu; latem LO65 WAW 15:15 – BKK 6:35, czyli ok. 10 h 20 min). Umowy z Thai Airways ani Bangkok Airways jeszcze nie ma, więc dalszy odcinek to osobny bilet. Czas liczę od wylotu z WAW do przylotu przy najwcześniejszym locie dalej po co najmniej 2,5 h na samodzielną przesiadkę (odprawa paszportowa, bagaż, nowa odprawa). Wyliczenie, nie średnia z wyszukiwarki, więc szacunek.

- Poprzednio: 15,6 h, 2 przesiadki (Stambuł + Bangkok, momondo).
- Teraz: **14,3 h (szacunek), 1 przesiadka**: przylot 6:35, Bangkok Airways do Samui ok. 9:10 (ok. 23 rejsy dziennie, średnio 1 h 17 min), przylot ok. 10:30. KAYAK.pl nadal nie pokazuje LOT dla WAW–USM (same oferty z 2–3 przesiadkami), bo to dwa osobne bilety.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: II 5 708, V 3 900, XII 6 158; najtaniej V, najdrożej XII; średnia 12 mies. 5 192 zł; typowo 4 585–6 094 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 700 / 5 700 / 5 200 / 5 200 / 3 900 / 4 500 / 5 200 / 5 200 / 4 500 / 4 500 / 4 500 / 6 200.

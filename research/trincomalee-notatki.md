# Trincomalee (Sri Lanka) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Plaże Uppuveli i Nilaveli na północ od miasta (5–15 km od stacji). Zwiedzanie: Pigeon Island, wieloryby, Fort Frederick, Koneswaram; w zasięgu wycieczki jednodniowej (ok. 2–2,5 h drogi) trójkąt kulturowy.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Trincomalee, normy 1991–2020 (NOAA), tabela Wikipedii | Stacja w mieście, nad morzem, ta sama ekspozycja na NE co plaże. Dni deszczowe ≥ 1,0 mm. weather2travel (CRU) zgodny co do 1 °C i przebiegu opadów. |
| sun | DWD 1975–1983, godz./miesiąc ÷ liczba dni | Jedyna seria ze stacją. Krótki i stary okres; weather2travel podaje 6–9 h, zgodnie co do przebiegu. |
| dew_point | Wzór Magnusa ze średniej temp. dobowej 1991–2020 i wilgotności „w ciągu dnia” (NOAA 1961–1990) | Brak źródła z punktem rosy. Szacunek. |
| uv | BestDateWeather, strony „Sri Lanka” (Open-Meteo `uv_index`, ERA5), punkt 7.87°N 80.77°E | Serwis nie ma żadnego punktu na wschodnim wybrzeżu (strony Trincomalee nie istnieją). Punkt krajowy leży w strefie suchej ok. 110 km na SW, z tym samym reżimem (deszcz w monsunie NE, sucho V–IX), więc zastępstwo jest sensowne, ale to szacunek. |
| wind | Weather Spark, Trincomalee (średnia godzinowa na 10 m), mph → km/h | Ta sama metoda co dla pozostałych kierunków. |
| water | seatemperatu.re, Trincomalee (°F → °C) | Weather Spark różni się o najwyżej 2 °F (do 1 °C chłodniej w VI–X), weather2travel 27–30 °C. |
| local_season | Girl on a Zebra (niski sezon X–początek IV, szczyt V–IX) | Champion Traveler podaje odwrotnie (najwięcej ruchu zimą), ale to raczej dane dla całego kraju; na wschodnim wybrzeżu zimą trwa monsun. Wszystko jako szacunek. |
| flags | Girl on a Zebra, Champion Traveler (morze, nurkowanie, Pigeon Island), Daily FT (święta) | |
| flight_time, stops | momondo.pl (Warszawa – Kolombo), Cinnamon Air (rozkłady) | Patrz „Czas lotu”. |

## Szacunki (po jednym zdaniu)

- **dew_point:** z wilgotności „w ciągu dnia”, więc raczej zaniżony; latem (VI–VIII) wilgotność dzienna spada do 58–61% przy suchym wietrze SW, stąd 21,7–22,0 °C.
- **uv:** punkt w strefie suchej w głębi lądu (patrz wyżej); nad morzem zachmurzenie może być nieco inne.
- **beaches = 4:** Nilaveli i Uppuveli to szerokie plaże z białym piaskiem i łagodnym wejściem, w sezonie spokojne morze; poziom kotwic Cancún / Punta Cana, fale monsunu są we flagach.
- **greenery = 2:** strefa sucha z palmami i suchymi zaroślami, w V–IX brązowo; bliżej kotwic Djerba / Santorini niż Cancún, na granicy z 3.
- **sightseeing = 4:** wybitne atrakcje w zasięgu wycieczki (Sigiriya, Polonnaruwa, Anuradhapura, słonie w Minneriya) plus Pigeon Island i wieloryby; poniżej kotwicy Siem Reap (5), bo atrakcje są 2–2,5 h drogi.
- **local_prices = 2:** jak Negombo (tanie jedzenie i transport, drogie bilety do zabytków dla cudzoziemców).
- **local_season:** H V–VIII, M III–IV i IX, L X–II.

## Rozbieżności między źródłami i wybór

- **Temperatury:** maksima 35,2–35,4 °C w V–VIII (stacja w mieście, suchy wiatr SW przez wyspę); weather2travel 34–35 °C. Plaże na północ od miasta mogą być nieco chłodniejsze od bryzy. Przyjęto stację.
- **Opad:** WMO 1991–2020 i weather2travel zgodne (XII 339 wobec 367 mm, VI 26 wobec 25 mm).

## Para monsunowa z Negombo (sprawdzenie)

| | Negombo | Trincomalee |
|---|---|---|
| V–IX | monsun SW, 116–314 mm, fale (flaga 2) | najsuchiej, 26–113 mm, morze spokojne |
| XI–XII | 346 / 171 mm | 376 / 339 mm, fale (flaga 2) |
| I–III | najsuchiej (77–103 mm) | 72–152 mm, koniec monsunu w styczniu |

Pory są odwrócone zgodnie z oczekiwaniem. Listopad jest mokry na obu wybrzeżach (okres międzymonsunowy na zachodzie).

## Ceny lotów

Nie ustalano osobno: dojazd przez Kolombo, jak Negombo (momondo: najtaniej czerwiec, ok. 2 988 zł, inny scenariusz). Wszystkie miesiące: `null`.

## Czas lotu

Przyjęte: **11,2 h, 1 przesiadka do Kolombo (CMB)**, jak dla Negombo. Do samego Trincomalee nie ma połączenia na jednym bilecie. Cinnamon Air lata codziennie przez cały rok CMB–Trincomalee (ok. 45 min; zimą 14:30, latem 10:30), ale na osobnym bilecie i z długim oczekiwaniem po porannych przylotach z Zatoki (łącznie ok. 18–19 h). Drogą ok. 5–6 h. Transfer nie wchodzi do czasu lotu według definicji, więc Trincomalee wygląda na równie bliskie jak Negombo.

## Flagi – uzasadnienie

- **waves:** X = 1 (od drugiej połowy), XI–XII = 2 (wzburzone, mętne morze, zamknięte nurkowanie i rejsy), I = 1 (głównie pierwsza połowa). Bez flagi `monsoon` (deszcz jest w liczbach).
- **holidays:** IV Nowy Rok tamilski i syngaleski, Vesak w IV–V „zależnie od roku”, jak w Negombo. Dni Poya w notatce kierunku.

## Pomiar

Ok. 6 wyszukiwań i 24 pobrane strony. Nieudane: BestDateWeather Trincomalee (strony nie istnieją).

## Do przeglądu

1. **Czas lotu bez transferu:** Trincomalee ma w praktyce 5–6 h drogi z lotniska (albo osobny lot Cinnamon Air). Ten sam problem będzie przy Koh Rong (prom), Boracay (Caticlan + łódź), Malediwach (hydroplan / łódź) i Bora Bora. Do decyzji, czy dodać kolumnę „transfer z lotniska” (h).
2. **UV jako szacunek z punktu w głębi lądu.**
3. **Nasłonecznienie z serii 1975–1983.**
4. **Punkt rosy zaniżony** (wilgotność dzienna), jak w Negombo.
5. **Zieleń 2 czy 3** i **zwiedzanie 4 czy 3** (zależy, czy 2–2,5 h drogi to jeszcze wycieczka jednodniowa).

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** to samo lotnisko co Negombo (CMB), więc te same wartości miesięczne (sezonowość trasy, nie sezon lokalny Trincomalee).
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 500 / 3 500 / 3 500 / 3 400 / 3 200 / 3 000 / 3 700 / 3 200 / 3 200 / 3 400 / 3 400 / 3 600.

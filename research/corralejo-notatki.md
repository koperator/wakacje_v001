# Corralejo, Fuerteventura (id: `corralejo`): notatki z researchu

Data sprawdzenia: 2026-10-04. Uwagi z tabeli kierunków: brak.

## Wybór stacji i źródeł per grupa wartości

- **Temp. dzień / noc, opad, dni deszczowe, słońce:** AEMET, stacja Fuerteventura Aeropuerto (C249I, 25 m n.p.m.), normy **1991–2020** (tabela w Wikipedii „Puerto del Rosario” z odwołaniem do AEMET). To najbliższa oficjalna stacja synoptyczna z pełną normą: ok. 30 km na S od Corralejo, nisko na wschodnim wybrzeżu, ta sama ekspozycja na pasat i morze. Kontrola: oficjalna strona AEMET z normą 1981–2010 dla tej stacji jest zgodna (różnice ≤ 0,4 °C; opad i dni deszczowe w 1991–2020 nieco niższe). Dni deszczowe AEMET liczy z progiem ≥ 1 mm, czyli zgodnie z definicją.
- **Słońce:** suma miesięczna AEMET 1991–2020 podzielona przez liczbę dni (luty: 28,25, średnia z wielolecia z latami przestępnymi). To tylko przeliczenie jednostek.
- **Punkt rosy:** timeanddate.com, średnie z raportów stacji Fuerteventura/Aeropuerto z lat 1992–2021, w °F przeliczone na °C. Źródło podaje punkt rosy wprost, więc wartości nie są szacunkiem. Kontrola: wzór Magnusa ze średniej temperatury i wilgotności AEMET 1991–2020 daje wartości niższe o 0,2–0,6 °C (np. sierpień 19,0 wobec 19,4). To zgodne w granicach zaokrąglenia, bo timeanddate podaje pełne °F.
- **Wiatr:** Weather Spark dla samego Corralejo, średnia godzinowa prędkość wiatru na 10 m (reanaliza MERRA-2 według ogólnej metodologii serwisu; na pobranej stronie metoda nie była opisana). Wartości w mph przeliczone na km/h. Kontrola: Windfinder, dawna stacja w Corralejo (VII 2011 – X 2012, za krótki okres na normę): średnio 11 kn ≈ 20 km/h rocznie, zgodnie z Weather Spark (średnio ok. 23 km/h). Wybrałem źródło dla samego miejsca, bo północny cypel jest bardziej wystawiony na pasat niż lotnisko.
- **Woda:** seatemperature.org dla Corralejo (satelitarne SST NOAA, wielolecie). Kontrola: seatemperature.info (10 lat), Weather Spark i climate-data.org. Wszystkie mieszczą się w ±0,5 °C, więc to jedno spójne źródło z podaną metodą.
- **UV:** weather2travel dla Puerto del Rosario (źródła: CRU, Met Office, KNMI). Ta sama wyspa i szerokość geograficzna co Corralejo (różnica ok. 0,2°), więc UV jest przenośny.
- **Sezon lokalny:** adonde-y-cuando.es (napływ turystów i indeks cen hoteli dla Corralejo) oraz ogólny wzorzec Kanarów: zima to szczyt dla turystów z północnej Europy, w sierpniu dochodzi ruch krajowy. Przypisanie: I–III H, IV–VI L, VII M, VIII H, IX–X M, XI–XII H. W styczniu, lutym, marcu i listopadzie źródło podaje najwyższe ceny hoteli, ale tylko średni napływ turystów. Uznałem, że ceny przeważają, i dałem H.

## Szacunki: uzasadnienia

- **beaches = {est: 4}:** Grandes Playas (Park Naturalny Dunas de Corralejo) to biały piasek z muszli, ok. 3,5 km długości i ok. 60 m szerokości, łagodne wejście, czysta turkusowa woda i Błękitna Flaga, 5–10 min dojazdu. Na odsłoniętych odcinkach (Flag Beach) bywa jednak wietrznie, z nawiewanym piaskiem i rozkołysaną wodą, a plaże miejskie są małe i częściowo z rafą lub kamieniami. Jakość piasku i wody jest bliższa kotwicy 4 (Punta Cana, Cancún) niż 5, a wiatr nie uzasadnia obniżenia do 3. Brak bezpośredniego źródła oceny, więc to szacunek.
- **greenery = 1:** Corralejo jest wprost kotwicą 1 w definicji kolumny, więc wartość nie jest szacunkiem.
- **sightseeing = {est: 3}:** w zasięgu wycieczek jednodniowych są wydmy Corralejo, Isla de Lobos (ok. 15 min statkiem), El Cotillo, Calderón Hondo i Betancuria. Promem (ok. 25 min) można dotrzeć na Lanzarote: Park Narodowy Timanfaya, Jameos del Agua, Mirador del Río. To poziom zbliżony do kotwic 3 (Phuket, Mauritius), poniżej Malty.
- **local_prices = {est: 3}:** Kanary (niski podatek IGIC) mają ceny jedzenia i transportu podobne do Malty i Cypru (kotwica 3), w kurortach może nieco wyżej. Nie znalazłem źródła z porównaniem dziennego kosztu.
- **flight_time = 5.8, stops = 0:** to lot bezpośredni z Lotniska Chopina, wylot 11:15, przylot 16:00 czasu lokalnego, czyli 5 h 45 min (infoloty.pl, rozkład zimowy 2026/27; KAYAK podaje ten sam czas). **Połączenie bezpośrednie działa tylko w sezonie jesienno-zimowym** (ok. 27.10 – 21.03, 3 razy w tygodniu: wt, czw, sob). Latem trzeba lecieć z przesiadką, typowo 8–10 h; tej wartości nie potwierdziłem źródłem. Wartości nie są szacunkami, ale „typowość” dotyczy tylko zimy (patrz Do przeglądu).

## Rozbieżności i wybór

- **Wiatr:** timeanddate (raporty z lotniska 1992–2021) podaje 20–30 mph, czyli 32–48 km/h. To 1,5–2 razy więcej niż Weather Spark (19–28 km/h) i Windfinder (ok. 20 km/h). Prawdopodobnie timeanddate uśrednia tylko obserwacje dzienne albo liczy inną miarę. Wybrałem Weather Spark, bo dotyczy Corralejo i jest zgodne z pomiarem lokalnym (Windfinder). Rozbieżność jest duża, więc trafia do przeglądu.
- **Temperatura dzienna:** climate-data.org (model, 1991–2021) daje maksima o 2–3 °C niższe niż AEMET (18,5–24,6 °C). Wygląda to na efekt modelu z komórką siatki częściowo nad morzem, więc je odrzuciłem. Weather Spark daje maksima niższe o ok. 0,5–0,8 °C. To może być realny efekt chłodniejszego, bardziej wystawionego na pasat cypla. Zostawiłem pomiar AEMET.
- **Słońce:** climate-data.org (dane satelitarne 1999–2019) daje latem 7,6–8,4 h/dzień, a AEMET 9,4–9,8 h/dzień. Zimą wartości są zbliżone (6,8–7,0 wobec 6,2–6,8). Wybrałem pomiar AEMET. Nie wykluczam jednak, że latem północny cypel ma więcej chmur pasatowych niż lotnisko.
- **UV:** weather2travel podaje 11 w czerwcu–sierpniu, a bestdateweather (Open-Meteo/ERA5) 9 dla lipca. Wybrałem weather2travel, bo daje pełną tabelę roczną, a przy 28,5° N w lipcu i małym zachmurzeniu maksimum UV 10–11 jest realne.
- **Woda:** źródła zgodne (±0,5 °C), wybór opisany wyżej.

## Flagi

- **smog (calima), I–III, poziom 1:** epizody pyłu saharyjskiego przy wietrze ze wschodu zdarzają się kilka razy w sezonie i trwają zwykle 1–3 dni. Dają zamglenie i pył, czasem z ociepleniem. Fuerteventura Guide pisze „usually during the summer”, ale według mojej wiedzy przyziemne epizody na Kanarach są najczęstsze zimą (XII–III), a latem pył idzie głównie wyżej, nad inwersją pasatową. Nie potwierdziłem tego źródłem z rozkładem miesięcznym (patrz Do przeglądu).
- **holidays IV (Wielkanoc) i XII (Boże Narodzenie/Nowy Rok), poziom 1:** tłok i wyższe ceny przez część miesiąca.
- **Brak flagi waves:** zimowe swelle z NW uderzają głównie w wybrzeże północne i zachodnie (Majanicho, El Cotillo). Grandes Playas leżą po stronie wschodniej, w cieśninie La Bocaina, i są względnie osłonięte, a plaże miejskie są w zatoce. Wietrzność i nawiewany piasek wynikają już z kolumny wiatru. Nie znalazłem źródła na sezonowe pogorszenie kąpieli.

## Ceny lotów

**Typowych cen miesięcznych dla scenariusza z definicji nie dało się ustalić.** Wszystkie 12 miesięcy ma `null`.

- KAYAK.pl (WAW–FUE) podaje mediany cen w obie strony z ostatniego roku, ale tylko dla trzech miesięcy: grudzień 673 zł (najtańszy), lipiec 2347 zł, sierpień 1526 zł. Średnia ogółem wynosi 1404 zł. momondo (ta sama grupa danych, więc jedno źródło) dodaje marzec 883 zł.
- Te dane nie spełniają scenariusza: brak 8 z 12 miesięcy, mediany obejmują wszystkie długości pobytu i terminy zakupu (KAYAK sugeruje zakup tydzień przed wylotem), a nie wiadomo, czy zawierają bagaż rejestrowany. Na trasie bezpośredniej wymaga on dopłaty, która wyraźnie podnosi cenę.
- Doliczanie bagażu i korekta terminu zakupu byłyby wartościami wymyślonymi, więc wpisałem `null`. Pewność: dane cząstkowe istnieją, ale nie wystarczają do obrony typowego poziomu miesiąca.

## Do przeglądu

1. **Wiatr:** duża rozbieżność. timeanddate (lotnisko) podaje 32–48 km/h, a Weather Spark (Corralejo) 19–28 km/h; wybrany Weather Spark. Warto sprawdzić w normie AEMET dla wiatru na lotnisku albo na stacji w La Oliva lub Corralejo, jeśli istnieje.
2. **Słońce latem:** AEMET (lotnisko) podaje 9,4–9,8 h/dzień, a climate-data (satelita, Corralejo) 7,6–8,4 h/dzień. Możliwy realny efekt chmur pasatowych na północnym cyplu.
3. **Czas lotu i przesiadki:** wartości 5,8 h i 0 przesiadek dotyczą tylko zimy (bezpośredni lot ok. X–III). Latem trzeba lecieć z przesiadką (ok. 8–10 h, niezweryfikowane). Źródła różnią się też co do przewoźnika: KAYAK podaje Wizz Air, infoloty.pl Ryanair (rozkład 2026/27), a momondo twierdzi, że lotów bezpośrednich brak. Do decyzji, jak schemat ze stałą wartością ma traktować sezonowe połączenia.
4. **Ceny lotów:** wszystkie `null` (dane cząstkowe opisane wyżej). Można uzupełnić ręcznie z kalendarza cen przy zakupie 2–3 miesiące wcześniej, z bagażem.
5. **Calima:** sprawdzić, czy przyziemne epizody pyłu w Corralejo rzeczywiście koncentrują się w I–III (np. opracowania AEMET o intruzjach pyłu). Jedyne pobrane źródło mówi „zwykle latem”.
6. **UV latem:** 11 (weather2travel) wobec 9 (Open-Meteo, lipiec).
7. **Sezon lokalny:** opiera się na jednym źródle (adonde-y-cuando). Niepewne są kwiecień (Wielkanoc, dałem L) i lipiec (M).
8. **Temperatura dzienna latem:** Corralejo może być o ok. 0,5–0,8 °C chłodniejsze niż lotnisko (Weather Spark). Zostawiłem AEMET.
9. **beaches = 4 (szacunek):** do porównania z innymi kierunkami. Silny pasat i nawiewany piasek na Grandes Playas, zwłaszcza VI–VIII, mogą skłaniać do 3.

## Przegląd 2026-10-04

**Zmienione w data.json:**
- UV, czas lotu i przesiadki według doprecyzowanych definicji, z przebiegu kolumnowego (`kolumna-uv-lot-notatki.md`): UV 4–9 (all-sky, BestDateWeather, punkt w środku wyspy), czas lotu 7,9 h i 1 przesiadka przez Monachium. Lot bezpośredni WAW–FUE kursuje tylko zimą, więc jest tylko w notatce kierunku.
- Flaga Wielkanocy także w marcu (święto ruchome).
- Ceny lotów zostają null: mediany KAYAK to inny scenariusz (dowolna długość pobytu, bez bagażu). Tak samo potraktowano teraz Phuket.

**Do sprawdzenia (uwagi recenzenta):**
- Kontrola Magnusem względem timeanddate różni się o 0,0–0,7 °C (nie 0,2–0,6). AEMET 1981–2010 i 1991–2020 różnią się do 0,6 °C (nie ≤ 0,4).
- WeatherSpark dla samego Corralejo jest chłodniejszy o 1,3–1,4 °C w V–VI (nie 0,5–0,8). Zostaje AEMET.
- Miesiące calimy niepotwierdzone: Fuerteventura Guide pisze „zwykle latem”, villagrancanaria „częściej zimą”. Typ „smog/wypalanie” dla pyłu to najbliższy typ pogodowy.
- Sezon lokalny VII: M czy H (źródło nazywa lipiec „temporada alta” dla liczby turystów, ceny umiarkowane).
- Brak flagi noworocznej w styczniu (Phuket ją ma); brak dowodu na skok ponad szczyt sezonu w pierwszym tygodniu stycznia.

## Przegląd 2026-10-11

**Zmienione w data.json:**
- Usunięte flagi świąt: Wielkanoc (III, IV) i Boże Narodzenie (XII). Opisywały tylko większy ruch i wyższe ceny, czyli zwykły szczyt sezonu (sezon lokalny), a nie zamknięcia ani pogorszenie ponad szczyt.
- Źródła: weather2travel opisany jako kontrola słońca i opadu (UV to inna miara); usunięta osobna strona lipcowa BestDateWeather (zawiera ją pozycja z 12 stronami miesięcznymi); KAYAK z medianami cen opisany jako inny scenariusz niż `flight_price`.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: III 911, IV 1 520, VIII 1 841; najtaniej III, najdrożej VIII; średnia 12 mies. 1 074 zł; typowo 806–1 497 zł + bagaż 300.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 1 700 / 1 700 / 1 200 / 1 800 / 1 300 / 1 300 / 1 400 / 2 000 / 1 400 / 1 400 / 1 700 / 1 700.

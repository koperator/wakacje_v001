# Phuket (Tajlandia) – notatki z researchu

Sprawdzono: 2026-10-04. Pilot Promptu A.

## Baza pobytu

Plaże zachodniego wybrzeża: Patong, Kata, Karon. Źródła nie wskazywały innej bazy. Pogoda pochodzi ze stacji w mieście Phuket. To najbliższa stacja z normami 1991–2020, ok. 10–15 km od plaż, ale po drugiej stronie wzgórz, na wschodnim wybrzeżu. Woda i plaże dotyczą Patong/Kata/Karon. Zwiedzanie obejmuje wycieczki jednodniowe: Phang Nga, Phi Phi, Similan (sezonowo), Old Town.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Normy WMO 1991–2020, stacja 48564 „Phuket” (miasto), z tabeli Wikipedii „Phuket (city)” cytującej WMO/NOAA NCEI i TMD | Jedyne znalezione normy 1991–2020 z podaną stacją. Dni deszczowe liczone z progiem ≥ 1,0 mm, zgodnie z definicją. Sumy nasłonecznienia podzielone przez liczbę dni (tylko przeliczenie jednostek). |
| dew_point | Wzór Magnusa (a = 17,625, b = 243,04) z tej samej tabeli (średnia dobowa temp. + średnia RH 1991–2020) | Żadne źródło nie podaje punktu rosy. Wynik to szacunek zgodnie z definicją. |
| wind | Weather Spark, Phuket International Airport (reanaliza MERRA-2, średnia obszarowa), mph → km/h | Jedyne źródło miesięcznej średniej prędkości wiatru z opisaną metodą. Climate-Zone podaje praktycznie identyczne liczby (6,7 / 6,0 / 5,4 mph…), więc to raczej to samo źródło. Climats et Voyages daje podobny przebieg (7–13 km/h, maksimum VII–VIII). |
| water | Cabaigne, Patong (średnie miesięczne „z odczytów lat poprzednich”) | Dane dla samej plaży Patong. Zgodne w granicach ±0,5 °C z Climats et Voyages (28,5–30), weather2travel (28–30) i Weather Atlas (28–30). Okres lat niepodany, ale zgodność 3 niezależnych serwisów uzasadnia zwykłą wartość. |
| uv | Szacunek z weather2travel (11 / 11+ w I–XI, 10 w XII), Weather Atlas („10–12 przez cały rok”) i BestDateWeather (czerwiec: 8, ERA5) | Brak źródła ze średnim dziennym maksimum UV dla każdego miesiąca. Szczegóły w „Szacunki”. |
| local_season | Wiedza przewodnikowa i KAYAK („szczyt sezonu: styczeń”, „poza sezonem: sierpień”) | Brak źródła z oficjalnymi sezonami hotelowymi. III, IV i XI oznaczone jako szacunek (miesiące przejściowe). |
| flags | TAT News (monsun SW V–X, zamknięcia parków morskich), Phuket 101 (prądy wsteczne, czerwone flagi; najgorzej Karon, potem Kata, Surin, Nai Harn) | |
| flight_price, flight_time, stops | KAYAK.pl / KAYAK.com (mediany z ostatnich 12 miesięcy), kontrolnie Skyscanner, momondo | Szczegóły w „Ceny lotów”. |

## Szacunki (po jednym zdaniu)

- **dew_point (wszystkie miesiące):** wyliczony wzorem Magnusa ze średniej temperatury dobowej i średniej wilgotności względnej 1991–2020 (stacja 48564), bo żadne źródło nie podaje punktu rosy.
- **uv:** weather2travel podaje praktycznie UV przy bezchmurnym niebie (11+ przez cały rok). Definicja wymaga średniego dziennego maksimum, które w monsunie obniża zachmurzenie (ERA5 dla czerwca: 8). Dlatego pora sucha ma 10–12, miesiące przejściowe 9, a VI–X 8.
- **beaches = 4:** Kata i Karon to szerokie, piaszczyste plaże z łagodnym wejściem w porze suchej, na poziomie kotwicy Cancún / Punta Cana. Patong jest zatłoczona (skutery wodne), ale w ocenie liczy się najlepsza plaża w zasięgu ok. 15 min. Fale monsunowe są we flagach, nie w ocenie. Brak bezpośredniego źródła oceny, więc to szacunek.
- **local_prices = 2:** Phuket to najdroższy kierunek w Tajlandii (drogie taksówki i tuk-tuki, wycieczki łodziami), ale jedzenie lokalne jest tanie. Daje to poziom podobny do kotwicy Phu Quoc / Djerba, zdecydowanie poniżej Cypru i Malty. Wartość bez bezpośredniego źródła.
- **local_season III, IV, XI = M:** miesiące przejściowe (III–IV upał i koniec sezonu, XI koniec monsunu i rosnące ceny). Granice przyjęte z wiedzy przewodnikowej.
- **flight_price II, V, VIII, XII:** mediany KAYAK nie odpowiadają ściśle scenariuszowi z definicji, szczegóły niżej.

**greenery = 4** i **sightseeing = 3** są wpisane jako zwykłe wartości, bo kotwice w rejestrze wprost wymieniają Phuket (zieleń 4, zwiedzanie 3).

## Rozbieżności między źródłami i wybór

- **Miasto (48564) a lotnisko (48565):** jedyne tabele dla lotniska to TMD 1981–2010. Lotnisko ma chłodniejsze noce (min. 22,6–24,9 °C wobec 24,5–25,8 °C w mieście w tym samym okresie) i więcej opadu (IX: 399 mm wobec 361 mm). Wybrano miasto, bo jest bliżej bazy i ma normy 1991–2020. Zachodnie wybrzeże ma ekspozycję pośrednią: plaże są otwarte na wiatr od morza jak lotnisko, ale mniej wiejskie i bez efektu miejskiego.
- **Dni deszczowe:** TMD 1981–2010 podaje 3,1–22,5 dnia (miasto) i 4,1–23,3 dnia (lotnisko). WMO 1991–2020 podaje 2,2–19,4 dnia przy progu ≥ 1,0 mm. Starsze tabele TMD najpewniej liczą od 0,1 mm, a weather2travel i Climats et Voyages podają 19–23 dni we IX–X. Przyjęto WMO 1991–2020, bo jego próg zgadza się z definicją.
- **Nasłonecznienie:** WMO 1991–2020 podaje I: 9,0, a VI–IX: 3,6–3,9 h/dzień. TMD 1981–2010 podaje I: 7,6 (miasto) i 6,4 (lotnisko), VI–VIII: ok. 5,0 (miasto) i 3,7–5,0 (lotnisko). weather2travel (CRU) podaje I: 9, VI–IX: 5–6, a Weather Atlas I: 9,2, II: 9,7, VI: 4,7. Przyjęto WMO 1991–2020 (preferowany okres). Pora sucha zgadza się z innymi źródłami, ale monsun wychodzi w nim wyraźnie bardziej pochmurny niż w CRU.
- **Temperatury:** WMO 1991–2020 jest o ok. 0,3–0,5 °C cieplejsze od TMD 1981–2010 dla miasta, co pasuje do ocieplenia. weather2travel podaje maksima o 1–1,5 °C niższe (30–33 °C), ale to raczej wartości dla siatki CRU, a nie dla stacji. Przyjęto WMO.
- **Opad:** WMO 1991–2020 dla miasta jest w monsunie niższy niż dane z lotniska (TMD 1981–2010), weather2travel (V: 334 mm, IX: 398 mm) i MeteoNews (lotnisko, VIII: 380 mm). Strona nawietrzna (zachodnia) prawdopodobnie dostaje w V–X więcej deszczu niż miasto. Bez danych ze stacji przy plaży wpisano wartości dla miasta.

## Ceny lotów

**Czy dało się ustalić typowe ceny miesięczne?** Tylko częściowo, dla 4 z 12 miesięcy, i wszystkie są szacunkiem.

- KAYAK (WAW, „zagregowane i uśrednione dane z ostatnich 12 miesięcy”; na kayak.com opisane jako mediana wszystkich cen w obie strony w danym miesiącu po odcięciu 0,1% wartości skrajnych) podaje miesiąc najtańszy i najdroższe, ale nie pełną tabelę 12 miesięcy:
  - strona WAW: maj 2 708 zł (najtańszy), luty 3 437 zł, grudzień 3 637 zł; typowy zakres 2 840–3 909 zł; mediana roczna ok. 3 284 zł;
  - strona „Warszawa – wszystkie lotniska”: maj 2 713 zł, grudzień 3 773 zł, sierpień 3 362 zł; zakres 2 850–3 904 zł; średnia 3 276 zł;
  - kayak.com (USD): maj 706 $, luty 896 $, grudzień 948 $; różnica między najtańszym a najdroższym miesiącem ok. 34%.
- Wpisane wartości po zaokrągleniu: II 3 400, V 2 700, VIII 3 400, XII 3 600 PLN, wszystkie jako `est`. Mediana KAYAK obejmuje wszystkie wyszukiwane terminy i długości pobytu oraz taryfy bez bagażu rejestrowanego (Air Arabia, Wizz Air). Nie odpowiada więc dokładnie scenariuszowi „2 tygodnie, bagaż rejestrowany, zakup 2–3 mies. wcześniej” i może go zaniżać.
- Pozostałe 8 miesięcy: `null`. Rozkładanie zakresu 2 840–3 909 zł na miesiące byłoby zgadywaniem.
- Skyscanner podaje tylko ceny „od” z ostatnich 4 dni (min. 2 076–3 148 zł). To ceny minimalne lub aktualne, a nie typowy poziom, więc posłużyły tylko do kontroli. Momondo podaje tylko maj (ok. 1 771 zł) i wrzesień (ok. 2 916 zł), też jako ceny „od”.
- Stronę Google Flights odrzucił proxy (HTTP 429, limit zapytań), więc nie została przeczytana.
- **Pewność:** średnia. Rząd wielkości 2 700–3 800 zł jest dobrze potwierdzony. Poziom dla scenariusza z bagażem jest prawdopodobnie o kilkaset zł wyższy.

**Czas lotu i przesiadki:** KAYAK podaje najkrótszy średni czas z jedną przesiadką: przez Stambuł (IST), 15 h 42 min, czyli 15,7 h i 1 przesiadka. „Lot bezpośredni” 10 h 10 min to sezonowy czarter (Neos / LOT w ofercie biur podróży), niedostępny jako typowy bilet. Momondo podaje wprost „Nie ma bezpośrednich lotów”. Dlatego go nie przyjęto.

## Flagi – uzasadnienie

- **waves:** V = 1 (monsun zwykle od połowy maja), VI–IX = 2 (w wielu dniach czerwone flagi na Kata/Karon/Patong, kąpiel wyraźnie ograniczona przez znaczną część pobytu), X = 1 (głównie pierwsza połowa miesiąca). Zamknięcie Similan/Surin i odwoływane rejsy są opisane w notatce tej samej flagi (jedno zjawisko = jedna flaga). Nie dodano osobnej flagi `monsoon`, bo deszcz jest już w opadzie i dniach deszczowych.
- **holidays:** I (szczyt noworoczny i Chiński Nowy Rok, połączone w jedną flagę), II (Chiński Nowy Rok, zależnie od roku), IV (Songkran 13–15.04), XII (święta i Nowy Rok, płatne kolacje galowe w hotelach). Wszystkie na poziomie 1.
- **Pominięte:** meduzy (problem przede wszystkim po stronie Zatoki Tajlandzkiej), dym z pożarów na Sumatrze (rzadkie, w latach El Niño, VIII–X), Festiwal Wegetariański (IX/X, w mieście, ciekawostka bez wpływu na pobyt).

## Do przeglądu

1. **Opad w porze monsunu dla zachodniego wybrzeża:** stacja miejska (wschodnie wybrzeże, osłonięte od SW) może zaniżać opad i dni deszczowe na plażach Patong/Kata/Karon. Lotnisko i weather2travel podają w V–X 10–20% więcej.
2. **Nasłonecznienie VI–IX:** WMO 1991–2020 podaje 3,6–3,9 h/dzień, a TMD 1981–2010 i weather2travel 5–6 h/dzień. To duża rozbieżność między porównywalnymi źródłami.
3. **Dni deszczowe:** różnica progów (≥ 1 mm w WMO wobec prawdopodobnie ≥ 0,1 mm w starszych tabelach TMD i w serwisach). Przyjęto WMO, ale np. we wrześniu oznacza to 18,9 dnia wobec 22–23 w innych źródłach.
4. **Ceny lotów:** tylko 4 miesiące z KAYAK (mediana wszystkich ofert, nie dokładnie scenariusz z bagażem). Grudzień różni się między stronami KAYAK (3 637 zł dla WAW i 3 773 zł dla wszystkich lotnisk warszawskich). Do decyzji, czy 8 brakujących miesięcy zostawić jako `null`.
5. **UV:** całkowicie szacunkowe. Źródła mieszają UV przy bezchmurnym niebie (11+) z wartościami uwzględniającymi chmury (8 w czerwcu).
6. **Czas lotu 15,7 h:** to średnia KAYAK dla najszybszego węzła (IST). Najlepsze połączenia przez Bliski Wschód (DOH/DXB) mogą dawać ok. 14–15 h. Do decyzji, czy definicja „typowy najkrótszy” ma oznaczać średnią, czy najlepsze typowe połączenie.
7. **local_prices = 2 i beaches = 4:** oceny bez bezpośredniego źródła. Ceny w Patong (strefa turystyczna) mogą uzasadniać 2–3.
8. **local_season:** granice sezonu (XI, III, IV) bez źródła hotelowego.
9. **Temperatura morza:** Cabaigne nie podaje okresu lat. Wartości są zgodne z innymi serwisami, ale nie są formalną normą wieloletnią.
10. **Para monsunowa z Koh Samui:** sprawdzić przy wprowadzaniu Koh Samui, że pory są odwrócone (Phuket: suchy XII–IV, mokry V–X; Samui: najmokrzej X–XII).

## Przegląd 2026-10-04

**Zmienione w data.json:**
- Ceny lotów: 4 wartości z median KAYAK (II, V, VIII, XII) → null. Mediany liczone dla dowolnej długości pobytu i bez bagażu rejestrowanego to inny scenariusz; Corralejo potraktował te same dane jako brak danych. Liczby zostają tylko w notatkach: II 3400, V 2700, VIII 3400 (strona „wszystkie lotniska Warszawy”), XII 3600 zł.
- UV, czas lotu i przesiadki według doprecyzowanych definicji, z przebiegu kolumnowego (`kolumna-uv-lot-notatki.md`): UV 6–9 (all-sky, BestDateWeather), czas lotu 15,7 h i 1 przesiadka (Stambuł, połączenie całoroczne).
- Sezon lokalny we wszystkich miesiącach jako szacunek (wcześniej tylko III, IV i XI, choć podstawa była ta sama).

**Do sprawdzenia (uwagi recenzenta):**
- Flaga fal w październiku: cytowane źródło (Phuket 101) obejmuje cały okres V–X, a „głównie pierwsza połowa miesiąca” nie ma źródła. Rozważ poziom 2.
- Słońce VI–IX 3,6–3,9 h (WMO, stacja miejska) wobec 5–6 h w weather2travel; przy domyślnej formatce (min 4 h) te miesiące dostają 0.
- Opad i dni deszczowe na zachodnim wybrzeżu są prawdopodobnie wyższe niż na stacji miejskiej (weather2travel: V 334, IX 398 mm; 19–23 dni).
- Punkt rosy wprost z timeanddate niesprawdzony (403).
- Temperatura nocna stacji miejskiej jest wyższa niż na lotnisku (TMD 1981–2010: 22,6–24,9 °C).
- Ceny na miejscu 2 czy 3 (Patong: taksówki i rejsy droższe niż w Phu Quoc).

## Przegląd 2026-10-11

**Zmienione w data.json:**
- Usunięte flagi Chińskiego Nowego Roku (I, II): opisywały tylko tłok i wyższe ceny. Styczeń zachowuje flagę szczytu noworocznego (do ok. 10.01, minimalne długości pobytu), jedno zjawisko w jednej fladze. Grudzień zostaje (minimalne długości pobytu, obowiązkowe płatne kolacje galowe – ponad zwykły szczyt).
- Źródła: weather2travel i Weather Atlas opisane jako kontrola bez UV; usunięta osobna strona czerwcowa BestDateWeather (zawiera ją pozycja z 12 stronami miesięcznymi).

## Przegląd 2026-10-14 (LOT Warszawa–Bangkok)

Zasada (jak przy Phu Quoc): LOT lata Warszawa–Bangkok przez cały rok (start 7.10.2026; zimą do 6 razy, latem 3 razy w tygodniu; latem LO65 WAW 15:15 – BKK 6:35, czyli ok. 10 h 20 min). Umowy z Thai Airways ani Bangkok Airways jeszcze nie ma, więc dalszy odcinek to osobny bilet. Czas liczę od wylotu z WAW do przylotu przy najwcześniejszym locie dalej po co najmniej 2,5 h na samodzielną przesiadkę (odprawa paszportowa, bagaż, nowa odprawa). Wyliczenie, nie średnia z wyszukiwarki, więc szacunek.

- Poprzednio: 15,7 h (Stambuł, KAYAK).
- Teraz: **14,5 h (szacunek), 1 przesiadka**: przylot 6:35, lot do Phuket ok. 9:10 (Thai Airways / Thai Vietjet, ok. 18 rejsów dziennie razem z Bangkok Airways; średnio 1 h 33 min), przylot ok. 10:45. KAYAK.pl dziś: Abu Zabi 15 h 44 min, Stambuł 15 h 46 min. Zysk tylko ok. 1 h, ale lot długodystansowy jest bezpośredni.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: V 2 744, X 3 517, XII 3 717; najtaniej V, najdrożej XII; średnia 12 mies. 3 374 zł; typowo 2 907–4 002 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 3 500 / 3 500 / 3 400 / 3 400 / 2 700 / 3 100 / 3 100 / 3 100 / 3 100 / 3 500 / 3 400 / 3 700.

# Marsa Alam (Egipt) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Resorty wzdłuż wybrzeża w okolicy Marsa Alam. W samym Marsa Alam nie znalazłem stacji z normami. Najbliższe stacje z tabelami to El Quseir (ok. 135 km na N, NOAA 1961–1990) i Hurghada (ok. 270 km na N, NOAA). Tabela w Wikipedii dla Marsa Alam pochodzi z Climate-Data.org (model).

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | Climats et Voyages, Marsa Alam (liczby całkowite; stacja i okres niepodane) | Zgodne z tabelą Wikipedii (Climate-Data.org) co do 1 °C. El Quseir (NOAA 1961–1990) jest o 1,5–2,5 °C chłodniejszy, bo leży dalej na północ. Brak stacji, więc szacunek. |
| dew_point, sun | Hurghada, NOAA 1961–1990 (punkt rosy podany wprost; nasłonecznienie: sumy ÷ dni) | To samo wybrzeże i klimat, ale ok. 270 km. Szacunek. Nasłonecznienie z Climats et Voyages (13 h w VII przy 13,4 h dnia) odrzucone jako nierealne. |
| uv | BestDateWeather, Marsa Alam (Open-Meteo `uv_index`, ERA5 2016–2025), 25.07°N 34.90°E | Punkt w Marsa Alam. Wartości 5–8 są niższe od UV przy czystym niebie, bo ERA5 uwzględnia też aerozole i zapylenie. |
| wind | Weather Spark, Marsa Alam | Ta sama metoda; stały wiatr z północy, 16–19 km/h. |
| water | Weather Spark, Marsa Alam | Climats et Voyages (22,5–29,5 °C) zgodny. |
| local_season | Champion Traveler (najwięcej turystów V–VII, najmniej IV i X–XI) | Szacunek. Dla turystów z Polski szczyt może wyglądać inaczej (zima, ferie). |
| flags | Climats et Voyages (burze piaskowe częstsze wiosną) | |

## Szacunki (po jednym zdaniu)

- **Cała pogoda poza UV, wiatrem i wodą** to szacunek (brak stacji).
- **beaches = 3:** piaszczyste zatoki, ale przy większości resortów rafa tuż przy brzegu i wejście z pomostu (zasada o utrudnionym wejściu obniża ocenę); poziom kotwic Sopot / Negombo.
- **local_prices = 2:** Egipt jest tani, ale resorty są odcięte od miast, a wycieczki i napoje poza all inclusive drogie.
- **flight_time = 8,0 (szacunek):** brak regularnych lotów bezpośrednich (momondo); typowo WAW–Kair (ok. 4 h) + Kair–Marsa Alam (ok. 1 h 15 min) z przesiadką ok. 2–3 h. Nie udało się pobrać KAYAK, żeby to potwierdzić.
- **local_season:** H VI–VIII, M I–III, V, IX, XII, L IV, X–XI.

**greenery = 1** i **sightseeing = 2** jako zwykłe wartości: kotwice w rejestrze wprost wymieniają Marsa Alam.

## Flagi – uzasadnienie

- **other:** III–IV = 1, burze piaskowe i pyłowe (chamsin). Źródło ogólne („généralement plus fréquent au printemps”), więc poziom 1.

## Ceny lotów

Momondo: najtaniej listopad, średnio 715 zł w obie strony – to ceny czarterów, inny scenariusz. Wszystkie miesiące: `null`.

## Pomiar

Ok. 3 wyszukiwania i 27 pobranych stron. Nieudane: KAYAK.com.

## Do przeglądu

1. **Brak stacji:** temperatury z serwisów bez podanej stacji; punkt rosy i słońce z Hurghady.
2. ~~Czas lotu 8,0 h jako szacunek~~ – rozstrzygnięte 2026-10-14: czarter 4,3 h.
3. **Sezon lokalny** z perspektywy Europy Zachodniej (Champion Traveler).

## Przegląd 2026-10-14 (decyzje użytkownika)

- **Czas lotu: 4,3 h, 0 przesiadek – czarter biura podróży.** Użytkownik jeździ do Marsa Alam wyłącznie z biurem (all inclusive), a kierunek jest potrzebny do porównań. W definicji kolumny w rejestrze dopisałem wyjątek: kierunek „tylko z biurem” dostaje czas czarteru z WAW, jeśli kursuje co najmniej ok. 6 miesięcy w roku. Źródło: tanie-loty.com.pl (WAW–RMF ok. 4 h 10 min – 4 h 30 min, „rzadko powyżej 4,5 h”; Enter Air, Smartwings), Itaka (wyloty z Warszawy, Katowic, Wrocławia, Gdańska, Poznania; terminy od X). Poprzednio: 8,0 h (szacunek, 1 przesiadka w Kairze).
- **Pogoda:** szukałem stacji na południe od Marsa Alam (Ras Banas, Berenice), żeby interpolować między nią a El Quseir. Nie znalazłem norm ze stacją (klima.org dla Ras Banas: liczby całkowite bez źródła). Temperatury zostają z Climats et Voyages (zgodne z Climate-Data.org), jako szacunek.
- **local_prices = 2** zostaje: przy all inclusive wydatki na miejscu i tak są niskie.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl (sam lot, w tym czartery Smartwings, Skyline Express, LOT): III 1 723 zł (najtaniej), VIII 3 084 zł, V 3 224 zł (najdrożej), średnia 2 222 zł, typowo 1 133–2 999 zł. Przy wyjeździe z biurem lot jest w cenie pakietu; to przybliżony koszt miejsca w czarterze.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 2 200 / 2 200 / 1 700 / 2 000 / 3 200 / 2 700 / 2 700 / 3 100 / 2 200 / 2 000 / 2 000 / 2 200.

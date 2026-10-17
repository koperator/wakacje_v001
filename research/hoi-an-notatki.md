# Hoi An – An Bang (Wietnam) – notatki z researchu

Sprawdzono: 2026-10-15. Prompt A, jeden przebieg.

## Baza pobytu

Plaża An Bang, ok. 4 km od Starego Miasta Hoi An. Najbliższa stacja z normami to Da Nang (ok. 25 km na północ, to samo wybrzeże).

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, sun | Da Nang, tabela Wikipedii (Vietnam Institute for Building Science and Technology; The Yearbook of Indochina) | Jedyna tabela ze stacją. Okres norm niepodany (najpewniej dane do ok. 2008 r.). |
| rain_days | Ta sama tabela × 0,7 | Próg niepodany; 139 dni/rok przy 2 205 mm wskazuje na próg 0,1 mm. Weather Spark (≥ 1 mm, reanaliza) daje 1,5–18,5 dnia, po przeliczeniu podobnie. Szacunek. |
| dew_point | Wzór Magnusa: średnia temp. dobowa + wilgotność z tabeli | Szacunek. |
| uv | BestDateWeather, Hoi An (Open-Meteo `uv_index`, ERA5 2016–2025), 15.88°N 108.33°E | Ta sama metoda. W XII tylko 3 (zachmurzenie monsunu NE). |
| wind | Weather Spark, Hội An | Ta sama metoda. |
| water | Cabaigne, Hoi An | seatemperature.net zgodny co do 1 °C. |
| local_season | Wiedza przewodnikowa (szczyt II–IV i krajowe wakacje VI–VIII) | Szacunek. |
| flags | Vietnam Tourism (powodzie, tajfuny), Dtinews (erozja, fale monsunu NE) | |

## Szacunki (po jednym zdaniu)

- **beaches = 3:** szeroki, jasny piasek i spokojne morze latem, ale erozja i zimowe fale; poziom kotwic Sopot / Negombo.
- **greenery = 3:** pola ryżowe, palmy kokosowe, las palm nipa; poziom kotwic Cancún / Alanya.
- **sightseeing = 4:** Stare Miasto Hoi An i Mỹ Sơn (oba UNESCO), Góry Marmurowe, Da Nang, Bà Nà Hills; Huế na granicy wycieczki jednodniowej; poziom kotwic Malta / Cancún.
- **local_prices = 1:** jedzenie, transport i wycieczki bardzo tanie; poziom kotwic Goa / Siem Reap.
- **flight_time = 14,8 h (szacunek), 1 przesiadka:** LOT do Bangkoku (przylot 6:35), samodzielna przesiadka min. 2,5 h, lot do Da Nang ok. 1 h 42 min (Thai Vietjet 21, Vietnam Airlines 14, Thai Airways 7 rejsów tygodniowo). Na jednym bilecie KAYAK.pl: Seul (najszybsza oferta 17 h 30 min), Dubaj średnio 19 h 06 min.
- **transfer = 0,6 h (szacunek):** lotnisko DAD – An Bang ok. 30 km.
- **local_season:** H II–IV i VI–VIII, M I i V, L IX–XII.

## Flagi – uzasadnienie

- **other (powodzie w Starym Mieście):** X = 2, XI = 2, XII = 1 (Vietnam Tourism).
  - Rzeka Thu Bồn wylewa co roku; najgorzej w XI.
  - Woda sięga do 1–1,5 m w gorszych latach.
  - Sklepy i restauracje przy rzece są zamknięte zwykle 1–3 dni.
- **cyclone:** IX–XI = 1 (szczyt tajfunów X–XI; burze często tylko z ulewą).
- **waves:** I–II i X–XII = 1. Fale monsunu NE i erozja plaż (Dtinews); bez danych o zakazach kąpieli, więc poziom 1.
- **holidays:** Tết w I i II „zależnie od roku” (2027–2030: 6.02, 26.01, 13.02, 3.02).

## Ceny lotów (szacunek, poluzowana definicja)

KAYAK.pl: V 3 281 zł (najtaniej), VII 4 760 zł, XII 5 522 zł (najdrożej); średnia 3 918 zł; typowo 3 454–4 750 zł.

## Pomiar

Ok. 4 wyszukiwania i ok. 24 pobrane strony. Nieudane: seatemperatu.re (Hoi An).

## Do przeglądu

1. **Normy Da Nang bez podanego okresu.**
2. **Zimą (XII–II) chłodno i pochmurno** (maks. ok. 25 °C, morze 23 °C, UV 3–5), więc to kierunek letni, odwrotnie niż reszta Azji Płd.-Wsch.

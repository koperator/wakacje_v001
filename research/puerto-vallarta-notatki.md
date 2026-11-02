# Meksyk – Puerto Vallarta (Zatoka Banderas) – notatki z researchu

Sprawdzono: 2026-10-26. Etap 3 (33 nowe kierunki), ta sama metoda co dla 78 kierunków bazy.

## Źródła wg kolumn

| Kolumna | Źródło i przeliczenie |
|---|---|
| temp_day, temp_night | Wikipedia: Puerto Vallarta – tabela WMO / Weatherbase (okres niepodany): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność; temperatura morza (osobna tabela) |
| rain | Wikipedia: Puerto Vallarta – tabela WMO / Weatherbase (okres niepodany): temperatury, opad, dni z opadem ≥ 0,1 mm, wilgotność; temperatura morza (osobna tabela) |
| rain_days | dni ≥ 0,1 mm × 0,7 (przeliczenie na ≥ 1 mm, szacunek) |
| dew_point | wzór Magnusa ze średniej temperatury i wilgotności, szacunek |
| sun | h/dzień podane wprost |
| uv | zastępczo krzywa UV kierunku cancun z bazy (BestDateWeather / Open-Meteo all-sky), szacunek |
| wind | Weather Spark (MERRA-2), mph × 1,609 |
| water | Weather Spark, °F → °C |

Nasłonecznienie z Climates to Travel (h/dzień, liczby całkowite) – szacunek.

## Szacunki

- **beaches 3, greenery 4, sightseeing 3, local_prices 3** – ocena redakcyjna względem kotwic w rejestrze: piaszczyste plaże zatoki, woda nie turkusowa (poziom Negombo); zielone góry jak Mauritius; zwiedzanie jak Phuket; ceny jak Cypr.
- **local_season** HHHHLLMLLLMH – wiedza przewodnikowa, szacunek.
- **transfer 0,3 h** – lotnisko Puerto Vallarta – Zona Hotelera ok. 5 km, do Zona Romántica ok. 20 min.

## Flagi

- **cyclone 1** (VIII, IX, X): Szczyt sezonu huraganów na Pacyfiku: bezpośrednie trafienie rzadkie, ale przy burzy tropikalnej kilka dni ulew, wysokich fal i odwołanych wycieczek (np. huragan Kenna 2002, Nora 2021).

## Dojazd

Przyjęte: **17 h, 2 przesiadki** (szacunek). KAYAK: najszybciej z 2 przesiadkami (Frankfurt + Toronto, Air Canada), powrót ok. 17 h; z 1 przesiadką przez USA (ESTA) teoretycznie ok. 16–17 h.

## Ceny lotów (szacunek)

KAYAK: z 2 przesiadkami (Frankfurt, Toronto – Air Canada), powrót najszybciej 17 h 00 min; II 3 570 zł najtaniej, IV ok. 7 599 zł najdrożej, średnia 4 571 zł, typowo 4 240–5 128 zł. Miesiące brakujące według sezonu lokalnego (metoda: `kolumna-flight_price-notatki.md`).
Wynik (I–XII, zł): 5200 / 3600 / 5200 / 5900 / 4100 / 4100 / 4600 / 4100 / 4100 / 4100 / 4600 / 5200.

## Do przeglądu

1. UV zastępczo z Cancún (podobna szerokość, inne wybrzeże).
2. Wczasy: Itaka ma w Meksyku tylko Jukatan; Puerto Vallarta bez oferty z Polski.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Puerto Vallarta). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 7, 9, 11, 11+, 11+, 11+, 11+, 11+, 11+, 10, 8, 7. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI, VII, VIII, IX – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,024, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 7,4 / 9,3 / 11,3 / 12,6 / 12,7 / 12,7 / 12,7 / 12,8 / 11,8 / 9,6 / 7,7 / 6,7.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 254 DU): 8,6–9,2; model na 1.11 przy ozonie klimatologicznym (261 DU): 8,5.
- Wynik (I–XII): 7, 9, 11, 13, 13, 13, 13, 13, 12, 10, 8, 7.

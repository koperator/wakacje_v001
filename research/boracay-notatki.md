# Boracay (Filipiny) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

White Beach (Station 1–3), zachodnie wybrzeże wyspy. Na wyspie nie ma stacji PAGASA, a tabele „klimatyczne” dla Malay i Kalibo w Wikipedii pochodzą z modeli (World Weather Online, Meteoblue), więc je odrzuciłem.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days | PAGASA Romblon, normy 1991–2020 (tabela Wikipedii) | Najbliższa stacja z normami (ok. 80 km na N), też mała wyspa otwarta na oba monsuny. Dni deszczowe ≥ 1 mm. Roxas (PAGASA, ok. 100 km, północne wybrzeże Panay) ma podobne temperatury i opad 2 137 mm/rok. Zastępstwo z innej wyspy, więc szacunek. |
| dew_point, wind | timeanddate, „Boracay” z raportów stacji Roxas, 2012–2021 | Punkt rosy podany wprost, jak w definicji, ale z innej stacji i z 10 lat, więc szacunek. Wiatr to średnia z raportów stacji (lotnisko Roxas), czyli inna metoda niż średnia obszarowa Weather Spark; Weather Spark nie ma strony dla Boracay. |
| sun | weather2travel (CRU, liczby całkowite) | Brak stacji z nasłonecznieniem. My Boracay Guide podaje podobny przebieg (7–9 h). Szacunek. |
| uv | BestDateWeather, Boracay (Open-Meteo `uv_index`, ERA5 2016–2025), 11.97°N 121.92°E | Punkt na wyspie. |
| water | meerestemperatur.de (ta sama rodzina co seatemperatu.re), Boracay | My Boracay Guide: 26–31 °C; BestDateWeather 27–30 °C. |
| local_season | My Boracay Guide (szczyt XII–V), Wikivoyage | Szacunek. |
| flags | Wikivoyage, VERA Files (habagat na White Beach), My Boracay Guide (tajfuny, glony) | |

## Szacunki (po jednym zdaniu)

- **Cała pogoda** poza UV i wodą to szacunek (zastępcze stacje, patrz wyżej).
- **greenery = 3:** palmy i zalesione wzgórza na północy, ale zabudowana zachodnia strona; poziom kotwic Cancún / Alanya.
- **sightseeing = 2:** island hopping i snorkeling, bez wybitnej atrakcji; poziom kotwic Aruba / Marsa Alam.
- **local_prices = 2:** „relatively high by Philippines standards”, ale jedzenie i transport tańsze niż na Cyprze czy Malcie.
- **local_season:** H XII–V, M XI, L VI–X.

**beaches = 5** jako zwykła wartość: kotwica w rejestrze wprost wymienia Boracay.

## Flagi – uzasadnienie

- **waves:** VI = 1, VII–IX = 2 (habagat: wysokie fale na White Beach, kąpiel często niebezpieczna, osłony od wiatru, erozja), X = 1.
- **cyclone:** VI–XI = 1 (sygnały tajfunowe zawieszają promy i loty na 1–3 dni kilka razy w sezonie, np. Egay w VII 2023). Poziom 1, bo poważne trafienie jest rzadkie.
- **algae:** II–IV = 1 (lumot, najsilniej w kwietniu, nieszkodliwy, głównie wizualnie).
- **holidays:** Wielki Tydzień w III i IV „zależnie od roku” (zamknięcia w czwartek i piątek, wyprzedane promy i loty).

## Czas lotu

Przyjęte: **21,1 h, 2 przesiadki** (momondo: najszybsza oferta WAW–Caticlan 21 h 05 min przez Dohę i Manilę). Średni czas ofert w momondo to 36 h 50 min, a większość ofert ma 33–47 h, więc typowe połączenie bywa znacznie dłuższe. Tricykl i prom do wyspy nie są wliczone.

## Ceny lotów

Nie ustalono typowych cen miesięcznych (oferty listopadowe 3 075–3 855 zł w obie strony). Wszystkie miesiące: `null`.

## Pomiar

Ok. 6 wyszukiwań i 29 pobranych stron. Nieudane: Climates to Travel (robots.txt), seatemperatu.re (adres), momondo (Polska–Boracay), myboracayguide (przekierowanie, pobrane drugim adresem).

## Do przeglądu

1. **Pogoda z zastępczych stacji** (Romblon, Roxas). Boracay może być nieco suchszy niż Romblon.
2. **Wiatr z raportów stacji Roxas** (16–27 km/h) jest liczony inną metodą niż w pozostałych kierunkach (Weather Spark) i może być zawyżony względem wyspy.
3. ~~Czas lotu: 21 h to najlepsza oferta~~ – zmienione 2026-10-14 na 27,8 h (szacunek).

## Przegląd 2026-10-14 (czas lotu)

- **flight_time = 27,8 h (szacunek), 2 przesiadki.** Poprzednie 21,1 h to pojedyncza rekordowa oferta momondo, a definicja tego zabrania.
  - KAYAK.pl (WAW–MPH): brak połączeń z 1 przesiadką; oferty z 2 przesiadkami przez Dohę i Manilę, najszybsza w stronę Caticlan 33 h 20 min, w stronę Warszawy 27 h 50 min, średnio ok. 38–43 h.
  - Przyjąłem medianę trzech najszybszych znanych ofert (21,1 / 27,8 / 33,3 h).
  - Godziny lotów Manila–Caticlan rzadko pasują do przylotów z Zatoki, stąd długie przesiadki.
- Alternatywa: Kalibo (KLO, więcej lotów z Manili i lotów z Azji) i ok. 1,5–2 h drogi z promem.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: I 5 405, IV 3 422; najtaniej IV, najdrożej I; średnia 12 mies. 4 558 zł; typowo 4 223–5 386 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 5 400 / 5 000 / 5 000 / 3 600 / 5 000 / 4 100 / 4 100 / 4 100 / 4 100 / 4 100 / 4 600 / 5 000.

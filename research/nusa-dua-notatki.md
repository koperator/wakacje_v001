# Nusa Dua, Bali (Indonezja) – notatki z researchu

Sprawdzono: 2026-10-13. Prompt A, jeden przebieg.

## Baza pobytu

Enklawa resortów Nusa Dua, wschodnie wybrzeże półwyspu Bukit; plaże osłonięte rafą (Geger, Mengiat, Nusa Dua Beach). Stacja Ngurah Rai (lotnisko) ok. 10 km na NW.

## Stacje i źródła wg grup wartości

| Grupa | Źródło | Dlaczego |
|---|---|---|
| temp_day, temp_night, rain, rain_days, sun | Ngurah Rai, normy 1991–2020 (Starlings Roost Weather, tabela Wikipedii) | Najbliższa stacja z normami. Próg dni z opadem niepodany, więc szacunek. Nasłonecznienie: sumy miesięczne ÷ liczba dni. |
| dew_point | **brak danych (`null`)** | Jedyna wilgotność w tabeli (FAO 1961–1990) daje w lipcu 50%, co przy 26,5 °C oznacza punkt rosy ok. 15 °C; to nierealne dla Bali (pojedynczy odczyt timeanddate z lipcowego południa: 73 °F ≈ 23 °C). Strona klimatyczna timeanddate dla Denpasar nie wczytała się (3 próby). Bez sensownej podstawy: brak danych. |
| uv | BestDateWeather, Bali (Open-Meteo `uv_index`, ERA5 2016–2025), 8.67°S 115.21°E | Punkt to Denpasar, ok. 12 km. |
| wind | Weather Spark, lotnisko Ngurah Rai (mph → km/h) | Ta sama metoda co dla pozostałych. |
| water | meerestemperatur.de, Nusa Dua | Weather Spark: 79–84 °F (najchłodniej VIII, najcieplej III), zgodnie. |
| local_season | Champion Traveler (szczyt VII, drugi IX–X, najmniej II–V) | Szacunek. |
| flags | Wikipedia: Nyepi | |
| flight_time, stops | KAYAK.com | Pierwszy raz udało się pobrać KAYAK (wersja .com). |

## Szacunki (po jednym zdaniu)

- **beaches = 4:** biały piasek i spokojna woda za rafą, ale przy odpływie płytko; poziom kotwic Cancún / Punta Cana.
- **greenery = 3:** ogrody resortów, ale suchy półwysep Bukit brązowieje w porze suchej; poziom kotwic Cancún / Alanya.
- **sightseeing = 4:** Uluwatu, Tanah Lot, Ubud i tarasy ryżowe w zasięgu 1–1,5 h; poniżej kotwicy Siem Reap.
- **local_prices = 2:** sama enklawa jest droga, ale poza nią jedzenie i transport (Grab) tanie.
- **local_season:** H VI–VIII i XII (święta), M I, IV–V, IX–X, L II–III i XI.

## Flagi – uzasadnienie

- **holidays:** Nyepi w III (2027–2030 zawsze w marcu): 24 h zamknięte lotnisko, drogi i plaże. Poziom 1, bo trwa jeden dzień.
- **Pominięte:** śmieci w porze deszczowej (problem głównie zachodniego wybrzeża, Kuta/Seminyak), meduzy i „blue bottles” (bez źródła dla Nusa Dua), fale (plaże osłonięte rafą; Champion Traveler: morze spokojne VI–X).

## Czas lotu

Przyjęte: **18,2 h, 1 przesiadka** (KAYAK: najkrótszy średni czas przez Stambuł 18 h 13 min; Doha 18 h 56 min). Momondo podaje „najkrótszy czas” 26 h 55 min, ale to raczej inna miara.

## Ceny lotów

KAYAK: najtaniej kwiecień, mediana 1 041 USD w obie strony (inny scenariusz). Wszystkie miesiące: `null`.

## Pomiar

Ok. 8 wyszukiwań i 27 pobranych stron. Nieudane: BestDateWeather Nusa Dua, KAYAK.com.my, Traveloka, timeanddate (3×).

## Do przeglądu

1. ~~Punkt rosy pusty~~ – uzupełniony 2026-10-14 (szacunek, patrz niżej).
2. **Dni deszczowe** z nieznanym progiem.

## Przegląd 2026-10-14 (uzupełnienie punktu rosy)

- **dew_point = szacunek:** wzór Magnusa ze średniej temperatury stacji Ngurah Rai (1991–2020) i wilgotności z Weather Atlas: 79% w I–III, 81% w V–X; IV = 80% i XI = 80%, XII = 79% dopisałem jako wartości pośrednie. Wynik: 22,7 °C (VIII) do 24,3 °C (IV, XI).
- Kontrola:
  - NASA POWER (climate-zone.com, model): 79–87%, czyli punkt rosy wyższy o ok. 1 °C;
  - pojedynczy lipcowy odczyt timeanddate: ok. 23 °C;
  - Weather Spark: parno (punkt rosy ≥ 18,3 °C) praktycznie 100% dni w każdym miesiącu.
- FAO 1961–1990 (50% w VII) dalej odrzucone.
- timeanddate (Denpasar, Kuta, Nusa Dua, Surabaya, Mataram, Dili) nie wczytał się.

## Przegląd 2026-10-14 (ceny lotów, poluzowana definicja)

- **flight_price (szacunek):** KAYAK.pl: IV 4 068, VII 5 522, VIII 5 170; najtaniej IV, najdrożej VII; średnia 12 mies. 4 334 zł; typowo 3 966–5 032 zł.
- Brakujące miesiące wyliczone według sezonu lokalnego (H: między średnią a najdroższym, M: średnia, L: między średnią a najtańszym); wartości poza zakresem typowych cen o ponad 15% przycięte. Szczegóły metody: `kolumna-flight_price-notatki.md`.
- Wynik (I–XII, zł): 4 300 / 4 200 / 4 200 / 4 100 / 4 300 / 4 900 / 5 500 / 5 200 / 4 300 / 4 300 / 4 200 / 4 900.

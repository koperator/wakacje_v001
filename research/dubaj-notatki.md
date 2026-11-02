# Dubaj – JBR / Palm Jumeirah (ZEA) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła wg grup wartości

| Grupa | Źródło | Uwagi |
|---|---|---|
| temp_day, temp_night, rain, dew_point, sun | Dubai Met Office 1991–2020 (tabela Wikipedii) | Punkt rosy podany wprost. |
| rain_days | Ta sama tabela × 0,7 | Próg niepodany (25,5 dnia/rok przy 95 mm sugeruje 0,1 mm). Szacunek. |
| uv | BestDateWeather, Dubaj | Wiersz UV z Wikipedii (do 12) to inna metoda, niewykorzystany. |
| wind | Weather Spark, lotnisko Dubaj | |
| water | Wikipedia, tabela temperatury morza (seatemperature.org, Weather Atlas) | |
| flags | Exploring Emirates (Ramadan) | |

## Szacunki

- **beaches = 4:** szerokie, piaszczyste plaże miejskie ze spokojną wodą; poziom kotwic Cancún / Punta Cana.
- **greenery = 2:** pustynne miasto z nawadnianą zielenią; poziom kotwic Santorini / Djerba.
- **sightseeing = 4:** Burj Khalifa, stary Dubaj, pustynia, Abu Zabi jako wycieczka jednodniowa.
- **local_prices = 4:** drogo (jedzenie, alkohol, atrakcje); poziom kotwic Barbados / Aruba.
- **flight_time = 6,2 h, 0 przesiadek** (KAYAK.pl: Emirates, flydubai, LOT, średnio 6 h 13 min).
- **transfer = 0,6 h:** lotnisko DXB – JBR ok. 35 km.
- **local_season:** H XI–III, M IV, X, L V–IX.

## Flagi

- **holidays:** Ramadan w I–III „zależnie od roku” (2027: ok. 8.02–9.03; 2028: ok. 28.01–26.02; 2029: ok. 16.01–14.02; 2030: ok. 6.01–4.02). Poziom 1: hotele i atrakcje działają.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Dubaj). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 6, 8, 10, 11+, 11+, 11+, 11+, 11+, 11, 8, 6, 5. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 1,011, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 5,8 / 7,6 / 9,8 / 11,5 / 11,7 / 11,9 / 11,9 / 11,8 / 10,5 / 8,3 / 6,2 / 5,2.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 265 DU): 6,6–7,3; model na 1.11 przy ozonie klimatologicznym (263 DU): 7,1.
- Wynik (I–XII): 6, 8, 10, 12, 12, 12, 12, 12, 11, 8, 6, 5.

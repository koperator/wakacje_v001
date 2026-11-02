# Cayo Guillermo – Playa Pilar (Kuba) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła

Brak stacji dla Jardines del Rey. Cała pogoda (temperatury, opad, dni deszczowe, słońce, punkt rosy, UV, wiatr, woda), sezon lokalny i flaga huraganów są przeniesione z `varadero.json` (to samo północne wybrzeże, ok. 350 km). Wszystko jako szacunek.

## Szacunki

- **beaches = 5:** Playa Pilar – biały piasek, wydmy, płytka turkusowa woda.
- **greenery = 2:** namorzyny, zarośla.
- **sightseeing = 1:** odizolowane wyspy resortowe; Trynidad i Camagüey poza zasięgiem jednego dnia.
- **local_prices = 3** (all inclusive).
- **flight_time = 18 h (szacunek), 2 przesiadki:** KAYAK.pl nie ma danych. Lotnisko Jardines del Rey obsługuje głównie loty z Kanady i czartery.
- **flight_price (szacunek):** jak Varadero + ok. 500 zł za trudniejszy dojazd.
- **transfer = 0,4 h:** lotnisko Cayo Coco – Cayo Guillermo groblą.

## Do przeglądu

1. Wszystkie dane przeniesione – najsłabszy kierunek w etapie 2.
2. Przy wyjeździe z biurem możliwy czarter z Polski.

## Przegląd 2026-10-17 (rozwiązanie uwag)
- **Dane z Varadero:** zostają jako szacunek.
- **Czarter:** zostaje regularne połączenie, bo tylko Marsa Alam jest oznaczona jako wyjazd wyłącznie z biurem.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Cayo Guillermo). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 7, 8, 10, 11+, 11+, 11+, 11+, 11+, 11, 9, 7, 6. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące IV, V, VI, VII, VIII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,997, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 6,5 / 8,4 / 10,5 / 11,9 / 12,0 / 12,1 / 12,1 / 12,1 / 11,0 / 8,8 / 6,8 / 5,9.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 262 DU): 7,6–8,3; model na 1.11 przy ozonie klimatologicznym (262 DU): 7,7.
- Wynik (I–XII): 7, 8, 10, 12, 12, 12, 12, 12, 11, 9, 7, 6.

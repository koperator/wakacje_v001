# Zanzibar – Paje / Jambiani (Tanzania) – notatki z researchu

Sprawdzono: 2026-10-16. Prompt A, jeden przebieg.

## Źródła

Cała pogoda, UV, wiatr, woda, sezon, flagi (Ramadan, masika), lot i ceny przeniesione z `zanzibar.json`. Ta sama stacja Zanzibar/Kisauni (dla Paje ok. 45 km), to samo lotnisko, ta sama wyspa. Szczegóły źródeł są w `zanzibar-notatki.md`.

## Różnice względem Nungwi / Kendwa

- **beaches = 3 (szacunek):** biały piasek i laguna, ale bardzo silne pływy – przy odpływie woda cofa się daleko, a na płyciźnie są farmy wodorostów (IKSURFMAG). Zasada o utrudnionym wejściu: −1 względem Nungwi (4).
- **transfer = 1,0 h (szacunek):** lotnisko ZNZ – Paje ok. 50 km.
- **Wiatr:** Paje to centrum kitesurfingu (kaskazi XII–II 12–25 kn, kusi V–X). Wiatr z Nungwi (Weather Spark) jest prawdopodobnie zaniżony dla wschodniego wybrzeża.

## Do przeglądu

1. Wiatr na wschodnim wybrzeżu.
2. Ewentualna flaga wodorostów wyrzucanych na plażę – brak źródła z sezonowością.

## Przegląd UV 2026-10-27

Kolumna UV wymieniona: poprzednie wartości (BestDateWeather / Open-Meteo, „średni” UV z zachmurzeniem, kończące się na 8–9) były zaniżone. Teraz: maksymalny dzienny indeks UV dla czystego nieba w południe – klimatologia TEMIS (KNMI) z weather2travel (Zanzibar). Pełne przeliczenie 2026-10-28 (metoda: `kolumna-uv-notatki.md`, sekcja „Pełne przeliczenie”).

- Odczyt weather2travel (I–XII): 11+, 11+, 11+, 11+, 10, 9, 10, 11, 11+, 11+, 11+, 11+. Odczyty liczbowe (także „11”) przyjęte wprost.
- Miesiące I, II, III, IV, IX, X, XI, XII – strona pokazuje „11+” (co najmniej 11,5); wartość z modelu KNMI (Allaart i in. 2004) × k(μ) = 0,687 + 0,295·μ × czynnik miejsca 0,991, ozon dopasowany do odczytów TEMIS i bieżącego ozonu; szacunek, nie mniej niż 12.
- Model (I–XII, kontrola): 13,0 / 14,0 / 14,1 / 12,6 / 10,4 / 9,3 / 9,7 / 11,3 / 12,9 / 13,5 / 13,0 / 12,5.
- Bieżąca prognoza TEMIS 28.10–2.11.2026 (czyste niebo, prawdziwy ozon 276 DU): 13–13,4; model na 1.11 przy ozonie klimatologicznym (272 DU): 13,3.
- Wynik (I–XII): 13, 14, 14, 13, 10, 9, 10, 11, 13, 14, 13, 13.

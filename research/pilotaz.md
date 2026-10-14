# Pilotaż: Siem Reap, Corralejo, Phuket

Krok 1–3 z kolejności budowy. Data: 2026-10-04. Model researchu: Claude Opus 5.5, każdy kierunek osobnym przebiegiem z wyszukiwaniem w sieci.

## Czas i koszt

| Przebieg | Czas | Wywołania narzędzi | Wyszukiwania + pobrane strony | Tokeny kontekstu agenta |
| --- | --- | --- | --- | --- |
| Siem Reap (Prompt A) | 13 min | 46 | 12 + 25 | ok. 118 tys. |
| Corralejo (Prompt A) | 23 min | 54 | 19 + 26 | ok. 130 tys. |
| Phuket (Prompt A) | 26 min | 50 | 10 + 29 | ok. 124 tys. |
| UV, czas lotu, przesiadki dla 3 kierunków (Prompt C) | 31 min | 119 | 11 + 97 | ok. 166 tys. |
| Przegląd danych (Prompt B + sprawdzenie źródeł) | 48 min | 67 | brak licznika | ok. 212 tys. |

- Trzy przebiegi Prompt A szły równolegle: 27 minut łącznie.
- Ok. 20–30% pobrań stron kończy się błędem (403, 404, blokady porównywarek lotów), co wydłuża research.
- Tokeny to rozmiar kontekstu agenta na końcu przebiegu, nie łączna liczba rozliczonych tokenów. Kosztu w USD nie da się z tego wiarygodnie policzyć; zależy od modelu, cennika i cache.
- Ekstrapolacja na 30 pozostałych kierunków: 7–13 godzin pracy agentów, przy kilku równoległych przebiegach 2–4 godziny zegarowe, plus przegląd.

## Wnioski

- **Ceny lotów:** typowych cen miesięcznych dla scenariusza (bagaż, ok. 2 tygodnie, zakup 2–3 miesiące wcześniej) nie da się ustalić. Porównywarki dają tylko mediany dla dowolnej długości pobytu i bez bagażu, i to dla części miesięcy. Zgodnie ze specyfikacją: brak danych, domyślna waga lotu 0.
- **Weryfikacja źródeł:** recenzent sprawdził ok. 8 wartości na kierunek w cytowanych źródłach; wszystkie się zgadzały, bez błędów przeliczeń jednostek.
- **Główny problem to niejednoznaczne definicje**, przez które trzy przebiegi stosowały różne miary. Poprawione w rejestrze (te same id, bo poza pilotażem nie ma jeszcze danych ani profili):
  - UV: all-sky (z zachmurzeniem), jedno źródło dla 12 miesięcy; wcześniej mieszano UV dla czystego nieba z all-sky.
  - Czas lotu i przesiadki: najszybsze regularne połączenie dostępne przez większość roku; loty sezonowe i czartery tylko w notatce. Wcześniej trzy różne miary, a Corralejo liczył zimowy lot bezpośredni (filtr „0 przesiadek” przepuszczał go latem).
  - Wiatr: średnia dobowa na 10 m; serwisy dla kitesurferów tylko do kontroli.
  - Punkt rosy: pierwszeństwo dla źródła podającego go wprost.
  - Sezon lokalny: ocena bez źródła jest szacunkiem we wszystkich miesiącach.
  - Flagi świąt: tylko zamknięcia lub pogorszenie ponad zwykły szczyt sezonu; święto ruchome w każdym możliwym miesiącu.
  - Ceny lotów: mediany porównywarek to inny scenariusz.
  - Prompt A: rozbieżność źródeł nie jest powodem do szacunku; kotwica dostaje swoją ocenę jako zwykłą wartość.
- **Otwarte decyzje** są w sekcjach „Przegląd 2026-10-04” w notatkach kierunków i „Do przeglądu” w `kolumna-uv-lot-notatki.md`.

# Kolumna `flight_price` (cena lotu) – notatki

Sprawdzono: 2026-10-14. Prompt C po poluzowaniu definicji (decyzja użytkownika).

## Zmiana definicji

Typowe ceny dla scenariusza „ok. 2 tygodnie, z bagażem, zakup 2–3 miesiące wcześniej” nie są nigdzie publikowane, więc kolumna była pusta.

**Teraz dopuszczone, zawsze jako szacunek:**
- miesięczne mediany lub średnie z porównywarek dla trasy z WAW na lotnisko bazy, liczone dla dowolnej długości pobytu i terminu zakupu;
- uzupełnienie brakujących miesięcy według zasady poniżej;
- dopłata za bagaż przy tanich liniach;
- przeniesienie poziomu z sąsiedniej trasy, gdy własnych statystyk brak.

**Domyślna waga kolumny: 1** (wcześniej 0), formatka bez zmian (ideał do 2 500 zł, zero od 7 000 zł).

## Metoda

1. KAYAK.pl, strona trasy `kayak.pl/loty/Warszawa-WAW/<miasto>-<IATA>`: mediany lub średnie dla 1–4 miesięcy (najtańszy, najdroższy, czasem dodatkowe), średnia z 12 miesięcy i zakres „typowe ceny”. Ceny w obie strony, KAYAK nie podaje długości pobytu ani bagażu.
2. Miesiąc podany wprost → ta wartość. Najdroższy miesiąc podany tylko jako różnica („o X zł taniej niż…”) → wyliczony.
3. Pozostałe miesiące według sezonu lokalnego kierunku:
   - H: (średnia + najdroższy) / 2;
   - M: średnia;
   - L: (średnia + najtańszy) / 2.
4. Wartości poza przedziałem [0,85 × dolna granica typowych, 1,15 × górna granica typowych] są przycięte (dotyczy wyliczonych maksimów: Bora Bora VII ok. 23 700 zł, Providenciales VII ok. 6 300 zł).
5. Trasy krótkie obsługiwane głównie przez tanie linie (Fuerteventura, Antalya, Larnaka, Santorini, Malta): +300 zł za bagaż rejestrowany w obie strony.
6. Zaokrąglenie do 100 zł.

**Ograniczenie:** sezonowość cen bierze się tu z sezonu lokalnego kierunku, a nie z popytu w Polsce (wakacje, ferie, święta). Miesiące podane wprost przez KAYAK to uwzględniają, wyliczone – tylko częściowo.

## Dane wejściowe i wynik

| Kierunek | Miesiące z KAYAK (zł) | Średnia 12 mies. | Typowo | Wynik min–maks |
|---|---|---|---|---|
| phuket | V 2 744, X 3 517, XII 3 717 | 3 374 | 2 907–4 002 | 2 700–3 700 |
| corralejo | III 911, IV 1 520, VIII 1 841 | 1 074 | 806–1 497 + bagaż 300 | 1 200–2 000 |
| koh-samui | II 5 708, V 3 900, XII 6 158 | 5 192 | 4 585–6 094 | 3 900–6 200 |
| negombo | VI 3 017, VII 3 650, XII 3 638 | 3 356 | 2 938–3 795 | 3 000–3 700 |
| langkawi | VII 3 238, XII 5 272 | 4 234 | 3 727–5 142 | 3 200–5 300 |
| nusa-dua | IV 4 068, VII 5 522, VIII 5 170 | 4 334 | 3 966–5 032 | 4 100–5 500 |
| goa-polnocne | II 3 224, III 4 128 | 3 264 | 3 067–3 760 | 3 200–4 100 |
| malediwy | II 4 017, IV 3 317, XII 4 588 | 3 669 | 3 221–4 311 | 3 300–4 600 |
| seszele | V 3 348, VI 3 348, VIII 3 727, XII 3 829 | 3 511 | 3 200–3 851 | 3 300–3 800 |
| mauritius | I 3 803, VII 4 850, XII 5 049 | 4 239 | 3 821–4 791 | 3 800–5 000 |
| watamu | III 3 021, V 4 291, VIII 4 056 | – | 3 103–4 000 | 3 000–4 300 |
| zanzibar | VII 4 436, XI 3 314, XII 4 674 | 3 903 | 3 405–4 615 | 3 300–4 700 |
| djerba | VII 2 515, IX 1 420 | 1 981 | 1 419–2 426 | 1 400–2 500 |
| alanya | II 719, VII 1 251, VIII 1 239 | 1 051 | 849–1 270 + bagaż 300 | 1 000–1 600 |
| protaras | I 574, VIII 1 239, X 1 254 | 849 | 602–1 215 + bagaż 300 | 900–1 600 |
| santorini | I 621, II 1 673, V 1 485 | 1 207 | 938–1 525 + bagaż 300 | 1 100–2 000 |
| malta | III 469, X 829, XI 771 | 592 | 431–866 + bagaż 300 | 800–1 100 |
| sopot | I 309, IV 450, XII 422 | 356 | 305–504 | 300–500 |
| punta-cana | VIII 5 023, X 3 799, XII 5 144 | 4 229 | 3 745–4 874 | 3 800–5 100 |
| cancun | V 3 643, VIII 4 690, X 4 694 | 4 299 | 3 899–4 790 | 3 600–4 700 |
| aruba | IV 3 662 | 4 812 | 4 398–5 452 | 3 700–5 500 |
| barbados | III 3 400, XII 4 472 | 3 938 | 3 433–4 412 | 3 400–4 500 |
| providenciales | II 3 239, VII 6 271 | 4 692 | 4 040–5 164 | 3 400–5 900 |
| tamarindo | I 5 098, VIII 4 043 | 4 654 | 4 151–4 929 | 4 000–5 100 |
| waikiki | I 4 537, VII 5 417, VIII 5 436 | 5 008 | 4 527–5 507 | 4 500–5 400 |
| nadi-denarau | VI 6 198, VII 8 762, VIII 9 665 | 6 798 | 6 338–7 758 | 6 200–8 900 |
| bora-bora | V 11 094 | 12 938 | 12 550–15 708 | 11 100–15 700 |
| boracay | I 5 405, IV 3 422 | 4 558 | 4 223–5 386 | 3 600–5 400 |
| koh-rong | XI 4 550, XII 5 063 | – | 4 970–6 525 | 4 600–5 700 |
| siem-reap | – | 4 000 | 3 600–4 500 | 3 800–4 300 |
| phu-quoc | – | 4 300 | 3 800–4 900 | 4 100–4 600 |
| marsa-alam | III 1 723, V 3 224, VIII 3 084 | 2 222 | 1 133–2 999 | 1 700–3 200 |
| trincomalee | VI 3 017, VII 3 650, XII 3 638 | 3 356 | 2 938–3 795 | 3 000–3 700 |
## Przeniesione i nietypowe

- **Siem Reap, Phu Quoc:** strony KAYAK i momondo dla tych tras nie wczytały się albo nie mają statystyk. Poziom przeniesiony z tras przez Bangkok (Phuket, Langkawi, Koh Samui) i z pojedynczych ofert (SAI 3 635–4 059 zł, PQC 4 678 zł). Szczegóły w notatkach kierunków.
- **Trincomalee:** to samo lotnisko co Negombo (CMB), więc te same wartości.
- **Koh Rong:** KAYAK podaje tylko oferty (XI, XII) i zakres; średnią przyjąłem jako środek zakresu.
- **Marsa Alam:** ceny samego lotu z KAYAK, w tym czartery. Przy wyjeździe z biurem lot jest w pakiecie, więc to tylko przybliżenie.
- **Santorini:** KAYAK podaje luty (1 673 zł) jako najdroższy miesiąc. Zimą nie ma lotów bezpośrednich i lata się z przesiadką, więc to wiarygodne.

## Do przeglądu

1. **Sezonowość wyliczonych miesięcy** opiera się na sezonie lokalnym, nie na popycie w Polsce.
2. **Dopłata za bagaż tylko dla tras krótkich;** na trasach dalekich zakładam bagaż w taryfie.
3. **Waga 1** – do decyzji. Przy formatce domyślnej wszystkie trasy dalekie (ok. 3 000–6 000 zł) tracą część punktów, a Bora Bora (ok. 12 000–16 000 zł) dostaje 0.

# Prompty researchu

Trzy prompty: research jednego kierunku, przebieg sprawdzający i uzupełnienie nowej kolumny. Do każdego dołącz aktualny `rejestr.json` (kolumny `columns` i typy flag `flagTypes`): definicje kolumn w polu `definition` są częścią instrukcji.

Po researchu kierunku: zapisz wynik jako `kierunki/<id>.json`, notatki jako `research/<id>-notatki.md`, i dołącz do bazy poleceniem `node merge.mjs kierunki/<id>.json` (sprawdza i dopisuje albo nadpisuje tylko ten kierunek).

---

## Prompt A: research jednego kierunku

Zbierasz dane klimatyczne i opisowe dla jednego kierunku wakacyjnego do osobistej wyszukiwarki. Używaj wyszukiwania w sieci. Wynik to jeden obiekt JSON w stałym schemacie i krótkie notatki z researchu.

**Kierunek:** {KRAJ} — {MIEJSCE} (id: `{ID}`). Uwagi: {UWAGI}

**Zasięg.** Miejsce wyznacza bazę pobytu, którą opisuje cały wiersz. Pogoda i ceny dotyczą tej bazy; woda i plaże: plaż w zasięgu spaceru lub krótkiego dojazdu (do ok. 15 minut); zwiedzanie: atrakcji w zasięgu wycieczek jednodniowych. Przy wyspach i atolach pogoda, plaże i ceny nie mogą pochodzić z różnych części.

**Kolumny.** Wszystkie kolumny z rejestru `columns`. Każda wartość według pola `definition`. `scope: "month"` idzie do każdego z 12 miesięcy, `scope: "fixed"` raz do `fixed`. Flagi tylko z typów `flagTypes`.

**Zasady:**

1. **Zbieranie:** cel to 2 niezależne źródła na wartość; jedno wiarygodne (serwis klimatyczny z podaną stacją lub metodą) wystarcza. Strony kopiujące tę samą tabelę liczą się jako jedno źródło. Pierwszeństwo mają serwisy klimatyczne i meteorologiczne (krajowe służby, WMO, tabele klimatyczne ze stacją) przed blogami.
2. **Definicje:** wartości jako normy wieloletnie (pref. 1991–2020 lub nowsze wielolecie), nigdy z pojedynczego roku. Gdy źródło liczy inaczej, uzasadnione przeliczenie dostaje oznaczenie szacunek; bez sensownego przeliczenia: brak danych. Przeliczenie jednostek nie zmienia oznaczenia.
3. **Obszar:** stacja możliwie najbliższa bazie pobytu i o podobnej ekspozycji.
4. **Rozbieżności:** bez mechanicznego uśredniania. Wybierz źródło najbliższe miejscu i zgodne z definicją i okresem; uzasadnij w notatkach. Dużą rozbieżność między porównywalnymi źródłami wpisz do sekcji „Do przeglądu”. Sama rozbieżność nie jest powodem do oznaczenia szacunku.
5. **Braki:** szacunek z pobliskiego miejsca lub sąsiednich miesięcy tylko, gdy zastępstwo jest sensowne (podobny klimat, wysokość, ekspozycja), z jednym zdaniem uzasadnienia w notatkach. Bez sensownej podstawy: brak danych.
6. **Nie dotyczy:** woda i plaże przy braku plaży.
7. **Ceny lotów:** według scenariusza z definicji `flight_price`, tylko jako typowy poziom miesiąca (np. strony z typowymi/średnimi cenami per miesiąc dla trasy). Pojedyncza aktualna oferta nie wystarcza. Bez takiej podstawy: brak danych, nigdy wymyślona wartość. W notatkach napisz wprost, czy typowe ceny miesięczne dało się ustalić.
8. **Skale 1–5:** według definicji i kotwic z rejestru. Oceniaj względem kotwic, nie buduj skali od nowa. Miejsce, które samo jest kotwicą, dostaje jej ocenę jako zwykłą wartość; każda inna ocena bez bezpośredniego źródła to szacunek.
9. **Flagi:** według definicji kolumny `flags`. Święto, które tylko zwiększa tłok i ceny, to zwykły szczyt sezonu: idzie do `local_season`, nie do flag.
10. **Źródła:** zbiorcza lista per kierunek z datą sprawdzenia.

**Format wartości:**

- zwykła wartość: `31.2`, `4`, `"H"`
- szacunek: `{"est": 31.2}`
- nie dotyczy: `"na"`
- brak danych: `null`

**Wynik 1: JSON** (tylko ten obiekt, poprawny JSON, dokładnie 12 miesięcy od stycznia):

```json
{
  "id": "{ID}",
  "country": "{KRAJ}",
  "place": "{MIEJSCE}",
  "notes": "Uwagi z tabeli kierunków + notatki do wartości stałych (np. sezonowe wysychanie zieleni).",
  "fixed": {
    "beaches": 4, "greenery": 4, "sightseeing": 3, "local_prices": {"est": 3},
    "flight_time": 13.5, "stops": 1
  },
  "months": [
    {
      "local_season": "H",
      "temp_day": 31.8, "temp_night": 23.9, "dew_point": {"est": 22.1},
      "sun": 8.4, "rain": 31, "rain_days": 3.2, "uv": 11, "wind": 11,
      "water": 28.4, "flight_price": null,
      "flags": [ {"type": "holidays", "level": 1, "note": "Święto narodowe – przez ok. 3 dni zamknięte muzea, część restauracji i sklepów; zależnie od roku styczeń lub luty."} ]
    }
  ],
  "sources": [
    {"title": "Nazwa źródła (stacja, okres)", "url": "https://…", "checked": "RRRR-MM-DD"}
  ]
}
```

**Wynik 2: notatki z researchu** (Markdown, materiał roboczy, nie trafia do aplikacji):

- Wybrana stacja / źródło dla każdej grupy wartości i dlaczego.
- Każdy szacunek: jedno zdanie uzasadnienia.
- Rozbieżności między źródłami i wybór.
- Ceny lotów: czy dało się ustalić typowe ceny miesięczne, skąd, jak pewne.
- Pomiar: liczba wyszukiwań i pobranych stron (także nieudanych).
- **Do przeglądu:** lista rzeczy niepewnych.

---

## Prompt B: przebieg sprawdzający

Dostajesz `rejestr.json` i pliki kierunków z `kierunki/` (albo tylko te, które sprawdzasz). Oceniasz dane merytorycznie. **Niczego nie poprawiasz**, tylko zgłaszasz do przeglądu; zgłoszenie nie oznacza błędu, decyzja należy do właściciela. Strukturę (typy, zakresy, 12 miesięcy) sprawdza automatycznie strona, więc nie raportuj błędów schematu.

Sygnały do zgłoszenia:

- skoki między sąsiednimi miesiącami (np. temperatura, woda, opad) niezgodne z klimatem miejsca;
- wartości poza realnym zakresem dla tego klimatu;
- niezgodność z parą monsunową (Negombo ↔ Trincomalee, Phuket ↔ Koh Samui): pory suche i deszczowe powinny być odwrócone;
- duże różnice między pobliskimi kierunkami bez wyjaśnienia;
- oceny 1–5 niezgodne z kotwicami w definicjach;
- flagi niezgodne z zasadami (dublowanie deszczu, poziom 3 dla rzadkich zdarzeń, brak flagi kąpielowej przy sezonowym pogorszeniu kąpieli, kilka flag na jedno zjawisko, kilka zjawisk w jednej fladze, flaga świąt opisująca tylko tłok i wyższe ceny, czyli zwykły szczyt sezonu).

Wynik: tabela Markdown `kierunek | miesiąc/pole | wartość | sygnał | co sprawdzić`, posortowana od najpoważniejszych.

---

## Prompt C: nowa kolumna

Nowa kolumna `{ID_KOLUMNY}` jest już w rejestrze (`columns`). Uzupełnij ją dla wszystkich kierunków naraz, zgodnie z jej `definition`, zasadami 1–10 z Promptu A i formatem wartości. Dla kolumn ze skalą 1–5 oceniaj wszystkie kierunki razem, względem kotwic.

Wynik: JSON `{"column": "{ID_KOLUMNY}", "values": {"<id kierunku>": <wartość>}}` dla kolumny stałej albo `{"column": "{ID_KOLUMNY}", "values": {"<id kierunku>": [12 wartości]}}` dla miesięcznej, plus notatki jak w Prompcie A. Zapisz jako `research/kolumna-{ID_KOLUMNY}.json`, dołącz przez `node merge.mjs research/kolumna-{ID_KOLUMNY}.json` (zmienia pliki `kierunki/<id kierunku>.json`), potem uruchom Prompt B tylko dla tej kolumny.

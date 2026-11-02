# Kolumny: kontynent, region, formalności wjazdowe, różnica czasu, tagi

Przegląd 2026-10-17. Pliki kolumn: `kolumna-continent.json`, `kolumna-region.json`, `kolumna-entry.json`, `kolumna-tags.json` (`node merge.mjs research/kolumna-<id>.json`). Pola kierunku `tz` (strefa czasowa IANA) i `entryNote` (szczegóły formalności) są wpisane bezpośrednio w plikach kierunków; kolumnę `time_diff` wylicza strona z `tz`.

## Kontynent i region
Wybór redakcyjny według położenia bazy, bez źródeł zewnętrznych. Umowne przypadki: Turcja, Cypr, Kanary, Madera – Europa; Sharm el-Sheikh (Synaj) i Sal – Afryka; Akaba, Dubaj, Oman – Azja; Cancún – Ameryka Północna i Karaiby (wybrzeże karaibskie); Roatán, Kostaryka, Kolumbia (z San Andrés) – Ameryka Środkowa i Południowa; Waikīkī (Hawaje) – Australia i Oceania, region Wyspy Pacyfiku.

## Formalności wjazdowe
Dla obywatela Polski, wyjazd turystyczny do ok. 2 tygodni, wylot z Polski typową trasą. Kategoria to najpoważniejszy wymóg na trasie, także tranzytowy: Bora Bora (tranzyt w Los Angeles – ESTA) i Rarotonga (tranzyt w Auckland – NZeTA) mają „zezwolenie elektroniczne”, choć na miejscu wystarcza paszport. Przesiadka w USA przy Turks and Caicos, Bahamach, Kostaryce i Hondurasie jest jedną z kilku tras (są też trasy przez Europę lub Kanadę), więc kategoria zostaje „paszport”, a ESTA jest w notatce.

Źródła główne: wytyczne wjazdowe Rainbow (r.pl/wytyczne/<kraj>, aktualizacje 2025–2026), Itaka (Kenia), GOV.UK (Antigua, Saint Lucia, Wyspy Cooka), Border Force Turks and Caicos, LoyaltyLobby (bezpłatne ETA Sri Lanki od 25.05.2026), Travelplanet (Tajlandia: 30 dni bez wizy od 15.09.2026), National Geographic (Wietnam: 45 dni bez wizy od 15.08.2025), tanie-loty.com.pl (Turcja i Albania na dowód, Tunezja tylko paszport od 1.01.2025).

Uwagi do przeglądu:
- Tajlandia: rząd zapowiadał też możliwy powrót do listy 57 krajów bez wiz – sprawdzić przed wyjazdem, czy Polska nadal jest na liście.
- Kenia: eTA według Itaki (2026); Kenia zapowiadała zmiany dla części krajów – sprawdzić.
- Mauritius: R.pl wymienia obowiązkowy formularz online przed wylotem (stan 03.2026).
- Seszele: „Seychelles Electronic Border System” – zgoda przed wylotem, płatna (opłata nie podana w źródle).
- Wyspy Zielonego Przylądka: od 1.01.2026 wiza po przylocie zniesiona dla 96 krajów; Polska nie jest na tej liście, obowiązuje rejestracja EASE z opłatą lotniskową.
- Kuba: e-wiza 22 EUR zamiast karty turystycznej (od 2025).
- San Andrés: dodatkowo karta turystyczna wyspy (opłata), kupowana przed lotem na wyspę.

| Kierunek | Kontynent | Region | Formalności | Strefa | Szczegóły |
|---|---|---|---|---|---|
| Siem Reap | Azja | Azja Południowo-Wschodnia | wiza na lotnisku | Asia/Phnom_Penh | Paszport ważny 6 mies., 4 wolne strony; wiza turystyczna – na lotnisku albo e-wiza wcześniej; obowiązkowa karta e-Arrival (CeA) do 7 dni przed przylotem. |
| Corralejo, Fuerteventura | Europa | Atlantyk wschodni | dowód osobisty | Atlantic/Canary | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Phuket | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Bangkok | Paszport ważny 6 mies. od wjazdu; od 15.09.2026 bez wizy do 30 dni (wcześniej 60); obowiązkowa bezpłatna karta TDAC online do 3 dni przed przylotem. |
| Koh Samui | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Bangkok | Paszport ważny 6 mies. od wjazdu; od 15.09.2026 bez wizy do 30 dni (wcześniej 60); obowiązkowa bezpłatna karta TDAC online do 3 dni przed przylotem. |
| Negombo | Azja | Azja Południowa | zezwolenie elektroniczne | Asia/Colombo | Paszport ważny 6 mies. po powrocie; elektroniczne zezwolenie ETA przed wylotem – od 25.05.2026 bezpłatne dla obywateli Polski (30 dni). |
| Trincomalee | Azja | Azja Południowa | zezwolenie elektroniczne | Asia/Colombo | Paszport ważny 6 mies. po powrocie; elektroniczne zezwolenie ETA przed wylotem – od 25.05.2026 bezpłatne dla obywateli Polski (30 dni). |
| Koh Rong | Azja | Azja Południowo-Wschodnia | wiza na lotnisku | Asia/Phnom_Penh | Paszport ważny 6 mies., 4 wolne strony; wiza turystyczna – na lotnisku albo e-wiza wcześniej; obowiązkowa karta e-Arrival (CeA) do 7 dni przed przylotem. |
| Phu Quoc | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Ho_Chi_Minh | Paszport ważny 6 mies.; od 15.08.2025 bez wizy do 45 dni; obowiązkowa karta Pre-Arrival online do 3 dni przed przylotem. |
| Langkawi (Pantai Cenang) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Kuala_Lumpur | Paszport ważny 6 mies.; bez wizy; obowiązkowa karta MDAC online (do 3 dni przed przylotem). |
| Boracay | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Manila | Paszport ważny 6 mies.; bez wizy do 30 dni; obowiązkowy formularz eTravel online (do 72 h przed wylotem). |
| Nusa Dua, Bali | Azja | Azja Południowo-Wschodnia | wiza na lotnisku | Asia/Makassar | Paszport ważny 6 mies.; wiza po przylocie ok. 35 USD (albo e-VOA wcześniej); obowiązkowa deklaracja przylotu online (do 3 dni); opłata turystyczna Bali 150 000 IDR (ok. 40 zł). |
| Goa Północne (Calangute / Baga) | Azja | Azja Południowa | wiza przed wylotem | Asia/Kolkata | Paszport ważny 6 mies.; e-wiza przed wylotem; obowiązkowa karta e-Arrival online (do 72 h przed wylotem). |
| Atol Malé Północny | Azja | Wyspy Oceanu Indyjskiego | paszport + formularz online | Indian/Maldives | Paszport ważny co najmniej miesiąc po powrocie; bezpłatny stempel turystyczny po przylocie (30 dni); obowiązkowa deklaracja IMUGA online 24–96 h przed przylotem. |
| Mahé (Beau Vallon) | Afryka | Wyspy Oceanu Indyjskiego | zezwolenie elektroniczne | Indian/Mahe | Paszport ważny 6 mies. po powrocie; zgoda na wjazd przez Seychelles Electronic Border System przed wylotem (rozpatrzenie do ok. 3 dni roboczych). |
| Flic en Flac | Afryka | Wyspy Oceanu Indyjskiego | paszport + formularz online | Indian/Mauritius | Paszport ważny 6 mies. po powrocie; bez wizy; obowiązkowy formularz online przed wylotem. |
| Zanzibar (Nungwi / Kendwa) | Afryka | Afryka Wschodnia | wiza na lotnisku | Africa/Dar_es_Salaam | Paszport ważny 6 mies. po powrocie; wiza ok. 50 USD po przylocie albo e-wiza wcześniej; obowiązkowe ubezpieczenie Zanzibaru (ZIC, ok. 44 USD) kupowane online. |
| Watamu | Afryka | Afryka Wschodnia | zezwolenie elektroniczne | Africa/Nairobi | Paszport ważny 6 mies. po powrocie, 2 wolne strony; elektroniczne zezwolenie eTA przed wylotem (ok. 30 USD, ekspres ok. 130 USD). |
| Marsa Alam | Afryka | Morze Czerwone | wiza na lotnisku | Africa/Cairo | Paszport ważny 6 mies. po powrocie; wiza po przylocie 30 USD (albo e-wiza wcześniej). |
| Djerba | Afryka | Morze Śródziemne | paszport | Africa/Tunis | Paszport ważny 3 mies. po powrocie; bez wizy (wjazd na dowód dla grup zakończony 1.01.2025). |
| Alanya | Europa | Morze Śródziemne | dowód osobisty | Europe/Istanbul | Bez wizy; turystycznie można wjechać na dowód osobisty (MSZ zaleca paszport ważny 150 dni – część przejść tego wymaga). |
| Protaras | Europa | Morze Śródziemne | dowód osobisty | Asia/Nicosia | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Santorini | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Sliema / St Julian's | Europa | Morze Śródziemne | dowód osobisty | Europe/Malta | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Sopot | Europa | Bałtyk i Morze Czarne | dowód osobisty | Europe/Warsaw | Podróż krajowa. |
| Punta Cana (Bávaro) | Ameryka Północna i Karaiby | Karaiby | paszport + formularz online | America/Santo_Domingo | Paszport ważny 6 mies. po powrocie; bez wizy; obowiązkowy formularz e-Ticket online (do 72 h przed lotem). |
| Cancún (strefa hotelowa) | Ameryka Północna i Karaiby | Karaiby | paszport | America/Cancun | Paszport ważny 6 mies. od wjazdu; bez wizy. |
| Palm Beach | Ameryka Północna i Karaiby | Karaiby | paszport + formularz online | America/Aruba | Paszport; bez wizy; obowiązkowa karta ED online przed wylotem. |
| Zachodnie wybrzeże (Holetown) | Ameryka Północna i Karaiby | Karaiby | paszport | America/Barbados | Paszport ważny przez cały pobyt; bez wizy. |
| Providenciales (Grace Bay) | Ameryka Północna i Karaiby | Karaiby | paszport | America/Grand_Turk | Paszport ważny 6 mies.; bez wizy. Przy przesiadce w USA potrzebna ESTA. |
| Tamarindo (Guanacaste) | Ameryka Środkowa i Południowa | Pacyfik Ameryki Środkowej | paszport | America/Costa_Rica | Paszport ważny 6 mies. po powrocie; bez wizy. Przy przesiadce w USA potrzebna ESTA. |
| Waikīkī, Oʻahu | Australia i Oceania | Wyspy Pacyfiku | zezwolenie elektroniczne | Pacific/Honolulu | Paszport biometryczny; elektroniczne zezwolenie ESTA przed wylotem (Program Ruchu Bezwizowego). |
| Nadi / Denarau (Viti Levu) | Australia i Oceania | Wyspy Pacyfiku | paszport | Pacific/Fiji | Paszport ważny 6 mies. od wjazdu; bez wizy. |
| Bora Bora | Australia i Oceania | Wyspy Pacyfiku | zezwolenie elektroniczne | Pacific/Tahiti | Na miejscu tylko paszport (bez wizy), ale typowa trasa prowadzi przez Los Angeles – na tranzyt w USA potrzebna ESTA. |
| Krabi (Ao Nang / Railay) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Bangkok | Paszport ważny 6 mies. od wjazdu; od 15.09.2026 bez wizy do 30 dni (wcześniej 60); obowiązkowa bezpłatna karta TDAC online do 3 dni przed przylotem. |
| Koh Lanta (Long Beach / Klong Dao) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Bangkok | Paszport ważny 6 mies. od wjazdu; od 15.09.2026 bez wizy do 30 dni (wcześniej 60); obowiązkowa bezpłatna karta TDAC online do 3 dni przed przylotem. |
| Hoi An (An Bang) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Ho_Chi_Minh | Paszport ważny 6 mies.; od 15.08.2025 bez wizy do 45 dni; obowiązkowa karta Pre-Arrival online do 3 dni przed przylotem. |
| Wyspy Perhentian (Long Beach / Teluk Pauh) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Kuala_Lumpur | Paszport ważny 6 mies.; bez wizy; obowiązkowa karta MDAC online (do 3 dni przed przylotem). |
| El Nido (Lio / Nacpan), Palawan | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Manila | Paszport ważny 6 mies.; bez wizy do 30 dni; obowiązkowy formularz eTravel online (do 72 h przed wylotem). |
| Panglao (Alona / Dumaluan), Bohol | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Manila | Paszport ważny 6 mies.; bez wizy do 30 dni; obowiązkowy formularz eTravel online (do 72 h przed wylotem). |
| Lombok, Kuta / Tanjung Aan | Azja | Azja Południowo-Wschodnia | wiza na lotnisku | Asia/Makassar | Paszport ważny 6 mies.; wiza po przylocie ok. 35 USD (albo e-VOA wcześniej); obowiązkowa deklaracja przylotu online (do 3 dni). |
| Belle Mare / Palmar | Afryka | Wyspy Oceanu Indyjskiego | paszport + formularz online | Indian/Mauritius | Paszport ważny 6 mies. po powrocie; bez wizy; obowiązkowy formularz online przed wylotem. |
| Zanzibar (Paje / Jambiani) | Afryka | Afryka Wschodnia | wiza na lotnisku | Africa/Dar_es_Salaam | Paszport ważny 6 mies. po powrocie; wiza ok. 50 USD po przylocie albo e-wiza wcześniej; obowiązkowe ubezpieczenie Zanzibaru (ZIC, ok. 44 USD) kupowane online. |
| Nosy Be (Andilana) | Afryka | Wyspy Oceanu Indyjskiego | wiza na lotnisku | Indian/Antananarivo | Paszport ważny 6 mies.; wiza ok. 45 EUR po przylocie albo online wcześniej. |
| Sal, Santa Maria | Afryka | Atlantyk wschodni | paszport + formularz online | Atlantic/Cape_Verde | Paszport ważny 6 mies. po powrocie; bez wizy; obowiązkowa rejestracja EASE co najmniej 5 dni przed wylotem z opłatą lotniskową 31 EUR (na lotnisku 62 EUR). |
| Sharm el-Sheikh (Naama Bay / Sharks Bay) | Afryka | Morze Czerwone | wiza na lotnisku | Africa/Cairo | Paszport ważny 6 mies. po powrocie; wiza po przylocie 30 USD (albo e-wiza wcześniej); przy pobycie tylko w południowym Synaju do 15 dni zwykle wystarcza bezpłatny stempel „Sinai only”. |
| Dubaj (JBR / Palm Jumeirah) | Azja | Półwysep Arabski | paszport | Asia/Dubai | Paszport ważny 6 mies. po powrocie; bez wizy (bezpłatny stempel po przylocie). |
| Muscat (Qurum / Al Mouj) | Azja | Półwysep Arabski | paszport | Asia/Muscat | Paszport ważny 6 mies. po powrocie; bez wizy do 14 dni. |
| Salalah (Hawana Salalah) | Azja | Półwysep Arabski | paszport | Asia/Muscat | Paszport ważny 6 mies. po powrocie; bez wizy do 14 dni. |
| Aqaba (Tala Bay) | Azja | Morze Czerwone | wiza na lotnisku | Asia/Amman | Paszport ważny 6 mies.; wiza po przylocie (ok. 40 JOD; w strefie ekonomicznej Akaby przy przylocie na lotnisko w Akabie zwykle bezpłatna). |
| Maspalomas / Meloneras, Gran Canaria | Europa | Atlantyk wschodni | dowód osobisty | Atlantic/Canary | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Porto Santo (Vila Baleira / Cabeço da Ponta) | Europa | Atlantyk wschodni | dowód osobisty | Atlantic/Madeira | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Albufeira / Praia da Falésia, Algarve | Europa | Atlantyk wschodni | dowód osobisty | Europe/Lisbon | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Playa de Muro / Alcúdia, Majorka | Europa | Morze Śródziemne | dowód osobisty | Europe/Madrid | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| San Teodoro (La Cinta / Cala Brandinchi), Sardynia | Europa | Morze Śródziemne | dowód osobisty | Europe/Rome | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| San Vito lo Capo, Sycylia | Europa | Morze Śródziemne | dowód osobisty | Europe/Rome | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Agia Marina / Platanias, Kreta | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Faliraki / Kolymbia, Rodos | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Tsilivi / Kalamaki, Zakynthos | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Nikiti / Sarti, Chalkidiki | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Ölüdeniz / Fethiye | Europa | Morze Śródziemne | dowód osobisty | Europe/Istanbul | Bez wizy; turystycznie można wjechać na dowód osobisty (MSZ zaleca paszport ważny 150 dni – część przejść tego wymaga). |
| Ksamil / Saranda | Europa | Morze Śródziemne | dowód osobisty | Europe/Tirane | Bez wizy do 90 dni; dowód osobisty albo paszport, ważny co najmniej 3 miesiące po wyjeździe. |
| Słoneczny Brzeg / Nesebyr | Europa | Bałtyk i Morze Czarne | dowód osobisty | Europe/Sofia | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Las Terrenas (Playa Bonita), Samaná | Ameryka Północna i Karaiby | Karaiby | paszport + formularz online | America/Santo_Domingo | Paszport ważny 6 mies. po powrocie; bez wizy; obowiązkowy formularz e-Ticket online (do 72 h przed lotem). |
| Varadero | Ameryka Północna i Karaiby | Karaiby | wiza przed wylotem | America/Havana | Paszport ważny 3 mies. po powrocie; e-wiza przed wylotem (22 EUR, evisacuba.cu, także dla dzieci) i formularz D’Viajeros (kod QR). |
| Cayo Guillermo (Playa Pilar) | Ameryka Północna i Karaiby | Karaiby | wiza przed wylotem | America/Havana | Paszport ważny 3 mies. po powrocie; e-wiza przed wylotem (22 EUR, evisacuba.cu, także dla dzieci) i formularz D’Viajeros (kod QR). |
| Negril (Seven Mile Beach) | Ameryka Północna i Karaiby | Karaiby | paszport + formularz online | America/Jamaica | Paszport; bez wizy; obowiązkowy formularz online (enterjamaica.com) do 48 h przed przylotem. |
| Nassau (Cable Beach / Paradise Island) | Ameryka Północna i Karaiby | Karaiby | paszport | America/Nassau | Paszport ważny 6 mies. po powrocie; bez wizy. Przy przesiadce w USA potrzebna ESTA. |
| Jan Thiel / Mambo Beach | Ameryka Północna i Karaiby | Karaiby | paszport + formularz online | America/Curacao | Paszport ważny przez cały pobyt (dowód nie wystarcza); bez wizy; obowiązkowa karta Digital Immigration Card online najpóźniej 7 dni przed przylotem. |
| Antigua (Dickenson Bay) | Ameryka Północna i Karaiby | Karaiby | paszport | America/Antigua | Paszport; bez wizy; formularz ArriveAntigua online zalecany, nieobowiązkowy. |
| Rodney Bay (Reduit Beach) | Ameryka Północna i Karaiby | Karaiby | paszport | America/St_Lucia | Paszport; bez wizy; formularz imigracyjny online zalecany do 3 dni przed przylotem (można też na miejscu). |
| Roatán (West Bay) | Ameryka Środkowa i Południowa | Karaiby | paszport | America/Tegucigalpa | Paszport ważny 6 mies. od wjazdu; bez wizy. Przy przesiadce w USA potrzebna ESTA. |
| San Andrés (Spratt Bight) | Ameryka Środkowa i Południowa | Karaiby | paszport + formularz online | America/Bogota | Paszport; bez wizy; obowiązkowy formularz Check-MIG online (72 h – 1 h przed odprawą, także przed powrotem); na San Andrés dodatkowo karta turystyczna wyspy kupowana przed lotem z Kolumbii kontynentalnej. |
| Manuel Antonio (Playa Espadilla) | Ameryka Środkowa i Południowa | Pacyfik Ameryki Środkowej | paszport | America/Costa_Rica | Paszport ważny 6 mies. po powrocie; bez wizy. Przy przesiadce w USA potrzebna ESTA. |
| Cartagena – Isla Barú (Playa Blanca) | Ameryka Środkowa i Południowa | Karaiby | paszport + formularz online | America/Bogota | Paszport; bez wizy; obowiązkowy formularz Check-MIG online (72 h – 1 h przed odprawą, także przed powrotem). |
| Porto de Galinhas | Ameryka Środkowa i Południowa | Wybrzeże Brazylii | paszport | America/Recife | Paszport ważny 6 mies. po powrocie; bez wizy. |
| Rarotonga (Muri Beach) | Australia i Oceania | Wyspy Pacyfiku | zezwolenie elektroniczne | Pacific/Rarotonga | Na miejscu tylko paszport (bez wizy do 31 dni), ale typowa trasa prowadzi przez Auckland – na tranzyt w Nowej Zelandii potrzebne NZeTA (albo ESTA przy locie przez Los Angeles). |
| Gold Coast (Broadbeach / Surfers Paradise) | Australia i Oceania | Australia | zezwolenie elektroniczne | Australia/Brisbane | Paszport; elektroniczna wiza eVisitor (podklasa 651) przed wylotem – bezpłatna dla obywateli UE. |
| Whitsundays (Hamilton Island, Catseye Beach) | Australia i Oceania | Australia | zezwolenie elektroniczne | Australia/Brisbane | Paszport; elektroniczna wiza eVisitor (podklasa 651) przed wylotem – bezpłatna dla obywateli UE. |
| Durrës (plaża Golem / Shkëmbi i Kavajës) | Europa | Morze Śródziemne | dowód osobisty | Europe/Tirane | Bez wizy do 90 dni; dowód osobisty albo paszport, ważny co najmniej 3 miesiące po wyjeździe. |
| Manama (Bahrajn) | Azja | Półwysep Arabski | wiza na lotnisku | Asia/Bahrain | Paszport ważny 6 mies. od wjazdu; wiza turystyczna po przylocie na lotnisku w Manamie albo e-wiza wcześniej (evisa.gov.bh), do 2 tygodni. |
| Salvador (Barra / Rio Vermelho), Bahia | Ameryka Środkowa i Południowa | Wybrzeże Brazylii | paszport | America/Bahia | Paszport ważny 6 mies. po powrocie; bez wizy. |
| Cumbuco (Fortaleza), Ceará | Ameryka Środkowa i Południowa | Wybrzeże Brazylii | paszport | America/Fortaleza | Paszport ważny 6 mies. po powrocie; bez wizy. |
| Istria (Rovinj / Poreč) | Europa | Morze Śródziemne | dowód osobisty | Europe/Zagreb | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Split (Dalmacja Środkowa) | Europa | Morze Śródziemne | dowód osobisty | Europe/Zagreb | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Budva (Riwiera Budvańska) | Europa | Morze Śródziemne | dowód osobisty | Europe/Podgorica | Bez wizy; dowód osobisty albo paszport ważny co najmniej 3 miesiące od wjazdu. |
| El Alamein (Riwiera Śródziemnomorska) | Afryka | Morze Śródziemne | wiza na lotnisku | Africa/Cairo | Paszport ważny 6 mies. po powrocie; wiza po przylocie 30 USD (albo e-wiza wcześniej). |
| Kololi (Senegambia Strip) | Afryka | Atlantyk wschodni | paszport | Africa/Banjul | Paszport ważny 6 mies. po powrocie; według R.pl bez wizy (stan 09.2025) – warto potwierdzić w ambasadzie Gambii. |
| Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Samos (Pythagoreio / Kokkari) | Europa | Morze Śródziemne | dowód osobisty | Europe/Athens | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Batumi (Adżaria) | Europa | Bałtyk i Morze Czarne | dowód osobisty | Asia/Tbilisi | Bez wizy; dowód osobisty albo paszport ważny przez cały pobyt; od 1.01.2026 obowiązkowe ubezpieczenie zdrowotne i NNW na min. 30 000 GEL (dokument po angielsku lub gruzińsku). |
| Barcelona (plaże Barceloneta / Costa del Maresme) | Europa | Morze Śródziemne | dowód osobisty | Europe/Madrid | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Costa Blanca (Benidorm) | Europa | Morze Śródziemne | dowód osobisty | Europe/Madrid | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Costa del Sol (Torremolinos / Benalmádena) | Europa | Morze Śródziemne | dowód osobisty | Europe/Madrid | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Doha | Azja | Półwysep Arabski | paszport | Asia/Qatar | Paszport ważny 6 mies. po powrocie; bez wizy. |
| Agadir | Afryka | Atlantyk wschodni | paszport | Africa/Casablanca | Paszport ważny 6 mies. po powrocie; bez wizy do 90 dni. |
| Saïdia (wybrzeże śródziemnomorskie) | Afryka | Morze Śródziemne | paszport | Africa/Casablanca | Paszport ważny 6 mies. po powrocie; bez wizy do 90 dni. |
| Puerto Vallarta (Zatoka Banderas) | Ameryka Północna i Karaiby | Pacyfik Ameryki Środkowej | paszport | America/Mexico_City | Paszport ważny 6 mies. od wjazdu; bez wizy. Najszybsze trasy prowadzą przez Kanadę (eTA) albo USA (ESTA); przez Madryt lub Meksyk wystarcza paszport. |
| Bocas del Toro (Isla Colón) | Ameryka Środkowa i Południowa | Karaiby | paszport | America/Panama | Paszport ważny 6 mies. po wyjeździe; bez wizy. |
| Playa Blanca (Río Hato, wybrzeże Pacyfiku) | Ameryka Środkowa i Południowa | Pacyfik Ameryki Środkowej | paszport | America/Panama | Paszport ważny 6 mies. po wyjeździe; bez wizy. |
| Azory (São Miguel, Ponta Delgada) | Europa | Atlantyk wschodni | dowód osobisty | Atlantic/Azores | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Saly (Petite Côte) | Afryka | Atlantyk wschodni | paszport | Africa/Dakar | Paszport ważny 6 mies. od wjazdu; bez wizy. |
| Pattaya / Jomtien | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Bangkok | Paszport ważny 6 mies. od wjazdu; od 15.09.2026 bez wizy do 30 dni (wcześniej 60); obowiązkowa bezpłatna karta TDAC online do 3 dni przed przylotem. |
| Sousse / Port El Kantaoui | Afryka | Morze Śródziemne | paszport | Africa/Tunis | Paszport ważny 3 mies. po powrocie; bez wizy (wjazd na dowód dla grup zakończony 1.01.2025). |
| Bodrum (półwysep Bodrum) | Europa | Morze Śródziemne | dowód osobisty | Europe/Istanbul | Bez wizy; turystycznie można wjechać na dowód osobisty (MSZ zaleca paszport ważny 150 dni – część przejść tego wymaga). |
| Kuşadası | Europa | Morze Śródziemne | dowód osobisty | Europe/Istanbul | Bez wizy; turystycznie można wjechać na dowód osobisty (MSZ zaleca paszport ważny 150 dni – część przejść tego wymaga). |
| Isla Margarita (Playa El Agua / Pampatar) | Ameryka Środkowa i Południowa | Karaiby | paszport | America/Caracas | Paszport ważny 6 mies. po powrocie; bez wizy. MSZ od XII 2025 odradza wszelkie podróże do Wenezueli – sprawdź aktualny komunikat przed rezerwacją. |
| Mui Ne (Phan Thiet) | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Ho_Chi_Minh | Paszport ważny 6 mies.; od 15.08.2025 bez wizy do 45 dni; obowiązkowa karta Pre-Arrival online do 3 dni przed przylotem. |
| Nha Trang | Azja | Azja Południowo-Wschodnia | paszport + formularz online | Asia/Ho_Chi_Minh | Paszport ważny 6 mies.; od 15.08.2025 bez wizy do 45 dni; obowiązkowa karta Pre-Arrival online do 3 dni przed przylotem. |
| Apulia (Monopoli / Polignano a Mare) | Europa | Morze Śródziemne | dowód osobisty | Europe/Rome | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Kampania (Sorrento / Zatoka Neapolitańska) | Europa | Morze Śródziemne | dowód osobisty | Europe/Rome | Kraj UE: wystarczy dowód osobisty (albo paszport). |
| Rimini (Riwiera Adriatycka) | Europa | Morze Śródziemne | dowód osobisty | Europe/Rome | Kraj UE: wystarczy dowód osobisty (albo paszport). |

## Różnica czasu
Kolumna wyliczana: przesunięcie strefy `tz` minus przesunięcie Europe/Warsaw 15. dnia miesiąca o 12:00 UTC, według bazy stref przeglądarki (Intl). Uwzględnia czas letni po obu stronach (np. Bangkok +6 h zimą, +5 h latem; Kuba i Bahamy też mają czas letni; Australia Queensland – nie). Strefy: Lombok i Bali – Asia/Makassar (UTC+8); Whitsundays – Australia/Brisbane (Queensland bez czasu letniego).

## Tagi
Słownik: rajska plaża, płytkie wejście, rafa i snorkeling, nurkowanie, surfing, kitesurfing, rejsy po wyspach, dżungla, wodospady, wulkany, góry i trekking, pustynia, dzika przyroda, ruiny, świątynie, stare miasto, miasto i zakupy, życie nocne, spokój. Kryteria w definicji kolumny w rejestrze. Tag dostaje miejsce, gdy jest jego wyróżnikiem według notatki kierunku (baza pobytu, wycieczki jednodniowe), nie gdy coś „też jest”. „Rajska plaża” tylko przy bazie z jasnym piaskiem i turkusową, spokojną wodą (zwykle plaże 5/5).

| Kierunek | Tagi |
|---|---|
| Siem Reap | dżungla, ruiny, świątynie |
| Corralejo, Fuerteventura | płytkie wejście, surfing, kitesurfing, wulkany, pustynia |
| Phuket | rafa i snorkeling, nurkowanie, rejsy po wyspach, świątynie, życie nocne |
| Koh Samui | rafa i snorkeling, rejsy po wyspach, wodospady, świątynie, życie nocne |
| Negombo | dzika przyroda, świątynie |
| Trincomalee | rafa i snorkeling, dzika przyroda, ruiny, świątynie, spokój |
| Koh Rong | rajska plaża, rejsy po wyspach, dżungla, wodospady, spokój |
| Phu Quoc | rafa i snorkeling, rejsy po wyspach, dżungla |
| Langkawi (Pantai Cenang) | rejsy po wyspach, dżungla, wodospady, dzika przyroda |
| Boracay | rajska plaża, kitesurfing, rejsy po wyspach, życie nocne |
| Nusa Dua, Bali | płytkie wejście, rafa i snorkeling, surfing, świątynie |
| Goa Północne (Calangute / Baga) | wodospady, stare miasto, życie nocne |
| Atol Malé Północny | rajska plaża, płytkie wejście, rafa i snorkeling, nurkowanie, spokój |
| Mahé (Beau Vallon) | rajska plaża, rafa i snorkeling, rejsy po wyspach, dżungla, góry i trekking, dzika przyroda |
| Flic en Flac | płytkie wejście, rafa i snorkeling, wodospady, góry i trekking, dzika przyroda |
| Zanzibar (Nungwi / Kendwa) | rajska plaża, rafa i snorkeling, nurkowanie, dzika przyroda, stare miasto |
| Watamu | rafa i snorkeling, dzika przyroda, ruiny, spokój |
| Marsa Alam | rafa i snorkeling, nurkowanie, pustynia, dzika przyroda, spokój |
| Djerba | płytkie wejście, pustynia |
| Alanya | góry i trekking, ruiny, życie nocne |
| Protaras | płytkie wejście, życie nocne |
| Santorini | wulkany, ruiny, stare miasto |
| Sliema / St Julian's | nurkowanie, rejsy po wyspach, ruiny, stare miasto, życie nocne |
| Sopot | stare miasto, miasto i zakupy, życie nocne |
| Punta Cana (Bávaro) | płytkie wejście, rejsy po wyspach |
| Cancún (strefa hotelowa) | rafa i snorkeling, nurkowanie, ruiny, życie nocne |
| Palm Beach | rajska plaża, płytkie wejście, kitesurfing, pustynia |
| Zachodnie wybrzeże (Holetown) | rafa i snorkeling, surfing, stare miasto |
| Providenciales (Grace Bay) | rajska plaża, płytkie wejście, rafa i snorkeling, spokój |
| Tamarindo (Guanacaste) | surfing, wulkany, dzika przyroda, życie nocne |
| Waikīkī, Oʻahu | surfing, wulkany, góry i trekking, miasto i zakupy, życie nocne |
| Nadi / Denarau (Viti Levu) | rafa i snorkeling, rejsy po wyspach |
| Bora Bora | rajska plaża, płytkie wejście, rafa i snorkeling, dzika przyroda, spokój |
| Krabi (Ao Nang / Railay) | rafa i snorkeling, rejsy po wyspach, dżungla, góry i trekking, świątynie |
| Koh Lanta (Long Beach / Klong Dao) | płytkie wejście, rafa i snorkeling, rejsy po wyspach, dżungla, spokój |
| Hoi An (An Bang) | ruiny, stare miasto |
| Wyspy Perhentian (Long Beach / Teluk Pauh) | rajska plaża, rafa i snorkeling, nurkowanie, dżungla, spokój |
| El Nido (Lio / Nacpan), Palawan | rajska plaża, rafa i snorkeling, rejsy po wyspach, dżungla |
| Panglao (Alona / Dumaluan), Bohol | płytkie wejście, rafa i snorkeling, nurkowanie, dzika przyroda |
| Lombok, Kuta / Tanjung Aan | surfing, wodospady, spokój |
| Belle Mare / Palmar | rajska plaża, płytkie wejście, rejsy po wyspach |
| Zanzibar (Paje / Jambiani) | płytkie wejście, kitesurfing, dzika przyroda, stare miasto, spokój |
| Nosy Be (Andilana) | rafa i snorkeling, rejsy po wyspach, dżungla, dzika przyroda, spokój |
| Sal, Santa Maria | płytkie wejście, kitesurfing, pustynia |
| Sharm el-Sheikh (Naama Bay / Sharks Bay) | rafa i snorkeling, nurkowanie, góry i trekking, pustynia, życie nocne |
| Dubaj (JBR / Palm Jumeirah) | pustynia, miasto i zakupy, życie nocne |
| Muscat (Qurum / Al Mouj) | góry i trekking, pustynia, stare miasto |
| Salalah (Hawana Salalah) | wodospady, pustynia, ruiny |
| Aqaba (Tala Bay) | rafa i snorkeling, nurkowanie, pustynia, ruiny |
| Maspalomas / Meloneras, Gran Canaria | góry i trekking, pustynia, życie nocne |
| Porto Santo (Vila Baleira / Cabeço da Ponta) | płytkie wejście, spokój |
| Albufeira / Praia da Falésia, Algarve | stare miasto, życie nocne |
| Playa de Muro / Alcúdia, Majorka | rajska plaża, płytkie wejście, góry i trekking, stare miasto |
| San Teodoro (La Cinta / Cala Brandinchi), Sardynia | rajska plaża, płytkie wejście, rejsy po wyspach |
| San Vito lo Capo, Sycylia | rajska plaża, płytkie wejście, góry i trekking, ruiny, stare miasto |
| Agia Marina / Platanias, Kreta | góry i trekking, stare miasto, życie nocne |
| Faliraki / Kolymbia, Rodos | ruiny, stare miasto, życie nocne |
| Tsilivi / Kalamaki, Zakynthos | płytkie wejście, dzika przyroda |
| Nikiti / Sarti, Chalkidiki | spokój |
| Ölüdeniz / Fethiye | rejsy po wyspach, góry i trekking, ruiny |
| Ksamil / Saranda | ruiny, stare miasto |
| Słoneczny Brzeg / Nesebyr | płytkie wejście, stare miasto, życie nocne |
| Las Terrenas (Playa Bonita), Samaná | wodospady, dzika przyroda, spokój |
| Varadero | rajska plaża, płytkie wejście, stare miasto |
| Cayo Guillermo (Playa Pilar) | rajska plaża, płytkie wejście, dzika przyroda, spokój |
| Negril (Seven Mile Beach) | wodospady, życie nocne |
| Nassau (Cable Beach / Paradise Island) | rajska plaża, rafa i snorkeling, rejsy po wyspach |
| Jan Thiel / Mambo Beach | rafa i snorkeling, nurkowanie, dzika przyroda, stare miasto |
| Antigua (Dickenson Bay) | rajska plaża, płytkie wejście, rejsy po wyspach |
| Rodney Bay (Reduit Beach) | dżungla, wodospady, wulkany, góry i trekking |
| Roatán (West Bay) | rajska plaża, rafa i snorkeling, nurkowanie |
| San Andrés (Spratt Bight) | płytkie wejście, rafa i snorkeling, nurkowanie |
| Manuel Antonio (Playa Espadilla) | surfing, dżungla, wodospady, dzika przyroda |
| Cartagena – Isla Barú (Playa Blanca) | rafa i snorkeling, stare miasto, życie nocne |
| Porto de Galinhas | rafa i snorkeling, surfing, stare miasto |
| Rarotonga (Muri Beach) | płytkie wejście, rafa i snorkeling, dżungla, góry i trekking, spokój |
| Gold Coast (Broadbeach / Surfers Paradise) | surfing, dżungla, wodospady, dzika przyroda, miasto i zakupy, życie nocne |
| Whitsundays (Hamilton Island, Catseye Beach) | rajska plaża, rafa i snorkeling, nurkowanie, rejsy po wyspach |
| Durrës (plaża Golem / Shkëmbi i Kavajës) | płytkie wejście, ruiny |
| Manama (Bahrajn) | miasto i zakupy |
| Salvador (Barra / Rio Vermelho), Bahia | stare miasto, życie nocne |
| Cumbuco (Fortaleza), Ceará | kitesurfing, pustynia |
| Istria (Rovinj / Poreč) | ruiny, stare miasto |
| Split (Dalmacja Środkowa) | rejsy po wyspach, ruiny, stare miasto, życie nocne |
| Budva (Riwiera Budvańska) | góry i trekking, stare miasto, życie nocne |
| El Alamein (Riwiera Śródziemnomorska) | rajska plaża, płytkie wejście, spokój |
| Kololi (Senegambia Strip) | dzika przyroda |
| Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) | ruiny, miasto i zakupy, życie nocne |
| Samos (Pythagoreio / Kokkari) | góry i trekking, ruiny, spokój |
| Batumi (Adżaria) | góry i trekking, miasto i zakupy, życie nocne |
| Barcelona (plaże Barceloneta / Costa del Maresme) | stare miasto, miasto i zakupy, życie nocne |
| Costa Blanca (Benidorm) | płytkie wejście, życie nocne |
| Costa del Sol (Torremolinos / Benalmádena) | stare miasto, życie nocne |
| Doha | pustynia, miasto i zakupy |
| Agadir | surfing, pustynia |
| Saïdia (wybrzeże śródziemnomorskie) | płytkie wejście, spokój |
| Puerto Vallarta (Zatoka Banderas) | dżungla, dzika przyroda, życie nocne |
| Bocas del Toro (Isla Colón) | rafa i snorkeling, surfing, rejsy po wyspach, dżungla, dzika przyroda |
| Playa Blanca (Río Hato, wybrzeże Pacyfiku) | spokój |
| Azory (São Miguel, Ponta Delgada) | wodospady, wulkany, góry i trekking, dzika przyroda |
| Saly (Petite Côte) | dzika przyroda, spokój |
| Pattaya / Jomtien | rejsy po wyspach, miasto i zakupy, życie nocne |
| Sousse / Port El Kantaoui | płytkie wejście, ruiny, stare miasto |
| Bodrum (półwysep Bodrum) | rejsy po wyspach, ruiny, życie nocne |
| Kuşadası | ruiny, życie nocne |
| Isla Margarita (Playa El Agua / Pampatar) | kitesurfing, rejsy po wyspach |
| Mui Ne (Phan Thiet) | kitesurfing, pustynia |
| Nha Trang | nurkowanie, rejsy po wyspach, miasto i zakupy, życie nocne |
| Apulia (Monopoli / Polignano a Mare) | stare miasto, spokój |
| Kampania (Sorrento / Zatoka Neapolitańska) | rejsy po wyspach, wulkany, ruiny, stare miasto |
| Rimini (Riwiera Adriatycka) | płytkie wejście, stare miasto, życie nocne |

Liczba kierunków z tagiem: rajska plaża 21, płytkie wejście 32, rafa i snorkeling 33, nurkowanie 15, surfing 11, kitesurfing 8, rejsy po wyspach 27, dżungla 16, wodospady 13, wulkany 7, góry i trekking 18, pustynia 15, dzika przyroda 24, ruiny 23, świątynie 7, stare miasto 30, miasto i zakupy 11, życie nocne 35, spokój 23.

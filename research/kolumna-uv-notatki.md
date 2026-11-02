# Kolumna `uv` – notatki (wymiana źródła 2026-10-27)

## Problem

Poprzednie wartości (BestDateWeather, Open-Meteo `uv_index`, „średni” UV z zachmurzeniem) kończyły się na 8–9, także tam, gdzie prawie nie ma chmur. Kontrola:
- Marsa Alam VI: było 8; weather2travel (TEMIS) 11+, Weather Atlas 12, beach-weather (NASA OMI, z chmurami) 12,9. Przy bezchmurnym niebie „z chmurami” i „bez chmur” muszą być prawie równe, więc 8 to zaniżenie, nie chmury.
- Hongkong: pomiar HKO (King's Park 1999–2003, średnie dzienne maksimum) VII 10,05, V 9,0; BestDateWeather VII 8; CAMS (Open-Meteo, WeatherHack 2023–2024) VII 8,5, V 6,6.
- Honolulu VIII: było 9 (Waikīkī); CAMS 11,8; NASA OMI 13,1.
Serwis nie podaje, jak uśrednia (z dziennych maksimów czy z godzin) – wartości odpowiadają raczej średniej z godzin albo modelowi zaniżającemu wysokie UV.

## Sprawdzone źródła

| Źródło | Miara | Ocena |
|---|---|---|
| BestDateWeather (Open-Meteo) | „średni” UV, z chmurami | odrzucone – zaniżone, sufit 8–9 |
| WeatherHack (Open-Meteo CAMS `uv_index_max`, 2023–2024) | średnie dzienne maksimum, z chmurami | tylko 152 miasta, 2 lata; w Hongkongu ok. 1,5–2,4 poniżej pomiaru – tylko kontrola |
| beach-weather.com (NASA OMI, klimatologia z chmurami) | UV w południe | dobre, ale robots.txt blokuje pobieranie – tylko kontrola (Marsa Alam, Waikīkī) |
| Weather Atlas | „średni UV” | niespójne (Honolulu cały rok 6–7, Phuket 10–12) – odrzucone |
| nomadseason (Copernicus) | miesięczne maksimum (pojedynczy dzień) | inna miara – odrzucone |
| weatherbox.io (ERA5) | średnie szczytowe UV | tylko pojedyncze artykuły (Phuket: III 12,4, II 11,6) – kontrola |
| Open-Meteo API, NASA POWER, NASA NEO, TEMIS archiwum | – | niedostępne stąd (robots / blokada sieci / wyłączone) |
| **TEMIS (KNMI) przez weather2travel** | **maksymalny indeks UV dla czystego nieba, południe, satelita 1995–2003** | **przyjęte**: ta sama metoda dla każdego miejsca, strony dla prawie każdego kurortu; wada – powyżej 11 tylko „11+” |
| Bureau of Meteorology (Brisbane, Wikipedia) | średnie UV, model bez chmur (ozon TOMS/OMI) | kontrola modelu |

## Metoda

1. **Odczyt** weather2travel dla każdego kierunku (najbliższe miejsce z własną stroną; zastępstwa w „Do przeglądu”). Wszystkie odczyty liczbowe, także „11”, przyjęte wprost (liczby zwykłe). Na stronach „11” znaczy wartość zaokrągloną do 11 (10,5–11,5), „11+” – co najmniej 11,5; potwierdza to model (niżej).
2. **„11+”** (510 komórek) – model KNMI (Allaart, van Weele, Fortuin, Kelder 2004, *Meteorol. Appl.* 11): UVI = 12,5 · μ^2,42 · (Ω/300)^−1,23 × k(μ) × czynnik miejsca; μ = cos kąta zenitalnego w południe słoneczne 15. dnia miesiąca. Wynik zaokrąglony, nie mniej niż 12, oznaczony jako szacunek.
   - k(μ) = 0,687 + 0,295·μ – dopasowane do bieżących prognoz TEMIS dla wszystkich 111 kierunków (28.10–2.11.2026, 659 dni z UV ≥ 2, prawdziwy ozon dnia).
   - Ozon Ω: klimatologia strefowa (pasy co 10°, każdy miesiąc osobno) dopasowana jednocześnie do 684 odczytów TEMIS 2–10, 117 odczytów „11”, warunku „11+” ≥ 11,5 i średniego ozonu z prognoz TEMIS dla każdego kierunku; łagodne przyciąganie do klimatologii wyjściowej i do sąsiednich miesięcy (tabela w sekcji „Pełne przeliczenie”).
   - Czynnik miejsca (wysokość, odbicie od powierzchni, siatka TEMIS): 0,957–1,039, dopasowany z prognoz TEMIS i odczytów.
3. **Zgodność**: odczyty TEMIS 2–10 – średnio 0,01, RMS 0,30 (samo zaokrąglenie do liczb całkowitych daje 0,29), żadnej różnicy > 1; sprawdzian krzyżowy (model bez 1/5 odczytów przewiduje te odczyty) – RMS 0,33–0,37; prognozy TEMIS (666 dni, prawdziwy ozon) – RMS 0,09; prognozy TEMIS przy ozonie klimatologicznym – RMS 0,24, maks. 0,60.

## Definicja i formatka

Kolumna mierzy teraz UV w słoneczny dzień w południe (jak prognozy UV i klimatologie WHO/BOM/TEMIS). Zachmurzenia nie odejmuję – jest w kolumnach słońca i dni deszczowych, więc nie liczy się dwa razy. Formatka domyślna: ideał do 11 (było 8), zero od 15 (było 12), waga 0,5 bez zmian – Morze Śródziemne latem (9–10) w ideale, tropiki (12–14) z częściową karą.

## Wartości (I–XII; *kursywa* = model dla „11+”)

| Kierunek | Strona weather2travel | UV |
|---|---|---|
| Siem Reap | Siem Reap | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Corralejo, Fuerteventura | Corralejo | 4 6 8 9 10 11 11 11 9 7 5 4 |
| Phuket | Phuket | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Koh Samui | Koh Samui | 11 *12* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Negombo | Negombo | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 11 |
| Trincomalee | Trincomalee | 11 *12* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Koh Rong | Kompong Som (Sihanoukville) | 11 *12* *14* *14* *13* *13* *13* *13* *13* *12* 11 10 |
| Phu Quoc | Phu Quoc | 11 *12* *14* *14* *13* *12* *13* *13* *13* *12* 11 10 |
| Langkawi (Pantai Cenang) | Langkawi | *12* *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 11 |
| Boracay | Boracay | 10 *12* *13* *14* *13* *13* *13* *13* *13* *12* 10 10 |
| Nusa Dua, Bali | Nusa Dua | *14* *15* *15* *13* 10 9 10 *12* *13* *14* *14* *13* |
| Goa Północne (Calangute / Baga) | Goa | 9 11 *12* *13* *13* *13* *13* *13* *12* 11 9 8 |
| Atol Malé Północny | Male | *12* *13* *14* *14* *12* 11 11 *13* *13* *13* *12* 11 |
| Mahé (Beau Vallon) | Mahé | *13* *14* *14* *13* 11 10 10 *12* *13* *14* *13* *12* |
| Flic en Flac | Flic en Flac | *14* *14* *13* 10 7 6 6 8 10 *12* *14* *14* |
| Zanzibar (Nungwi / Kendwa) | Zanzibar | *13* *14* *14* *13* 10 9 10 11 *13* *13* *13* *12* |
| Watamu | Watamu | *13* *14* *14* *13* 11 10 10 *12* *13* *13* *13* *12* |
| Marsa Alam | Marsa Alam | 6 7 10 *12* *12* *12* *12* *12* 11 8 6 5 |
| Djerba | Djerba | 3 4 6 8 9 10 11 10 8 6 4 3 |
| Alanya | Alanya | 2 3 5 7 9 10 11 10 7 5 3 2 |
| Protaras | Protaras | 2 4 5 7 9 10 11 10 8 5 3 2 |
| Santorini | Santorini | 2 3 5 7 8 10 10 9 7 5 3 2 |
| Sliema / St Julian's | Malta | 2 4 5 7 9 10 10 9 7 5 3 2 |
| Sopot | Sopot | 0 1 2 3 5 6 6 5 3 2 1 0 |
| Punta Cana (Bávaro) | Punta Cana | 8 10 *12* *13* *13* *13* *13* *13* *12* 10 8 7 |
| Cancún (strefa hotelowa) | Cancún | 7 9 11 *12* *12* *12* *12* *12* 11 9 8 7 |
| Palm Beach | Aruba | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Zachodnie wybrzeże (Holetown) | Barbados | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Providenciales (Grace Bay) | Grand Turk (ok. 150 km) | 7 9 11 *12* *12* *12* *12* *12* 11 9 7 6 |
| Tamarindo (Guanacaste) | Tamarindo | 11 *12* *14* *14* *13* *12* *13* *13* *13* *12* 11 10 |
| Waikīkī, Oʻahu | Honolulu | 7 9 11 11 11 *12* *12* *12* 11 9 7 6 |
| Nadi / Denarau (Viti Levu) | Lautoka (ok. 25 km) | *15* *15* *14* 11 8 7 7 9 11 *13* *14* *14* |
| Bora Bora | Vaitape (Bora Bora) | *15* *15* *14* 11 8 7 8 9 11 *13* *14* *14* |
| Krabi (Ao Nang / Railay) | Krabi | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Koh Lanta (Long Beach / Klong Dao) | Phi Phi (ok. 30 km od Koh Lanty) | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 11 |
| Hoi An (An Bang) | Hoi An | 9 11 *13* *13* *13* *13* *13* *13* *13* 11 9 9 |
| Wyspy Perhentian (Long Beach / Teluk Pauh) | Perhentian Islands | *12* *13* *14* *14* *13* 11 *12* *13* *13* *12* *12* 11 |
| El Nido (Lio / Nacpan), Palawan | El Nido | 11 *12* *14* *14* *13* *13* *13* *13* *13* *12* 10 10 |
| Panglao (Alona / Dumaluan), Bohol | Bohol | 11 *12* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Lombok, Kuta / Tanjung Aan | Kuta (Lombok) | *14* *15* *15* *13* 11 9 10 *12* *13* *14* *14* *14* |
| Belle Mare / Palmar | Belle Mare | *14* *14* *13* 10 7 6 6 8 10 *12* *13* *14* |
| Zanzibar (Paje / Jambiani) | Zanzibar | *13* *14* *14* *13* 10 9 10 11 *13* *14* *13* *13* |
| Nosy Be (Andilana) | Nossi-be | *14* *15* *14* 11 9 8 8 10 *12* *14* *14* *14* |
| Sal, Santa Maria | Santa Maria (Sal) | 8 10 *12* *13* *13* *13* *13* *13* *12* 10 9 8 |
| Sharm el-Sheikh (Naama Bay / Sharks Bay) | Sharm el-Sheikh | 5 6 8 11 11 *12* *12* 11 10 8 5 4 |
| Dubaj (JBR / Palm Jumeirah) | Dubaj | 6 8 10 *12* *12* *12* *12* *12* 11 8 6 5 |
| Muscat (Qurum / Al Mouj) | Maskat | 6 8 11 *12* *12* *12* *12* *12* 11 9 7 6 |
| Salalah (Hawana Salalah) | Salalah | 9 11 *12* *13* *13* *13* *13* *13* *13* 11 9 8 |
| Aqaba (Tala Bay) | Akaba | 4 6 8 10 11 *12* *12* *12* 10 7 5 4 |
| Maspalomas / Meloneras, Gran Canaria | Maspalomas | 4 6 8 9 10 11 11 11 9 7 5 4 |
| Porto Santo (Vila Baleira / Cabeço da Ponta) | Porto Santo | 3 4 6 8 9 10 10 9 8 6 4 3 |
| Albufeira / Praia da Falésia, Algarve | Albufeira | 2 4 5 7 8 9 9 9 7 5 3 2 |
| Playa de Muro / Alcúdia, Majorka | Alcúdia | 2 3 5 6 8 9 9 8 6 4 2 2 |
| San Teodoro (La Cinta / Cala Brandinchi), Sardynia | Olbia (ok. 25 km) | 2 3 4 6 8 9 9 8 6 4 2 1 |
| San Vito lo Capo, Sycylia | Trapani (ok. 35 km) | 2 3 5 6 8 9 9 9 7 5 3 2 |
| Agia Marina / Platanias, Kreta | Agia Marina | 2 3 5 7 9 10 10 9 7 5 3 2 |
| Faliraki / Kolymbia, Rodos | Faliraki | 2 3 5 7 8 10 10 9 7 5 3 2 |
| Tsilivi / Kalamaki, Zakynthos | Tsilivi | 2 3 5 6 8 9 10 9 7 5 3 2 |
| Nikiti / Sarti, Chalkidiki | Chalkidiki | 2 3 4 6 8 9 9 8 6 4 2 2 |
| Ölüdeniz / Fethiye | Ölüdeniz | 2 3 5 7 9 10 11 10 7 5 3 2 |
| Ksamil / Saranda | Saranda (ok. 15 km od Ksamilu) | 2 3 4 6 8 9 9 8 6 4 2 2 |
| Słoneczny Brzeg / Nesebyr | Słoneczny Brzeg | 1 2 4 5 7 8 9 8 5 4 2 1 |
| Las Terrenas (Playa Bonita), Samaná | Las Terrenas | 8 10 *12* *13* *13* *13* *13* *13* 11 10 8 7 |
| Varadero | Varadero | 6 8 10 *12* *12* *12* 11 11 11 9 7 6 |
| Cayo Guillermo (Playa Pilar) | Cayo Guillermo | 7 8 10 *12* *12* *12* *12* *12* 11 9 7 6 |
| Negril (Seven Mile Beach) | Negril | 8 10 *12* *13* *13* *13* *13* *13* *12* 10 9 8 |
| Nassau (Cable Beach / Paradise Island) | Nassau | 6 8 10 11 11 11 11 11 10 8 6 5 |
| Jan Thiel / Mambo Beach | Curaçao | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Antigua (Dickenson Bay) | Antigua | 8 10 *12* *13* *13* *13* *13* *13* *12* 10 9 8 |
| Rodney Bay (Reduit Beach) | Saint Lucia | 9 11 *13* *13* *13* *13* *13* *13* *13* 11 9 8 |
| Roatán (West Bay) | Roatán | 9 11 *12* *13* *13* *13* *13* *13* *12* 11 9 8 |
| San Andrés (Spratt Bight) | San Andrés | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Manuel Antonio (Playa Espadilla) | Quepos (ok. 7 km) | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Cartagena – Isla Barú (Playa Blanca) | Cartagena | 11 *12* *14* *14* *13* *12* *13* *13* *13* *12* 11 10 |
| Porto de Galinhas | Recife (ok. 50 km) | *14* *14* *14* *12* 10 9 9 11 *13* *14* *13* *13* |
| Rarotonga (Muri Beach) | Avarua (Rarotonga) | *15* *14* *13* 10 7 6 6 8 10 *12* *14* *14* |
| Gold Coast (Broadbeach / Surfers Paradise) | Gold Coast | *13* *12* 11 7 5 4 4 5 7 10 11 *13* |
| Whitsundays (Hamilton Island, Catseye Beach) | Hamilton Island | *14* *14* *13* 10 7 6 6 8 10 *12* *13* *14* |
| Durrës (plaża Golem / Shkëmbi i Kavajës) | Durrës | 2 2 4 6 8 9 9 8 6 4 2 1 |
| Manama (Bahrajn) | Manama | 5 7 9 11 *12* *12* *12* *12* 10 8 6 5 |
| Salvador (Barra / Rio Vermelho), Bahia | Salvador | *14* *15* *14* 11 9 8 8 10 *12* *14* *14* *14* |
| Cumbuco (Fortaleza), Ceará | Fortaleza (ok. 30 km) | *13* *14* *14* *13* 11 10 10 11 *13* *13* *13* *12* |
| Istria (Rovinj / Poreč) | Rovinj | 1 2 3 5 7 8 8 7 5 3 2 1 |
| Split (Dalmacja Środkowa) | Split | 1 2 4 5 7 8 8 7 5 3 2 1 |
| Budva (Riwiera Budvańska) | Budva | 1 2 4 5 7 8 9 8 6 4 2 1 |
| El Alamein (Riwiera Śródziemnomorska) | Aleksandria (ok. 100 km) | 3 5 7 9 10 11 *12* 11 9 6 4 3 |
| Kololi (Senegambia Strip) | Kololi | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) | Ateny | 2 3 5 6 8 9 10 9 7 5 3 2 |
| Samos (Pythagoreio / Kokkari) | Samos | 2 3 5 6 8 9 10 9 7 5 3 2 |
| Batumi (Adżaria) | Batumi | 1 2 4 6 7 9 10 9 6 4 2 1 |
| Barcelona (plaże Barceloneta / Costa del Maresme) | Barcelona | 2 3 4 6 7 9 9 8 6 4 2 1 |
| Costa Blanca (Benidorm) | Benidorm | 2 3 5 6 8 9 9 9 7 4 3 2 |
| Costa del Sol (Torremolinos / Benalmádena) | Torremolinos | 2 4 5 7 8 10 10 9 7 5 3 2 |
| Doha | Doha | 6 8 10 *12* *12* *12* *12* *12* 10 8 6 5 |
| Agadir | Agadir | 4 5 7 9 10 11 11 11 9 6 4 3 |
| Saïdia (wybrzeże śródziemnomorskie) | Al Hoceima (ok. 150 km) | 3 4 6 7 9 10 10 9 7 5 3 2 |
| Puerto Vallarta (Zatoka Banderas) | Puerto Vallarta | 7 9 11 *13* *13* *13* *13* *13* *12* 10 8 7 |
| Bocas del Toro (Isla Colón) | Bocas del Toro | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Playa Blanca (Río Hato, wybrzeże Pacyfiku) | Panama (ok. 120 km) | 11 *13* *14* *14* *13* *12* *12* *13* *13* *12* 11 10 |
| Azory (São Miguel, Ponta Delgada) | São Miguel | 2 4 5 7 8 9 9 9 7 5 3 2 |
| Saly (Petite Côte) | Dakar (ok. 60 km) | 9 11 *13* *13* *13* *13* *13* *13* *12* 11 9 8 |
| Pattaya / Jomtien | Pattaya | 10 *12* *13* *14* *13* *13* *13* *13* *13* 11 10 9 |
| Sousse / Port El Kantaoui | Sousse | 2 4 5 7 9 10 10 9 7 5 3 2 |
| Bodrum (półwysep Bodrum) | Bodrum | 2 3 5 6 8 10 10 9 7 5 3 2 |
| Kuşadası | Kuşadası | 2 3 5 6 8 9 10 9 7 5 3 2 |
| Isla Margarita (Playa El Agua / Pampatar) | Isla Margarita | 10 *12* *13* *14* *13* *12* *13* *13* *13* *12* 10 10 |
| Mui Ne (Phan Thiet) | Mui Ne | 11 *12* *14* *14* *13* *12* *13* *13* *13* *12* 10 10 |
| Nha Trang | Nha Trang | 10 *12* *13* *14* *13* *13* *13* *13* *13* *12* 10 10 |
| Apulia (Monopoli / Polignano a Mare) | Bari (ok. 40 km) | 2 2 4 6 8 9 9 8 6 4 2 1 |
| Kampania (Sorrento / Zatoka Neapolitańska) | Sorrento | 2 3 4 6 8 9 9 8 6 4 2 1 |
| Rimini (Riwiera Adriatycka) | Rimini | 1 2 4 5 7 8 8 7 5 3 2 1 |

## Do przeglądu

1. Ozon dopasowany do danych, ale miesiące „11+” w tropikach nadal opierają się na modelu – błąd ok. ±0,3–0,5 (sprawdzian krzyżowy, prognozy TEMIS); wartość na granicy x,5 może wypaść o 1 w górę lub w dół.
2. Zastępstwa miejsc: Ksamil – Saranda, San Teodoro – Olbia, San Vito – Trapani, Koh Lanta – Phi Phi, Koh Rong – Kompong Som, Panglao – Bohol, Saïdia – Al Hoceima, El Alamein – Aleksandria, Saly – Dakar, Playa Blanca – Panama, Providenciales – Grand Turk, Nadi – Lautoka, Cumbuco – Fortaleza, Porto de Galinhas – Recife, Apulia – Bari, Manuel Antonio – Quepos.
3. Kolumna nie mówi, jak często jest słonecznie – do tego słońce i dni deszczowe.

## Sprawdzenie odczytów (2026-10-27)

Każdy z 111 kierunków sprawdzony drugim, niezależnym odczytem: osobna strona miesięczna weather2travel (tekst alternatywny ikony „UV (maximum) index N … in <miesiąc> in <miejsce>”), dla miesiąca o wartości dokładnej najbliższej 7. Zgodność 111/111.

| Kierunek | Miesiąc | Wartość |
|---|---|---|
| marsa-alam | 2 | 7 |
| corralejo | 10 | 7 |
| waikiki | 1 | 7 |
| phuket | 12 | 10 |
| attyka | 9 | 7 |
| koh-samui | 12 | 10 |
| krabi | 12 | 10 |
| pattaya | 12 | 9 |
| siem-reap | 12 | 9 |
| negombo | 1 | 11 |
| trincomalee | 12 | 10 |
| hoi-an | 1 | 9 |
| langkawi | 11 | 11 |
| boracay | 1 | 10 |
| phu-quoc | 12 | 10 |
| mui-ne | 11 | 10 |
| nha-trang | 1 | 10 |
| malediwy | 6 | 11 |
| mauritius | 5 | 7 |
| seszele | 6 | 10 |
| zanzibar | 6 | 9 |
| belle-mare | 5 | 7 |
| zanzibar-paje | 6 | 9 |
| watamu | 6 | 10 |
| nosy-be | 6 | 8 |
| goa-polnocne | 12 | 8 |
| nusa-dua | 6 | 9 |
| lombok-kuta | 6 | 9 |
| el-nido | 11 | 10 |
| panglao | 12 | 10 |
| perhentian | 6 | 11 |
| koh-lanta | 1 | 11 |
| koh-rong | 12 | 10 |
| sharm-el-sheikh | 2 | 6 |
| dubaj | 1 | 6 |
| muscat | 11 | 7 |
| salalah | 12 | 8 |
| sal | 1 | 8 |
| aqaba | 10 | 7 |
| djerba | 3 | 6 |
| sousse | 4 | 7 |
| protaras | 4 | 7 |
| alanya | 4 | 7 |
| oludeniz | 4 | 7 |
| bodrum | 9 | 7 |
| kusadasi | 9 | 7 |
| santorini | 4 | 7 |
| kreta-agia-marina | 4 | 7 |
| rodos-faliraki | 4 | 7 |
| zakynthos-tsilivi | 9 | 7 |
| chalkidiki | 4 | 6 |
| samos | 9 | 7 |
| malta | 4 | 7 |
| sopot | 6 | 6 |
| ksamil | 4 | 6 |
| durres | 4 | 6 |
| sloneczny-brzeg | 5 | 7 |
| barcelona | 5 | 7 |
| costa-blanca | 9 | 7 |
| costa-del-sol | 4 | 7 |
| majorka-alcudia | 4 | 6 |
| maspalomas | 10 | 7 |
| albufeira | 4 | 7 |
| porto-santo | 3 | 6 |
| san-teodoro | 4 | 6 |
| san-vito-lo-capo | 9 | 7 |
| rimini | 5 | 7 |
| apulia | 4 | 6 |
| kampania | 4 | 6 |
| split | 5 | 7 |
| istria | 5 | 7 |
| budva | 5 | 7 |
| batumi | 5 | 7 |
| agadir | 3 | 7 |
| el-alamein | 3 | 7 |
| azory | 4 | 7 |
| saidia | 4 | 7 |
| saly | 12 | 8 |
| doha | 1 | 6 |
| kololi | 12 | 9 |
| manama | 2 | 7 |
| salvador | 6 | 8 |
| cumbuco | 6 | 10 |
| porto-de-galinhas | 6 | 9 |
| punta-cana | 12 | 7 |
| cancun | 1 | 7 |
| aruba | 12 | 9 |
| barbados | 12 | 9 |
| providenciales | 1 | 7 |
| varadero | 11 | 7 |
| negril | 1 | 8 |
| nassau | 1 | 6 |
| curacao | 12 | 9 |
| antigua | 1 | 8 |
| saint-lucia | 12 | 8 |
| cayo-guillermo | 1 | 7 |
| las-terrenas | 12 | 7 |
| san-andres | 12 | 9 |
| cartagena-baru | 12 | 10 |
| roatan | 12 | 8 |
| tamarindo | 12 | 10 |
| manuel-antonio | 12 | 10 |
| playa-blanca | 12 | 10 |
| bocas-del-toro | 12 | 10 |
| puerto-vallarta | 1 | 7 |
| margarita | 1 | 10 |
| nadi-denarau | 6 | 7 |
| bora-bora | 6 | 7 |
| rarotonga | 5 | 7 |
| gold-coast | 4 | 7 |
| whitsundays | 5 | 7 |

## Weryfikacja z bieżącymi prognozami TEMIS i werdykt (2026-10-28)

Pytanie: aplikacje pogodowe (Pogoda w iPhonie) pokazują dzienne maksimum UV 13–14, a czasem więcej – czy dane w bazie nie są za niskie?

**Bieżące prognozy TEMIS** (czyste niebo, południe, prawdziwy ozon; temis.nl/uvradiation/nrt/uvindex.php), 28.10–2.11.2026, w porównaniu z wartością w bazie na X / XI:

| Kierunek | TEMIS 28.10–2.11 | Baza przed poprawką X / XI | Baza po poprawce X / XI |
|---|---|---|---|
| Salvador | 14,1–14,7 | 13 / 13 | 14 / 14 |
| Nusa Dua (Bali) | 13,9–14,4 | 13 / 13 | 14 / 13 |
| Bora Bora | 13,7–14,2 | 13 / 13 | 13 / 14 |
| Mauritius | 13,0–14,3 | 12 / 13 | 13 / 14 |
| Zanzibar | 12,6–13,3 | 13 / 12 | 14 / 13 |
| Malediwy | 11,7–11,9 | 13 / 12 | 13 / 11 |
| Phuket | 11,1–11,4 | 13 / 11 | 12 / 11 |
| Gold Coast | 10,8–11,9 | 10 / 11 | 10 / 12 |
| Sal | 8,2–9,3 | 10 / 9 | 10 / 9 |
| Punta Cana | 8,5–9,1 | 10 / 8 | 10 / 8 |
| Waikīkī | 6,9–8,7 | 9 / 7 | 9 / 7 |
| Cancún | 7,7–8,5 | 9 / 8 | 9 / 8 |
| Marsa Alam | 6,8–7,7 | 8 / 6 | 8 / 6 |
| Dubaj | 6,6–7,3 | 8 / 6 | 8 / 6 |
| Malta | 3,3–3,9 | 5 / 3 | 5 / 3 |
| Sopot | 0,8–1,0 | 2 / 1 | 2 / 1 |

(Wartość w bazie dotyczy 15. dnia miesiąca; koniec października leży między X a XI. Kolumna „po poprawce” to stan przed pełnym przeliczeniem – aktualne wartości dla wszystkich 111 kierunków w sekcji „Pełne przeliczenie”.)

**Inne odniesienia:**
- Hawaje: pomiar w południe na poziomie morza 12,7 (VII–VIII 2018, Zenodo 2596819); KITV: typowo 6–7 zimą, 11–12 latem; prognoza The Weather Network dla Honolulu 27.10.2026: 9 (baza X: 9).
- Polska: IMGW, prognoza na czyste niebo 1.07.2025: ok. 8 w centrum, 9 w górach, mniej na północy (baza Sopot VII: 6 – TEMIS 1995–2003; Sopot jest o ok. 2,5° dalej na północ niż centrum).
- Hongkong: pomiar HKO, średnie dzienne maksimum z chmurami VII 10,05 – z chmurami zawsze mniej niż przy czystym niebie.
- Rekord świata: 43,3 (wulkan Licancabur, Boliwia, 5 920 m n.p.m., 29.12.2003); w wysokich Andach regularnie ok. 20–25. Na poziomie morza w tropikach przy niskim ozonie najwyżej ok. 15–16.

**Werdykt (wiążący):**
1. Kolumna UV oznacza **typowe dzienne maksimum UV w słoneczny dzień w połowie miesiąca** – tę samą wielkość, którą pokazuje Pogoda w iPhonie w dzień bez chmur. Nie jest to średnia z chmurami ani rekord.
2. Wartości 13–15 w tropikach są **prawdziwe** i są w bazie (kierunki tropikalne w porze wysokiego słońca). Po pełnym przeliczeniu: 11 komórek ma 15, 100 ma 14, 242 ma 13, maksimum 15.
3. Model dla miesięcy „11+” był **o ok. 1 za nisko** przy słońcu blisko zenitu (kalibracja na miesiącach zimowych) – poprawione 28.10.2026 (145 komórek), a następnie **przeliczone w całości** tego samego dnia: ozon dopasowany do wszystkich odczytów TEMIS i bieżących prognoz dla 111 kierunków, „11” przyjęte jako odczyt, „11+” jako co najmniej 11,5 (sekcja „Pełne przeliczenie”). Odczyty TEMIS zostają bez zmian.
4. W aplikacji pojedynczy dzień może pokazać **o 1–2 więcej** niż wartość w bazie (spadek ozonu, czyste powietrze, dzień bliżej przesilenia) albo **dużo mniej** przy chmurach. To nie jest błąd danych.
5. Dokładność kolumny: ok. ±1 (zaokrąglenie do liczb całkowitych, ozon zmienia się z dnia na dzień o ±5–10%).

## Pełne przeliczenie (2026-10-28)

Cel: każdy kierunek i każdy miesiąc policzone jedną, sprawdzoną metodą, bez przybliżonej klimatologii ozonu.

**Dane:** odczyty weather2travel (TEMIS 1995–2003) dla 111 kierunków × 12 miesięcy oraz bieżące prognozy TEMIS (czyste niebo, południe, ozon dnia) pobrane dla wszystkich 111 kierunków, 28.10–2.11.2026 (strona temis.nl/uvradiation/nrt/uvindex.php z długością i szerokością kierunku; adres w źródłach każdego kierunku).

**Co się zmieniło:**
- „11” na stronie to odczyt (10,5–11,5), nie górna granica – model na 117 takich komórkach daje średnio −0,03 (RMS 0,39). Teraz przyjęte wprost jako 11.
- „11+” to co najmniej 11,5 – bez warunku model dawał poniżej 11,5 tylko w kilkunastu z 510 komórek. Teraz wartość nie mniejsza niż 12.
- Ozon dopasowany do danych. Największe różnice względem klimatologii wyjściowej: subtropiki półkuli północnej latem (25°N VI–VIII ok. +7–9%, 35–45°N IV–VIII +4–8%) oraz zimą na 5–25°N i 45°N (−6–9%) – zgodnie z odczytami „11” w Nassau, Varadero, na Malediwach i w Dubaju oraz odczytami śródziemnomorskimi.
- Zmienione komórki względem poprzedniej wersji: 262 (61 × +1, 7 × −2, 194 × −1), wszystkie w miesiącach „11” i „11+”. Najczęściej −1 w porze wysokiego słońca na 0–30°N (Karaiby, Ameryka Środkowa, Zatoka Perska, Tajlandia, Afryka Zachodnia) – poprzedni model zawyżał tam UV przy zbyt niskim ozonie; +1 głównie w miesiącach zimowych i przejściowych tej strefy (ozon niższy, niż zakładała klimatologia wyjściowa).
- Rozkład: 0: 2, 1: 19, 2: 72, 3: 51, 4: 47, 5: 63, 6: 63, 7: 70, 8: 86, 9: 110, 10: 122, 11: 117, 12: 157, 13: 242, 14: 100, 15: 11. Źródło: odczyty TEMIS – 822 komórki, model – 510.

**Sprawdzenie:**
- Odczyty TEMIS 2–10 (n = 684): średnio 0,01, RMS 0,30, różnic > 1: 0. Samo zaokrąglenie do liczb całkowitych daje RMS 0,29, więc model odtwarza TEMIS na granicy dokładności odczytu.
- Sprawdzian krzyżowy (5 przebiegów; model dopasowany bez 1/5 odczytów przewiduje pominięte): RMS 0,37 (n = 154, różnic > 1: 1); RMS 0,35 (n = 159, różnic > 1: 1); RMS 0,33 (n = 163, różnic > 1: 0); RMS 0,37 (n = 159, różnic > 1: 2); RMS 0,35 (n = 166, różnic > 1: 1).
- Prognozy TEMIS 28.10–2.11.2026, ozon dnia (666 dni): średnio 0,01, RMS 0,09, maks. 0,38.
- Prognozy TEMIS a model przy ozonie klimatologicznym (111 kierunków, 1.11): średnio 0,11, RMS 0,24, maks. 0,60 – tyle wynosi zmienność ozonu dzień do dnia.
- Dokładność kolumny: odczyty TEMIS ±0,5 (zaokrąglenie), model ±0,3–0,5; w obu przypadkach wartość całkowita jest najlepszym przybliżeniem i może różnić się od „prawdziwej” średniej o 1 tylko na granicy x,5.

**Ozon po dopasowaniu (DU, 15. dzień miesiąca, środek pasa):**

| Pas | I | II | III | IV | V | VI | VII | VIII | IX | X | XI | XII |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 35°S | 286 | 280 | 279 | 285 | 299 | 314 | 325 | 332 | 338 | 328 | 309 | 292 |
| 25°S | 264 | 259 | 255 | 257 | 264 | 272 | 285 | 293 | 302 | 294 | 285 | 271 |
| 15°S | 256 | 255 | 256 | 260 | 262 | 261 | 265 | 269 | 277 | 271 | 263 | 258 |
| 5°S | 265 | 264 | 265 | 270 | 275 | 276 | 276 | 279 | 279 | 275 | 270 | 266 |
| 5°N | 244 | 252 | 260 | 270 | 279 | 286 | 287 | 284 | 280 | 276 | 258 | 247 |
| 15°N | 235 | 246 | 262 | 276 | 282 | 281 | 280 | 279 | 277 | 269 | 248 | 237 |
| 25°N | 249 | 261 | 275 | 294 | 310 | 310 | 309 | 299 | 286 | 271 | 255 | 249 |
| 35°N | 302 | 320 | 343 | 364 | 355 | 335 | 319 | 310 | 301 | 283 | 281 | 288 |
| 45°N | 323 | 347 | 368 | 392 | 381 | 364 | 346 | 330 | 311 | 286 | 288 | 303 |
| 55°N | 374 | 401 | 415 | 415 | 397 | 375 | 354 | 335 | 313 | 300 | 318 | 348 |

**Kontrola dla każdego kierunku** (prognoza TEMIS 28.10–2.11.2026 z ozonem dnia; model na 1.11 z ozonem klimatologicznym; baza na 15.10 / 15.11):

| Kierunek | TEMIS 28.10–2.11 | Ozon dnia (DU) | Model 1.11 | Ozon klimat. (DU) | Baza X / XI |
|---|---|---|---|---|---|
| Siem Reap | 9,8–10,1 | 266 | 10,4 | 260 | 11 / 10 |
| Corralejo, Fuerteventura | 5,1–5,9 | 283 | 5,8 | 270 | 7 / 5 |
| Phuket | 11,1–11,4 | 269 | 11,5 | 264 | 12 / 11 |
| Koh Samui | 10,7–11,4 | 268 | 11,3 | 263 | 12 / 11 |
| Negombo | 10,7–11,5 | 276 | 11,6 | 265 | 12 / 11 |
| Trincomalee | 10,3–11 | 275 | 11,3 | 264 | 12 / 11 |
| Koh Rong | 10,7–11,2 | 263 | 11,2 | 262 | 12 / 11 |
| Phu Quoc | 10,4–11,3 | 266 | 11,2 | 262 | 12 / 11 |
| Langkawi (Pantai Cenang) | 11,2–11,9 | 271 | 11,8 | 265 | 12 / 11 |
| Boracay | 10,3–11 | 266 | 10,8 | 261 | 12 / 10 |
| Nusa Dua, Bali | 13,9–14,4 | 263 | 14,0 | 270 | 14 / 14 |
| Goa Północne (Calangute / Baga) | 9,4–10 | 263 | 9,8 | 259 | 11 / 9 |
| Atol Malé Północny | 11,7–11,9 | 275 | 12,1 | 267 | 13 / 12 |
| Mahé (Beau Vallon) | 13,2–13,5 | 270 | 13,3 | 272 | 14 / 13 |
| Flic en Flac | 13–14,3 | 276 | 13,2 | 279 | 12 / 14 |
| Zanzibar (Nungwi / Kendwa) | 12,6–13,3 | 276 | 13,2 | 272 | 13 / 13 |
| Watamu | 12,5–13,2 | 275 | 13,1 | 271 | 13 / 13 |
| Marsa Alam | 6,8–7,7 | 261 | 7,1 | 263 | 8 / 6 |
| Djerba | 3,8–4,3 | 295 | 4,4 | 280 | 6 / 4 |
| Alanya | 3,5–3,8 | 292 | 3,8 | 283 | 5 / 3 |
| Protaras | 3,8–3,9 | 290 | 4,0 | 282 | 5 / 3 |
| Santorini | 3,2–3,7 | 304 | 3,7 | 283 | 5 / 3 |
| Sliema / St Julian's | 3,3–3,9 | 300 | 3,8 | 282 | 5 / 3 |
| Sopot | 0,8–1 | 290 | 0,8 | 308 | 2 / 1 |
| Punta Cana (Bávaro) | 8,5–9,1 | 263 | 9,0 | 260 | 10 / 8 |
| Cancún (strefa hotelowa) | 7,7–8,5 | 263 | 8,2 | 261 | 9 / 8 |
| Palm Beach | 10,5–11 | 259 | 10,6 | 260 | 11 / 10 |
| Zachodnie wybrzeże (Holetown) | 10,2–10,7 | 263 | 10,5 | 260 | 11 / 10 |
| Providenciales (Grace Bay) | 7,7–8 | 265 | 8,0 | 262 | 9 / 7 |
| Tamarindo (Guanacaste) | 10,9–11,5 | 261 | 11,2 | 262 | 12 / 11 |
| Waikīkī, Oʻahu | 6,9–8,7 | 271 | 8,0 | 261 | 9 / 7 |
| Nadi / Denarau (Viti Levu) | 13,5–13,8 | 272 | 13,7 | 273 | 13 / 14 |
| Bora Bora | 13,7–14,2 | 270 | 13,8 | 270 | 13 / 14 |
| Krabi (Ao Nang / Railay) | 11–11,4 | 269 | 11,4 | 264 | 12 / 11 |
| Koh Lanta (Long Beach / Klong Dao) | 11,1–11,4 | 270 | 11,6 | 264 | 12 / 11 |
| Hoi An (An Bang) | 9,4–9,6 | 265 | 9,9 | 259 | 11 / 9 |
| Wyspy Perhentian (Long Beach / Teluk Pauh) | 10,9–12,2 | 270 | 11,9 | 266 | 12 / 12 |
| El Nido (Lio / Nacpan), Palawan | 10,3–11,1 | 268 | 11,0 | 262 | 12 / 10 |
| Panglao (Alona / Dumaluan), Bohol | 10,6–11,3 | 269 | 11,3 | 263 | 12 / 11 |
| Lombok, Kuta / Tanjung Aan | 13,9–14,7 | 264 | 14,1 | 270 | 14 / 14 |
| Belle Mare / Palmar | 12,7–14,1 | 275 | 13,1 | 279 | 12 / 13 |
| Zanzibar (Paje / Jambiani) | 13–13,4 | 276 | 13,3 | 272 | 14 / 13 |
| Nosy Be (Andilana) | 13,2–13,6 | 277 | 13,9 | 268 | 14 / 14 |
| Sal, Santa Maria | 8,2–9,3 | 271 | 9,4 | 259 | 10 / 9 |
| Sharm el-Sheikh (Naama Bay / Sharks Bay) | 5,9–6,5 | 265 | 6,2 | 269 | 8 / 5 |
| Dubaj (JBR / Palm Jumeirah) | 6,6–7,3 | 265 | 7,1 | 263 | 8 / 6 |
| Muscat (Qurum / Al Mouj) | 7,3–7,6 | 264 | 7,6 | 263 | 9 / 7 |
| Salalah (Hawana Salalah) | 9–9,4 | 266 | 9,7 | 259 | 11 / 9 |
| Aqaba (Tala Bay) | 5,5–5,8 | 274 | 5,8 | 272 | 7 / 5 |
| Maspalomas / Meloneras, Gran Canaria | 5,2–6,1 | 286 | 6,0 | 268 | 7 / 5 |
| Porto Santo (Vila Baleira / Cabeço da Ponta) | 4,1–4,5 | 291 | 4,5 | 278 | 6 / 4 |
| Albufeira / Praia da Falésia, Algarve | 3,3–3,6 | 288 | 3,5 | 283 | 5 / 3 |
| Playa de Muro / Alcúdia, Majorka | 2,7–3 | 291 | 3,0 | 285 | 4 / 2 |
| San Teodoro (La Cinta / Cala Brandinchi), Sardynia | 2,6–2,8 | 293 | 2,8 | 285 | 4 / 2 |
| San Vito lo Capo, Sycylia | 3–3,5 | 297 | 3,4 | 284 | 5 / 3 |
| Agia Marina / Platanias, Kreta | 3,3–3,9 | 303 | 3,8 | 282 | 5 / 3 |
| Faliraki / Kolymbia, Rodos | 3,2–3,6 | 302 | 3,7 | 283 | 5 / 3 |
| Tsilivi / Kalamaki, Zakynthos | 3–3,5 | 300 | 3,4 | 283 | 5 / 3 |
| Nikiti / Sarti, Chalkidiki | 2,5–3,1 | 300 | 2,9 | 285 | 4 / 2 |
| Ölüdeniz / Fethiye | 3,2–3,7 | 298 | 3,8 | 283 | 5 / 3 |
| Ksamil / Saranda | 2,7–3,1 | 298 | 3,0 | 284 | 4 / 2 |
| Słoneczny Brzeg / Nesebyr | 2,2–2,5 | 295 | 2,5 | 286 | 4 / 2 |
| Las Terrenas (Playa Bonita), Samaná | 8,6–8,9 | 261 | 8,8 | 261 | 10 / 8 |
| Varadero | 7,2–8,4 | 263 | 7,5 | 262 | 9 / 7 |
| Cayo Guillermo (Playa Pilar) | 7,6–8,3 | 262 | 7,7 | 262 | 9 / 7 |
| Negril (Seven Mile Beach) | 8,6–9,5 | 258 | 9,2 | 260 | 10 / 9 |
| Nassau (Cable Beach / Paradise Island) | 6,6–7,3 | 265 | 6,9 | 263 | 8 / 6 |
| Jan Thiel / Mambo Beach | 10,6–11,7 | 258 | 10,7 | 261 | 11 / 10 |
| Antigua (Dickenson Bay) | 9–9,4 | 265 | 9,4 | 259 | 10 / 9 |
| Rodney Bay (Reduit Beach) | 9,6–10,3 | 266 | 10,1 | 259 | 11 / 9 |
| Roatán (West Bay) | 9,4–9,7 | 260 | 9,7 | 259 | 11 / 9 |
| San Andrés (Spratt Bight) | 10,4–11,1 | 258 | 10,6 | 260 | 11 / 10 |
| Manuel Antonio (Playa Espadilla) | 11,2–12 | 257 | 11,4 | 263 | 12 / 11 |
| Cartagena – Isla Barú (Playa Blanca) | 10,7–11,6 | 260 | 11,2 | 262 | 12 / 11 |
| Porto de Galinhas | 13,4–13,9 | 271 | 13,7 | 271 | 14 / 13 |
| Rarotonga (Muri Beach) | 12,7–13,4 | 280 | 13,1 | 281 | 12 / 14 |
| Gold Coast (Broadbeach / Surfers Paradise) | 10,8–11,9 | 295 | 11,0 | 298 | 10 / 11 |
| Whitsundays (Hamilton Island, Catseye Beach) | 12,9–14,2 | 273 | 13,1 | 279 | 12 / 13 |
| Durrës (plaża Golem / Shkëmbi i Kavajës) | 2,3–2,8 | 300 | 2,7 | 285 | 4 / 2 |
| Manama (Bahrajn) | 6,2–7,2 | 262 | 6,7 | 265 | 8 / 6 |
| Salvador (Barra / Rio Vermelho), Bahia | 14,1–14,7 | 264 | 14,0 | 268 | 14 / 14 |
| Cumbuco (Fortaleza), Ceará | 12,9–13,8 | 270 | 13,1 | 272 | 13 / 13 |
| Istria (Rovinj / Poreč) | 1,9–2,3 | 290 | 2,1 | 288 | 3 / 2 |
| Split (Dalmacja Środkowa) | 2–2,5 | 293 | 2,3 | 287 | 3 / 2 |
| Budva (Riwiera Budvańska) | 2,2–2,7 | 297 | 2,6 | 286 | 4 / 2 |
| El Alamein (Riwiera Śródziemnomorska) | 4,9–5 | 285 | 5,2 | 274 | 6 / 4 |
| Kololi (Senegambia Strip) | 9,8–10,4 | 266 | 10,4 | 260 | 11 / 10 |
| Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) | 2,8–3,5 | 304 | 3,4 | 283 | 5 / 3 |
| Samos (Pythagoreio / Kokkari) | 3–3,5 | 299 | 3,5 | 283 | 5 / 3 |
| Batumi (Adżaria) | 2,5–3,1 | 274 | 2,7 | 285 | 4 / 2 |
| Barcelona (plaże Barceloneta / Costa del Maresme) | 2,6–2,8 | 287 | 2,7 | 285 | 4 / 2 |
| Costa Blanca (Benidorm) | 3,1–3,3 | 288 | 3,3 | 284 | 4 / 3 |
| Costa del Sol (Torremolinos / Benalmádena) | 3,3–3,7 | 289 | 3,6 | 283 | 5 / 3 |
| Doha | 6,6–7,4 | 261 | 7,0 | 264 | 8 / 6 |
| Agadir | 4,8–5,3 | 284 | 5,3 | 273 | 6 / 4 |
| Saïdia (wybrzeże śródziemnomorskie) | 3,7–4,1 | 288 | 4,0 | 282 | 5 / 3 |
| Puerto Vallarta (Zatoka Banderas) | 8,6–9,2 | 254 | 8,5 | 261 | 10 / 8 |
| Bocas del Toro (Isla Colón) | 11,1–12,1 | 256 | 11,3 | 263 | 12 / 11 |
| Playa Blanca (Río Hato, wybrzeże Pacyfiku) | 11,1–12,4 | 258 | 11,5 | 264 | 12 / 11 |
| Azory (São Miguel, Ponta Delgada) | 3,2–3,7 | 284 | 3,4 | 283 | 5 / 3 |
| Saly (Petite Côte) | 9,5–10 | 266 | 10,0 | 259 | 11 / 9 |
| Pattaya / Jomtien | 10–10,6 | 264 | 10,5 | 260 | 11 / 10 |
| Sousse / Port El Kantaoui | 3,3–3,9 | 296 | 3,8 | 282 | 5 / 3 |
| Bodrum (półwysep Bodrum) | 3,1–3,6 | 301 | 3,6 | 283 | 5 / 3 |
| Kuşadası | 3–3,5 | 297 | 3,4 | 283 | 5 / 3 |
| Isla Margarita (Playa El Agua / Pampatar) | 10,6–10,9 | 264 | 10,9 | 262 | 12 / 10 |
| Mui Ne (Phan Thiet) | 10,4–11,2 | 265 | 11,0 | 262 | 12 / 10 |
| Nha Trang | 9,7–10,5 | 269 | 10,7 | 261 | 12 / 10 |
| Apulia (Monopoli / Polignano a Mare) | 2,4–2,8 | 300 | 2,8 | 285 | 4 / 2 |
| Kampania (Sorrento / Zatoka Neapolitańska) | 2,5–2,9 | 302 | 2,8 | 285 | 4 / 2 |
| Rimini (Riwiera Adriatycka) | 2–2,4 | 292 | 2,2 | 287 | 3 / 2 |

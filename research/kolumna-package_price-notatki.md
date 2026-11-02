# Kolumna package_price – wczasy z biurem od (zł/os.)

Sprawdzono: 2026-10-17; 33 kierunki etapu 3: 2026-10-26 (odczyty na stronach Rainbow r.pl/<kraj>/<region> i Itaki itaka.pl/all-inclusive/<region>/, bez sortowania po cenie). Odczyty surowe: `pakiety-surowe.md`. Model: skrypt w scratchpadzie (`pakiety.mjs`), wynik `kolumna-package_price.json`.

## Definicja

Dolny próg ceny wczasów z biurem za osobę dorosłą w pokoju 2-osobowym, 7 nocy (8 dni), wylot z Warszawy (Chopin, Modlin) lub Katowic, all inclusive albo najbliższe wyżywienie, hotel z oceną klientów ≥ 4,4/6, 3–4★ zależnie od kosztu kierunku. Ballpark, zawsze szacunek.

## Metoda

1. **Odczyty.** Itaka: strony wyników dla regionu i miesiąca posortowane po cenie (`itaka.pl/wyniki-wyszukiwania/wakacje/<region>/<miesiąc>/?order=priceAsc`, `itaka.pl/all-inclusive/<region>/<miesiąc>/`). Rainbow: najtańsze oferty all inclusive w całym sezonie dla kraju (`r.pl/<kraj>/all-inclusive`, także `?strona=2`) i strony krajów (`r.pl/<kraj>`). Z 1. strony (10–15 ofert): najtańsza oferta 7 nocy z oceną ≥ 4,4/6. Oferty są z sezonu zima 2026/27 i lato 2027 (ceny first minute) – to bieżące ceny, nie historia.
2. **Ograniczenia odczytów.** Strona pokazuje tylko 1. stronę wyników (parametr strony i filtr długości nie działają), a po cenie wygrywają krótkie wyjazdy 4–6-dniowe – wtedy brak odczytu albo sortowanie domyślne (wyżej niż próg). Lato 2027 do Turcji było jeszcze słabo w sprzedaży. Część odczytów ma wylot z innych miast (Poznań, Wrocław, Rzeszów, Gdańsk) – różnica zwykle ±200 zł. Gwiazdek strona nie pokazuje, więc standard filtruje ocena klientów.
3. **Model.** Wartość miesiąca = baza × wzorzec sezonowy; miesiące poza sezonem czarterów = brak oferty (`na`). Baza = najniższa z baz wynikających z odczytów (odczyt ÷ wzorzec jego miesiąca), niezależnie od biura – kolumna pokazuje kwotę, która wychodzi najkorzystniej. Pojedyncze okazje odsiewają same kryteria odczytu (7 nocy, ocena ≥ 4,4/6). Rainbow jest zwykle o 15–30% tańszy od Itaki (Djerba, Egipt, Grecja, Kenia).
   - **year** (Egipt, Tunezja, Malta, Wyspy Zielonego Przylądka): z 6 odczytów Marsa Alam: I 0,91, II 0,95, III 0,97, IV 1,00, V 1,06, VI 1,10, VII 1,16, VIII 1,16, IX 1,07, X 0,95, XI 0,83, XII 1,00.
   - **summer** (Morze Śródziemne, względem VII): IV 0,72, V 0,75, VI 0,88, VII 1, VIII 1,03, IX 0,85, X 0,75. Kontrola: w jednym biurze Kreta V/VII = 0,83, Bułgaria V/VII = 0,82; między biurami (Rainbow IX–V vs Itaka VII) różnica większa: Kreta 0,61, Rodos 0,57.
   - **canary** (względem I): I 1, II 1,05, III 1, IV 1, V 0,90, VI 0,95, VII 1,12, VIII 1,15, IX 0,95, X 1, XI 0,95, XII 1,08. Kontrola: Fuerteventura VII/I = 1,12.
   - **long** (dalekie, względem I): I 1, II 1,03, III 0,97, IV 0,97, V 0,90, VI 0,92, VII 1,05, VIII 1,08, IX 0,92, X 0,92, XI 0,90, XII 1,10.
4. **Krótsze pakiety** (6 dni) przeliczone na 8 dni przez dodanie 2 nocy hotelu (Malediwy, Mauritius, Seszele) – szacunek.
5. **Brak oferty**: kierunki bez wczasów z wylotem z Polski (Kuba w sezonie 2026/27, Jamajka tylko z Berlina, Goa, Karaiby poza Dominikaną, Meksykiem, Arubą i Curaçao, Pacyfik, Ameryka Środkowa i Południowa, Filipiny, Malezja, Kambodża, Sopot).

## Kierunki

| Kierunek | Sezon i model | Wyżywienie | Podstawa |
|---|---|---|---|
| Siem Reap | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Corralejo, Fuerteventura | cały rok; wzorzec Kanary; baza 4178 zł | AI | Itaka: Fuerteventura – Fergus Cactus Garden 4,6/6: I 4 179 zł (Warszawa-Okęcie), VII 4 679 zł. |
| Phuket | cały rok; wzorzec daleki; baza 6319 zł | śniadania | Itaka: I Best Western Patong Beach 4,8/6 – 7 439, II Mida Grande 5,0/6 – 7 699 zł; Rainbow XI: Merlin 4,9/6 – 5 687, Best Western Ocean Resort 5,5/6 – 5 737 zł (śniadania). V–X szacunek (loty rejsowe). |
| Koh Samui | cały rok; wzorzec daleki; baza 7267 zł | śniadania | Koh Samui niewidoczne w ofertach Itaki i Rainbow. Szacunek: Phuket +15% (dodatkowy lot krajowy). |
| Negombo | XI–IV; wzorzec daleki; baza 6029 zł | 2 posiłki | Itaka: I Citrus Waskaduwa 4,6/6 – 6 029 zł (2 posiłki, Warszawa-Okęcie). Rainbow: tylko 10–11 nocy (od ok. 10 200 zł). Latem monsun na zachodzie. |
| Trincomalee | V–IX; wzorzec daleki; baza 6210 zł | 2 posiłki | Szacunek: wschodnie wybrzeże Sri Lanki latem; poziom Negombo +3%. |
| Koh Rong | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Phu Quoc | XI–IV; wzorzec daleki; baza 5761 zł | śniadania | Rainbow (7 nocy, śniadania): XI Amarin Resort 5,6/6 – 5 399 zł (Warszawa), XI Mercury Phu Quoc 5,6/6 – 5 049 zł (Poznań), III Movenpick Waverly 5,4/6 – 5 588 zł. Itaka: Phu Quoc niewidoczne. |
| Langkawi (Pantai Cenang) | XI–IV; wzorzec daleki; baza 7504 zł | śniadania | Itaka II (Warszawa-Okęcie, 8 dni, śniadania): Holiday Villa Resort & Beachclub – 7 729, Hilton Burau Bay – 8 119, Rebak Island – 8 139 zł. Poza XI–IV szacunku nie podaję (pora deszczowa, brak ofert). |
| Boracay | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Nusa Dua, Bali | cały rok; wzorzec daleki; baza 5600 zł | śniadania | Itaka: I Jayakarta Bali Beach 4,8/6 – 5 619 zł (7 dni); Rainbow X: Nikko Bali Benoa Beach (Nusa Dua) 5,3/6 – 5 827 zł za 10 nocy. Szacunek 7 nocy. |
| Goa Północne (Calangute / Baga) | brak oferty | – | Brak ofert Itaki na Goa w sezonie 2026/27. |
| Atol Malé Północny | cały rok; wzorzec daleki; baza 10 300 zł | AI / 2–3 posiłki | Itaka: II Meeru Island Resort 6 dni – 8 799 zł; Rainbow: resorty AI 8 nocy od 12 533 zł (Adaaran Club Rannalhi 5,9/6, IV), pensjonaty na wyspach lokalnych ze śniadaniami 8 nocy od ok. 8 300 zł. Szacunek 7 nocy w resorcie. Transfer zwykle w cenie. |
| Mahé (Beau Vallon) | cały rok; wzorzec daleki; baza 8300 zł | śniadania | Itaka: II Thalassa Seychelles 6 dni (bez wyżywienia) – 6 429 zł; 9-dniowa wycieczka 13 249 zł. Szacunek 7 nocy ze śniadaniami. |
| Flic en Flac | cały rok; wzorzec daleki; baza 7984 zł | AI | Rainbow IX: Jalsa Beach Hotel & SPA (zachodnie wybrzeże) 5,3/6, AI – 7 345 zł; Itaka: II Ravenala Attitude 6 dni AI – 6 329, VII Silver Beach 6 dni – 7 529 zł. |
| Zanzibar (Nungwi / Kendwa) | VI–III; wzorzec daleki; baza 6182 zł | AI | Itaka: I Dongwe Club Vacanze 5,4/6 – 7 239, VII VOI Kiwengwa 5,3/6 – 7 179 zł; Rainbow: III AHG Dream's Bay 5,7/6 – 5 997, AHG Waridi 5,3/6 – 6 013, XII Sultan Sands 5,6/6 – 7 078 zł. IV–V (pora deszczowa) bez czarterów. |
| Watamu | X–IV; wzorzec daleki; baza 4855 zł | AI | Itaka: I AHG Lion Beach (Watamu) 4,5/6 – 7 179, X Leopard Beach 5,4/6 – 5 899 zł; Rainbow: X AHG Lion Beach (Watamu) 5,2/6 – 4 467, III Turtle Bay (Watamu) 5,6/6 – 4 958 zł. Latem brak ofert. |
| Marsa Alam | cały rok; wzorzec całoroczny (popyt z Polski); baza 2330 zł | AI | Itaka: 6 odczytów (Swisstouch Oriental 4,4/6, Casa Mare 5,1/6); Rainbow XII: MG Alexander The Great 4,8/6 – 2 330 zł. |
| Djerba | cały rok; wzorzec całoroczny (popyt z Polski); baza 1957 zł | AI | Itaka: I Royal Karthago 5,1/6 – 2 379, VII Les Quatre Saisons 4,5/6 – 3 429 zł; Rainbow: I Djerba Castille 5,0/6 – 1 781, II Djerba Sun Beach 5,1/6 – 1 883, XII Vincci Helios Beach 5,3/6 – 1 961 zł. |
| Alanya | IV–X; wzorzec letni (tylko sezon czarterów); baza 3000 zł | AI | Rainbow Riwiera Turecka 7 nocy AI: V 1 727, VII 1 837, VIII 2 155 zł, ale to hotele 3★ (Melissa); 4★ Riwiera Egejska V: Natur Garden 4,8/6 – 2 265, Grand Belish 5,4/6 – 2 757 zł. Itaka lato 2027 jeszcze niepełne. Przyjęte 4★: VII ok. 3 000 zł. |
| Protaras | IV–X; wzorzec letni (tylko sezon czarterów); baza 4459 zł | AI | Itaka VII: Sun Palace Waterpark (Larnaka) 4,8/6 – 4 459 zł; Rainbow V: Tsokkos Paradise Village 5,2/6 – 4 222, Tsokkos Protaras Beach 5,1/6 – 4 600 zł. |
| Santorini | V–X; wzorzec letni (tylko sezon czarterów); baza 4800 zł | śniadania | Itaka VII: tylko 4-dniowe ze śniadaniami. Szacunek: poziom wyżej niż Kreta i Rodos. |
| Sliema / St Julian's | cały rok; wzorzec całoroczny (popyt z Polski); baza 3087 zł | śniadania | Itaka: pakiety ze śniadaniami I 2 809, VII 3 869 zł; Rainbow IV: Ramla Bay Resort (śniadania) 3 150 zł; AI na Malcie prawie nie ma. |
| Sopot | brak oferty | – | Kierunek krajowy – nie ma wczasów samolotem z Warszawy ani Katowic. |
| Punta Cana (Bávaro) | XI–IV; wzorzec daleki; baza 7777 zł | AI | Itaka: I Vista Sol 4,9/6 – 9 359, XI Serenade 5,5/6 – 6 999 zł (Warszawa-Okęcie). Rainbow: tylko Puerto Plata (XI od 5 882 zł). Latem brak czarterów. |
| Cancún (strefa hotelowa) | XI–IV; wzorzec daleki; baza 6164 zł | AI | Rainbow XII (Katowice): Dos Playas Beach House (Cancún) 4,9/6 – 6 830, Bluebay Grand Esmeralda (Riviera Maya) 4,9/6 – 6 780 zł; Itaka II: 6 dni od 8 639 zł. |
| Palm Beach | XI–IV; wzorzec daleki; baza 8500 zł | śniadania | Itaka II: 8 ofert 6–7-dniowych (bez ocen). Szacunek. |
| Zachodnie wybrzeże (Holetown) | brak oferty | – | Itaka: Barbados tylko z wylotem z Berlina (II 2027, Bougainvillea, śniadania, 13 039 zł); z Warszawy i Katowic brak. |
| Providenciales (Grace Bay) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Tamarindo (Guanacaste) | brak oferty | – | Itaka: Kostaryka tylko jako wycieczka objazdowa (Dzika Kostaryka, 13 479 zł); wczasów brak. |
| Waikīkī, Oʻahu | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Nadi / Denarau (Viti Levu) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Bora Bora | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Krabi (Ao Nang / Railay) | cały rok; wzorzec daleki; baza 8193 zł | 2 posiłki | Itaka: II Krabi la Playa (Ao Nang) 4,8/6 – 8 439 zł (2 posiłki). V–X szacunek. |
| Koh Lanta (Long Beach / Klong Dao) | cały rok; wzorzec daleki; baza 9213 zł | 2 posiłki | Itaka: II Avani+ Koh Lanta 5,2/6 – 9 489 zł (2 posiłki). V–X szacunek. |
| Hoi An (An Bang) | I–IX; wzorzec daleki; baza 7100 zł | śniadania | Itaka: I Da Nang – Sanouva Danang 6 809 zł (7 dni, śniadania). X–XII pora deszczowa – bez szacunku. |
| Wyspy Perhentian (Long Beach / Teluk Pauh) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| El Nido (Lio / Nacpan), Palawan | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Panglao (Alona / Dumaluan), Bohol | XII–V; wzorzec daleki; baza 9741 zł | śniadania | Itaka III (Warszawa-Okęcie, 8 dni, śniadania): Solea Coast Resort Panglao – 9 449, Bohol Shores – 9 929 zł; 6 dni Bluewater Panglao – 9 909 zł. |
| Lombok, Kuta / Tanjung Aan | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Belle Mare / Palmar | cały rok; wzorzec daleki; baza 8303 zł | AI | Jak Mauritius (wschodnie wybrzeże, hotele nieco droższe). Szacunek. |
| Zanzibar (Paje / Jambiani) | VI–III; wzorzec daleki; baza 6182 zł | AI | Jak Zanzibar (Dongwe na wschodnim wybrzeżu, ok. 10 km od Paje). |
| Nosy Be (Andilana) | VI–XI; wzorzec daleki; baza 9000 zł | AI / 2 posiłki | Itaka: Madagaskar (hotele na Nosy Be, np. Royal Andilana, VOI Andilana Beach) poza styczniem; szacunek w porze suchej. |
| Sal, Santa Maria | cały rok; wzorzec całoroczny (popyt z Polski); baza 4956 zł | AI | Itaka: Oasis Atlantico Belorizonte 4,9/6 – I 5 449, VII 5 749 zł; Rainbow XI: Halos Casa Resort 5,1/6 – 5 982 zł. |
| Sharm el-Sheikh (Naama Bay / Sharks Bay) | cały rok; wzorzec całoroczny (popyt z Polski); baza 2214 zł | AI | Itaka: tylko wyjazdy 4–5-dniowe, Rainbow bez ofert. Szacunek: poziom Marsa Alam −5%; Rainbow Hurghada XII od 1 985 zł (Lemon & Soul 5,3/6). |
| Dubaj (JBR / Palm Jumeirah) | cały rok; wzorzec daleki; baza 3617 zł | śniadania | Rainbow (7 nocy, śniadania): VI Ibis Deira 5,3/6 – 3 328, V Ibis Mall Avenue 5,5/6 – 3 378, III Millennium Al Barsha – 3 781 zł; Itaka: tylko 4–6-dniowe. |
| Muscat (Qurum / Al Mouj) | brak oferty | – | Biura sprzedają Oman jako Salalah i wycieczki objazdowe; wczasów w Maskacie z Polski nie znalazłem (Itaka, Rainbow). |
| Salalah (Hawana Salalah) | X–IV; wzorzec daleki; baza 4685 zł | AI / 2 posiłki | Itaka: I Fanar & Residences 5,5/6 (AI) – 5 919 zł; Rainbow III: Belad Bont Resort 5,3/6 (2 posiłki) – 4 544 zł. |
| Aqaba (Tala Bay) | X–IV; wzorzec daleki; baza 4200 zł | śniadania / 2 posiłki | Rainbow I: Akaba 7 nocy – Al Manara 5 430, Kempinski 5 580 zł (śniadania); „Zamki w piasku z Aqaby” (objazd + wypoczynek, 2 posiłki) 3 650 zł. Itaka bez ofert. Szacunek. |
| Maspalomas / Meloneras, Gran Canaria | cały rok; wzorzec Kanary; baza 4519 zł | AI | Itaka: I Mirador Maspalomas by Dunas 4,8/6 – 4 519 zł. |
| Porto Santo (Vila Baleira / Cabeço da Ponta) | VI–IX; wzorzec letni (tylko sezon czarterów); baza 3500 zł | 2 posiłki | Itaka: Madera X 2026 – Rocamar (2 posiłki, 8 dni, Warszawa) 2 499 zł, VidaMar 2 899 zł; Porto Santo rzadko i tylko latem. Szacunek. |
| Albufeira / Praia da Falésia, Algarve | V–X; wzorzec letni (tylko sezon czarterów); baza 5169 zł | AI | Itaka: VII Club Amarilis 5,0/6 – 5 169 zł (Warszawa-Okęcie); Rainbow: V Club Amarilis 5,2/6 – 3 902, X Golden Club Cabanas 5,1/6 – 4 087 zł. |
| Playa de Muro / Alcúdia, Majorka | IV–X; wzorzec letni (tylko sezon czarterów); baza 4051 zł | AI | Itaka: VII Ilusion Markus Park & Spa 4,8/6 – 4 219 zł; Rainbow IV: Palia Dolce Farniente 5,0/6 – 2 917, Palia Puerto del Sol 4,9/6 – 3 063 zł. |
| San Teodoro (La Cinta / Cala Brandinchi), Sardynia | V–X; wzorzec letni (tylko sezon czarterów); baza 4749 zł | AI | Itaka: VII GH Santina Resort 5,2/6 – 4 749 zł; Rainbow Sardynia VI–IX od 4 137 zł (hotele 4,3/6). |
| San Vito lo Capo, Sycylia | V–X; wzorzec letni (tylko sezon czarterów); baza 4151 zł | AI | Itaka: VII VOI Florio Resort 4,9/6 – 4 939 zł; Rainbow Sycylia: IV Dolcestate 5,0/6 – 2 989, V Himera 5,5/6 – 4 019, IX Antares 5,0/6 – 4 027 zł. |
| Agia Marina / Platanias, Kreta | IV–X; wzorzec letni (tylko sezon czarterów); baza 2648 zł | AI | Itaka: VII Elpida Village 5,0/6 – 3 669, V Golden Bee 4,9/6 – 3 059 zł; Rainbow IX (Heraklion): Apollon 5,2/6 – 2 251, Despo 4,7/6 – 2 280 zł. |
| Faliraki / Kolymbia, Rodos | IV–X; wzorzec letni (tylko sezon czarterów); baza 3025 zł | AI | Itaka: VII Marianna Palace 4,8/6 – 3 969 zł; Rainbow V: Tsampika 4,6/6 – 2 269, Diagoras 5,1/6 – 2 290 zł. |
| Tsilivi / Kalamaki, Zakynthos | V–X; wzorzec letni (tylko sezon czarterów); baza 2724 zł | AI | Rainbow IX: Georgina Inn 4,6/6 – 2 315 zł (last minute); Itaka VII: tylko 4-dniowe (Azure Resort, Tsilivi, 5,1/6 – 3 659 zł za 4 dni). |
| Nikiti / Sarti, Chalkidiki | V–IX; wzorzec letni (tylko sezon czarterów); baza 3093 zł | AI | Rainbow V: Riwiera Olimpijska (obok Chalkidiki) – San Panteleimon 5,1/6 – 2 320 zł; Itaka VII: tylko krótkie wyjazdy. |
| Ölüdeniz / Fethiye | V–X; wzorzec letni (tylko sezon czarterów); baza 2567 zł | AI | Rainbow V: Dalaman – Pasa Garden 2 616 zł; Marmaris VIII: Itaka Tropical Beach 5,3/6 – 3 619, Rainbow Kaya Maris 4,8/6 – 2 644 zł; Itaka Sarıgerme VIII 5 339 zł. Fethiye/Ölüdeniz droższe niż Marmaris. |
| Ksamil / Saranda | VI–IX; wzorzec letni (tylko sezon czarterów); baza 3600 zł | AI | Itaka VII: Albania – Morina Beach (Wlora) 5,6/6 – 3 979 zł (sortowanie domyślne); Rainbow: Durrës, głównie 3–4 noce. Ksamil/Saranda niewidoczne. Szacunek. |
| Słoneczny Brzeg / Nesebyr | V–IX; wzorzec letni (tylko sezon czarterów); baza 3049 zł | AI | Itaka: VII Wela 5,0/6 – 3 049 zł; Rainbow: w sezonie głównie wyjazdy 4-dniowe. |
| Las Terrenas (Playa Bonita), Samaná | XI–IV; wzorzec daleki; baza 8166 zł | AI | Itaka I: Samaná – Bahia Principe El Portillo AI 8 dni (bez oceny). Szacunek: Punta Cana +5%. |
| Varadero | brak oferty | – | Brak ofert Itaki i Rainbow na Kubę w sezonie 2026/27 (sprawdzone I 2027). |
| Cayo Guillermo (Playa Pilar) | brak oferty | – | Brak ofert Itaki i Rainbow na Kubę w sezonie 2026/27. |
| Negril (Seven Mile Beach) | brak oferty | – | Itaka: Jamajka tylko z wylotem z Berlina (XII 2026, Runaway Bay 9 239 zł); z Warszawy i Katowic brak. |
| Nassau (Cable Beach / Paradise Island) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Jan Thiel / Mambo Beach | XI–IV; wzorzec daleki; baza 7500 zł | śniadania | Itaka II: 6 ofert 7-dniowych (bez ocen); Rainbow XI: od ok. 6 100 zł/os. (bez wyżywienia, objazd + pobyt). Szacunek. |
| Antigua (Dickenson Bay) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Rodney Bay (Reduit Beach) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Roatán (West Bay) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| San Andrés (Spratt Bight) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Manuel Antonio (Playa Espadilla) | brak oferty | – | Itaka: Kostaryka tylko jako wycieczka objazdowa (Dzika Kostaryka, 13 479 zł); wczasów brak. |
| Cartagena – Isla Barú (Playa Blanca) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Porto de Galinhas | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Rarotonga (Muri Beach) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Gold Coast (Broadbeach / Surfers Paradise) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Whitsundays (Hamilton Island, Catseye Beach) | brak oferty | – | Polskie biura nie sprzedają tu wczasów z wylotem z Polski (najwyżej wycieczki objazdowe albo pakiety na liniach rejsowych bez stałej oferty). |
| Durrës (plaża Golem / Shkëmbi i Kavajës) | V–X; wzorzec letni (tylko sezon czarterów); baza 3500 zł | AI | Itaka VI: Durrës tylko 4-dniowe (Fafa Premium 5,1/6 – 2 609, Grint 5,3/6 – 2 749 zł); 8 dni we Wlorze: Morina Beach 5,6/6 – 3 549 zł (VI); Rainbow: Durrës 4–5 dni. Szacunek 7 nocy. |
| Manama (Bahrajn) | brak oferty | – | Rainbow: tylko objazd „Arabskie Dynastie” (Katar, Bahrajn, Arabia Saudyjska, 12 229 zł); Itaka bez ofert w Bahrajnie. |
| Salvador (Barra / Rio Vermelho), Bahia | brak oferty | – | Itaka: Salvador tylko z wylotem z Berlina (Iberostar Waves Bahia, 6 dni, od 9 069 zł); z Polski brak. |
| Cumbuco (Fortaleza), Ceará | brak oferty | – | Itaka i Rainbow: brak wczasów w Fortalezie i Cumbuco. |
| Istria (Rovinj / Poreč) | V–X; wzorzec letni (tylko sezon czarterów); baza 2608 zł | AI / 2 posiłki | Rainbow (samolot, 7 nocy): VI Narcis (Rabac, AI) – 3 297 zł (Warszawa), IX Hedera (2 posiłki) – 2 217 zł; ocen nie podano. Itaka: Istria głównie dojazd własny. |
| Split (Dalmacja Środkowa) | V–X; wzorzec letni (tylko sezon czarterów); baza 2569 zł | 2 posiłki | Rainbow IX (samolot, Katowice): Makarska Riwiera – Sunce 5,0/6, 2 posiłki – 2 184 zł; Riwiera Kastelańska (obok Splitu) Villa Penava 4,5/6 bez wyżywienia – 1 884 zł. Itaka: Dalmacja samolotem tylko 4-dniowe. |
| Budva (Riwiera Budvańska) | V–X; wzorzec letni (tylko sezon czarterów); baza 3456 zł | śniadania | Rainbow V (Warszawa): Lusso Mare (Budva) 5,2/6, śniadania – 2 592 zł; Otrant (Ulcinj) 5,2/6 AI IV – 3 096 zł; Apartamenty Palace Budva bez wyżywienia VI – 1 880 zł. |
| El Alamein (Riwiera Śródziemnomorska) | V–X; wzorzec letni (tylko sezon czarterów); baza 5625 zł | AI | Itaka (Warszawa-Okęcie, 8 dni): V Kynd 01 5,3/6 – 4 529 zł, IX Rixos Premium Alamein 5,5/6 – 5 849 zł; X Jaz Viva Casa Maza (Katowice, bez oceny) – 4 219 zł. Rainbow bez ofert. |
| Kololi (Senegambia Strip) | XI–IV; wzorzec daleki; baza 3949 zł | śniadania | Rainbow (9 dni / 7 nocy): III Holiday Beach Club 4,5/6 – 3 831, XI Ocean Bay 4,9/6 – 4 613 zł (Warszawa), XII Senegambia 5,4/6 – 4 536 zł; AI: Palma Rima 4,6/6 III – 5 061 zł. |
| Attyka – Riwiera Ateńska (Glyfada / Vouliagmeni) | brak oferty | – | Riwiera Ateńska niewidoczna w ofertach Rainbow (brak regionu) i Itaki; Ateny tylko w objazdach i city breakach. |
| Samos (Pythagoreio / Kokkari) | V–X; wzorzec letni (tylko sezon czarterów); baza 3047 zł | śniadania | Rainbow (7 nocy, ocen nie podano): V Kokkari Beach (śniadania, Warszawa) – 2 999, VI Mykali (śniadania, Katowice) – 2 681 zł; AI: Arion VI – 3 934 zł. |
| Batumi (Adżaria) | V–X; wzorzec letni (tylko sezon czarterów); baza 4668 zł | śniadania | Rainbow V (7 nocy, Poznań i 2 inne lotniska): Aqua Batumi 4,7/6 – 3 501, Ire Palace 4,6/6 – 3 575 zł (śniadania). |
| Barcelona (plaże Barceloneta / Costa del Maresme) | V–X; wzorzec letni (tylko sezon czarterów); baza 3745 zł | AI | Rainbow Costa del Maresme / Costa Brava (ok. 50 km od Barcelony, 7 nocy, Katowice/Kraków): V Oasis Park Splash 4,7/6 – 2 818, IX HTop Jadhe 5,2/6 – 3 183 zł (AI). Wczasów w samej Barcelonie biura nie mają. |
| Costa Blanca (Benidorm) | cały rok; wzorzec całoroczny (popyt z Polski); baza 3300 zł | AI | Itaka: samolotem tylko 4–6 dni (Meliá Benidorm 5,4/6, 5 dni XII – 2 689 zł; BCL Levante Club 5,5/6, 5 dni XI – 3 009 zł); 8 dni tylko z dojazdem własnym. Rainbow: tylko objazd. Szacunek 7 nocy. |
| Costa del Sol (Torremolinos / Benalmádena) | IV–X; wzorzec letni (tylko sezon czarterów); baza 5169 zł | AI | Rainbow (7 nocy): X Parasol by Dorobe 4,9/6 – 3 877, X Palia La Roca 5,2/6 – 3 886, V Palia Las Palomas 5,0/6 – 4 197 zł (AI); 2 posiłki: V Playacalida 5,4/6 – 3 116 zł. |
| Doha | brak oferty | – | Itaka: tylko 4-dniowe (Hilton Salwa Beach AI 5,6/6 – 5 699, Sharq Village 5,9/6 – 5 899 zł); Rainbow: tylko objazd. Brak wczasów 7 nocy. |
| Agadir | cały rok; wzorzec Kanary; baza 2690 zł | AI | Rainbow XII (Katowice): Allegro Agadir 5,2/6 – 2 905, Iberostar Waves Founty Beach 5,5/6 – 3 395 zł (AI); śniadania: III Anezi Tower 4,8/6 – 2 677 zł. |
| Saïdia (wybrzeże śródziemnomorskie) | V–X; wzorzec letni (tylko sezon czarterów); baza 4272 zł | AI | Rainbow (Katowice, 7 nocy): VI Iberostar Waves Saidia 5,2/6 – 3 759, V Be Live Collection Saidia 5,1/6 – 3 764 zł (AI). |
| Puerto Vallarta (Zatoka Banderas) | brak oferty | – | Itaka: Meksyk tylko Jukatan (wylot z Berlina lub Wrocławia); wybrzeże Pacyfiku bez oferty z Polski. |
| Bocas del Toro (Isla Colón) | brak oferty | – | Rainbow: Bocas del Toro tylko w objazdach (od 11 280 zł, 10 dni); wczasów brak. |
| Playa Blanca (Río Hato, wybrzeże Pacyfiku) | brak oferty | – | Rainbow: Panama tylko objazdy; Itaka bez ofert. Wczasy w Playa Blanca sprzedają czeskie biura z Pragi. |
| Azory (São Miguel, Ponta Delgada) | brak oferty | – | Rainbow: Azory tylko objazdy (od 4 923 zł, 8 dni, śniadania); Itaka bez ofert pobytowych. |
| Saly (Petite Côte) | XI–IV; wzorzec daleki; baza 6855 zł | AI | Itaka III (Warszawa-Okęcie, 8 dni): Riu Baobab (Pointe Sarène, ok. 25 km od Saly, AI, bez oceny) – 6 649 zł. Rainbow: Senegal tylko objazdy (od 4 978 zł). |
| Pattaya / Jomtien | cały rok; wzorzec daleki; baza 5178 zł | śniadania | Rainbow XI (9 dni / 7 nocy, Poznań): Cholchan Pattaya 4,4/6 – 4 660, Bayphere 4,9/6 – 5 247, Siam Bayshore 5,0/6 – 5 928 zł (śniadania). V–X szacunek (loty rejsowe). |
| Sousse / Port El Kantaoui | cały rok; wzorzec całoroczny (popyt z Polski); baza 2187 zł | AI | Rainbow (7 nocy, AI): X Riviera 4,5/6 – 2 078 zł (Katowice), I IBEROSTAR Selection Diar El Andalous 5,4/6 – 2 173 zł (Warszawa), X Golf Residence 4,7/6 – 2 198 zł. |
| Bodrum (półwysep Bodrum) | IV–X; wzorzec letni (tylko sezon czarterów); baza 3088 zł | AI | Itaka (8 dni): V Tiana Beach 4,4/6 – 2 769, IX Delta Marriott 4,6/6 – 3 629 zł; Rainbow V: Bitez Garden Life 4,4/6 – 2 316 zł (AI). |
| Kuşadası | IV–X; wzorzec letni (tylko sezon czarterów); baza 4172 zł | AI | Itaka V (Katowice, 8 dni): Odelia Resort 4,7/6 – 3 129, Proxima 5,6/6 – 3 269 zł (AI). Rainbow Riwiera Egejska (bez podanych miejscowości) od ok. 2 000 zł. |
| Isla Margarita (Playa El Agua / Pampatar) | XI–IV; wzorzec daleki; baza 9214 zł | AI | Rainbow XII (Katowice, 9 dni / 7 nocy): LD Palm Beach 5,1/6 AI – 10 135, Costa Caribe 4,8/6 AI – 10 237 zł; Paradise Oasis 5,1/6 (śniadania) – 10 061 zł. |
| Mui Ne (Phan Thiet) | XI–IV; wzorzec daleki; baza 6414 zł | śniadania / AI | Rainbow XI (Katowice, 9 dni / 7 nocy, śniadania): Canary Beach 4,9/6 – 5 773, Novela 5,0/6 – 5 823 zł; Itaka XI (Warszawa, AI): Asteria Mui Ne 5,3/6 – 6 499 zł. |
| Nha Trang | I–IX; wzorzec daleki; baza 6414 zł | śniadania | Nha Trang niewidoczne w Rainbow i Itace; Coral Travel XII: December 9,8/10, 10 nocy – ok. 5 700 zł/os. Szacunek: poziom Mui Ne, sezon suchy I–IX. |
| Apulia (Monopoli / Polignano a Mare) | V–X; wzorzec letni (tylko sezon czarterów); baza 3900 zł | śniadania | Rainbow VII: objazd + wypoczynek (Kalabria, Bari, Apulia) 4,1/6 – 3 862 zł; Itaka: Riva Marina Resort 5,3/6, 4 dni IV – 2 379 zł. Szacunek 7 nocy. |
| Kampania (Sorrento / Zatoka Neapolitańska) | V–X; wzorzec letni (tylko sezon czarterów); baza 3248 zł | 2 posiłki | Rainbow IX (Katowice, 7 nocy): Hotel Ancora (Pontecagnano) 4,4/6 – 2 761 zł, Cerere 5,0/6 – 4 034 zł (2 posiłki); Itaka V: „Neapol na lato” 4,8/6 – 3 949 zł. |
| Rimini (Riwiera Adriatycka) | brak oferty | – | Rimini w ofercie biur głównie z dojazdem autokarowym lub własnym; wczasów samolotowych 7 nocy nie znalazłem (Rainbow: Emilia-Romania tylko objazd). |

## Do przeglądu

1. **Turcja (Alanya)** – szacunek dla 4★; Itaka lato 2027 jeszcze niepełne, Rainbow 3★ od ok. 1 700–2 200 zł.
2. **Szacunki bez odczytu**: Sharm el-Sheikh, Alanya, Santorini, Porto Santo, Ksamil, Koh Samui, Trincomalee, Nusa Dua, Hoi An, Malediwy, Belle Mare, Seszele, Las Terrenas, Aruba, Curaçao, Nosy Be, Akaba.
3. **Najtańsza oferta wyznacza cały rok**: jeden tani odczyt (np. Rainbow Marsa Alam XII 2 330 zł) obniża wszystkie miesiące według wzorca; najtańsza Itaka w I to 2 869 zł.
4. **Dalekie kierunki ze śniadaniami lub 2 posiłkami** (Tajlandia, Bali, Sri Lanka, Wietnam, Seszele) nie są porównywalne 1:1 z all inclusive.
5. **Sezonowość** to uogólnienie odczytów z kilku kierunków; ceny last minute bywają niższe niż model.

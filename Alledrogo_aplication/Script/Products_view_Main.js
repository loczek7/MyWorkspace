document.addEventListener('DOMContentLoaded', function () {
const params = new URLSearchParams(window.location.search);
const productID = params.get('productID');

const products = [
    {
        productID: 'P001',
        category: ['Elektronika', 'Home'],
        img: [ './img_product_page/ADYY_1_201811098627323.jpg','./img_product_page/laptop1.webp','./img_product_page/laptop2.webp','./img_product_page/laptop3.webp','./img_product_page/laptop4.webp','./img_product_page/laptop2.webp','./img_product_page/laptop3.webp','./img_product_page/dysk.png','./img_product_page/dell.png'],
        title: 'Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD <br>120Hz Win11 Silver',
        Price: ['2999,','99 zł'],
        newPrice: '2999,99 zł',
        Addons: '316,16 zł',
        Sprice: ['3316,','15 zł'],
        AddonsDescription: ['Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD <br> 15,6" FHD 120Hz Win11 Silver','Przenośny zewnętrzny dysk SSD 1TB KINGSTON <br> XS1000R USB3.2 Red'],
        link:['Allegro','Elektronika','Komputery','Laptopy','Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD...'],
        stock: 10,
        description: ["Stan" , "Nowy","Faktura","Wystawiam fakturę VAT","Marka","Dell","Stan opakowania","oryginalne","Model","Inspiron 15 3520 i5 Silver Win11","Typ","standardowy","Układ klawiatury","US international (qwerty)","Kod producenta","3520-9997"],
        description2: [
          "Dzisiejszy projekt przyszłości - DELL Inspiron 15 3520", 
          "To urządzenie zapewnia wysoką wydajność i ciche działanie. Zostało wyposażone w wydajny procesor i szybki dysk SSD PCIe. Korzystaj z dużych klawiszy i touchpada, które ułatwiają nawigację po treściach i w oprogramowaniu ComfortView. To rozwiązanie z certyfikatem TUV Rheinland ograniczające emisję szkodliwego niebieskiego światła. Dzięki temu możesz korzystać z urządzenia przez długi czas bez nadwyrężania wzroku. Ponadto możesz korzystać z wyświetlacza FHD z elegancką, wąską obwódką z trzech stron.",
          
          "Microsoft Windows 11 Home", 
          "System Windows 11 został zaprojektowany z myślą o intuicyjności, personalizacji i ogromnych możliwościach. Dzięki niemu łatwiej utrzymać porządek, sprawnie przełączać się między zadaniami i płynnie uruchamiać gry. Niezależnie od tego, co planujesz, znajdziesz funkcję lub narzędzie stworzone, by ułatwić codzienne działania i uczynić je jeszcze bardziej wyjątkowymi.",
          
          "Nowoczesny Design", 
          "Dzięki wbudowanej kamerze zawsze będziesz wyglądać świetnie i czuć się pewnie. Twój komputer stacjonarny został zaprojektowany z myślą o codziennym użytkowaniu. Wyposażono go w małe gumowe nóżki oraz ochronne elementy zawiasu, które zapobiegają ślizganiu się i zapewniają większą stabilność na twardych powierzchniach.",
          
          "Procesor nowej generacji", 
          "Intel Core i5-1235U 10 rdzeni, 12 wątków, do 3.30 / 4.40 GHz, 12 MB", 
          "Intel Core i5-1235U to 10-rdzeniowy procesor, który osiąga maksymalną częstotliwość taktowania do 4,4 GHz, co pozwala mu bez trudu poradzić sobie z wymagającymi zadaniami produktywności i równoczesnym przetwarzaniem wielu procesów. Doświadcz znacznego wzrostu wydajności i wyjątkowo płynnej pracy. Pracuj, twórz i edytuj w swoim tempie dzięki szybkiemu procesorowi Intel.",
          
          "Niesamowity dźwięk", 
          "Będziesz pewny, że Twoje słowa będą doskonale słyszalne, dzięki dwóm wbudowanym mikrofonom z technologią sztucznej inteligencji, która skutecznie redukuje hałas tła. Dodatkowo głośniki z funkcją Waves MaxxAudio® Pro gwarantują wyraźny dźwięk i odpowiednią głośność, dzięki czemu każde słowo będzie brzmiało czysto i wyraźnie."
        ],
        description3: [
          "Procesor:", "Intel Core i5-1235U (10 rdzeni, 12 wątków, 3.30-4.40 GHz, 12MB cache)",
          "Pamięć:", "RAM 32 GB (DDR4, 2666 MHz)",
          "Pojemność dysku SSD:", "1 TB",
          "Karta graficzna:", "Intel Iris Xe Graphics",
          "Typ ekranu:", "Matowy, LED, WVA",
          "Przekątna ekranu:", '15,6"',
          "Rozdzielczość ekranu:", "1920 x 1080 (Full HD)",
          "Dźwięk:", "Wbudowane głośniki stereo, Wbudowany mikrofon",
          "Złącza:", "USB 2.0 - 1 szt., USB 3.2 Gen. 1 - 2 szt., USB 3.2 Gen. 1 - 2 szt., HDMI 1.4 - 1 szt., DC-in (wejście zasilania) - 1 szt.",
          "Podświetlana klawiatura:", "Nie",
          "Pojemność baterii:", "3-komorowa, 3467 mAh",
          "System operacyjny:", "Microsoft Windows 11 Home",
          "Łączność:", "Wi-Fi 6, Moduł Bluetooth 5.2"
        ]
        
    },
    {
        productID: 'P002',
        category: 'Elektronika',
        img: ['./img_product_page/ps5.webp','./img_product_page/ps51.png','./img_product_page/ps52.png','./img_product_page/pad.png','./img_product_page/ps54.png','./img_product_page/ps52.png','./img_product_page/ps51.png','./img_product_page/sony-lego-horizon-adventure-gra-na-ps5,150919824409_7.webp',''],
        title: 'Konsola Sony PlayStation 5 Pro 2TB PS5 Digital Bez Napędu',
        Price: ['2199,','99 zł'],
        newPrice: '2199,99 zł',
        Addons: '279,99 zł',
        Sprice: ['2479,','98 zł'],
        AddonsDescription: ['Konsola Sony PlayStation 5 Pro 2TB <br>PS5 Digital Bez Napędu','Klucz wirtualny do gry <br>LEGO Horizon Adventure'],
        link:['Allegro','Elektronika','Konsole i automaty','Sony PlayStation 5 (PS5)','Konsola PlayStation 5 Pro'],
        stock: 5,
        description: ["Stan", "Nowy","Faktura", "Wystawiam fakturę VAT","Waga produktu z opakowaniem jednostkowym", "5.035 kg","EAN (GTIN)", "0711719577478","Kod producenta", "CFI-2016","Wersja", "PlayStation 5 Pro","Informacje o bezpieczeństwie", "CE",'',''],
        description2: [
          "2 TB pamięci masowej", 
          "Dzięki 2 TB pamięci SSD możesz błyskawicznie zacząć grać w swoje ulubione gry. Konsola Sony PlayStation 5 Pro jest wyposażona w ulepszony procesor graficzny, który ma aż o 67% więcej jednostek obliczeniowych niż standardowy model PS5 oraz o 28% szybszą pamięć.Dzięki temu możesz cieszyć się jeszcze płynniejszą rozgrywką w rozdzielczości 4K przy wyższej liczbie klatek na sekundę, a także krótszymi czasami ładowania. Dodatkowo, zaawansowany system chłodzenia zapewnia stabilną wydajność nawet podczas najbardziej wymagających sesji gamingowych.",
          
          "Łączność bezprzewodowa na zupełnie nowym poziomie", 
          "PS5 Pro obsługuje rozszerzone możliwości bezprzewodowego Internetu i większą przepustowość, zwiększając szybkość transmisji dzięki IEEE 802.11be i zgodnemu routerowi, co oznacza, że podczas gry online możesz zauważyć zmniejszone opóźnienie i większą stabilność.",
          
          "PS5 ProGame Boost i wsteczna kompatybilność.",
          "Na konsoli PS5 Pro można grać w ponad 8500 gier na PS4™. Dzięki funkcji Game Boost w wersji na PS5 Pro będziesz cieszyć się większą, bardziej płynną szybkością klatek w niektórych z najlepszych gier na konsole PS4 i PS5.",
          
          "Kontroler bezprzewodowy DualSense",'', 
          "Wykorzystaj moc PS5 Pro dzięki niesamowitym funkcjom dotykowym innowacyjnego kontrolera bezprzewodowego DualSense. Grając za pomocą kontrolera bezprzewodowego DualSense, możesz korzystać z efektów dotykowych w wybranych grach na PS5. Poznaj możliwości adaptacyjnych efektów „Trigger” w wybranych tytułach na PS5. Dzięki precyzyjnym efektom dotykowym poczujesz każdy ruch, wstrząs i napięcie, co sprawi, że rozgrywka stanie się jeszcze bardziej immersyjna. Dodatkowo, wbudowany mikrofon i głośnik w kontrolerze DualSense pozwolą Ci lepiej komunikować się z drużyną oraz doświadczyć dźwięku w zupełnie nowy sposób.",
          
          "Stworzone z myślą o błyskawicznej prędkości", 
          "Zainstalowane na konsoli PS5 gry będą ładować się w mgnieniu oka. Dzięki niestandardowej integracji systemów konsoli PS5 Pro dane z dysku SSD są odczytywane z zawrotną szybkością, co daje twórcom gier nieosiągalne dotąd możliwości. Najdrobniejsze szczegóły ożywają na ekranie telewizora 4K w zgodnych grach na PS5."
        ],
        description3: [
          "Procesor:", "8 rdzeni AMD Zen 2 - do 3.9 GHz",
          "Pamięć:", "RAM 16 GB",
          "Chip graficzny:", "AMD RDNA 3 33,5 TFLOPS",
          "Wyposażenie:", "Kontroler w zestawie",
          "Odtwarza pliki wideo (filmy):", "tak",
          "Wi-Fi:", "tak",
          "Bluetooth:", "tak",
          "Pamięć:", "2 TB",
          "Złącza:", "Wyjście wideo - Port HDMI OUT, wsparcie telewizorów 4K 120 Hz, telewizorów 8K, VRR (obsługiwane przez HDMI 2.1). Dźwięk - „Tempest” 3D AudioTech",
          "Gry w zestawie:", "Astro's Playroom",'Napęd optyczny:','4K UHD Blu-ray','Moc obliczeniowa:','10,28 TFLOPS','Rozszerzenie pamięci na dane:','Slot NVME SSD'
        ]
        
    },
    {
        productID: 'P003',
        category: 'Elektronika',
        img: ['./img_product_page/Smartfon-APPLE-iPhone-15-128GB-5G-6.1-Niebieski-front-tyl.jpg','./img_product_page/ip15.jpg','./img_product_page/ip152.jpg','./img_product_page/ip153.jpg','./img_product_page/ip154.jpg','./img_product_page/ip15.jpg','./img_product_page/ip152.jpg','./img_product_page/Apple-Beats-Studio-Buds-douszne-sluchawki-bezprzewodowe-z-redukcja-halasu-biale-22605-680x680.webp',''],
        title: 'Smartfon Apple iPhone 15 128 GB 5G Blue',
        Price: ['2299,','99 zł'],
        newPrice: '2299,99 zł',
        Addons: '649,00 zł',
        Sprice: ['2948,','99 zł'],
        AddonsDescription: ['Smartfon Apple iPhone 15 <br> 128 GB 5G Blue','Apple Beats Studio Buds douszne słuchawki <br> bezprzewodowe z redukcją hałasu - białe'],
        link: ['Allegro','Elektronika','Telefony i Akcesoria','Smartfony i telefony kamórkowe','Smartfon Apple iPhone 15 128 GB 5G niebieski'],
        stock: 3,
        description: ["Stan", "Nowy","Faktura", "Wystawiam fakturę VAT","Marka telefonu", "Apple","Model telefonu", "iPhone 15","Kod producenta", "MTP43SX/A","Typ", "Smartfon","EAN (GTIN)", "0195949036521","Kolor", "niebieski"],
        description2: [
          "Nowe portrety. Fokus, pokus, pstryk i łał.", 
          "Portrety Twojego autorstwa będą zachwycać dzięki precyzyjnym detalom i intensywnym barwom. Teraz możesz jednym stuknięciem zmienić punkt ostrości na innym obiekcie – nawet po wykonaniu zdjęcia. To prawdziwa magia. Chcesz uchwycić ulotny moment? Nie musisz ręcznie przełączać się na tryb Portret. iPhone 15 automatycznie zapisze informacje o głębi ostrości, gdy fotografujesz człowieka, kota lub psa. Dzięki temu możesz od razu cieszyć się zdjęciem z pięknie rozmytym tłem albo dodać ten efekt później w aplikacji Zdjęcia.",
          
          "Przybliż zbliżenie.",
          "Dzięki zoomowi 2x o jakości optycznej możesz uchwycić idealny portret, nawet bez podchodzenia blisko do fotografowanego obiektu. A jeśli to wciąż za mało, płynny zoom pozwoli Ci jeszcze bardziej przybliżyć obraz, zachowując wysoką jakość. Bez względu na to, czy fotografujesz bliskich, zwierzęta czy krajobrazy, każdy detal pozostanie ostry i pełen głębi. Zaawansowana technologia przetwarzania obrazu dba o naturalne kolory i wyrazisty kontrast, dzięki czemu Twoje zdjęcia zawsze wyglądają imponująco.",
          
          "Photonic Engine. Fantastyczne fotki.",
          "Nowy Photonic Engine sprawia, że portrety wyglądają jeszcze lepiej. Wykorzystuje najwyższej jakości piksele z ultrawysokiej rozdzielczości i łączy je ze zdjęciem zoptymalizowanym pod kątem światła. Efektem jest obraz o rozdzielczości 24 MP – dwa razy większej niż standardowo, a jednocześnie w pliku na tyle kompaktowym, że bez problemu go przechowasz i udostępnisz. Idealne rozwiązanie na codzienne fotografowanie.",
          
          "Czip A16 Bionic. Megamoc Pro.",'',
          "Czip A16 Bionic napędza przeróżne zaawansowane rozwiązania. To dzięki niemu możesz robić zdjęcia 24 MP i jeszcze lepsze portrety z artystycznym rozmyciem tła. Jego moc odpowiada też za izolowanie głosu podczas połączeń telefonicznych, co sprawia, że rozmowy są jeszcze wyraźniejsze, oraz za niezwykłą płynność gier o intensywnej grafice. Wszystko to działa z wyjątkową energooszczędnością, co przekłada się na dłuższy czas pracy na baterii – nawet przy wymagających zadaniach. Do tego dochodzi błyskawiczne przetwarzanie danych i większa responsywność systemu, dzięki czemu codzienne korzystanie z iPhone’a jest jeszcze płynniejsze. Wiadomo dlaczego: A16 Bionic zaczynał karierę od modeli Pro i teraz wnosi najwyższą wydajność do Twoich rąk.",
          
          "USB-C. Kompatybilność.",
          "Nowe złącze USB-C pozwala ładować Maca i iPada tym samym przewodem, którym ładujesz iPhone’a 15. A nawet ładować Apple Watch lub AirPods bezpośrednio z iPhone’a 15. Żegnajcie, kłęby kabli. Teraz jedno złącze wystarczy do wielu urządzeń, co sprawia, że Twoje życie staje się prostsze i bardziej zorganizowane. Złącze USB-C to nie tylko wygoda, ale i szybkie ładowanie, które zaoszczędzi Ci czas. Niezależnie od tego, gdzie jesteś – wszystko, co potrzebujesz, mieści się w jednym kablu."
        ],
        description3: [
          "Wyświetlacz:", "6.1\", 2532 x 1170px, OLED, Super Retina XDR",
          "Pamięć wbudowana:", "128 GB",
          "Aparat:", "Tylny 48 Mpx + 12 Mpx, Przedni 12 Mpx",
          "Model procesora:", "Apple A16 Bionic",
          "Liczba rdzeni procesora:", "Sześciordzeniowy",
          "System operacyjny:", "iOS",
          "Wersja systemu:", "iOS 17",
          "NFC:", "Tak",
          "5G:", "Tak",
          "Kolor obudowy:", "Niebieski",'Gwarancja:','12 miesięcy','Ładowarka w zestawie:','Nie','Funkcje dodatkowe:','Barometr, Czujnik światła, Czujnik zbliżeniowy, Face ID, Przyspieszeniomierz, Żyroskop'
        ]
        
    }
];

const product = products.find(p => p.productID === productID);

if (product) {
    const isMobile = window.innerWidth <= 450;
    if (isMobile) {
      document.getElementById('product-container').innerHTML =  `
<!-- Header Section -->
<section class="header">
  <div class="up-section">
      <div class="in-section">
          <a class="logo speak" href="Alledrogo_main_page.html">alledrogo</a>
          <div class="search-container">
              <input class="searchbar speak" type="text" placeholder="czego szukasz?"><!--Tutaj nie działa jeszcze speak-->
              <span class="search-label speak" id="searchLabel" tabindex="0">szukaj wielu</span>

              <span class="category speak" id="searchLabelCategory" tabindex="0">
                  Wszystkie kategorie
                  <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu-category" id="dropdownMenuSearchLabelCategory">
                      <a href="#" class="speak">Allegro days</a>
                      <hr>
                      <a href="#" class="speak">Dom i Ogród</a>
                      <a href="#" class="speak">Diecko</a>
                      <a href="#" class="speak">Elektronika</a>
                      <a href="#" class="speak">Firma i usługi</a>
                      <a href="#" class="speak">Kolekcje i sztuka</a>
                      <a href="#" class="speak">Kultura i rozrywka</a>
                      <a href="#" class="speak">Moda</a>
                      <a href="#" class="speak">Motoryzacja</a>
                      <a href="#" class="speak">Nieruchomości</a>
                      <a href="#" class="speak">Sport i Turystyka</a>
                      <a href="#" class="speak">Supermarket</a>
                      <a href="#" class="speak">Uroda</a>
                      <a href="#" class="speak">Zdrowie</a>
                      <hr>
                      <a href="#" class="speak">Cele charytatywne</a>
                      <a href="#" class="speak">Organizacje charytatywne</a>
                      <a href="#" class="speak">Sprzedawcy</a>
                      <a href="#" class="speak">Zakończone</a>
                      
                  </div>
              </span>
              <button class="search-button speak">SZUKAJ</button>
              <div class="icons">
                <a href="#"><img src="./svg/delivery.svg" data-light="./svg/delivery.svg" data-dark="./svg/deliverylight.svg" alt="Przesyłki" class="icon-look"></a>
                <a href="#"><img src="./svg/fav.svg" data-light="./svg/fav.svg" data-dark="./svg/favlight.svg" alt="Ulubione" class="icon-look"></a>
                <a href="#"><img src="./svg/chat.svg" data-light="./svg/chat.svg" data-dark="./svg/chatlight.svg" alt="Czat" class="icon-look"></a>
                <a href="#"><img src="./svg/notify.svg" data-light="./svg/notify.svg" data-dark="./svg/notifylight.svg" alt="Powiadomienia" class="icon-look"></a>
                <a href="#"><img src="./svg/orders.svg" data-light="./svg/orders.svg" data-dark="./svg/orderslight.svg" alt="Mój koszyk" class="icon-look"></a>
            </div>                 
              <span class="user speak" tabindex="0">Moje Allegro
                <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon2" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu" id="dropdownMenu">
                  <a href="#" class="speak">Moje zakupy</a>
                  <a href="#" class="speak">Kup ponownie</a>
                  <a href="#" class="speak">Licytuję</a>
                  <a href="#" class="speak">Ulubione</a>
                  <a href="#" class="speak">Oceń produkty <span class="new">NOWOŚĆ</span></a>
                  <a href="#" class="speak">Oceń sprzedawcę</a>
                  <hr>
                  <a href="#" class="speak">Allegro Smart!</a>
                  <a href="#" class="speak">Kupony i karty podarunkowe</a>
                  <a href="#" class="speak">Smart! Monety</a>
                  <a href="#" class="speak" id="openSecondPopupLink">Ustawienia</a>
                  </div>
                </span>
          </div>  
      </div>
  </div>
<div class="underheader">
  <div class="under-section">
      <span class="category-under speak" id="categoryTrigger" tabindex="0">
          Kategorie
          <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon3" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
          <div class="dropdown-menu-category-under" id="dropdownMenuCategory">
              <ul class="categories">
                  <!-- Kategorie generowane dynamicznie -->
              </ul>
              <div class="subcategories">
                  <ul id="subCategoriesList">
                      <!-- Podkategorie będą się tutaj wyświetlały -->
                  </ul>
              </div>
          </div>
      </span>
      <div class="cateallegro">
        <span tabindex="0" class="speak"><img src="./svg/Days.svg" alt="Allegro Days" data-light="./svg/Days.svg" data-dark="./svg/Dayslight.svg"> Allegro Days</span>
        <span tabindex="0" class="speak"><img src="./svg/protect.svg" alt="Allegro Protect" data-light="./svg/protect.svg" data-dark="./svg/protectlight.svg"> Allegro Protect</span>
        <span tabindex="0" class="speak"><img src="./svg/sell allegro.svg" alt="Sprzedawaj na Allegro" data-light="./svg/sell allegro.svg" data-dark="./svg/sell allegrolight.svg"> Sprzedawaj na Allegro</span>
        <span tabindex="0" class="speak"><img src="./svg/lowpirce.svg" alt="Gwarancja najniższej ceny" data-light="./svg/lowpirce.svg" data-dark="./svg/lowpircelight.svg"> Gwarancja najniższej ceny</span>
        <span tabindex="0" class="speak"><img src="./svg/3dots.svg" alt="Trzy Kropki ..." data-light="./svg/3dots.svg" data-dark="./svg/3dotslight.svg"></span>
    </div>          
  <span class="smart" tabindex="0">bądź<img src="./svg/smart.svg" alt="bądź smart"></span>
</div>  
</section>

<section class="toptop ">
<a href="#">${product.link[0]}</a><span class="separator"> / </span>
<a href="#">${product.link[1]}</a><span class="separator"> / </span>
<a href="#">${product.link[2]}</a><span class="separator"> / </span>
<a href="#">${product.link[3]}</a><span class="separator"> / </span>
<a href="#" class="current">${product.link[4]}</a>
</section>

<main class="container">
<section class="container-column">
<section class="left-box ">
  <section class="up">
  <p>Stan: <span class="new2">Nowy</span></p>
  <img src="./img_product_page/action-common-share-8f2e34e3c1.svg">
  <img src="./img_product_page/action-common-heart-322d64f02b.svg">
  </section>
  <h1>${product.title}</h1>
  <p class="os">2 osoby kupiły ostatnio</p>
  <img src="${product.img[0]}" class="laptop" id="mainImage">
<section class="galeria">
    <img src="${product.img[0]}" class="mini">
    <img src="${product.img[1]}" class="mini">
    <img src="${product.img[2]}" class="mini">
    <img src="${product.img[3]}" class="mini">
    <img src="${product.img[4]}" class="mini">
    <img src="${product.img[5]}" class="mini">
    <img src="${product.img[6]}" class="mini">
</section>
</section>

<section class="left-box ">
  <h2>Kup razem</h2>
  <section class="bundle">
    <section class="bundle-images">
      <img src="${product.img[0]}">
      <span class="plus">+</span>
      <img src="${product.img[7]}">
    </section>
    <section class="bundle-info">
      <p class="productx">
      <a href="#">${product.AddonsDescription[0]}</a>
      <span class="price">${product.newPrice} zł</span>
      </p>
      <p class="productx">
      <a href="#">${product.AddonsDescription[1]}</a>
      <span class="price">${product.Addons}</span>
      </p>
      <p class="total-price">cena razem <span class=big>${product.Sprice[0]}</span><span class=small>${product.Sprice[1]}</span></p>
      <button class="add-to-cart">DODAJ ZESTAW DO KOSZYKA</button>
    </section>
  </section>
</section>
<section class="left-box ">
    <h2>Parametry</h2>
    <section class="product-info">
      <section class="row">
      <span class="label">${product.description[0]}</span>
      <span class="value highlight">${product.description[1]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[2]}</span>
      <span class="value">${product.description[3]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[4]}</span>
      <span class="value highlight">${product.description[5]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[6]}</span>
      <span class="value">${product.description[7]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[8]}</span>
      <span class="value">${product.description[9]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[10]}</span>
      <span class="value">${product.description[11]}</span>
      </section>
      <seection class="row">
      <span class="label">${product.description[12]}</span>
      <span class="value">${product.description[13]}</span>
      </seection>
      <section class="row">
      <span class="label">${product.description[14]}</span>
      <span class="value">${product.description[15]}</span>
      </section>
      <section class="full-width-line">
      <a href="#">WSZYSTKIE PARAMETRY</a>
      </section>
    </section>
</section>

<section class="left-box ">
  <h2>Opis</h2>
  <h3>Notebook DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD W11</h3>
  <div class="product-container">
    <div class="product-text">
        <h2>${product.description2[0]}</h2>
        <p>
        ${product.description2[1]}
        </p>
    </div>
    <div class="product-image">
      <img src="${product.img[0]}" >
    </div>
</div>
<div class="product-container">
  <div class="product-text">
      <h2 class="large">${product.description2[2]}</h2>
      <p>
      ${product.description2[3]}
      </p>
  </div>
  <div class="product-image">
    <img src="${product.img[1]}"class="one" >
  </div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[4]}</h2>
    <p>
    ${product.description2[5]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[2]}"class="one" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[6]}</h2>
    <h2 class="large">${product.description2[7]}</h2>
    <p>
    ${product.description2[8]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[3]}"class="two" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[9]}</h2>
    <p>
    ${product.description2[10]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[4]}"class="one" >
</div>
</div>

<div class="product-container">
<div class="product-text">
  <h2 class="xlarge">Dane techniczne</h2>
  <li><strong>${product.description3[0]}</strong>${product.description3[1]}</li>
  <li><strong>${product.description3[2]}</strong>${product.description3[3]}</li>
  <li><strong>${product.description3[4]}</strong>${product.description3[5]}</li>
  <li><strong>${product.description3[6]}</strong>${product.description3[7]}</li>
  <li><strong>${product.description3[8]}</strong>${product.description3[9]}</li>
  <li><strong>${product.description3[10]}</strong>${product.description3[11]}</li>
  <li><strong>${product.description3[12]}</strong>${product.description3[13]}</li>
  <li><strong>${product.description3[14]}</strong>${product.description3[15]}</li>
  <li><strong>${product.description3[16]}</strong>${product.description3[17]}</li>
  <li><strong>${product.description3[18]}</strong>${product.description3[19]}</li>
  <li><strong>${product.description3[20]}</strong>${product.description3[21]}</li>
  <li><strong>${product.description3[22]}</strong>${product.description3[23]}</li>
  <li><strong>${product.description3[24]}</strong>${product.description3[25]}</li>
</div>
<div class="product-image">
  <img src="${product.img[8]}"class="dell" >
</div>
</div>
<div class="images">
<img src="${product.img[0]}" >
<img src="${product.img[2]}" >
</div>
<div class="images">
<img src="${product.img[1]}" >
<img src="${product.img[3]}" >
</div>
</section>
</section>

<section class="container-column">
<section class="right-box">
    <p class="od">od xyz.pl</p>
    <section class="info">
      <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
      <span class="divider"></span>
      <p>Firma</p>
      <span class="divider"></span>
      <span class="recommendation">poleca 99,7%</span>
    </section>
    <hr class="full">
    <p class="super">SUPERCENA</p>
    <section class="cena">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
  </section>
  <section class="check ">
    <p>zapłać później z</p>
    <img src="./img_product_page/pay 8.png">
    <p>sprawdź</p>
  </section>
  <p class="os">2 osoby kupiły tę ofertę</p>
  <hr>
  <p class="dostawa">dostawa jutro <span class="do">do 6 miast</span><span class="info-icon">ⓘ</span></p>
  <hr>
  <p class="szt">Liczba sztuk</p>
  <section class="quantity-container">
    <button>-</button>
    <input type="text" value="1" readonly>
    <button>+</button>
    <span class="z">z 21 sztuk</span>
  </section>
<p class="leasing">Masz firmę? Weź leasing</p>
</section>

<section class=" right-box">
  <section class="qwe">
    <img src="./img_product_page/clock.png">
    <p>Jutro u Ciebie do 6 miast</p>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/deliverytruck.png">
    <section class="row">
    <p >Dostawa od 10,99 zł</p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/shield.png" class="shield">
    <section class="row">
    <p>Zwrot za darmo - 14 dni<br><span class="down">Reklamacja | Alledrogo Protect</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/wallet.png">
    <section class="row">
    <p>Metody płatności<br><span class="down">Płać tak, jak lubisz</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
</section>

<section class=" right-box">
  <h2>Inne oferty produktu<span class="info-icon">ⓘ</span></h2>
  <p class="inne">Laptop Dell Inspiron 15 3520 i5 Silver Win11 15,6 " <br>Intel Core i5 32 GB / 1000 GB srebrny</p>
  <p class="nn">NAJTAŃSZE - NOWE</p>
  <section class="cenasm">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">Stan: Nowy</p>
  <hr>
  <p class="nn">NAJSZYBCIEJ</p>
  <section class="cenasm">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">dostawa: pojutrze</p>
</section>

<section class=" right-box">
<p class="sell">Sprzedaż i wysyłka:</p>
<p class="od">od xyz.pl</p>
<section class="infox">
  <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
  <p>Super Sprzedawca</p>
  <span class="divider"></span>
  <p>Firma</p>
</section>
<hr class="full">
<section class="rate">
  <p>99,7%</p>
  <p class="po">kupujących poleciło tego sprzedawcę w<br> ostatnich 12 miesiącach</p>
</section>
<hr class="full">
<p class="teal">Inne przedmioty sprzedającego z kategorii <strong>Laptopy</strong></p>
<hr>
<p class="tealx">Wszystkie przedmioty sprzedającego</p>
<hr class="full">
<section class="infoxy">
  <p>O sprzedającym</p>
  <span class="divider"></span>
  <p>Zadaj pytanie</p>
</section>
</section>
</section>
</main>
<section class="buttons">
    <button class="button">Dodaj do koszyka</button>
    <button class="button">Kup i zapłać</button>
</section> 
<section class="footer-section" id="footer-container"></section>  
  `;
    } else {
      document.getElementById('product-container').innerHTML =  `
      <!-- Header Section -->
<section class="header">
  <div class="up-section">
      <div class="in-section">
          <a class="logo speak" href="Alledrogo_main_page.html">alledrogo</a>
          <div class="search-container">
              <input class="searchbar speak" type="text" placeholder="czego szukasz?"><!--Tutaj nie działa jeszcze speak-->
              <span class="search-label speak" id="searchLabel" tabindex="0">szukaj wielu</span>

              <span class="category speak" id="searchLabelCategory" tabindex="0">
                  Wszystkie kategorie
                  <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu-category" id="dropdownMenuSearchLabelCategory">
                      <a href="#" class="speak">Allegro days</a>
                      <hr>
                      <a href="#" class="speak">Dom i Ogród</a>
                      <a href="#" class="speak">Diecko</a>
                      <a href="#" class="speak">Elektronika</a>
                      <a href="#" class="speak">Firma i usługi</a>
                      <a href="#" class="speak">Kolekcje i sztuka</a>
                      <a href="#" class="speak">Kultura i rozrywka</a>
                      <a href="#" class="speak">Moda</a>
                      <a href="#" class="speak">Motoryzacja</a>
                      <a href="#" class="speak">Nieruchomości</a>
                      <a href="#" class="speak">Sport i Turystyka</a>
                      <a href="#" class="speak">Supermarket</a>
                      <a href="#" class="speak">Uroda</a>
                      <a href="#" class="speak">Zdrowie</a>
                      <hr>
                      <a href="#" class="speak">Cele charytatywne</a>
                      <a href="#" class="speak">Organizacje charytatywne</a>
                      <a href="#" class="speak">Sprzedawcy</a>
                      <a href="#" class="speak">Zakończone</a>
                      
                  </div>
              </span>
              <button class="search-button speak">SZUKAJ</button>
              <div class="icons">
                <a href="#"><img src="./svg/delivery.svg" data-light="./svg/delivery.svg" data-dark="./svg/deliverylight.svg" alt="Przesyłki" class="icon-look"></a>
                <a href="#"><img src="./svg/fav.svg" data-light="./svg/fav.svg" data-dark="./svg/favlight.svg" alt="Ulubione" class="icon-look"></a>
                <a href="#"><img src="./svg/chat.svg" data-light="./svg/chat.svg" data-dark="./svg/chatlight.svg" alt="Czat" class="icon-look"></a>
                <a href="#"><img src="./svg/notify.svg" data-light="./svg/notify.svg" data-dark="./svg/notifylight.svg" alt="Powiadomienia" class="icon-look"></a>
                <a href="#"><img src="./svg/orders.svg" data-light="./svg/orders.svg" data-dark="./svg/orderslight.svg" alt="Mój koszyk" class="icon-look"></a>
            </div>                 
              <span class="user speak" tabindex="0">Moje Allegro
                <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon2" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu" id="dropdownMenu">
                  <a href="#" class="speak">Moje zakupy</a>
                  <a href="#" class="speak">Kup ponownie</a>
                  <a href="#" class="speak">Licytuję</a>
                  <a href="#" class="speak">Ulubione</a>
                  <a href="#" class="speak">Oceń produkty <span class="new">NOWOŚĆ</span></a>
                  <a href="#" class="speak">Oceń sprzedawcę</a>
                  <hr>
                  <a href="#" class="speak">Allegro Smart!</a>
                  <a href="#" class="speak">Kupony i karty podarunkowe</a>
                  <a href="#" class="speak">Smart! Monety</a>
                  <a href="#" class="speak" id="openSecondPopupLink">Ustawienia</a>
                  </div>
                </span>
          </div>  
      </div>
  </div>
<div class="underheader">
  <div class="under-section">
      <span class="category-under speak" id="categoryTrigger" tabindex="0">
          Kategorie
          <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon3" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
          <div class="dropdown-menu-category-under" id="dropdownMenuCategory">
              <ul class="categories">
                  <!-- Kategorie generowane dynamicznie -->
              </ul>
              <div class="subcategories">
                  <ul id="subCategoriesList">
                      <!-- Podkategorie będą się tutaj wyświetlały -->
                  </ul>
              </div>
          </div>
      </span>
      <div class="cateallegro">
        <span tabindex="0" class="speak"><img src="./svg/Days.svg" alt="Allegro Days" data-light="./svg/Days.svg" data-dark="./svg/Dayslight.svg"> Allegro Days</span>
        <span tabindex="0" class="speak"><img src="./svg/protect.svg" alt="Allegro Protect" data-light="./svg/protect.svg" data-dark="./svg/protectlight.svg"> Allegro Protect</span>
        <span tabindex="0" class="speak"><img src="./svg/sell allegro.svg" alt="Sprzedawaj na Allegro" data-light="./svg/sell allegro.svg" data-dark="./svg/sell allegrolight.svg"> Sprzedawaj na Allegro</span>
        <span tabindex="0" class="speak"><img src="./svg/lowpirce.svg" alt="Gwarancja najniższej ceny" data-light="./svg/lowpirce.svg" data-dark="./svg/lowpircelight.svg"> Gwarancja najniższej ceny</span>
        <span tabindex="0" class="speak"><img src="./svg/3dots.svg" alt="Trzy Kropki ..." data-light="./svg/3dots.svg" data-dark="./svg/3dotslight.svg"></span>
    </div>          
  <span class="smart" tabindex="0">bądź<img src="./svg/smart.svg" alt="bądź smart"></span>
</div>  
</section>

<section class="toptop ">
<a href="#">${product.link[0]}</a><span class="separator"> / </span>
<a href="#">${product.link[1]}</a><span class="separator"> / </span>
<a href="#">${product.link[2]}</a><span class="separator"> / </span>
<a href="#">${product.link[3]}</a><span class="separator"> / </span>
<a href="#" class="current">${product.link[4]}</a>
</section>

<main class="container">
<section class="container-column">
<section class="left-box ">
  <section class="up">
  <p>Stan: <span class="new2">Nowy</span></p>
  <img src="./img_product_page/action-common-share-8f2e34e3c1.svg">
  <img src="./img_product_page/action-common-heart-322d64f02b.svg">
  </section>
  <h1>${product.title}</h1>
  <p class="os">2 osoby kupiły ostatnio</p>
  <img src="${product.img[0]}" class="laptop" id="mainImage">
<section class="galeria">
    <img src="${product.img[0]}" class="mini">
    <img src="${product.img[1]}" class="mini">
    <img src="${product.img[2]}" class="mini">
    <img src="${product.img[3]}" class="mini">
    <img src="${product.img[4]}" class="mini">
    <img src="${product.img[5]}" class="mini">
    <img src="${product.img[6]}" class="mini">
</section>
</section>

<section class="left-box ">
  <h2>Kup razem</h2>
  <section class="bundle">
    <section class="bundle-images">
      <img src="${product.img[0]}">
      <span class="plus">+</span>
      <img src="${product.img[7]}">
    </section>
    <section class="bundle-info">
      <p class="productx">
      <a href="#">${product.AddonsDescription[0]}</a>
      <span class="price">${product.newPrice} zł</span>
      </p>
      <p class="productx">
      <a href="#">${product.AddonsDescription[1]}</a>
      <span class="price">${product.Addons}</span>
      </p>
      <p class="total-price">cena razem <span class=big>${product.Sprice[0]}</span><span class=small>${product.Sprice[1]}</span></p>
      <button class="add-to-cart">DODAJ ZESTAW DO KOSZYKA</button>
    </section>
  </section>
</section>
<section class="left-box ">
    <h2>Parametry</h2>
    <section class="product-info">
      <section class="row">
      <span class="label">${product.description[0]}</span>
      <span class="value highlight">${product.description[1]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[2]}</span>
      <span class="value">${product.description[3]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[4]}</span>
      <span class="value highlight">${product.description[5]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[6]}</span>
      <span class="value">${product.description[7]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[8]}</span>
      <span class="value">${product.description[9]}</span>
      </section>
      <section class="row">
      <span class="label">${product.description[10]}</span>
      <span class="value">${product.description[11]}</span>
      </section>
      <seection class="row">
      <span class="label">${product.description[12]}</span>
      <span class="value">${product.description[13]}</span>
      </seection>
      <section class="row">
      <span class="label">${product.description[14]}</span>
      <span class="value">${product.description[15]}</span>
      </section>
      <section class="full-width-line">
      <a href="#">WSZYSTKIE PARAMETRY</a>
      </section>
    </section>
</section>

<section class="left-box ">
  <h2>Opis</h2>
  <h3>Notebook DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD W11</h3>
  <div class="product-container">
    <div class="product-text">
        <h2>${product.description2[0]}</h2>
        <p>
        ${product.description2[1]}
        </p>
    </div>
    <div class="product-image">
      <img src="${product.img[0]}" >
    </div>
</div>
<div class="product-container">
  <div class="product-text">
      <h2 class="large">${product.description2[2]}</h2>
      <p>
      ${product.description2[3]}
      </p>
  </div>
  <div class="product-image">
    <img src="${product.img[1]}"class="one" >
  </div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[4]}</h2>
    <p>
    ${product.description2[5]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[2]}"class="one" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[6]}</h2>
    <h2 class="large">${product.description2[7]}</h2>
    <p>
    ${product.description2[8]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[3]}"class="two" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">${product.description2[9]}</h2>
    <p>
    ${product.description2[10]}
    </p>
</div>
<div class="product-image">
  <img src="${product.img[4]}"class="one" >
</div>
</div>

<div class="product-container">
<div class="product-text">
  <h2 class="xlarge">Dane techniczne</h2>
  <li><strong>${product.description3[0]}</strong>${product.description3[1]}</li>
  <li><strong>${product.description3[2]}</strong>${product.description3[3]}</li>
  <li><strong>${product.description3[4]}</strong>${product.description3[5]}</li>
  <li><strong>${product.description3[6]}</strong>${product.description3[7]}</li>
  <li><strong>${product.description3[8]}</strong>${product.description3[9]}</li>
  <li><strong>${product.description3[10]}</strong>${product.description3[11]}</li>
  <li><strong>${product.description3[12]}</strong>${product.description3[13]}</li>
  <li><strong>${product.description3[14]}</strong>${product.description3[15]}</li>
  <li><strong>${product.description3[16]}</strong>${product.description3[17]}</li>
  <li><strong>${product.description3[18]}</strong>${product.description3[19]}</li>
  <li><strong>${product.description3[20]}</strong>${product.description3[21]}</li>
  <li><strong>${product.description3[22]}</strong>${product.description3[23]}</li>
  <li><strong>${product.description3[24]}</strong>${product.description3[25]}</li>
</div>
<div class="product-image">
  <img src="${product.img[8]}"class="dell" >
</div>
</div>
<div class="images">
<img src="${product.img[0]}" >
<img src="${product.img[2]}" >
</div>
<div class="images">
<img src="${product.img[1]}" >
<img src="${product.img[3]}" >
</div>
</section>
</section>

<section class="container-column">
<section class="right-box">
    <p class="od">od xyz.pl</p>
    <section class="info">
      <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
      <span class="divider"></span>
      <p>Firma</p>
      <span class="divider"></span>
      <span class="recommendation">poleca 99,7%</span>
    </section>
    <hr class="full">
    <p class="super">SUPERCENA</p>
    <section class="cena">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
  </section>
  <section class="check ">
    <p>zapłać później z</p>
    <img src="./img_product_page/pay 8.png">
    <p>sprawdź</p>
  </section>
  <p class="os">2 osoby kupiły tę ofertę</p>
  <hr>
  <p class="dostawa">dostawa jutro <span class="do">do 6 miast</span><span class="info-icon">ⓘ</span></p>
  <hr>
  <p class="szt">Liczba sztuk</p>
  <section class="quantity-container">
    <button>-</button>
    <input type="text" value="1" readonly>
    <button>+</button>
    <span class="z">z 21 sztuk</span>
  </section>
<section class="buttons">
    <button class="button">Dodaj do koszyka</button>
    <button class="button">Kup i zapłać</button>
</section>
<p class="leasing">Masz firmę? Weź leasing</p>
</section>

<section class=" right-box">
  <section class="qwe">
    <img src="./img_product_page/clock.png">
    <p>Jutro u Ciebie do 6 miast</p>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/deliverytruck.png">
    <section class="row">
    <p >Dostawa od 10,99 zł</p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/shield.png" class="shield">
    <section class="row">
    <p>Zwrot za darmo - 14 dni<br><span class="down">Reklamacja | Alledrogo Protect</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/wallet.png">
    <section class="row">
    <p>Metody płatności<br><span class="down">Płać tak, jak lubisz</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
</section>

<section class=" right-box">
  <h2>Inne oferty produktu<span class="info-icon">ⓘ</span></h2>
  <p class="inne">Laptop Dell Inspiron 15 3520 i5 Silver Win11 15,6 " <br>Intel Core i5 32 GB / 1000 GB srebrny</p>
  <p class="nn">NAJTAŃSZE - NOWE</p>
  <section class="cenasm">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">Stan: Nowy</p>
  <hr>
  <p class="nn">NAJSZYBCIEJ</p>
  <section class="cenasm">
    <p>${product.Price[0]}<span class="zl">${product.Price[1]}</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">dostawa: pojutrze</p>
</section>

<section class=" right-box">
<p class="sell">Sprzedaż i wysyłka:</p>
<p class="od">od xyz.pl</p>
<section class="infox">
  <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
  <p>Super Sprzedawca</p>
  <span class="divider"></span>
  <p>Firma</p>
</section>
<hr class="full">
<section class="rate">
  <p>99,7%</p>
  <p class="po">kupujących poleciło tego sprzedawcę w<br> ostatnich 12 miesiącach</p>
</section>
<hr class="full">
<p class="teal">Inne przedmioty sprzedającego z kategorii <strong>Laptopy</strong></p>
<hr>
<p class="tealx">Wszystkie przedmioty sprzedającego</p>
<hr class="full">
<section class="infoxy">
  <p>O sprzedającym</p>
  <span class="divider"></span>
  <p>Zadaj pytanie</p>
</section>
</section>
</section>
</main> 
<section class="footer-section" id="footer-container"></section>  
  `;
  }};
  console.log(product.AddonsDescription[0]);
  const miniImages = document.querySelectorAll('.galeria .mini');
  const mainImage = document.getElementById('mainImage');

  miniImages.forEach(function (miniImage) {
      miniImage.addEventListener('click', function () {
          mainImage.src = miniImage.src;
      });
  });
});

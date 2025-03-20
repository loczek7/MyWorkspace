document.addEventListener("DOMContentLoaded", function () {
    const userMenu = document.querySelector(".user");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const arrowIcon2 = document.querySelector(".arrow-icon2");

    // Otwieranie/zamykanie dropdownMenu
    userMenu.addEventListener("click", function (event) {
        dropdownMenu.classList.toggle("active");
        arrowIcon2.classList.toggle("rotated");
        event.stopPropagation();
    });

    userMenu.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            dropdownMenu.classList.toggle("active");
            arrowIcon2.classList.toggle("rotated");
            event.stopPropagation();
        }
    });

    // Zamknięcie dropdownMenu po kliknięciu poza
    document.addEventListener("click", function (event) {
        if (!userMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            arrowIcon2.classList.remove("rotated");
        }
    });

    // Delegowanie kliknięcia wewnątrz dropdownMenu
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.id === "openSecondPopupLink") {
            event.preventDefault(); // Zapobiega przeładowaniu strony
    
            let existingPopup = document.getElementById("secondPopup");
    
            if (existingPopup) {
                existingPopup.remove(); // Jeśli popup już istnieje, zamknij go
            } else {
                // Dodanie drugiego popupa do dropdownMenu
                dropdownMenu.innerHTML += `
                    <div id="secondPopup" class="popup">
                        <hr>
                        <div class="toggle-container">
                            <a href="#" class="speak">Dark/Light</a>
                            <label class="switch">
                                <input type="checkbox" id="darkModeToggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="toggle-container">
                            <a href="#" class="speak">Czytanie tekstu</a>
                            <label class="switch">
                                <input type="checkbox" id="readingModeToggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                        <a href="#" id="closeSecondPopup">Zamknij</a>
                    </div>
                `;
    
                // Po utworzeniu popupu, przypisz odpowiednie nasłuchiwacze
                const readingModeToggle = document.getElementById('readingModeToggle');
                const darkModeToggle = document.getElementById('darkModeToggle'); // Suwak Dark/Light
                const closeSecondPopup = document.getElementById('closeSecondPopup');
    
                // Funkcja, która sprawdza, czy suwak jest włączony przed użyciem speak()
                function speak(text) {
                    if (readingModeToggle.checked) {  // Sprawdzanie, czy suwak jest włączony
                        window.speechSynthesis.cancel(); // Przerywa aktualne komunikaty
                        let msg = new SpeechSynthesisUtterance(text);
                        msg.lang = "pl-PL";
                        window.speechSynthesis.speak(msg);
                    }
                }
    
                // Obsługa zmiany stanu suwaka czytania
                readingModeToggle.addEventListener('change', function () {
                    if (this.checked) {
                        console.log("Włączono tryb czytania tekstu");
                        speak("Włączono tryb czytania tekstu"); // Gdy suwak włączony, mówienie zostaje aktywowane
                    } else {
                        console.log("Wyłączono tryb czytania tekstu");
                        window.speechSynthesis.cancel(); // Gdy suwak wyłączony, zatrzymaj mówienie
                    }
                });
                
                // Obsługa zmiany stanu suwaka Dark/Light
                darkModeToggle.addEventListener('change', function () {
                    if (this.checked) {
                        setTheme('dark');
                    } else {
                        setTheme('light');
                    }
                });
    
                // Funkcja do ustawienia motywu
                function setTheme(theme) {
                    document.body.className = theme;
                    localStorage.setItem('theme', theme);
                }
    
                // Ustawienie motywu z lokalnej pamięci przy załadowaniu strony
                const savedTheme = localStorage.getItem('theme') || 'light';
                setTheme(savedTheme);
                darkModeToggle.checked = (savedTheme === 'dark');  // Ustawienie stanu suwaka
    
                // Przypisz nasłuchiwacze do elementów w popupie, które mają być odczytywane
                document.querySelectorAll('.speak').forEach(el => {
                    el.addEventListener('focus', () => speak(el.textContent.trim()));  // Odczyt tekstu po fokusu
                    el.addEventListener('mouseover', () => speak(el.textContent.trim())); // Odczyt tekstu po najechaniu myszką
                    el.addEventListener('mouseleave', () => window.speechSynthesis.cancel()); // Przerwanie odczytu przy opuszczeniu
                });
    
                // Obsługa zamknięcia popupu
                closeSecondPopup.addEventListener('click', function (event) {
                    event.preventDefault();
                    document.getElementById("secondPopup").remove();
                });
            }
    
            event.stopPropagation();
        }
    });
    
    

    const searchLabelCategory = document.getElementById("searchLabelCategory");
    const dropdownMenuSearchLabelCategory = document.getElementById("dropdownMenuSearchLabelCategory");
    const arrowIcon = document.querySelector(".arrow-icon");

    const images = ["./img/bannerphoto.png", "./img/bannerphoto2.png", "./img/bannerphoto3.png"];
    let currentIndex = 0;
    const dots = document.querySelectorAll('.dot');

    const imageElement = document.getElementById("imagebanner");
    const changeButton = document.getElementById("arrow-banner");


function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateDots();
    imageElement.src = images[currentIndex]; 
}

function updateDots() {
    dots.forEach((dot, index) => {

        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

changeButton.addEventListener("click", changeImage);

setInterval(changeImage, 3000);

searchLabelCategory.addEventListener("click", function (event) {
    dropdownMenuSearchLabelCategory.classList.toggle("active");
    console.log("Dropdown menu aktywne:", dropdownMenuSearchLabelCategory.classList.contains("active"));
    arrowIcon.classList.toggle("rotated");
    event.stopPropagation();
});

searchLabelCategory.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        dropdownMenuSearchLabelCategory.classList.toggle("active");
        console.log("Dropdown menu aktywne:", dropdownMenuSearchLabelCategory.classList.contains("active"));
        arrowIcon.classList.toggle("rotated");
        event.stopPropagation();
    }
});

document.addEventListener("click", function (event) {
    if (!searchLabelCategory.contains(event.target) && !dropdownMenuSearchLabelCategory.contains(event.target)) {
        dropdownMenuSearchLabelCategory.classList.remove("active");
        console.log("Dropdown menu aktywne:", dropdownMenuSearchLabelCategory.classList.contains("active"));
        arrowIcon.classList.remove("rotated");
        event.stopPropagation();
    }
});

    function openSearchPopup() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
        overlay.style.zIndex = '999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.style.backgroundColor = '#fff';
        popup.style.padding = '20px';
        popup.style.borderRadius = '8px';
        popup.style.width = '600px';
        popup.style.height = 'auto';

        popup.innerHTML = `
    <div id="popup">
        <h3>Wpisz, czego szukasz</h3>
        <p>Znajdziemy sprzedawców, którzy mają wszystko czego szukasz</p>
        <div id="inputsContainer">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <input type="text" tabindex="0" placeholder="1. produkt" style="flex-grow: 1; margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 2px;">
                <button style="padding: 6px 6px; background-color: #ff6600; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <input type="text" tabindex="0" placeholder="2. produkt" style="flex-grow: 1; margin-right: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 2px;">
                <button style="padding: 6px 6px; background-color: #ff6600; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
            </div>
        </div>
        <button id="addProduct" tabindex="0">+ DODAJ KOLEJNY PRODUKT</button>
        <button class="Search-button" tabindex="0">SZUKAJ</button>
    </div>
`;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
            let i =3;
            document.getElementById('addProduct').addEventListener('click', () => {
                const inputsContainer = document.getElementById('inputsContainer');
            
                const inputGroup = document.createElement('div');
                inputGroup.style.display = 'flex'; 
                inputGroup.style.alignItems = 'center'; 
                inputGroup.style.marginBottom = '8px'; 
                         
                const newInput = document.createElement('input');
                newInput.type = 'text';
                newInput.placeholder = `${i}. produkt`;
                newInput.style.flexGrow = '1';
                newInput.style.marginRight = '10px';
                newInput.style.padding = '8px';
                newInput.style.border = '1px solid #ccc';
                newInput.style.borderRadius = '2px';
            
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove'; 
                removeButton.style.padding = '6px 6px';
                removeButton.style.backgroundColor = '#ff6600';
                removeButton.style.color = '#fff';
                removeButton.style.border = 'none';
                removeButton.style.borderRadius = '4px';
                removeButton.style.cursor = 'pointer';
                removeButton.style.marginTop = '1px'
            
                removeButton.addEventListener('click', () => {
                    inputsContainer.removeChild(inputGroup);
                });
            
                inputGroup.appendChild(newInput);
                inputGroup.appendChild(removeButton);
            
                inputsContainer.appendChild(inputGroup);
                i++; 
            });
            
    }

    document.getElementById('searchLabel').addEventListener('click', openSearchPopup);
    document.getElementById('searchLabel').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            openSearchPopup();
        }
    });

const arrowIcon3 = document.querySelector(".arrow-icon3");
const categoryTrigger = document.getElementById("categoryTrigger");
const dropdownMenuCategory = document.getElementById("dropdownMenuCategory");
const categoriesList = document.querySelector(".categories");
const subCategoriesList = document.getElementById("subCategoriesList");

const categories = {
    Elektronika: ["Telefony", "Komputery", "Telewizory", "Laptopy"],
    Moda: ["Ubrania", "Obuwie", "Akcesoria", "Odzież damska", "Odzież męska"],
    "Dom i Ogród": ["Meble", "Ozdoby świateczne u okolicznościowe", "Dekoracje i dywaniki"],
    Supermarket: ["Kawy", "Herbaty", "Yerba mate", "Zdrowa żywność", "Produkty sypkie"],
    Dziecko: ["Klocki LEGO", "Lalki i akcesoria", "Zabawki dla niemowląt"],
    Uroda: ["Kremy do twarzy", "Szampony", "Maseczki do twarzy", "Koloryzacja"],
    Zdrowie: ["Suplementy diety", "Leki bez recepty", "Materiały opatrunkowe"],
    "Kultura i rozrywka": ["Biografie", "Fantasy, science fiction, horror", "Komiksy"],
    "Sport i turystyka": ["Rowery", "Kaski", "Siłownia", "ASG"],
    Motoryzacja: ["Części karoserii", "Oświetlenie", "Układ hamulcowy"],
    Nieruchomości: ["Mieszkania na sprzedaż", "Domy na sprzedaż"],
    "Kolekcje i sztuka": ["Porcelana", "Ceramika", "Szkło"],
    "Firma i usługi": ["Meble biurowe", "Nieszczarki", "Papier biurowy"],
    "eBilet.pl": ["Sporty walki", "Komedia", "Stand-up"],
    "Allegro Lokalnie": ["Laptopy", "Obuwie", "Narzędzia"]
};

for (const category in categories) {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    categoryItem.classList.add("category-item", "speak");
    categoryItem.setAttribute("tabindex", "0");

    function activateCategory(category, categoryItem) {
        if (categoryItem.classList.contains("active")) return;
    
        document.querySelectorAll(".category-item").forEach(item => item.classList.remove("active"));
        subCategoriesList.innerHTML = "";
    
        categoryItem.classList.add("active");
    
        categories[category].forEach(subcategory => {
            const subCategoryItem = document.createElement("li");
            subCategoryItem.textContent = subcategory;
            subCategoryItem.classList.add("subcategory-item", "speak");
            subCategoryItem.setAttribute("tabindex", "0");
            subCategoriesList.appendChild(subCategoryItem);// Jedynie tutaj nie działa funkcja speak nie wiem jeszcze dlaczego
    
            subCategoryItem.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    console.log(`Wybrano podkategorię: ${subcategory}`);
                }
            });
        });
    }
    
    categoryItem.addEventListener("click", function (event) {
        event.stopPropagation();
        activateCategory(category, categoryItem);
    });
    
    categoryItem.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            activateCategory(category, categoryItem);
        }
    });
    
    categoriesList.appendChild(categoryItem);
}

categoryTrigger.addEventListener("click", function (event) {
    dropdownMenuCategory.classList.toggle("active");
    arrowIcon3.classList.toggle("rotated");
    event.stopPropagation();
});

categoryTrigger.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        dropdownMenuCategory.classList.toggle("active");
        arrowIcon3.classList.toggle("rotated");
        event.stopPropagation();
    }
});

document.addEventListener("click", function (event) {
    if (!dropdownMenuCategory.contains(event.target) && !categoryTrigger.contains(event.target)) {
        dropdownMenuCategory.classList.remove("active");
        arrowIcon3.classList.remove("rotated");
        document.querySelectorAll(".category-item").forEach(item => item.classList.remove("active"));
        subCategoriesList.innerHTML = "";
    }
});

    
    document.querySelectorAll("a","input").forEach(div => div.setAttribute("tabindex", "0"));
    document.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            event.preventDefault(); // Blokuje domyślne działanie klawisza Tab
            moveFocus(event.shiftKey ? -1 : 1); // Sprawdza, czy Shift jest wciśnięty
        }
    });
    
    function moveFocus(direction) {
        const focusableElements = document.querySelectorAll("[tabindex='0'], input, button, a, textarea, select");
        const elementsArray = Array.from(focusableElements);
        const currentIndex = elementsArray.indexOf(document.activeElement);
        
        let nextIndex = (currentIndex + direction + elementsArray.length) % elementsArray.length;
        elementsArray[nextIndex].focus();
    }

});

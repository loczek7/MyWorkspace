document.addEventListener("DOMContentLoaded", function () {
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
});
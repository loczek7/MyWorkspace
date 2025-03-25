document.addEventListener("DOMContentLoaded", function () {
    const userMenu = document.querySelector(".user");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const arrowIcon2 = document.querySelector(".arrow-icon2");

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

    document.addEventListener("click", function (event) {
        if (!userMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            arrowIcon2.classList.remove("rotated");
        }
    });

    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.id === "openSecondPopupLink") {
            event.preventDefault();
    
            let existingPopup = document.getElementById("secondPopup");
    
            if (existingPopup) {
                existingPopup.remove();
            } else {
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
    
                const readingModeToggle = document.getElementById('readingModeToggle');
                const darkModeToggle = document.getElementById('darkModeToggle');
                const closeSecondPopup = document.getElementById('closeSecondPopup');
    
                function speak(text) {
                    if (readingModeToggle.checked) {
                        window.speechSynthesis.cancel();
                        let msg = new SpeechSynthesisUtterance(text);
                        msg.lang = "pl-PL";
                        window.speechSynthesis.speak(msg);
                    }
                }
    
                readingModeToggle.addEventListener('change', function () {
                    if (this.checked) {
                        console.log("Włączono tryb czytania tekstu");
                        speak("Włączono tryb czytania tekstu");
                    } else {
                        console.log("Wyłączono tryb czytania tekstu");
                        window.speechSynthesis.cancel();
                    }
                });
                
                darkModeToggle.addEventListener('change', function () {
                    if (this.checked) {
                        setTheme('dark');
                    } else {
                        setTheme('light');
                    }
                });
    
                function setTheme(theme) {
                    document.body.className = theme;
                    localStorage.setItem('theme', theme);
                }
    
                const savedTheme = localStorage.getItem('theme') || 'light';
                setTheme(savedTheme);
                darkModeToggle.checked = (savedTheme === 'dark');
    
                document.querySelectorAll('.speak').forEach(el => {
                    el.addEventListener('focus', () => speak(el.textContent.trim()));
                    el.addEventListener('mouseover', () => speak(el.textContent.trim()));
                    el.addEventListener('mouseleave', () => window.speechSynthesis.cancel());
                });
    
                closeSecondPopup.addEventListener('click', function (event) {
                    event.preventDefault();
                    document.getElementById("secondPopup").remove();
                });
            }
    
            event.stopPropagation();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
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

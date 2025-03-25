document.addEventListener("DOMContentLoaded", function () {
    const searchLabelCategory = document.getElementById("searchLabelCategory");
    const dropdownMenuSearchLabelCategory = document.getElementById("dropdownMenuSearchLabelCategory");
    const arrowIcon = document.querySelector(".arrow-icon");

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
});
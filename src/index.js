document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const text = document.querySelector(".color-changing-text");
    const themeButton = document.getElementById("themeButton");

    let isDarkMode = false;

    themeButton.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            container.style.backgroundColor = "black";
            text.style.color = "white";
        } else {
            container.style.backgroundColor = "white";
            text.style.color = "black";
        }
    });
});

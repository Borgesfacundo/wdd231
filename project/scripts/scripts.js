const hamburgerButton = document.querySelector(".hamb-menu");
const navElement = document.querySelector(".animate");

hamburgerButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
})
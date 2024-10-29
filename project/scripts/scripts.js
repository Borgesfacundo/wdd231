const hamburgerButton = document.querySelector(".hamb-menu");
const navElement = document.querySelector(".animate");

hamburgerButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
})

//Address
const address = "Ricardo Enrique Bochini 751, Avellaneda, Bs. As.";
document.querySelector(".address").innerHTML = `${address}`;

//current Year
const date = new Date();


document.querySelector("#currentyear").innerHTML = `${date.getFullYear()}`;




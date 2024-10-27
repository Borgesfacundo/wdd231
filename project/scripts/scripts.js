const hamburgerButton = document.querySelector(".hamb-menu");
const navElement = document.querySelector(".animate");

hamburgerButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
})

//hero slider
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function () {
    Next();
});

btnLeft.addEventListener("click", function () {
    Prev();
});

setInterval(function () {
    Next();
}, 5000);

//Address
const address = "Ricardo Enrique Bochini 751, Avellaneda, Bs. As.";
document.querySelector(".address").innerHTML = `${address}`;

//current Year
const date = new Date();


document.querySelector("#currentyear").innerHTML = `${date.getFullYear()}`;

//visits with Local Storage
const visits = document.querySelector(".visits");
const msToDays = 86400000; //1 day
const lastVisit = Date.now();
let numVisits = Number(window.localStorage.getItem("visits"));
let lastUserVisit = Number(window.localStorage.getItem("lastVisit"));
let timeSinceLastVisit = Math.round((lastVisit - lastUserVisit) / msToDays);

if (visits !== 0) {
    visits.innerHTML = `Welcome to C.A.I Fans Club!`;
}
if (numVisits !== 0 && (lastVisit - lastUserVisit) < msToDays) {
    visits.innerHTML = "Hey, welcome again! This isn't your first time here :)"
}
if (numVisits !== 0 && (lastVisit - lastUserVisit) > msToDays)
    if (timeSinceLastVisit === 1) {
        visits.innerHTML = `you last visited ${timeSinceLastVisit} day ago`;
    } else {
        visits.innerHTML = `you last visited ${timeSinceLastVisit} days ago`;
    }

numVisits++;
localStorage.setItem("visits", numVisits);
localStorage.setItem("lastVisit", lastVisit);
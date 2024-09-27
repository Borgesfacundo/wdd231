const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

const today = new Date();

const yearElement = document.querySelector("#currentyear");

yearElement.textContent = today.getFullYear();

//Last Modified

const lastmodifElement = document.querySelector("#lastmodified");
let oLastModified = document.lastModified;

lastmodifElement.innerHTML = `Last Update: ${oLastModified}`;
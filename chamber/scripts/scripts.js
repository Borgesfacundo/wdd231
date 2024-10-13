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

// Timestamp
function setCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toISOString();
    document.getElementById("timestamp").value = dateTimeString;
}

// Get the element with ID "timestamp"
var timestampElement = document.getElementById("timestamp");

// Call function when page is loaded
if (timestampElement !== null) {
    setCurrentDateTime();
} else {
    console.log("no Timestamp element");
}
//visits with Local Storage
const visits = document.querySelector(".visits");
const number = document.querySelector(".visitnumber");

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
number.innerHTML = `This is your visit N° ${numVisits}`;

localStorage.setItem("visits", numVisits);
localStorage.setItem("lastVisit", lastVisit);
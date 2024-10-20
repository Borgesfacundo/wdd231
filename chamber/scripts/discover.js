// Calenadar
document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth'
    })

    calendar.render()
})

//visits

const visits = document.querySelector(".visits");

const msToDays = 86400000; //This num is equal to a day (24 hours)

const lastVisit = Date.now();

let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastUserVisit = Number(window.localStorage.getItem("lastVisit-ls"));

let timeSinceLastVisit = Math.round((lastVisit - lastUserVisit) / msToDays);

if (visits !== null) {
    if (numVisits === 0) {
        visits.textContent = "Welcome! Let us know if you have any questions.";
    }
    if (numVisits !== 0 && (lastVisit - lastUserVisit) < msToDays) {
        visits.textContent = "Back so soon! Awesome!";
    }
    if (numVisits !== 0 && (lastVisit - lastUserVisit) > msToDays)
        if (timeSinceLastVisit === 1) {
            visits.textContent = `You last visited ${timeSinceLastVisit} day ago`;
        } else {
            visits.textContent = `You last visited ${timeSinceLastVisit} days ago`;
        }
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisit-ls", lastVisit);
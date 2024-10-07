const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-35.45&lon=-60.88&units=metric&appid=d1787794d9f474c05a3a2ed74b496b81";
const todayTemp = document.querySelector(".today");
const tomorrowTemp = document.querySelector(".tomorrow");
const afterTomorrowTemp = document.querySelector(".after-tomorrow");

const dayweek = new Date();
let day = dayweek.getDay();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


async function apiFetch2() {

    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data2 = await response.json();
            //console.log(data2);
            displayResults2(data2);
        } else {
            throw Error(await response.text());
        }
    } catch {
        console.log("Error Fetching forecast");
    }
}

function displayResults2(data) {
    todayTemp.innerHTML = `${weekday[day]}: ${data.list[3].main.temp}&deg; C`
    tomorrowTemp.innerHTML = `${weekday[day + 1]}: ${data.list[11].main.temp}&deg; C`
    afterTomorrowTemp.innerHTML = `${weekday[day + 2]}: ${data.list[19].main.temp}&deg; C`
}

apiFetch2()
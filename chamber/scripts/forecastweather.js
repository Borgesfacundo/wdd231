const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-35.45&lon=-60.88&units=metric&appid=d1787794d9f474c05a3a2ed74b496b81";
const todayTemp = document.querySelector(".today");
const tomorrowTemp = document.querySelector(".tomorrow");
const afterTomorrowTemp = document.querySelector(".after-tomorrow");


async function apiFetch() {

    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch {
        console.log("Error Fetching forecast");
    }
}

function displayResults(data) {
    todayTemp.innerHTML = `Today: ${data.list[3].main.temp}&deg; C`
    tomorrowTemp.innerHTML = `Tomorrow: ${data.list[11].main.temp}&deg; C`
    afterTomorrowTemp.innerHTML = `After Tomorrow: ${data.list[19].main.temp}&deg; C`
}

apiFetch()
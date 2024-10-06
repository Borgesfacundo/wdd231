const tempElement = document.querySelector(".temp");
const iconElement = document.querySelector("#weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-35.45&lon=-60.88&units=metric&appid=d1787794d9f474c05a3a2ed74b496b81";

async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch {
        console.log("error");
    }
}

function displayResults(data) {
    tempElement.innerHTML = `<b>${data.main.temp}&deg;</b> C`;
    iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    iconElement.setAttribute('src', iconsrc);
    iconElement.setAttribute('alt', desc);

    document.querySelector(".weather-desc").innerHTML = `${desc}`;
    document.querySelector(".weather-high").innerHTML = `High: ${data.main.temp_max}°`;
    document.querySelector(".weather-low").innerHTML = `Low: ${data.main.temp_min}°`;
    document.querySelector(".weather-humidity").innerHTML = `Himidity: ${data.main.humidity}%`;
}

apiFetch();
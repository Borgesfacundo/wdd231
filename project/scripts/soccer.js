const key = "91bdd3b65ef122171d45267ead299152";
const url = `https://v3.football.api-sports.io/leagues`;

const divElement = document.querySelector("#wg-api-football-standings");

divElement.setAttribute("data-key", "key")

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", key);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

async function apiFetch() {
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

apiFetch();

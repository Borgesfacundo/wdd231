const cardsElement = document.querySelector(".cards");
let playersList = []; //creating an array

const displayPlayers = (players) => {
    players.forEach(player => {
        const container = document.createElement("div");

        const playerPicture = document.createElement("img");
        playerPicture.setAttribute("src", player.img);
        playerPicture.setAttribute("alt", `${player.name}`);
        playerPicture.setAttribute("width", `250`);
        playerPicture.setAttribute("height", `250`);

        const name = document.createElement("p");
        name.innerHTML = `${player.name}`;
        container.appendChild(playerPicture);
        container.appendChild(name);
        cardsElement.appendChild(container);
    })
}

//call the info
const getPlayers = async () => {
    const response = await fetch("https://borgesfacundo.github.io/wdd231/project/data/players.json");
    if (response.ok) {
        const data = await response.json();
        playersList = data.players;
        displayPlayers(playersList);
    }
}

getPlayers();
const cardsElement = document.querySelector(".cards");
let playersList = []; //creating an array

const displayPlayers = (players) => {
    players.forEach(player => {
        const container = document.createElement("div");
        container.setAttribute("class", "player-container")

        const playerPicture = document.createElement("img");
        playerPicture.setAttribute("src", player.img);
        playerPicture.setAttribute("alt", `${player.name}`);
        playerPicture.setAttribute("width", `250`);
        playerPicture.setAttribute("height", `250`);

        const name = document.createElement("p");
        const btnModal = document.createElement("a");
        btnModal.textContent = "More info"
        btnModal.setAttribute("class", "open-modal");
        name.innerHTML = `${player.name}`;
        //display modal
        btnModal.addEventListener("click", () => {
            displayModal(player);
        })


        container.appendChild(playerPicture);
        container.appendChild(name);
        container.appendChild(btnModal);
        cardsElement.appendChild(container);

    })
}

//display modal function
function displayModal(player) {
    const modalElement = document.querySelector("#player-details");

    modalElement.innerHTML = "";

    const playerPicture = document.createElement("img");
    playerPicture.setAttribute("src", player.img);
    playerPicture.setAttribute("alt", `${player.name}`);
    playerPicture.setAttribute("width", `250`);
    playerPicture.setAttribute("height", `250`);
    const name = document.createElement("h2");
    name.innerHTML = `${player.name}`;
    const number = document.createElement("p");
    number.innerHTML = `<b>Number of Shirt:</b> ${player.number}`;
    const debut = document.createElement("p");
    debut.innerHTML = `<b>First Career Game:</b> ${player.first}`
    const btnClose = document.createElement("button");
    btnClose.innerHTML = `X`;
    btnClose.id = "closeModal";

    modalElement.appendChild(btnClose)
    modalElement.appendChild(name);
    modalElement.appendChild(playerPicture);
    modalElement.appendChild(number);
    modalElement.appendChild(debut);

    modalElement.showModal();
    closeModal.addEventListener("click", () => {
        modalElement.close();
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
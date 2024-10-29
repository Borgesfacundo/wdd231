const playerDetailsModal = document.querySelector("#membership-details");
const openModalBasic = document.querySelector(".basic");
const openModalGold = document.querySelector(".gold");
const openModalVip = document.querySelector(".vip");

const linkURL = "https://borgesfacundo.github.io/wdd231/project/data/membership.json";

async function getMembership() {
    const response = await fetch(linkURL);
    const data = await response.json();

    openModalBasic.addEventListener("click", () => {
        displayMembershipModal(data, "basic");
    });
    openModalGold.addEventListener("click", () => {
        displayMembershipModal(data, "gold");
    });
    openModalVip.addEventListener("click", () => {
        displayMembershipModal(data, "vip");
    });;
};

function displayMembershipModal(membership, className) {
    membership.membership.forEach((lvl) => {
        console.log(lvl);
        if (lvl.class === className) {
            playerDetailsModal.innerHTML = "";
            playerDetailsModal.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${lvl.title}</h2>
            <p>${lvl.description}</p>
            <p>Cost: ${lvl.cost}</p>
            `;
            playerDetailsModal.showModal();
            const closeModal = document.querySelector("#closeModal");
            closeModal.addEventListener("click", () => {
                playerDetailsModal.close();
            });
        }
    });
}

// Get the element with ID "timestamp"
var timestampElement = document.getElementById("timestamp");



// Timestamp
function setCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toISOString();
    document.getElementById("timestamp").value = dateTimeString;
}

// Call function when page is loaded
if (timestampElement !== null) {
    setCurrentDateTime();
} else {
    console.log("no Timestamp element");
}

getMembership()


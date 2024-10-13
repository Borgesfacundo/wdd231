const modal = document.querySelector("#membership-details");
const openModalNP = document.querySelector(".np");
const openModalBronze = document.querySelector(".bronze");
const openModalSilver = document.querySelector(".silver");
const openModalGold = document.querySelector(".gold");

const linkURL = "https://borgesfacundo.github.io/wdd231/chamber/data/membershiplevel.json";

async function getMembershipLevel() {
    const response = await fetch(linkURL);
    const data = await response.json();

    openModalNP.addEventListener("click", () => {
        displayMembershipDetails(data, "np");
    });
    openModalBronze.addEventListener("click", () => {
        displayMembershipDetails(data, "bronze");
    });
    openModalSilver.addEventListener("click", () => {
        displayMembershipDetails(data, "silver");
    });;
    openModalGold.addEventListener("click", () => {
        displayMembershipDetails(data, "gold");
    });
};

function displayMembershipDetails(membership, className) {
    membership.memberships.forEach((lvl) => {
        if (lvl.class === className) {
            modal.innerHTML = "";
            modal.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${lvl.title}</h2>
            <p>${lvl.description}</p>
            <p>Cost: ${lvl.cost}</p>
            `;
            modal.showModal();
            const closeModal = document.querySelector("#closeModal");
            closeModal.addEventListener("click", () => {
                modal.close();
            });
        }
    });
}

getMembershipLevel()


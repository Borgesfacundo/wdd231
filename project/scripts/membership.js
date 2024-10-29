const modal = document.querySelector("#membership-details");
const openModalBasic = document.querySelector(".basic");
const openModalGold = document.querySelector(".gold");
const openModalVip = document.querySelector(".vip");

const linkURL = "https://borgesfacundo.github.io/wdd231/chamber/data/membershiplevel.json";

async function getMembership() {
    const response = await fetch(linkURL);
    const data = await response.json();

    openModalBasic.addEventListener("click", () => {
        displayMembershipModal(data, "np");
    });
    openModalGold.addEventListener("click", () => {
        displayMembershipModal(data, "bronze");
    });
    openModalVip.addEventListener("click", () => {
        displayMembershipModal(data, "silver");
    });;
};

function displayMembershipModal(membership, className) {
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

getMembership()


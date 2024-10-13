const modal = document.querySelector(".membership-details");
const openModalNP = document.querySelector(".np");
const openModalBronze = document.querySelector(".bronze");
const openModalSilver = document.querySelector(".silver");
const openModalGold = document.querySelector(".gold");

const linkURL = "https://borgesfacundo.github.io/wdd231/chamber/data/membershiplevel.json";

async function getMembershipLevel() {
    const response = await fetch(linkURL);
    const data = await response.json();

    openModalNP.addEventListener("click",
        displayMembershipDetails(data, openModalNP.classList));
    openModalBronze.addEventListener("click",
        displayMembershipDetails(data, openModalBronze.classList));
    openModalSilver.addEventListener("click",
        displayMembershipDetails(data, openModalSilver.classList));
    openModalGold.addEventListener("click",
        displayMembershipDetails(data, openModalGold.classList));

};

function displayMembershipDetails(membership, className) {
    membership.forEach(lvl => {
        if (lvl.class === className) {
            membershipDetails.innerHTML = "";
            membershipDetails.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${membership.title}
            <p>${membership.description}</p>
            <p>Cost: ${membership.cost}</p>
            `;
            modal.showModal();

            closeModal.addEventListener("click", () => {
                membershipDetails.close();
            });
        } else {

        }

    });

}


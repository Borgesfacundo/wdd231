const modal = document.querySelector(".membership-details");
const openModalNP = document.querySelector(".np");
const openModalBronze = document.querySelector(".bronze");
const openModalSilver = document.querySelector(".silver");
const openModalGold = document.querySelector(".gold");

function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = "";
    membershipDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.title}
    <p>${membership.description}</p>
    <p>Cost: ${membership.cost}</p>
    `;

}


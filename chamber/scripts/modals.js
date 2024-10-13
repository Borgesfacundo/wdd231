function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = "";
    membershipDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.title}
    <p>${membership.description}</p>
    <p>Cost: ${membership.cost}</p>
    `;

}
const linkURL = "https://borgesfacundo.github.io/wdd231/chamber/data/members.json";
const section = document.querySelector(".ads");

async function getMembers() {
    const response = await fetch(linkURL);
    const data = await response.json();
    const goldSilverMembers = data.companies.filter(member => member.membership === "Gold" || member.membership === "Silver");
    const shuffledMembers = shuffle(goldSilverMembers);
    displaySpotlights(shuffledMembers.slice(0, 3));
}

const displaySpotlights = (members) => {
    section.innerHTML = "";
    members.forEach(member => {
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const slogan = document.createElement("p");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const link = document.createElement("a");

        title.innerHTML = member.name;
        slogan.innerHTML = `"${member.slogan}"`;
        email.innerHTML = member.email;
        phone.innerHTML = member.phoneNumber;
        link.innerHTML = "Visit us!";
        link.setAttribute("href", member.website);

        div.appendChild(title);
        div.appendChild(slogan);
        div.appendChild(email);
        div.appendChild(phone);
        div.appendChild(link);
        section.appendChild(div);
    });
}

// Function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getMembers();
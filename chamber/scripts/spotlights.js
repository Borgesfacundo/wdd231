const linkURL = "https://borgesfacundo.github.io/wdd231/chamber/data/members.json";
const section = document.querySelector(".ads");

async function getMembers() {
    const response = await fetch(linkURL);
    const data = await response.json();
    const goldSilverMembers = data.companies.filter(member => member.membership === "Gold" || member.membership === "Silver");
    const shuffledMembers = shuffle(goldSilverMembers);
    const randomCount = Math.floor(Math.random() * 2) + 2;

    displaySpotlights(shuffledMembers.slice(0, randomCount));
}

const displaySpotlights = (members) => {
    section.innerHTML = "";
    members.forEach(member => {

        let div = document.createElement("div");
        let title = document.createElement("h3");
        let slogan = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement("a");
        let image = document.createElement("img");
        image.setAttribute("src", member.image)
        image.setAttribute("alt", member.name)
        image.setAttribute("width", "100")
        image.setAttribute("height", "100")


        title.innerHTML = member.name;
        slogan.innerHTML = `"${member.slogan}"`;
        email.innerHTML = member.email;
        phone.innerHTML = member.phoneNumber;
        link.innerHTML = "Visit us!";
        link.setAttribute("href", member.website);

        div.appendChild(title);
        div.appendChild(slogan);
        div.appendChild(image);
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
const linkURL = "https://borgesfacundo.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector("article");

async function getMembers() {
    const response = await fetch(linkURL);
    const data = await response.json();
    //console.log(data.companies);
    displayCompanies(data.companies);

}

const displayCompanies = (members) => {
    members.forEach((member) => {
        //Create Elements
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let icon = document.createElement("img");
        let info = document.createElement("h4");
        let phone = document.createElement("h4");
        let website = document.createElement("a");


        //Set Title
        name.textContent = member.name;

        //set image
        icon.setAttribute("src", member.image);
        icon.setAttribute("alt", member.name);
        icon.setAttribute("width", "150");
        icon.setAttribute("height", "150");
        icon.setAttribute("loading", "lazy");

        //Set Information
        info.innerHTML = `${member.slogan} - <br> ${member.address}`;
        phone.textContent = member.phoneNumber;
        website.setAttribute("href", member.website);
        website.innerHTML = member.website;

        //Add all to the page
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(info);
        card.appendChild(phone);
        card.appendChild(website);

        article.appendChild(card);
    });
}

getMembers();


//Layout

const gridbutton = document.querySelector("#grid-directory");
const listbutton = document.querySelector("#list-directory");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid-directory");
    display.classList.remove("list-directory");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list-directory");
    display.classList.remove("grid-directory");
}
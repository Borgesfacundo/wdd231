const currentURL = window.location.href;
//console.log(currentURL);

//divide the url by 2 parts
const everything = currentURL.split("?");
//console.log(everything);

//grab part 2
let formData = everything[1].split("&");
//console.log(formData);

// break each part by using the "&" symbol to split it
//formData = formData.split("&");
//console.log(formData);

function show(cup) {
    //console.log(cup);
    formData.forEach((element) => {
        //console.log(element)
        if (element.startsWith(cup)) {
            //console.log("Found a match!")
            result = element.split("=")[1].replace("%40", "@")
        }
    })
    return (result)
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple.</p>
<p> Your Phone ${show("phone")}
<p> Your Email <a href="mailto:${show("email")}">${show("email")}</a>`;

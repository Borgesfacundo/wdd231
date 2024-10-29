const currentURL = window.location.href;

const everything = currentURL.split("?");

let formData = everything[1].split("&");

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@")
        }
    })
    return (result)
};

const encodedTimestamp = `${show("timestamp")}`;
const decodedTimestamp = decodeURIComponent(encodedTimestamp);
const date = new Date(decodedTimestamp);

const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});

const showInfo = document.querySelector(".userinfo");
showInfo.innerHTML = `
<p>Submitted for ${show("name")} ${show("last")}</p>
<p>Phone: is ${show("telephone")}</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
<p>Business: ${show("business")} </p>
<p>Submission Date: ${formattedDate}.</p>
`;

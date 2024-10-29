const getUrlData = window.location.href;


const everything = getUrlData.split("?");

let formData = everything[1].split("&");

function show(cup) {
    let result = null;
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@")
        }
    })
    return (result)
};

const timestampData = `${show("timestamp")}`;
const timestampDecoded = decodeURIComponent(timestampData);
const submissionDate = new Date(timestampDecoded);

const formattedDate = submissionDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});

const showInfo = document.querySelector(".userinfo");
showInfo.innerHTML = `
<p>Submitted for ${show("name")} ${show("last")}.</p>
<p>Phone: ${show("telephone")}.</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}.</a></p>
<p>You applied to become a <b>${show("membership")}</b> membership.</p>
<p>Submission Date: ${formattedDate}.</p>
`;

console.log(timestampDecoded);

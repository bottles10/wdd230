const modeButton = document.querySelector("#mode");
const menu = document.querySelector("#menu")
const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links")
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const cardHeaders = document.querySelectorAll(".card-header");
const cardInfos = document.querySelectorAll(".card-info");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        menu.style.background = "#fff"
        menu.style.color = "#000"
        header.style.background = "#000"
        navLinks.style.background = "gray"
        main.style.background = "#000";
        main.style.color = "#fff";
        footer.style.background = "#000"
        modeButton.textContent = "❎";
    } else {
        menu.style.background = "#2b7575";
        menu.style.color = "#fff";
        header.style.background = "#05cccc";
        header.style.color = "#000";
        navLinks.style.background = "#48435C";
        main.style.background = "#05cccc";
        main.style.color = "#000";
        footer.style.background = "#05cccc";
        footer.style.color = "#000";
        modeButton.textContent = "☑️";
    }

    // Apply changes to each .card-header and .card-info
    cardHeaders.forEach(cardHeader => {
        cardHeader.style.background = modeButton.textContent.includes("☑️") ? "#48435C" : "#000";
    });

    cardInfos.forEach(info => {
        info.style.background = modeButton.textContent.includes("☑️") ? "#EDFFEC" : "#000";
    });
});

const container = document.querySelector(".container");
fullScreenBtn = container.querySelector(".fullscreen i");

fullScreenBtn.addEventListener("click", () => {
    container.classList.toggle("fullscreen");
    console.log("fullScreenBtn clicked");
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
});
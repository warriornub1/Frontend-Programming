let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// menu.onclick = () => {
//   navbar.classList.toggle("active");
// };


let burguer_icon = document.querySelector("#burguer-icon");
let nav_links = document.querySelector("#nav-links");

burguer_icon.addEventListener("click", (event) => {
    nav_links.classList.toggle("show-menu");
})

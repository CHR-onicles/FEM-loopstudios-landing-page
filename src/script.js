const nav_toggle = document.querySelector(".nav-toggle");
const body = document.getElementById("body");
const nav_header = document.querySelector(".nav-header");
const links_container = document.querySelector(".nav-links-container");

nav_toggle.addEventListener("click", () => {
    body.classList.toggle("no-scroll");
    nav_header.classList.toggle("show-links");
    links_container.classList.toggle("show-links");
    nav_toggle.classList.toggle("show-links");
    window.scrollTo(0, 0); // to make menu fully cover screen
    const nav_links = document.querySelector(".nav-links");
    nav_links_height = nav_links.getBoundingClientRect().height;
    nav_links.style.top =  `calc(50vh - ${nav_links_height / 2}px)`;
    console.log(nav_links.style.top);
});
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links ul li a");
const toggleBtn = document.querySelector(".toggle-button");

window.addEventListener("scroll", stickNavbar);
toggleBtn.addEventListener("click", showNavLinks);
links.forEach(link=> link.addEventListener("click", ()=>{
  toggleBtn.classList.remove("display");
  navLinks.classList.remove("display");
}));

function stickNavbar(){
  navbar.classList.toggle("sticky", window.scrollY > 0);
}

function showNavLinks(){
  navLinks.classList.toggle("display");
  toggleBtn.classList.toggle("display");
}


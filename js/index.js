const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelectorAll(".nav-menua-item");

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navMenuLink.forEach(el => el.addEventListener("click", () =>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))

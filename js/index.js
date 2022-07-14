


//---------------------------------SECTION RELATED TO THE BURGER MENU---------------------
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelectorAll(".nav-menu-item");


/* Function to change the toogle the burger menu between an X (when open)
and a = when closed.*/
burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

/* Function to remove/close the burger menu after clicking on one of the links*/
navMenuLink.forEach(el => el.addEventListener("click", () =>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))

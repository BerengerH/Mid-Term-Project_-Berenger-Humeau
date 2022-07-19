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


//---------------------------------SECTION RELATED TO PROJECT CONTENT---------------------
//Variables selecting the projects elements in a node array
const individualProjectsTitle = document.querySelectorAll(".individual-projects-title");
const individualProjectsTheme = document.querySelectorAll(".individual-projects-theme");
const individualProjectsImg = document.querySelectorAll(".project-img");

//Function to update the content of each one of the other projects
function updateProjects(dataArray) {
    dataArray.forEach((element, index) => {
      const newOtherTitle = element.title.slice(0, 15);
    
      individualProjectsTitle[index].textContent = newOtherTitle;
    });
}

//Event listener fetching for the API content and calling functions to update HTML
window.addEventListener("load", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => {
        updateProjects(data);
    })
    .catch((errorGettingData) =>
      console.log("We could not get the data", errorGettingData)
    );
});
//---------------------------------SECTION RELATED TO THE BURGER MENU---------------------
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelectorAll(".nav-menu-item");

/* Function to change the toogle the burger menu between an X (when open)
and a = when closed.*/
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* Function to remove/close the burger menu after clicking on one of the links*/
navMenuLink.forEach((el) =>
  el.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//---------------------------------SECTION RELATED TO PROJECT CONTENT---------------------
// As the API is a fake one, not specifically made for this project I decided to slice some of the data imported


//Variables selecting the main project elements
const mainProjectTitle = document.querySelector(".main-project-section h1");
const mainProjectTheme = document.querySelector(".main-project-theme");
const mainProjectDate = document.querySelector(".main-project-date span");
const mainProjectImg = document.querySelector(".main-project-img");
const mainProjectDescription = document.querySelector(
  ".main-project-description"
);

//Function to update the content of the Main Project
function updateMainProject(data1) {
  const newTitle = data1.title.slice(0, 15);
  const newDescription = data1.body;

  mainProjectTitle.textContent = newTitle;
  mainProjectDescription.textContent = newDescription;
}

//Variables selecting the other projects elements in a node array
const individualProjectsTitle = document.querySelectorAll(".individual-projects-title");
const individualProjectsDescription = document.querySelectorAll(".individual-projects-description");
const individualProjectsImg = document.querySelectorAll(".individual-img");

//Function to update the content of each one of the other projects
function updateOtherProjects(dataArray) {
  dataArray.forEach((element, index) => {
    const newOtherTitle = element.title.slice(0, 15);
  
    individualProjectsTitle[index].textContent = newOtherTitle;
  });
}

//Event listener fetching for the API content and calling functions to update HTML
window.addEventListener("load", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      updateMainProject(data);
    })
    .catch((errorGettingData) =>
      console.log("We could not get the data", errorGettingData)
    );

    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => {
        updateOtherProjects(data);
    })
    .catch((errorGettingData) =>
      console.log("We could not get the data", errorGettingData)
    );
});

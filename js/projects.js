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
  const upperCaseTitle = data1.title.slice(0, 1).toUpperCase();
  const lowerCaseTitle = data1.title.slice(1, 15).toLowerCase();
  const newTitle = upperCaseTitle + lowerCaseTitle;

  const newTheme = data1.theme;
  const newDate = data1.date;
  const newImage = data1.image;
  const newDescription = data1.body;

  //Update the content
  mainProjectTitle.textContent = newTitle;
  mainProjectTheme.textContent = newTheme;
  mainProjectDate.textContent = newDate;
  mainProjectImg.src = newImage;
  mainProjectDescription.textContent = newDescription;
}



//Variables selecting the other projects elements in a node array
const individualProjectsTitle = document.querySelectorAll(
  ".individual-projects-title"
);
const individualProjectsTheme = document.querySelectorAll(
  ".individual-projects-theme"
);
const individualProjectsImg = document.querySelectorAll(".project-img");

//Function to update the content of each one of the other projects
function updateOtherProjects(dataArray) {

  dataArray.forEach((element, index) => {
    if (index !== 0){
    const upperCaseTitle = element.title.slice(0, 1).toUpperCase();
    const lowerCaseTitle = element.title.slice(1, 15).toLowerCase();
    const newOtherTitle = upperCaseTitle + lowerCaseTitle;

    const newTheme = element.theme;
    const newImage = element.image;
  
    //Update the content
    individualProjectsTitle[index - 1 ].textContent = newOtherTitle;
    individualProjectsTheme[index - 1 ].textContent = newTheme;
    individualProjectsImg[index - 1 ].src = newImage;
    }
  });
}

//Event listener fetching for the API content and calling functions to update HTML
window.addEventListener("load", () => {

    /* Original fake API used before the creation of my own one
    https://jsonplaceholder.typicode.com/posts */

  fetch("http://localhost:3000/posts/1")
    .then((response) => response.json())
    .then((data) => {
      updateMainProject(data);
    })
    .catch((errorGettingData) =>
      console.log("We could not get the data", errorGettingData)
    );

  fetch("http://localhost:3000/posts/")
    .then((response) => response.json())
    .then((data) => {
      updateOtherProjects(data);
    })
    .catch((errorGettingData) =>
      console.log("We could not get the data", errorGettingData)
    );
});

//---------------------------------SECTION RELATED TO SUBSCRIBE---------------------

const email = document.querySelector(".email-input");

const form = document.querySelector(".subscribe-form");

//Function to add the error class to CSS and inform user of the error
const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("subscribe-success");
  formField.classList.add("form-error");

  const error = document.querySelector(".subscribe-form p");
  error.textContent = message;
};

//Function to add the success class to CSS and inform user of the subscription
const showSuccess = (input) => {
  const formSection = document.querySelector(".subscribe-form");

  formSection.classList.remove("form-error");
  formSection.classList.add("subscribe-success");

  formSection.textContent = "Thank you for subscribing!";
};

//Function to verify if input field is empty
function isRequiered(input) {
  if (input === "") {
    return true;
  }
  return false;
}

//Function to verify if input field contains "@" and "."
function verifyEmailFormat(input) {
  let n = input.value;

  if (!n.includes("@") || !n.includes(".")) {
    return true;
  }
  return false;
}

//Function to check the Email input
function emailValidation() {
  let valid = false;
  const emailNoSpace = email.value.trim();

  if (isRequiered(emailNoSpace)) {
    showError(email, "Please fill out your email addresss.");
  } else if (verifyEmailFormat(email)) {
    showError(email, "Please fill out a valid email address.");
  } else {
    valid = true;
  }
  return valid;
}

//Event listener checking all input before to give a "success message"
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isEmailValid = emailValidation();

  if (isEmailValid) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log("response.status", response.status);
        if (response.status === 201) {
          showSuccess(email);
        }
      })
      .catch((errorSubmit) => console.log("Submit failed", errorSubmit));
  }
});

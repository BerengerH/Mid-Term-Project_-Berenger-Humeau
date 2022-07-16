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

//---------------------------------SECTION RELATED TO FORM---------------------
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");

const form = document.querySelector(".contact-us-form");

//Function to add the error class to CSS and inform user of the error
const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('form-success');
    formField.classList.add('form-error');

    const error = formField.querySelector('.form-error-message');
    error.textContent = message;
};

//Function to add the success class to CSS and inform user of the correct input
const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('form-error');
    formField.classList.add('form-success');

    // Maybe give a "success message" later on
};


//Function to verify if input field is empty
function isRequiered (input){
    if (input === ''){
        return true;
    }
    return false;
} 

//Function to verify if input field contains a space
function spaceNedeed (input){
    let n = input.value;
    if (!n.includes(' ')){
        return true;
    }
    return false;
}

//Function to verify if input field contains only numbers
function onlyNumbers (input){
    let n = input.value;
    if (isNaN(n)){
        return true;
    }
    return false;
}

//Function to verify if input field contains "@" and "."
function verifyEmailFormat (input){
    let n = input.value;

    if (!n.includes('@') || !n.includes('.')){
        return true;
    }
    return false;
}

//Function to check the Full Name input
function nameValidation(){
    let valid = false;
    const fullname = name.value.trim();
    
    if (isRequiered(fullname)){
        showError(name, 'Please fill out your full name.');
    }
    else if (spaceNedeed(name)){
        showError(name, 'Please fill out the field in the format "FirstName LastName.');
    }
    else {
        showSuccess(name);
        valid = true;
    }
    return valid;
}

//Function to check the Email input
function emailValidation(){
    let valid = false;
    const emailNoSpace = email.value.trim();
    
    if (isRequiered(emailNoSpace)){
        showError(email, 'Please fill out your email addresss.');
    }
    else if (verifyEmailFormat(email)){
        showError(email, 'Please fill out a valid email address.');
    }
    else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

//Function to check the Phone input
function phoneValidation(){
    let valid = false;
    const phoneNumber = phone.value.trim();
    
    if (isRequiered(phoneNumber)){
        showError(phone, 'Please fill out your phone number.');
    }
    else if (onlyNumbers(phone)){
        showError(phone, 'Please fill out this field with only numbers.');
    }
    else {
        showSuccess(phone);
        valid = true;
    }
    return valid;
}

//Function to check the Message input
function messageValidation(){
    let valid = false;
    const textMessage = message.value.trim();
    
    if (isRequiered(textMessage)){
        showError(message, 'Please enter your message.');
    }
    else {
        showSuccess(message);
        valid = true;
    }
    return valid;
}

//Event listener checking all input before to give a "success message"
form.addEventListener('submit', function (event) {

    event.preventDefault();

    let isNameValid = nameValidation();
    let isEmailValid = emailValidation();
    let isPhoneValid = phoneValidation();
    let isMessageValid = messageValidation();

    let isFormValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid;

    console.log(isNameValid);
    console.log(isFormValid);

    if (isFormValid){
        alert("Thank you for submiting your message");
    }
});

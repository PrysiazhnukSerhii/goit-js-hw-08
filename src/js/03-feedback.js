const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");

let formData = {};


if (localStorage.getItem("feedback-form-state")) {
   onReturnLocalStorage()
};

form.addEventListener("input", throttle(onTexterialInput, 500))

form.addEventListener("submit", onFormSubmit)


function onTexterialInput (e)  {
    
    formData[e.target.name] = e.target.value;

    const formJSON = JSON.stringify(formData);

    localStorage.setItem("feedback-form-state", formJSON);
       
};

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();

    localStorage.removeItem("feedback-form-state")  

    console.log(formData)
}

function onReturnLocalStorage() {
     formData = JSON.parse(localStorage.getItem("feedback-form-state"));

    for (key in formData) {

      form[key].value = formData[key]
    }; 
}


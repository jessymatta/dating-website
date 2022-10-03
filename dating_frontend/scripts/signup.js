//Getting signup page input elements
const name_input = document.getElementById("name");
const username_input = document.getElementById("username");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const confirm_password_input = document.getElementById("password-confirm");
const birthday_input = document.getElementById("birthday");
const location_input = document.getElementById("location");
const gender_input = document.getElementById("gender");
const interested_in_input = document.getElementById("interested_gender");
//Create account button
const create_acc_btn = document.getElementById("create-acc-btn");
//Error div 
const error_div = document.querySelector(".error-div");


create_acc_btn.addEventListener("click", () =>{
    console.log("clicked");
});


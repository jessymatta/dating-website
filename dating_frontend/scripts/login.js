console.log("working?");
// window.stop();
//Getting login page input elements
const username_input = document.getElementById("username");
const password_input = document.getElementById("password");
//Login button
const login_btn = document.getElementById("login-btn");
//Error div 
const error_div = document.querySelector(".error-div-login");
//Login api url
const baseURL = "http://127.0.0.1:8000/api";
const signup_url = baseURL + "/login"
console.log(signup_url);



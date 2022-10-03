console.log("working?");
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

// When the login button is clicked
login_btn.addEventListener("click", () => {
    error_div.classList.add('hide')
    error_div.innerHTML = "";
    //Take the inputs
    const data = new FormData();
    data.append('username', username_input.value);
    data.append('password', password_input.value);
    console.log(...data);
});

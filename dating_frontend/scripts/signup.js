window.stop();
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
//Signup api url
const baseURL = "http://127.0.0.1:8000/api/v0.1";
const signup_url = baseURL + "/register"
console.log(signup_url);

// Posting data using axios to the register api
const signup = async (data) => {

    try {
        const response_signup = await axios.post(signup_url, data);
        window.location.href = "login.html";
    } catch (error) {
        const errors = JSON.parse(error.response.data);
        error_div.classList.remove('hide')
        for (let [key, value] of Object.entries(errors)) {
            error_div.append(`${value}`);

        }
    }
}
// When the create account button is clicked
create_acc_btn.addEventListener("click", () => {
    error_div.classList.add('hide')
    error_div.innerHTML = "";
    //Take the inputs
    const data = new FormData();
    data.append('name', name_input.value);
    data.append('username', username_input.value);
    data.append('email', email_input.value);
    data.append('password', password_input.value);
    data.append('password_confirmation', confirm_password_input.value);
    data.append('gender', gender_input.value);
    data.append('interested_in', interested_in_input.value);
    data.append('location', location_input.value);
    data.append('birthdate', birthday_input.value);

    signup(data);
});



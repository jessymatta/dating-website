window.stop();
//Getting login page input elements
const username_input = document.getElementById("username");
const password_input = document.getElementById("password");
//Login button
const login_btn = document.getElementById("login-btn");
//Error div 
const error_div = document.querySelector(".error-div-login");
//Login api url
const baseURL = "http://127.0.0.1:8000/api";
const login_url = baseURL + "/login"
console.log(login_url);


// Posting data using axios to the login api for validation
const login = async (data) => {

    try {
        const response_login = await axios.post(login_url, data);
        console.log(response_login);
        localStorage.setItem('token', JSON.stringify(response_login.data.access_token))
        localStorage.setItem('user', JSON.stringify(response_login.data.user))
        // setTimeout(function () {
        //     window.location.href = './home.html'
        //   }, 1000)

    } catch (error) {
        console.log(error);
        console.log(JSON.stringify(error.response.data));
        error_div.append(JSON.stringify(error.message).replace(/[^a-zA-Z0-9 ]/g, '')+"---"+JSON.stringify(error.response.data).replace(/[^a-zA-Z0-9 ]/g, ' '));
        error_div.classList.remove('hide');
    }

}

// When the login button is clicked
login_btn.addEventListener("click", () => {
    error_div.classList.add('hide')
    error_div.innerHTML = "";
    //Take the inputs
    const data = new FormData();
    data.append('username', username_input.value);
    data.append('password', password_input.value);
    console.log(...data);
    login(data);
});

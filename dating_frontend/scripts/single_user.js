const get_profile_url = "http://127.0.0.1:8000/api/v0.1/get_user";
const add_to_fav_url = "http://127.0.0.1:8000/api/v0.1/add_favorite";
const single_page_container = document.querySelector(".user_card");
let user_id = "";
const api_tokenn = JSON.parse(localStorage.getItem('token'));
//For the send a message modal
const modallBg = document.querySelector('.msg-bg');
const modallClose = document.querySelector('.modall-close');
const msg_input = document.getElementById("msg-input");
const modallSave = document.getElementById("send-msg");

//A function that will create and display the user in the single product page
function createCard(user_name, user_age, user_location, user_bio) {
    let card_to_append =
        `<div class="single_user_pp">
    <img src="../assets/dummy-profile-pic.png">
</div>
<div class="single_user_info">
    <p><span class="green">Name:</span><span class="yellow">${user_name}</span></p>
    <p><span class="green">Age:</span><span class="yellow">${user_age}</span></p>
    <p><span class="green">Location:</span><span class="yellow">${user_location}</span></p>
    <p><span class="green">Bio:</span><span class="yellow">${user_bio}</span></p>

    <div class="single_user_actions">
        <i id="msg-icon" class="fa-regular fa-message"></i>
        <i class="fa-solid fa-ban"></i>
        <i id="heart" class="fa-regular fa-heart"></i>
    </div>
</div>`;

    if (single_page_container) {
        single_page_container.innerHTML = card_to_append;
    }

    //Adding an eventlisteners to the heart here becuase the div is a string and it cannot be accessed later on
    const heart_icon = document.getElementById("heart");
    heart_icon.addEventListener("click", () => {
        heart_icon.classList.add("fa-solid");
        favUser();
    })

    //Adding an eventListener to the message icon in the card
    const msg_icon = document.getElementById("msg-icon");
    msg_icon.addEventListener("click", () => {
        modallBg.classList.add('bg-active');
        const msg_to_send = msg_input.value;
        console.log(msg_to_send);
    })


}

//checking if the clicked user id is in local storage
if (typeof (localStorage.getItem("div_user_id")) != 'undefined') {
    user_id = localStorage.getItem("current_clicked_on_profile");
}

//Calling the getprofile api
const getProfile = async () => {
    try {
        const response = await axios.get(`${get_profile_url}/${user_id}`, {
            headers: {
                'Authorization': `bearer ${api_tokenn}`
            }
        });
        const user_name = response.data.user_info.name;
        const user_age = calculateAge(response.data.user_info.birthdate);
        const user_location = response.data.user_info.location;
        const user_bio = response.data.user_info.bio ? response.data.user_info.bio : "No bio";
        createCard(user_name, user_age, user_location, user_bio);
    } catch (error) {
        console.log(error);
    }
}
//A function that computes the age
function calculateAge(date) {
    const now = new Date().getFullYear();
    const myArray = date.split("-");
    myArray.forEach(element => {
    });
    const user_dob = myArray[0];
    return eval(now - user_dob)
}

//A function that adds a user to favorites
const favUser = async () => {
    try {
        const response = await axios.get(`${add_to_fav_url}/${user_id}`, {
            headers: {
                'Authorization': `bearer ${api_tokenn}`
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//for the send a message modal
modallClose.addEventListener('click', function () {
    modallBg.classList.remove('bg-active');
});

modallSave.addEventListener('click', function () {
    console.log(msg_input.value);
    const data = new FormData();
    data.append("message", msg_input.value);
    sendMsg(data);

    modallBg.classList.remove('bg-active');
});

//add the msg to the db
const sendMsg = async (data) => {
    const send_msg_url = "http://127.0.0.1:8000/api/v0.1/send_message"
    try {
        const response = await axios.post(`${send_msg_url}/${user_id}`, data, {
            headers: {

                'Authorization': `bearer ${token}`
            }

        })
        console.log(response);
        console.log("success");

    } catch (error) {
        console.log(error);
    }

}


// Calling the main function 
getProfile();
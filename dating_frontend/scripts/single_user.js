const get_profile_url = "http://127.0.0.1:8000/api/v0.1/get_user";
const single_page_container = document.querySelector(".user_card");
let user_id = "";
const api_tokenn = JSON.parse(localStorage.getItem('token'));

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
        <i class="fa-regular fa-message"></i>
        <i class="fa-solid fa-ban"></i>
        <i class="fa-regular fa-heart"></i>
    </div>
</div>`;

    if (single_page_container) {
        single_page_container.innerHTML = card_to_append;
    }
    return single_page_container;
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
        const user_name =response.data.user_info.name;
        const user_age=calculateAge(response.data.user_info.birthdate);
        const user_location =response.data.user_info.location;
        const user_bio =response.data.user_info.bio? response.data.user_info.bio:"No bio";
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

// Calling the main function 
getProfile();
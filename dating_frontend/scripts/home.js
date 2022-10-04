console.log("working");
const cardsContainer = document.querySelector('.user_cards_container');
console.log(cardsContainer);
const id = JSON.parse(localStorage.getItem('user')).id;
const api_token = JSON.parse(localStorage.getItem('token'));
console.log(api_token);
console.log(id);
const baseURL = "http://127.0.0.1:8000/api/v0.1";
const homepage_load_url = baseURL + "/homepage"

async function getInterestedInUsers() {
    const response = await axios.get(
        homepage_load_url,
        {
            headers: {
                'Authorization': `bearer ${api_token}`
            }
        }
    )
    // console.log(response);
    // console.log(JSON.stringify(response.data.interested_in_profiles));
    const profiles = response.data.interested_in_profiles;
    for (let i = 0; i < profiles.length; i++) {
        console.log(profiles[i]);
        let profile_name = profiles[i].name;
        let profile_bio = profiles[i].bio ? profiles[i].bio : "nobio";
        console.log(profile_bio);
        let profile_location = profiles[i].location;
        console.log(profile_location);
        let profile_age = calculateAge(profiles[i].birthdate)
        console.log("originalll === "+profiles[i].birthdate);

        const profile_to_append = `<div class="card">

            <img src="../assets/dummy-profile-pic.png">
            <h3>${profile_name}</h3>
            <p><span class="user_bio">${profile_bio}</span></p>
            <p class="user_location">${profile_location}</p>

            <div class="age_and_heart">
                <h8>Age:<span class="product_price">${profile_age}</span></h8>
                <i class="fa-regular fa-heart green"></i>
            </div>
            <!-- <i class="fa-regular fa-heart green"></i> -->
        </div>`

        cardsContainer.innerHTML += profile_to_append;
    }
}
function calculateAge(date) {
    const now = new Date().getFullYear();
    const myArray = date.split("-");

    myArray.forEach(element => {
        console.log(element);
    });
    const user_dob=myArray[0];

    // console.log("ssss"+now);
    // console.log("user_dob"+user_dob);
    // console.log(eval(now-user_dob))
    return eval(now-user_dob)
}

getInterestedInUsers();
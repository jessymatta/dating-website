//Edit profile modal
const modalBtn = document.getElementById('edit-profile');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalSave = document.querySelector('.edit_profile_modal_save_btn');
const client_name_input = document.getElementById('profile-input-name');
const client_username_input = document.getElementById('profile-input-username');
const client_bio_input = document.getElementById('profile-input-bio');
const input = document.getElementById("upload-pp");
const profile_picture_div = document.getElementById("profile-div");
const token = JSON.parse(localStorage.getItem('token'))
const upload_pp_url = "http://127.0.0.1:8000/api/v0.1/upload_pp"

const user_in_storage = JSON.parse(localStorage.getItem('user'));
const client_id = user_in_storage.id;
const user_name = user_in_storage.name;
const user_bio = user_in_storage.bio;
client_name_input.value = user_name;
client_bio_input.value = user_bio

console.log("-----------" + user_name + "-----------");
console.log(client_id);


//When the button that should show the modal is clicked
modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
    // getProfile();
});

//When the X at the top left of the modal is clicked
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});

//edit profile modal pp 
input.addEventListener("change", (e) => {
    let image_file = e.target.files[0];
    let reader = new FileReader;
    reader.readAsDataURL(image_file);
    console.log(image_file);

    reader.onload = (e) => {
        let image_url = e.target.result;
        profile_picture_div.src = image_url;
        console.log(image_url); //base 64 image
        const data = new FormData();
        data.append("pp_base64", image_url);
        upload_pp(data);

    }

});


const upload_pp = async (data) => {

    try {
        const response = await axios.post(upload_pp_url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Tye, Authorisation",
                'Authorization': `bearer ${token}`
            }

        })
        console.log(response);
        console.log("success");

    } catch (error) {
        console.log(error);
    }

}






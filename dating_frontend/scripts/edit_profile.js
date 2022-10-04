//Edit profile modal
const modalBtn = document.getElementById('edit-profile');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalSave = document.querySelector('.edit_profile_modal_save_btn');
const client_name_input = document.getElementById('profile-input-name');
const client_username_input = document.getElementById('profile-input-username');
const client_email_input = document.getElementById('profile-input-email');
const input= document.getElementById("upload-pp");
const profile_picture_div= document.getElementById("profile-div");

const user_in_storage =JSON.parse(localStorage.getItem('user'));
const client_id=user_in_storage.id;
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
input.addEventListener("change", (e) =>{
    // console.log(e);
    let image_file=e.target.files[0];
    // console.log(image_file);
    let reader = new FileReader;
    // console.log(reader);
    reader.readAsDataURL(image_file);
    // console.log(reader);

    reader.onload= (e) => {
        let image_url=e.target.result;
        profile_picture_div.src=image_url;
    }

})
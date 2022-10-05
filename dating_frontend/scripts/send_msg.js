//Edit profile modall
const modallBtn = document.getElementById('send-a-msg');
const modallBg = document.querySelector('.msg-bg');
const modallClose = document.querySelector('.modall-close');
const modallSave = document.querySelector('.send-msg');


//When the button that should show the modall is clicked
modallBtn.addEventListener('click', function () {
    modallBg.classList.add('bg-active');
});

//When the X at the top left of the modall is clicked
modallClose.addEventListener('click', function () {
    modallBg.classList.remove('bg-active');
});



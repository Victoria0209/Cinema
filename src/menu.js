import {initializeField, ERROR_CLASS_NAME, FOCUSED_CLASS_NAME, SELECT_SELECTED} from "./prize";
const formTelSend = document.getElementById('form_tel_send');
const telField = document.querySelector('.form_call input[name="tel"]').parentNode;

$('.button_menu').on('click', function () {
    $('.wrap_menu').css({
        transform: 'translateX(0)'
    })
});

$('.cross_svg').on('click', function () {
    $('.wrap_menu').css({
        transform: 'translateX(100%)'
    })
});

$('.call').on('click', function () {
    $('.wrap_call').css({
        display: 'block'
    })
});

$('.form_call__close').on('click', function (e) {
    e.preventDefault();
    $('.wrap_call').css({
        display: 'none'
    })
});

const telFieldUtiles = initializeField(telField);

function handleSubmitTel (e){
    e.preventDefault();
    const telValue = telFieldUtiles.getValue();
    if (!telValue) {
        telFieldUtiles.addError('Необходимо указать номер');
        return;
    }
    const data = {
        tel: telValue,
    };
    
    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString())
        .then(data => data.json())
        .then((data) => {
            telFieldUtiles.reset();
            $('.wrap_call').css({
                display: 'none'
            })
        })
}

formTelSend.addEventListener('submit', handleSubmitTel);

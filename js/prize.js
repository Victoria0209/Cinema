const openBtn = document.getElementById('btn_prize_open');
const popUp = document.getElementById('prize_pop-up');
const closeBtn = document.getElementById('prize_pop-up__close');
const nameField = document.querySelector('#prize_pop-up input[name="feedback_name"]').parentNode;
const emailField = document.querySelector('#prize_pop-up input[name="email"]').parentNode;
const form = document.getElementById('form_prize__id');
const selectPrize = document.getElementById('feedback_select_prize');

function popUpToggle() {
    popUp.classList.toggle('hidden');
};

const ERROR_CLASS_NAME = 'input__error';
const FOCUSED_CLASS_NAME = 'input__filled';
const SELECT_SELECTED = 'input_select_selected';

function initializeField(field) {
    let input;
    if (field.getElementsByTagName('input')[0]) {
        input = field.getElementsByTagName('input')[0];
    } else {
        input = field.getElementsByTagName('textarea')[0];
    };

    const fieldError = field.querySelector('.input__error_mmsg');


    reset();

    function clearError() {
        field.classList.remove(ERROR_CLASS_NAME);
        fieldError.innerText = "";
    };

    input.addEventListener('focus', function () {
        field.classList.add(FOCUSED_CLASS_NAME);
    });

    input.addEventListener('blur', function () {
        if (!input.value) {
            field.classList.remove(FOCUSED_CLASS_NAME)
        };
    });

    input.addEventListener('input', () => {
        clearError();
    });
    selectPrize.addEventListener('change', () => {
        selectPrize.classList.remove(ERROR_CLASS_NAME)
    });

    function reset() {
        input.value = '';
        field.classList.remove(FOCUSED_CLASS_NAME);
        clearError();
    }

    return {
        addError(errorText) {
            field.classList.add(ERROR_CLASS_NAME);
            fieldError.innerText = errorText;
        },
        getValue() {
            return input.value;
        },
        focus() {
            input.focus();
        },
        reset: reset
    };
};

const nameFieldUtiles = initializeField(nameField);
const emailFieldUtiles = initializeField(emailField);

openBtn.addEventListener('click', () => {
    popUpToggle();
    nameFieldUtiles.focus();
});
selectPrize.addEventListener('change', () => {
    selectPrize.classList.add('input_select_selected');
});
closeBtn.onclick = popUpToggle;

function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameFieldUtiles.getValue();
    const emailValue = emailFieldUtiles.getValue();

    if (!nameValue) {
        nameFieldUtiles.addError('Необходимо указать имя');
        return;
    }
    if (!emailValue) {
        emailFieldUtiles.addError('Укажите email');
        return;
    }
    if (selectPrize.value === "none") {
        selectPrize.classList.add(ERROR_CLASS_NAME);
        return;
    }

    const data = {
        name: nameValue,
        email: emailValue,
        prize: selectPrize.value,
    };

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString())
    .then(data => data.json())
    .then((data) => {
        popUpToggle();
        nameFieldUtiles.reset();
        emailFieldUtiles.reset();
    })
}

form.addEventListener('submit', handleSubmit);
const nameFieldFeedback = document.querySelector('#feedback_form__id input[name="feedback_name__form"]').parentNode;
const feedbackField = document.querySelector('#feedback_form__id textarea[name="feedback_textarea"]').parentNode;
const formFedback = document.getElementById('feddback_form__id');
const selectFeedback = document.getElementById('feedback_select');
const btnForm = document.getElementById('btn_form');

const nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
const feedbackFieldUtiles = initializeField(feedbackField);

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.add('input_select_selected');
});

function handleSubmitFeedback(event) {
    event.preventDefault();
    const nameValueFeedback = nameFeedbackFieldUtiles.getValue();
    const feedbackValue = feedbackFieldUtiles.getValue();

    if (!nameValueFeedback) {
        nameFeedbackFieldUtiles.addError('Необходимо указать имя');
        return;
    }
    if (selectFeedback.value === "none") {
        selectFeedback.classList.add(ERROR_CLASS_NAME);
        return;
    }
    if (!feedbackValue) {
        feedbackFieldUtiles.addError('Напишите отзыв');
        return;
    }

    const data = {
        name: nameValueFeedback,
        place: selectFeedback.value,
        feedback: feedbackValue,
    };

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();


    fetch(url.toString())

        .then(() => {
            btnForm.innerText = "Форма отправлена";
            btnForm.setAttribute("disabled", true);
            btnForm.style.background = 'grey'
            setTimeout(() => {
                btnForm.innerText = "Послать";
                btnForm.removeAttribute("disabled");
                btnForm.style.background = '#A3CC40'
            }, 2000)
        });

};

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.remove(ERROR_CLASS_NAME);
})
formFedback.addEventListener('submit', handleSubmitFeedback);
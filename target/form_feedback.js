"use strict";

var nameFieldFeedback = document.querySelector('#feedback_form__id input[name="feedback_name__form"]').parentNode;
var feedbackField = document.querySelector('#feedback_form__id textarea[name="feedback_textarea"]').parentNode;
var formFedback = document.getElementById('feddback_form__id');
var selectFeedback = document.getElementById('feedback_select');
var btnForm = document.getElementById('btn_form');
var nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
var feedbackFieldUtiles = initializeField(feedbackField);
selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.add('input_select_selected');
});

function handleSubmitFeedback(event) {
  event.preventDefault();
  var nameValueFeedback = nameFeedbackFieldUtiles.getValue();
  var feedbackValue = feedbackFieldUtiles.getValue();

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

  var data = {
    name: nameValueFeedback,
    place: selectFeedback.value,
    feedback: feedbackValue
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString()).then(function () {
    btnForm.innerText = "Форма отправлена";
    btnForm.setAttribute("disabled", true);
    btnForm.style.background = 'grey';
    setTimeout(function () {
      btnForm.innerText = "Послать";
      btnForm.removeAttribute("disabled");
      btnForm.style.background = '#A3CC40';
    }, 2000);
  });
}

;
selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.remove(ERROR_CLASS_NAME);
});
formFedback.addEventListener('submit', handleSubmitFeedback);
//# sourceMappingURL=form_feedback.js.map
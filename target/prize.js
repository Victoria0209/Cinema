"use strict";

var openBtn = document.getElementById('btn_prize_open');
var popUp = document.getElementById('prize_pop-up');
var closeBtn = document.getElementById('prize_pop-up__close');
var nameField = document.querySelector('#prize_pop-up input[name="feedback_name"]').parentNode;
var emailField = document.querySelector('#prize_pop-up input[name="email"]').parentNode;
var form = document.getElementById('form_prize__id');
var selectPrize = document.getElementById('feedback_select_prize');

function popUpToggle() {
  popUp.classList.toggle('hidden');
}

;
var ERROR_CLASS_NAME = 'input__error';
var FOCUSED_CLASS_NAME = 'input__filled';
var SELECT_SELECTED = 'input_select_selected';

function initializeField(field) {
  var input;

  if (field.getElementsByTagName('input')[0]) {
    input = field.getElementsByTagName('input')[0];
  } else {
    input = field.getElementsByTagName('textarea')[0];
  }

  ;
  var fieldError = field.querySelector('.input__error_mmsg');
  reset();

  function clearError() {
    field.classList.remove(ERROR_CLASS_NAME);
    fieldError.innerText = "";
  }

  ;
  input.addEventListener('focus', function () {
    field.classList.add(FOCUSED_CLASS_NAME);
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASS_NAME);
    }

    ;
  });
  input.addEventListener('input', function () {
    clearError();
  });
  selectPrize.addEventListener('change', function () {
    selectPrize.classList.remove(ERROR_CLASS_NAME);
  });

  function reset() {
    input.value = '';
    field.classList.remove(FOCUSED_CLASS_NAME);
    clearError();
  }

  return {
    addError: function addError(errorText) {
      field.classList.add(ERROR_CLASS_NAME);
      fieldError.innerText = errorText;
    },
    getValue: function getValue() {
      return input.value;
    },
    focus: function focus() {
      input.focus();
    },
    reset: reset
  };
}

;
var nameFieldUtiles = initializeField(nameField);
var emailFieldUtiles = initializeField(emailField);
openBtn.addEventListener('click', function () {
  popUpToggle();
  nameFieldUtiles.focus();
});
selectPrize.addEventListener('change', function () {
  selectPrize.classList.add('input_select_selected');
});
closeBtn.onclick = popUpToggle;

function handleSubmit(event) {
  event.preventDefault();
  var nameValue = nameFieldUtiles.getValue();
  var emailValue = emailFieldUtiles.getValue();

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

  var data = {
    name: nameValue,
    email: emailValue,
    prize: selectPrize.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString()).then(function (data) {
    return data.json();
  }).then(function (data) {
    popUpToggle();
    nameFieldUtiles.reset();
    emailFieldUtiles.reset();
  });
}

form.addEventListener('submit', handleSubmit);
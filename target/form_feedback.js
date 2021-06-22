"use strict";

var nameFieldFeedback = document.querySelector('#feedback_form__id input[name="name"]').parentNode;
var feedbackField = document.querySelector('#feedback_form__id input[name="email"]').parentNode;
var formFedback = document.getElementById('feddback_form__id');
var selectFeedback = document.getElementById('feedback_select');
var btnForm = document.getElementById('btn_form');
var nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
var feedbackFieldUtiles = initializeField(feedbackField);
selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.add('input_select_selected');
});
$(document).ready(function ($) {
  $('#feddback_form__id').on('submit', function (e) {
    e.preventDefault();
    $('.input__error').removeClass('input__error');
    $('.input__error_mmsg').remove();
    var data = new FormData(document.getElementById('feddback_form__id'));
    $.ajax({
      url: 'http://study.xeol.ru/api/new_order',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function success(msg) {
        document.getElementById('feddback_form__id').reset();
        document.getElementById('feedback_name').parentNode.classList.remove(FOCUSED_CLASS_NAME);
        document.getElementById('feedback_select').classList.remove("input_select_selected");
        document.getElementById('feedback_textarea').parentNode.classList.remove(FOCUSED_CLASS_NAME);
        $.fancybox.open({
          src: '.modal-success',
          type: "inline"
        });
        $('.success-result').html(msg.success);
      },
      error: function error(msg) {
        showErrors(msg);
      },
      cache: false,
      contentType: false,
      processData: false
    });
  });
});

function showErrors(msg) {
  $('#feddback_form__id input, #feddback_form__id select').each(function () {
    for (var i in msg.responseJSON.errors) {
      if (i == $(this).attr('name')) {
        var parent = $(this).closest('.input_block1');
        if (!parent.length) parent = $(this).closest('.feedback-select_wrap');
        parent.addClass('input__error');

        for (var j in msg.responseJSON.errors[i]) {
          parent.append('<p class="input__error_mmsg">' + msg.responseJSON.errors[i][j] + '</p>');
        }
      }
    }
  });
}

selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.remove(ERROR_CLASS_NAME);
});
//# sourceMappingURL=form_feedback.js.map
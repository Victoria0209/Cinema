const nameFieldFeedback = document.querySelector('#feedback_form__id input[name="name"]').parentNode;
const feedbackField = document.querySelector('#feedback_form__id input[name="email"]').parentNode;
const formFedback = document.getElementById('feddback_form__id');
const selectFeedback = document.getElementById('feedback_select');
const btnForm = document.getElementById('btn_form');

const nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
const feedbackFieldUtiles = initializeField(feedbackField);

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.add('input_select_selected');
});

$(document).ready(($) => {
    $('#feddback_form__id').on('submit', function (e) {
        e.preventDefault();
        $('.input__error').removeClass('input__error');
        $('.input__error_mmsg').remove();

        let data = new FormData(document.getElementById('feddback_form__id'));

        $.ajax({
            url: 'http://study.xeol.ru/api/new_order',
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (msg) {
                document.getElementById('feddback_form__id').reset();
                document.getElementById('feedback_name').parentNode.classList.remove(FOCUSED_CLASS_NAME)
                document.getElementById('feedback_select').classList.remove("input_select_selected")
                document.getElementById('feedback_textarea').parentNode.classList.remove(FOCUSED_CLASS_NAME)
                $.fancybox.open({
                    src: '.modal-success',
                    type: "inline",
                })
                $('.success-result').html(msg.success);
            },
            error: function (msg) {
                showErrors(msg)
            },
            cache: false,
            contentType: false,
            processData: false,

        });
    })

})

function showErrors(msg) {

    // перебираем инпуты через цикл each
    $('#feddback_form__id input, #feddback_form__id select').each(function () {
// перебираем errors через цикл
        for (let i in msg.responseJSON.errors) {
             // сравниваем атрибут name с названием у errors(email,place,name)
            if (i == $(this).attr('name')) {
                 // если есть ошибка, входим в условие ниже, где ищем closest с названием '.input_block1' (наши 2 поля имеют класс input_block1)
                let parent = $(this).closest('.input_block1');
                 // если closest не нашли, значит ошибка в select
                if (!parent.length)
                 // тогда мы ищем closest '.feedback-select_wrap'
                    parent = $(this).closest('.feedback-select_wrap');
                    //добавляем элементу класс ошибки 
                parent.addClass('input__error')
                // перебираем массив errors и добавляем название ошибки и append`им в разметку конкатенируем  с подходящей ошибкой
                for (let j in msg.responseJSON.errors[i]) {
                    parent.append('<p class="input__error_mmsg">' + msg.responseJSON.errors[i][j] + '</p>');
                }
            }
        }
    })
}

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.remove(ERROR_CLASS_NAME);
})
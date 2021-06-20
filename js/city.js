const SYPEX_URL = 'http://api.sypexgeo.net/json/';
const GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities';
let selectedCity, cities;

function getRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    // настроили как открыть XMLHttpRequest
    xhr.open('GET', url);

    // выполнили отправку
    xhr.send();

    // отслеживает изменения статусов объекта XMLHttpRequest
    xhr.onreadystatechange = function () {
        // проверка успешно ли выполнился запрос
        if (xhr.status != 200) {
            return xhr.statusText;
        } else {
            // если вызвался запрос корректно, то в функцию callback передаем результаты запроса
            if (xhr.readyState == 4) {
                callback.call(xhr.responseText);
            }
        }
    }
}

function setCity() {
    // получаем строку и превращаем ее в объект json
    let res = $.parseJSON(this)
    selectedCity = res.city.name_ru;
    // вытащити русское название города

    $('#city_link').html(selectedCity);
    // прописываем в city_link название города
}

function setCities() {
    cities = $.parseJSON(this);
    getCityList()
}

function getCityList() {
    // забираем значение из инпута;
    let val = $('#city_input').val();
    let counter = 0;
    let html = '<ul>';
    // Сравнение инпута с массивом и ограничение их до 5 шт
    for (let i = 0; i < cities.length; i++) {
        // приравниваем города к верхнему регистру и сравниваем с буквами в инпуте (indexOf возвращает число -1 при несовпадении,и 0 при совпадении)
        if (cities[i].name.toLowerCase().indexOf(val.toLowerCase()) >= 0 && counter < 5) {
            html += "<li>" + cities[i].name + '</li>';
            counter++;
        }
    };
    html += '</ul>';
    $('#search_result').html(html);
}

$(document).ready(($) => {
    getRequest(SYPEX_URL, setCity);

    // вешаем событие keyup на инпут и запускаем проверку
    $(document).on('keyup', '#city_input', function () {
        let val = $(this).val();
        // если список пустой,его нет,значит выполняем запрос к серверу и вызываем функцию с отрисовкой городов
        if (!cities)
            getRequest(GLAVPUNKT_URL, setCities)
        else {
            getCityList()
        }
    })
    $('#search_result').on('click', 'li', function () {
        $('#city_link').text(this.textContent);
        $.fancybox.close();
    })
    
})
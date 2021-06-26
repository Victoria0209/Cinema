const SYPEX_URL = 'http://api.sypexgeo.net/json/';
const GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities';
let selectedCity, cities;

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            callback.call(xhr.responseText);
        } else {
            return xhr.statusText;
        }
    }
}

function setCity() {
    let res = $.parseJSON(this)
    selectedCity = res.city.name_ru;
    $('#city_link').html(selectedCity);
}

function setCities() {
    cities = $.parseJSON(this);
    getCityList()
}

function getCityList() {
    let val = $('#city_input').val();
    let counter = 0;
    let html = '<ul>';
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name.toLowerCase().includes(val.toLowerCase()) && counter < 5) {
            html += "<li>" + cities[i].name + '</li>';
            counter++;
        }
    };
    html += '</ul>';
    $('#search_result').html(html);
}

$(document).ready(($) => {
    getRequest(SYPEX_URL, setCity);
    $(document).on('keyup', '#city_input', function () {
        if (cities)
            getCityList()
        else {
            getRequest(GLAVPUNKT_URL, setCities)
        }
    })
    $('#search_result').on('click', 'li', function () {
        $('#city_link').text(this.textContent);
        $.fancybox.close();
    })

})
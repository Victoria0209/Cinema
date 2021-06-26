"use strict";

var SYPEX_URL = 'http://api.sypexgeo.net/json/';
var GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities';
var selectedCity, cities;

function getRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      callback.call(xhr.responseText);
    } else {
      return xhr.statusText;
    }
  };
}

function setCity() {
  var res = $.parseJSON(this);
  selectedCity = res.city.name_ru;
  $('#city_link').html(selectedCity);
}

function setCities() {
  cities = $.parseJSON(this);
  getCityList();
}

function getCityList() {
  var val = $('#city_input').val();
  var counter = 0;
  var html = '<ul>';

  for (var i = 0; i < cities.length; i++) {
    if (cities[i].name.toLowerCase().includes(val.toLowerCase()) && counter < 5) {
      html += "<li>" + cities[i].name + '</li>';
      counter++;
    }
  }

  ;
  html += '</ul>';
  $('#search_result').html(html);
}

$(document).ready(function ($) {
  getRequest(SYPEX_URL, setCity);
  $(document).on('keyup', '#city_input', function () {
    if (cities) getCityList();else {
      getRequest(GLAVPUNKT_URL, setCities);
    }
  });
  $('#search_result').on('click', 'li', function () {
    $('#city_link').text(this.textContent);
    $.fancybox.close();
  });
});
//# sourceMappingURL=city.js.map
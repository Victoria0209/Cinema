import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
import '../libs/own/owl.carousel.min.js';
import '../node_modules/@babel/polyfill/dist/polyfill.min.js';
import '../libs/fancybox/jquery.fancybox.min.js';

import {createTable} from './companents/films-table.js';
import {films} from './__data__/api/mocks.js';
import "./companents/film-mosaic.js";
import "../js/city.js";
import "../js/prize.js";
import "../js/form_feedback.js";

const tableBody = document.getElementById('block04_table_tbody');
createTable(films, tableBody);

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    769: {
      items: 3
    },
  }
});

$('.scrollUp').click(function () {
  $('html').animate({
    scrollTop: 0
  }, 1500)
})

$('.lang_list').slideUp(0)

let lngOpened = false;

$('.lang_trigger').on('click', function () {
  $('.lang_list').slideToggle();

  lngOpened = !lngOpened;
  
  $(this).find('svg').css({
    transform: `rotate(${lngOpened ? 180 : 0}deg)`,
  })
})
import './libs/own/owl.carousel.min.css';
import './libs/own/owl.theme.default.css';
import './libs/fancybox/jquery.fancybox.min.css';
import './css/reset.css';
import './css/layout.css';
import './css/style.css';
import './css/media.css';

// import $ from 'jquery';
import 'owl.carousel';
import './libs/own/owl.carousel.min.js';
import '@babel/polyfill';
import './libs/fancybox/jquery.fancybox.min.js';

import "./city.js";
import "./prize.js";
import "./menu.js";

import "./form_feedback.js";
import {
  createTable
} from './companents/films-table.js';
import {
  films
} from './__data__/api/mocks.js';
import "./companents/film-mosaic.js";

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


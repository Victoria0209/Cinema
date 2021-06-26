"use strict";

require("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

require("../libs/own/owl.carousel.min.js");

require("../node_modules/@babel/polyfill/dist/polyfill.min.js");

require("../libs/fancybox/jquery.fancybox.min.js");

var _filmsTable = require("./companents/films-table.js");

var _mocks = require("./__data__/api/mocks.js");

require("./companents/film-mosaic.js");

require("../js/city.js");

require("../js/prize.js");

require("../js/form_feedback.js");

var tableBody = document.getElementById('block04_table_tbody');
(0, _filmsTable.createTable)(_mocks.films, tableBody);
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
    }
  }
});
$('.scrollUp').click(function () {
  $('html').animate({
    scrollTop: 0
  }, 1500);
});
$('.lang_list').slideUp(0);
var lngOpened = false;
$('.lang_trigger').on('click', function () {
  $('.lang_list').slideToggle();
  lngOpened = !lngOpened;
  $(this).find('svg').css({
    transform: "rotate(".concat(lngOpened ? 180 : 0, "deg)")
  });
});
//# sourceMappingURL=main.js.map
"use strict";

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
}); // функция для скрола вверх

$('.lang_list').slideUp(0); // сворачивает меню

var lngOpened = false; // прописали false для дальнешйей работы с переворачиванием стрелочки

$('.lang_trigger').on('click', function () {
  $('.lang_list').slideToggle(); // переключатель

  lngOpened = !lngOpened; // инвертируем lngOpened

  $(this).find('svg').css({
    transform: "rotate(".concat(lngOpened ? 180 : 0, "deg)") // условия для lngOpened

  });
});
//# sourceMappingURL=main.js.map
"use strict";

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 4
    },
    721: {
      items: 6
    }
  }
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
//# sourceMappingURL=single.js.map
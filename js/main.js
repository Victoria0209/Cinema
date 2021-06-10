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
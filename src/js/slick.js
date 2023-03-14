$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // // dots: true,
  prevArrow: '<button type="button" class="my-swipe-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-swipe-next">&xrarr;</button>', // обовязково додається, щоб частина картки заходило за вьюпорт

  // autoplay: [
  //   {
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ],
});
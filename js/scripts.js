// placeholder
$(document).ready(function () {
  $(".js-tophr__photos-slider-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 6000,
    autoplaySpeed: 12000,
    autoplayHoverPause: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  let owl = $(".js-tophr__values-slider-carousel");

  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    navText: [
      '<div class="tophr__values-slider__nav-button tophr__values-slider__nav-button_prev" ></div>',
      '<div class="tophr__values-slider__nav-button tophr__values-slider__nav-button_next" ></div>',
    ],
  });

  $(".js-tophr__cards-items").owlCarousel({
    items: 2,
    loop: false,
    nav: false,
    dots: false,
    autoWidth: true,
    responsive: {
      0: {
        margin: 8,
      },
      1000: {
        margin: 24,
      },
    },
  });

  $(".tophr__values-slider__nav-button_next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".tophr__values-slider__nav-button_prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

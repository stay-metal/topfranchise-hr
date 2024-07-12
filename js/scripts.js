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
    autoplayTimeout: 1000,
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
    items: 1,
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

const nextCardsEl = document.getElementsByClassName("js-tophr__cards-title__icon")[0];
nextCardsEl.addEventListener(
  "click",
  function (e) {
    // Get the total number of items
    var totalItems = $(".js-tophr__cards-items").find(".owl-item").length;
    var currentItemIndex = $(".js-tophr__cards-items").find(".owl-item.active").index();
    console.log("Total ", totalItems);
    console.log("Current ", currentItemIndex);
    if (window.matchMedia("(min-width: 900px)").matches) {
      console.log("Media ", 900);
      if (currentItemIndex + 1 === 3) {
        // Reset the carousel to the first item
        $(".js-tophr__cards-items").trigger("to.owl.carousel", [0]);
      } else {
        // Move to the next item
        $(".js-tophr__cards-items").trigger("next.owl.carousel");
      }
      // $(".js-tophr__cards-items").trigger("next.owl.carousel");
    } else if (window.matchMedia("(min-width: 600px)").matches) {
      console.log("Media ", 600);
      if (currentItemIndex + 1 === 4) {
        // Reset the carousel to the first item
        $(".js-tophr__cards-items").trigger("to.owl.carousel", [0]);
      } else {
        // Move to the next item
        $(".js-tophr__cards-items").trigger("next.owl.carousel");
      }
    } else {
      if (currentItemIndex + 1 === 5) {
        // Reset the carousel to the first item
        $(".js-tophr__cards-items").trigger("to.owl.carousel", [0]);
      } else {
        // Move to the next item
        $(".js-tophr__cards-items").trigger("next.owl.carousel");
      }
    }
  },
  false,
);

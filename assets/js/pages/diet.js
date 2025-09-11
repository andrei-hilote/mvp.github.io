(function () {
  "use strict";

  // Utility: Initialize slick slider
  function initSlickSlider(selector, defaultSlides, breakpoints) {
    $(selector).slick({
      infinite: true,
      slidesToShow: defaultSlides,
      slidesToScroll: 1,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: breakpoints
    });
  }

  // Testimonial Slider
  initSlickSlider('.testimonial-slider', 4, [
    {
      breakpoint: 1441,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]);

  // Popular Workout Slider
  initSlickSlider('.popularworkout-slider', 2, [
    {
      breakpoint: 1441,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 481,
      settings: { slidesToShow: 1 }
    }
  ]);

})();
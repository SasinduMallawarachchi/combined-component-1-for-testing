var gallery1Swiper = new Swiper(".img-slider-1-slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".img-slider-1-next",
    prevEl: ".img-slider-1-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 33,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

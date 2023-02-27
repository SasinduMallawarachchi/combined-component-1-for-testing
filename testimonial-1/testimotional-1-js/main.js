var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".testamonial-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

var swiper2 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".testamonial-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },

   breakpoints:{
      0: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      520: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      950: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
  },
});


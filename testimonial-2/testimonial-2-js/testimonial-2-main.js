 
var swiperTestimonial_2 = new Swiper(".testimonial-2-slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  navigation: {
    nextEl: ".testimonial-2-next",
    prevEl: ".testimonial-2-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

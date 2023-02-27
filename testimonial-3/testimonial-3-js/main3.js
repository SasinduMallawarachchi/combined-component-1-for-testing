 var swipertestamonial3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: "#testamonial-3-next",
          prevEl: "#testamonial-3-prev",
        },

    breakpoints:{
      0: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      360:{
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

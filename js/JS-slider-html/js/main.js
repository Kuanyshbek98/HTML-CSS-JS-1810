const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  // direction: "vertical",
  loop: true,
  // speed: 400,
  // spaceBetween: 100,
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

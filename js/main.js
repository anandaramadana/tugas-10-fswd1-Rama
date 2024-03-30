var swiper = new Swiper(".tugas-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
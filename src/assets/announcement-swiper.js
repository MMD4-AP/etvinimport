const announcementSwiper = new Swiper('.announcement-swiper', {
    loop: true,
    autoplay: {
        delay: 7500,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1
});

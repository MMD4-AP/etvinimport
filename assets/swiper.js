const featuredSwiper = new Swiper('.featured-swiper', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 320px
        500: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 4
        }
    }
});
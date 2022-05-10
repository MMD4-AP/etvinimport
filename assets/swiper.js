const featuredProducts = document.querySelector('.featured-products');

const mobile = featuredProducts.dataset.mobile;
const desktop = featuredProducts.dataset.desktop;

const featuredSwiper = new Swiper('.featured-swiper', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 320px
        500: {
            slidesPerView: mobile
        },
        // when window width is >= 480px
        768: {
            slidesPerView: mobile
        },
        // when window width is >= 640px
        990: {
            slidesPerView: desktop
        }
    }
});
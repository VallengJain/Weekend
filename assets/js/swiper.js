export const swiperFunc = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            enabled: false,
        },

        scrollbar: {
            enabled: false,
        },

        autoplay: {
            delay: 5000,
        },

        uniqueNavElements: false,
    });
}
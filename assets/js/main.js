import { hideLoader } from "./loader.js";
import { dropdown } from "./dropdown.js";
import { swiperFunc } from "./swiper.js";

document.addEventListener('DOMContentLoaded', () => {
    hideLoader();
    dropdown();

    const pageEl = document.querySelector('.welcome-page');
    if (pageEl == null) {
        swiperFunc();
    }
});
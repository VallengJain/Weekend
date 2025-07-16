import { hideLoader } from "./loader.js";
import { dropdown } from "./dropdown.js";

document.addEventListener('DOMContentLoaded', () => {
    if (document.readyState === "complete") {
        hideLoader();
    } else window.addEventListener('load', hideLoader);
    dropdown();
});
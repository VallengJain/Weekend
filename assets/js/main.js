import { hideLoader } from "./loader.js";

document.addEventListener('DOMContentLoaded', () => {
    if (document.readyState === "complete") {
        hideLoader();
    } else window.addEventListener('load', hideLoader);
});
'use strict';

/* PRELOAD */
/* LOADING WILL END AFTER DOCUMENT IS LOADED */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

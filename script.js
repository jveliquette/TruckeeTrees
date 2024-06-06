'use strict';


/* PRELOAD */
/* LOADING WILL END AFTER DOCUMENT IS LOADED */
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


/* IMAGE SLIDER */
const imageWrapper = document.querySelector('.image-wrapper');
  let imageIndex = 0;

  function slideImages(direction) {
    const imageWidth = document.querySelector('.image-wrapper img').clientWidth;
    if (direction === 'next') {
      imageIndex++;
    } else {
      imageIndex--;
    }
    if (imageIndex < 0) {
      imageIndex = imageWrapper.children.length - 1;
    } else if (imageIndex >= imageWrapper.children.length) {
      imageIndex = 0;
    }
    const offset = -imageIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${offset}px)`;
  }


/* EXPAND PARAGRAPH */
function toggleParagraph() {
  var paragraph = document.getElementById("expandable-paragraph");
  var readButton = document.getElementById("read-btn");
  paragraph.classList.toggle("expanded");
  readButton.style.display = paragraph.classList.contains("expanded") ? "none" : "inline-block";
}


/* EXPAND MENU */
function toggleMenu() {
  var menu = document.getElementById("expandable-menu");
  var menuButton = document.getElementById("menu-btn");
  menu.classList.toggle("expanded");
  menuButton.style.display = menu.classList.contains("expanded") ? "none" : "inline-block";
}

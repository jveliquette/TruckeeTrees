'use strict';

/* PRELOAD */
/* LOADING WILL END AFTER DOCUMENT IS LOADED */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


/* EXPAND PARAGRAPH */
function toggleParagraph() {
    var paragraph = document.getElementById("expandable-paragraph");
    var readButton = document.getElementById("read-btn");
    if (paragraph.style.maxHeight === "0px" || paragraph.style.maxHeight === "") {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px"; // Show the paragraph
      readButton.style.display = "none"; // Hide the "Read" button
    } else {
      paragraph.style.maxHeight = "0"; // Hide the paragraph
      readButton.style.display = "inline-block"; // Show the "Read" button
    }
  }


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


/* EXPAND PLANT MENU */
function toggleMenu() {
  var menu = document.getElementById("expandable-menu");
  var menuButton = document.getElementById("menu-btn");
  if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
    menu.style.maxHeight = menu.scrollHeight + "px"; // Expand the menu
    menuButton.style.display = "none";
  } else {
    menu.style.maxHeight = "0"; // Collapse the menu
    menuButton.style.display = "inline-block";
  }
}

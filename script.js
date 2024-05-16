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

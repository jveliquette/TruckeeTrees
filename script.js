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


/* ADD PLANTS */

document.addEventListener('DOMContentLoaded', function() {
  let plantCounter = 1; // Counter to keep track of plant input groups

  document.getElementById('addPlantButton').addEventListener('click', function() {
      plantCounter++;
      const plantInputContainer = document.getElementById('plantInputContainer');

      const newPlantInputGroup = document.createElement('div');
      newPlantInputGroup.classList.add('form-group');

      const plantTypeLabel = document.createElement('label');
      plantTypeLabel.setAttribute('for', 'plantType' + plantCounter);
      plantTypeLabel.textContent = 'Plant Name:';
      newPlantInputGroup.appendChild(plantTypeLabel);

      const plantTypeInput = document.createElement('input');
      plantTypeInput.setAttribute('type', 'text');
      plantTypeInput.setAttribute('id', 'plantType' + plantCounter);
      plantTypeInput.setAttribute('name', 'plantType[]');
      plantTypeInput.required = true;
      newPlantInputGroup.appendChild(plantTypeInput);

      const plantSizeLabel = document.createElement('label');
      plantSizeLabel.setAttribute('for', 'plantSize' + plantCounter);
      plantSizeLabel.textContent = 'Size:';
      newPlantInputGroup.appendChild(plantSizeLabel);

      const plantSizeInput = document.createElement('input');
      plantSizeInput.setAttribute('type', 'text');
      plantSizeInput.setAttribute('id', 'plantSize' + plantCounter);
      plantSizeInput.setAttribute('name', 'plantSize[]');
      plantSizeInput.required = true;
      newPlantInputGroup.appendChild(plantSizeInput);

      const quantityLabel = document.createElement('label');
      quantityLabel.setAttribute('for', 'quantity' + plantCounter);
      quantityLabel.textContent = 'Quantity:';
      newPlantInputGroup.appendChild(quantityLabel);

      const quantityInput = document.createElement('input');
      quantityInput.setAttribute('type', 'number');
      quantityInput.setAttribute('id', 'quantity' + plantCounter);
      quantityInput.setAttribute('name', 'quantity[]');
      quantityInput.required = true;
      quantityInput.setAttribute('min', '1');
      newPlantInputGroup.appendChild(quantityInput);

      plantInputContainer.appendChild(newPlantInputGroup);
  });


});

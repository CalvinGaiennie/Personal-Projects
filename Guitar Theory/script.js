"use strict";
const btnUnhide = document.querySelector(".unhideBtn");
const image = document.querySelector(".hidden");

btnUnhide.addEventListener("click", function (event) {
  event.preventDefault();
  image.style.opacity = 100;
});

// Add a mouseover event listener
// button.addEventListener("mouseover", () => {
//   // Change the button's background color
//   button.style.backgroundColor = "blue";
// });

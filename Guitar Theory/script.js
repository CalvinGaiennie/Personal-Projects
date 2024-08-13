"use strict";
const btnUnhide = document.querySelector(".unhideBtn");
const image = document.querySelector(".hidden");

btnUnhide.addEventListener("click", function (event) {
  event.preventDefault();
  image.style.opacity = 100;
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");
var header2 = document.getElementById("myHeader2");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header2.classList.add("sticky2");
  } else {
    header.classList.remove("sticky");
    header2.classList.remove("sticky2");
  }
}

// Source of Code
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

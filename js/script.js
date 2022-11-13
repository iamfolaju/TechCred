window.onscroll = function () {
  myFunction();
};

var nav = document.getElementById("nav");
var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
// ------- Scroll To the Top ------
const scrollTop = document.querySelector(".scrollTop");
function scrollToTop() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("hideTop");
  } else {
    scrollTop.classList.remove("hideTop");
  }
});

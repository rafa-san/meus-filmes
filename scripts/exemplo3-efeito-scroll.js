var scrollUp = window.scrollY;
window.onscroll = function() {
var scrollDown = window.scrollY;
  if (scrollUp > scrollDown) {
    document.querySelector(".menu-lateral").style.display = "block";
  } else {
    document.querySelector(".menu-lateral").style.display = "none";
  }
  scrollUp = scrollDown;
}
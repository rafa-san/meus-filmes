var scrollUp = window.pageYOffset;
window.onscroll = function() {
var scrollDown = window.pageYOffset;
  if (scrollUp > scrollDown) {
    document.querySelector(".menu-lateral").style.display = "block";
  } else {
    document.querySelector(".menu-lateral").style.display = "none";
  }
  scrollUp = scrollDown;
}
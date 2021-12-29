var scrollUp = window.pageYOffset;
window.onscroll = function() {
var scrollDown = window.pageYOffset;
  if (scrollUp > scrollDown) {
    document.querySelector(".conteudo-dropdown").style.display = "block";
  } else {
    document.querySelector(".conteudo-dropdown").style.display = "none";
  }
  scrollUp = scrollDown;
}
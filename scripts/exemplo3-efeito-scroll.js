var nav = document.getElementById('efeito');

document.body.onscroll = () => {
  if (window.pageYOffset > 400) {
    nav.style.display = "block";
    nav.style.transitionTimingFunction = 'ease';
  } else {
    nav.style.display = "none";
  }
}
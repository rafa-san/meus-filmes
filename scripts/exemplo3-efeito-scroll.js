var nav = document.getElementById('efeito');

document.body.onscroll = () => {
  if (window.pageYOffset < 400) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
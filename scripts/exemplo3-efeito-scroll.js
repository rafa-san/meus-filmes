var anos = document.querySelector('.conteudo-dropdown');

document.body.onscroll = () => {

  if (window.pageYOffset < 420) {
      anos.style.display = "none";
  } else {
      anos.style.display = "block";
  }
}
var nav = document.getElementById('efeito');
var a1900 = document.querySelector('.a1900');
var a1930 = document.querySelector('.a1930');

document.body.onscroll = () => {

  if (window.pageYOffset < 66) {
      nav.style.display = "none";
  } else if (window.pageYOffset >= 66 && window.pageYOffset < 464) {
      nav.style.display = "block";
      a1900.style.backgroundColor = "orange";
  } else if (window.pageYOffset > 464 && window.pageYOffset < 862) {
      nav.style.display = "block";
      a1930.style.backgroundColor = "yellow";
  } else {
      nav.style.display = "block";
  }
}
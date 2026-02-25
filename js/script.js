// Scroll Up

/*document.getElementById('button-up').addEventListener('click', scrollUp);

function scrollUp() {
  var currentScrool = document.documentElement.scrollTop;
  if (currentScrool > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScrool - (currentScrool / 30));
  }
}
buttonUp = document.getElementById('button-up');
window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    buttonUp.style.transform = 'scale(1)';
    botomWhatsapp.style.bottom = '20%'
  } else {
    buttonUp.style.transform = 'scale(0)';
    botomWhatsapp.style.bottom = '20px'
  }
  
}*/
// Anio automatico en el footer
/*const anio = document.getElementById('anio');
const fecha = new Date();
const year = fecha.getFullYear();
anio.textContent = year; */
document.getElementById('anio').textContent = new Date().getFullYear();

/*https://www.youtube.com/watch?v=z1a0eHWn5ds (Cómo dominar el DOM en JavaScript en 30 minutos 🌳 2025)*/

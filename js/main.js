// nav 
// Menú hamburguesa
// Hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }
});

//carusel



const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${i * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Auto-play
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);





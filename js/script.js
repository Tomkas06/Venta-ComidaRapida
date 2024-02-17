document.getElementById("scrollToTopButton").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Obtener la altura del navbar
const navbarHeight = document.getElementById("navbar").offsetHeight;

// Mostrar el botón cuando el usuario haya desplazado la altura del navbar
window.onscroll = function() {
  if (document.body.scrollTop > navbarHeight || document.documentElement.scrollTop > navbarHeight) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
};

const cards = document.querySelectorAll('.card');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim'); // Agregar clase de sombra cuando está en la vista
                    entry.target.style.transform = 'scale(1.1)'; // Escalar al 110%
                } else {
                    entry.target.classList.remove('anim'); // Quitar clase de sombra cuando sale de la vista
                    entry.target.style.transform = 'scale(1)'; // Volver al tamaño original
                }
            });
        }, { threshold: 0.5 });

        cards.forEach(card => {
            observer.observe(card);
        });
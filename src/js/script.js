///Funcion ScollToTop
document.getElementById("scrollToTopButton").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Obtener la altura del navbar
const navbarHeight = document.getElementById("navbarUp").offsetHeight;

// Mostrar el botón cuando el usuario haya desplazado la altura del navbar
window.onscroll = function() {
  if (document.body.scrollTop > navbarHeight || document.documentElement.scrollTop > navbarHeight) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
};


///Funcion agrandar cards
const cards = document.querySelectorAll('.card');

        const observerCard = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('agrandado'); // Agregar clase de sombra cuando está en la vista
                    entry.target.classList.remove('achicado'); // Quitar clase de sombra cuando sale de la vista
                } 
                /*
                else {
                    entry.target.classList.add('achicado'); // Agregar clase de sombra cuando está en la vista
                    entry.target.classList.remove('agrandado'); // Quitar clase de sombra cuando sale de la vista
                }
                */
            });
        }, { threshold: 0.5 });

        cards.forEach(card => {
            observerCard.observe(card);
        });

///Funcion girar cartel

const cartel = document.querySelectorAll('.nombre-cartel');

        const observerCartel = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('girado'); // Agregar clase de sombra cuando está en la vista
                } 
                /*
                else {
                    entry.target.classList.add('achicado'); // Agregar clase de sombra cuando está en la vista
                    entry.target.classList.remove('agrandado'); // Quitar clase de sombra cuando sale de la vista
                }
                */
            });
        }, { threshold: 0.5 });

        cartel.forEach(card => {
            observerCartel.observe(card);
        });


//sexo

const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "/src/img/icons/burger-menu.svg";
  const iconName = isBurger ? "/src/img/icons/close.svg" : "/src/img/icons/burger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
  }
};

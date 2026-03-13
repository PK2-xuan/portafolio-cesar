const initialNav = document.getElementById("mainNav");

// Creamos navbar fijo
const fixedNav = document.createElement("nav");
fixedNav.className = "navbar navbar-expand-lg fixed-navbar";
fixedNav.innerHTML = initialNav.innerHTML;
document.body.appendChild(fixedNav);

// Seleccionamos elementos del navbar fijo
const fixedNavComments = fixedNav.querySelectorAll(".nav-comment");
const fixedNavNumbers = fixedNav.querySelectorAll(".nav-number");
const fixedNavBrand = fixedNav.querySelector(".navbar-brand"); // Logo del navbar fijo

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 350;

  // Mostrar u ocultar navbar fijo
  fixedNav.classList.toggle("show", scrolled);

  // Cambiar colores de los comentarios y números del navbar
  const color = scrolled ? "#68dafc" : "#ffffff";
  const numberColor = scrolled ? "#70d9e3" : "#a9b1d6";

  fixedNavComments.forEach((el) => (el.style.color = color));
  fixedNavNumbers.forEach((el) => (el.style.color = numberColor));

  // Ocultar logo del navbar fijo al aparecer
  fixedNavBrand.classList.toggle("hide-logo", scrolled);
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Seleccionamos los elementos que deben animarse
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementById("experienceAccordion");

  // Podemos añadir un listener para cambiar clases o sonidos si fuera necesario
  // Pero con Bootstrap 5.3 el comportamiento ya viene integrado por data-attributes.

  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Animación extra de escala al presionar
      button.style.transform = "scale(0.99)";
      setTimeout(() => (button.style.transform = "scale(1)"), 100);
    });
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    const bsCollapse = bootstrap.Collapse.getInstance(menu);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

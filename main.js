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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
});

document
  .querySelectorAll(".work-content, .phone-mockup-container")
  .forEach((el) => observer.observe(el));

// cursor

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Actualización instantánea para el punto pequeño
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Actualización para el anillo (con el delay del transition CSS)
  // El -20 es para centrar el círculo de 40px
  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

// Interacción con elementos (Links, Botones, Acordeones)
const interactivos = document.querySelectorAll(
  "a, button, .accordion-button, .tech-badge",
);

interactivos.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursorDot.classList.add("cursor-hover-dot");
    cursorOutline.classList.add("cursor-hover-outline");
  });
  el.addEventListener("mouseout", () => {
    cursorDot.classList.remove("cursor-hover-dot");
    cursorOutline.classList.remove("cursor-hover-outline");
  });
});

// filter

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter-item");
  const items = document.querySelectorAll(".portfolio-item");

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // 1. Cambiar estado activo en el menú
      filters.forEach((f) => f.classList.remove("active"));
      this.classList.add("active");

      const selectedFilter = this.getAttribute("data-filter");

      // 2. Filtrar elementos
      items.forEach((item) => {
        if (selectedFilter === "all") {
          item.classList.remove("hidden");
        } else {
          if (item.classList.contains(selectedFilter)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        }
      });
    });
  });
});

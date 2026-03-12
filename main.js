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
  const color = scrolled ? "#70d9e3" : "#ffffff";
  const numberColor = scrolled ? "#70d9e3" : "#a9b1d6";

  fixedNavComments.forEach((el) => (el.style.color = color));
  fixedNavNumbers.forEach((el) => (el.style.color = numberColor));

  // Ocultar logo del navbar fijo al aparecer
  fixedNavBrand.classList.toggle("hide-logo", scrolled);
});



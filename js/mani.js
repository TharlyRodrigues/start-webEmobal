// consts
const iconMenu = document.querySelector(".icon-menu");
const menuMob = document.querySelector(".menu-mob");
const menuIcon = iconMenu.querySelector("i");
const btnDrop = document.querySelector(".btn-drop");
const dropdown = document.querySelector(".dropdown-mob");

// Função para alternar a visibilidade do menu móvel e o ícone do menu
function toggleMenu() {
  if (menuMob.style.display === "block") {
    menuMob.style.display = "none";
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  } else {
    menuMob.style.display = "block";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }
}

// Seleciona todos os elementos
const dropdownMobItems = document.querySelectorAll(".dropdown-mob");

document.querySelectorAll(".dropdown-mob").forEach((dropdownMob) => {
  const dropdownContainerMob = dropdownMob.querySelector(
    ".dropdown-container-mob"
  );
  dropdownMob.addEventListener("click", function (event) {
    event.preventDefault();
    if (dropdownContainerMob.style.display === "block") {
      dropdownContainerMob.style.display = "none";
    } else {
      dropdownContainerMob.style.display = "block";
    }
  });
});

// Adicionar um evento de clique ao ícone do menu
iconMenu.addEventListener("click", toggleMenu);

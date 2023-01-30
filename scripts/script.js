alert("Portfolio em desenvolvimento!!");

const btnMenu = document.getElementById("btn-menu");
const navegation = document.getElementById("navegation");

btnMenu.addEventListener("click", () => {
  navegation.classList.toggle("active");
});

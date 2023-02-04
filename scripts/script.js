alert("Portfolio em desenvolvimento!!");

// adicionado um evento de click no 'btnMenu' para ocultar/mostrar o menu de navegação
const btnMenu = document.getElementById("btn-menu");
const navegation = document.getElementById("navegation");

btnMenu.addEventListener("click", () => {
  navegation.classList.toggle("active");
});

// gerando de forma dinâmica os icones das tecnologias
const containerTech = document.getElementById("containerTech");

fetch("./techs.json")
  .then((response) => response.json())
  .then((techs) =>
    techs.forEach(({ icon, tech }) => {
      containerTech.innerHTML += `
        <div class="card">
        <img class="card-img" src="assets/icons/${icon}" alt="${tech}" />

        <span class="name-icon">${tech}</span>
        </div>
      `;
    })
  );

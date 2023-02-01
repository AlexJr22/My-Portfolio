alert("Portfolio em desenvolvimento!!");

const btnMenu = document.getElementById("btn-menu"); // botão do menu
const navegation = document.getElementById("navegation"); // elemento guarda os link âncoras

const containerTech = document.getElementById("containerTech"); // container que guarda os icones

// adicionado um evento de click no btnMenu
btnMenu.addEventListener("click", () => {
  navegation.classList.toggle("active");
});

// gerando de forma dinâmica os icones
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

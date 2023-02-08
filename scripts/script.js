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

// Gerando de forma dinâmica os cards dos projetos
const containerProjects = document.getElementById("projects");

fetch("./projects.json")
    .then((response) => response.json())
    .then((projects) =>
        projects.forEach(({ name, img, github, page }) => {
            containerProjects.innerHTML += `
                <div class="cardProject">
                    <h3 class="projectTitle">${name}</h3>

                    <div
                    style="
                        background-image: url(${img});
                    "
                    class="imgProject"
                    ></div>

                    <div class="containerBtns">
                        <a href="${page}"
                            target="_blank"
                            class="btn-1"
                        >
                            Veja Mais
                        </a>

                        <a
                            href="${github}"
                            target="_blank"
                            class="btn-2"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            `;
        })
    );

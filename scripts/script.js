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
            let divCard = document.createElement("div");
            divCard.classList.add("card");

            let img = document.createElement("img");
            let span = document.createElement("span");

            img.classList.add("card-img");
            img.src = `assets/icons/${icon}`;
            img.alt = `${tech}`;

            span.classList.add("name-icon");
            span.innerHTML = `${tech}`;

            divCard.appendChild(img);
            divCard.appendChild(span);

            containerTech.appendChild(divCard);
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

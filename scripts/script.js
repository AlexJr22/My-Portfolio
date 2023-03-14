alert("Portfólio em desenvolvimento!!");

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

// evento de click na tagA_email
const tagA_email = document.getElementById("tagA_email");

function saveText() {
    const text = "alexjr2oficial@gmail.com";
    navigator.clipboard
        .writeText(text)
        .then(() => {
            alert(
                "Email copiado para a área de transferência \n📌alexjr2oficial@gmail.com"
            );
        })
        .catch((err) => {
            alert("Erro ao copiar email \n📌alexjr2oficial@gmail.com");
            console.error("Erro ao copiar texto: ", err);
        });
}

tagA_email.addEventListener("click", saveText);

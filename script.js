// Altera a saudação conforme o horário do dia
document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("boas-vindas");
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    titulo.innerText = `${saudacao} Bem-vindo ao Colégio Estadual São Cristóvão`;
});

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        botoes.forEach(b => b.classList.remove("active"));

        botao.classList.add("active");

    });
});
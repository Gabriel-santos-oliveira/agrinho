// Alternar entre modo escuro e modo claro
const botaoModoEscuro = document.getElementById("modo-escuro");

botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    botaoModoEscuro.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
});

// Exemplo de como manipular conteúdo dinamicamente
const sobreSection = document.getElementById("sobre");
const sobreTexto = "A agricultura sustentável é o caminho para o futuro, onde a tecnologia e a preservação ambiental andam lado a lado para garantir a segurança alimentar e a preservação dos recursos naturais para as próximas gerações.";
sobreSection.querySelector("p").textContent = sobreTexto;

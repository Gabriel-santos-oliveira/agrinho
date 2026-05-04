// Seleção de elementos do DOM
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const welcomeMsg = document.getElementById('welcome-message');

/**
 * Função para alternar entre modo claro e escuro
 * Atende ao critério de melhoria de experiência do usuário
 */
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dinamicamente
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Modo Claro';
    } else {
        themeToggle.innerText = 'Modo Escuro';
    }
});

/**
 * Função para personalizar a saudação
 * Utiliza variáveis para processar informações antes de exibir
 */
function boasVindas() {
    const nomeInput = document.getElementById('user-name').value;
    
    if (nomeInput.trim() !== "") {
        const mensagem = `Bem-vindo, ${nomeInput}! Vamos juntos construir um agro mais verde.`;
        welcomeMsg.innerText = mensagem;
        welcomeMsg.style.color = "var(--secondary)";
        welcomeMsg.style.fontWeight = "bold";
    } else {
        welcomeMsg.innerText = "Por favor, digite um nome válido.";
        welcomeMsg.style.color = "red";
    }
}

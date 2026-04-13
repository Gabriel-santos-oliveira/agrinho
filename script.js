// Função para alternar o Modo Escuro (Melhoria para o usuário)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    // Adiciona ou remove a classe 'dark-mode' do elemento body
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dependendo do tema atual
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Alternar Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Alternar Modo Escuro';
    }
});

// Função para manipular o formulário e criar saudação personalizada
const welcomeForm = document.getElementById('welcome-form');
const userNameInput = document.getElementById('user-name');
const greetingMessageDiv = document.getElementById('greeting-message');

welcomeForm.addEventListener('submit', function(evento) {
    // Previne o recarregamento padrão da página ao enviar o form
    evento.preventDefault();
    
    // Utiliza variável para armazenar informação do usuário
    const nomeDoUsuario = userNameInput.value;
    
    // Manipula o DOM alterando o HTML para exibir a mensagem
    greetingMessageDiv.innerHTML = `<p>Olá, <strong>${nomeDoUsuario}</strong>! Obrigado por se importar com nosso planeta. Juntos, somos a força do novo Agro!</p>`;
    
    // Esconde o formulário manipulando o estilo
    welcomeForm.style.display = 'none';
});

// Função para mostrar/esconder a DIV de detalhes sobre sustentabilidade
const toggleDetailsBtn = document.getElementById('toggle-details');
const detailsDiv = document.getElementById('sustainability-details');

toggleDetailsBtn.addEventListener('click', function() {
    // Verifica o estado atual de exibição da div
    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        // Mostra a div e atualiza o texto do botão
        detailsDiv.style.display = 'block';
        toggleDetailsBtn.textContent = 'Ocultar Detalhes';
    } else {
        // Esconde a div e volta o texto original
        detailsDiv.style.display = 'none';
        toggleDetailsBtn.textContent = 'Ler Mais Sobre Sustentabilidade';
    }
});

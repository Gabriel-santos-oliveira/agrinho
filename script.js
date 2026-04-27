// Função para abrir um link externo
function openLink() {
    window.open('https://www.exemplo.com/sustentabilidade', '_blank');
}

// Função para alternar visibilidade de um elemento
function toggleDiv() {
    const div = document.getElementById('detalhes');
    div.style.display = (div.style.display === 'none') ? 'block' : 'none';
}

// Modo escuro
document.getElementById('modo-escuro').addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
});

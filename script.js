// Função para ativar/desativar o modo escuro
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Verifica se o usuário tem preferência salva no localStorage
if(localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
}

// Alterna o modo escuro ao clicar no botão
darkModeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

// Função para abrir o modal
function toggleModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

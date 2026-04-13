// Função para ativar/desativar o modo escuro
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Verifica se o usuário tem preferência salva no localStorage
if(localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode'); // Aplica o modo escuro se a preferência estiver salva
}

// Alterna o modo escuro ao clicar no botão
darkModeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência no localStorage
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

// Função para alternar entre os slides do slider
let slideIndex = 0;
showSlides(); // Chama a função para mostrar o slide

function showSlides() {
    let slides = document.querySelectorAll(".image-slider .slide");
    
    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementa o índice do slide
    slideIndex++;

    // Se o índice for maior que o número de slides, reinicia o índice para 1
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";

    // Muda a imagem a cada 3 segundos
    setTimeout(showSlides, 3000);
}

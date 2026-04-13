// Função para ativar/desativar o modo escuro
document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
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
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".image-slider .slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

// Efeito de rolagem suave para os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alerta simples de contato
document.getElementById('btn-contato').addEventListener('click', () => {
    alert("Obrigado pelo interesse! Nossa equipe de sustentabilidade entrará em contato em breve.");
});

// Mudar cor do header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#1b3d17';
    } else {
        header.style.background = '#2d5a27';
    }
});

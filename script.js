// Menu Mobile Interativo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Adicionar estilo via JS para mostrar/esconder no mobile
    if(navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
    } else {
        navLinks.style.display = 'none';
    }
});

// Contador Animado para a seção de estatísticas
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Disparar contador apenas quando o usuário chegar na seção
window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos) {
        startCounters();
    }
}, { once: true }); // Executa apenas uma vez

// Simulação de envio de formulário
document.getElementById('agro-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    btn.innerText = "Enviando...";
    btn.style.background = "#2d6a4f";
    
    setTimeout(() => {
        alert("Mensagem enviada com sucesso! Nossa equipe técnica analisará seus dados.");
        btn.innerText = "Enviar Mensagem";
        e.target.reset();
    }, 2000);
});

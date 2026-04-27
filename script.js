// 1. Variáveis e Manipulação de DOM para Saudação
function personalizarSaudacao() {
    const nomeInput = document.getElementById('user-name').value;
    const msgElemento = document.getElementById('welcome-msg');
    
    if (nomeInput.trim() !== "") {
        // Processa a informação antes de exibir
        const nomeFormatado = nomeInput.charAt(0).toUpperCase() + nomeInput.slice(1);
        msgElemento.innerText = `Olá, ${nomeFormatado}! Vamos cultivar o amanhã?`;
    } else {
        alert("Por favor, digite seu nome para uma experiência personalizada.");
    }
}

// 2. Alternador de Modo Escuro (Dark Mode)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dinamicamente
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.innerText = "☀️ Modo Claro";
    } else {
        themeBtn.innerText = "🌓 Modo Escuro";
    }
});

// 3. Ajuste Dinâmico de Fonte (Melhoria para o usuário)
const fontSlider = document.getElementById('font-slider');
fontSlider.addEventListener('input', (e) => {
    const size = e.target.value;
    document.body.style.fontSize = size + "px";
});

// 4. Manipulação de Formulário e Feedback
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Esconde o formulário e mostra mensagem de sucesso
    contactForm.classList.add('hidden');
    feedback.classList.remove('hidden');
    feedback.style.color = "var(--primary)";
    feedback.style.fontWeight = "bold";
    
    console.log("Formulário enviado com sucesso!");
});

// Comentário: Função para garantir navegação suave (Smooth Scroll) já nativa via CSS

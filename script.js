// --- 1. LÓGICA DE SAUDAÇÃO PERSONALIZADA ---
function personalizarSaudacao() {
    // Armazena o valor do input em uma variável
    const nome = document.getElementById('user-name').value;
    const saudacaoDisplay = document.getElementById('welcome-msg');

    if (nome.trim() !== "") {
        // Processa a informação (deixa em maiúsculo)
        const nomeLimpo = nome.toUpperCase();
        // Manipula o DOM para atualizar o texto na tela
        saudacaoDisplay.innerText = `Olá, ${nomeLimpo}! Você faz parte do futuro!`;
    } else {
        alert("Por favor, diga-nos o seu nome!");
    }
}

// --- 2. LÓGICA DO MODO ESCURO (CORRIGIDA) ---
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // Alterna a classe dark-mode no body
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão para feedback visual
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.innerText = "☀️ Modo Claro";
        console.log("Modo Escuro Ativado");
    } else {
        themeBtn.innerText = "🌓 Modo Escuro";
        console.log("Modo Claro Ativado");
    }
});

// --- 3. AJUSTE DE TAMANHO DE FONTE ---
const fontSlider = document.getElementById('font-slider');

fontSlider.addEventListener('input', (event) => {
    const novoTamanho = event.target.value + "px";
    // Altera o estilo diretamente no elemento body
    document.body.style.fontSize = novoTamanho;
});

// --- 4. MANIPULAÇÃO DE FORMULÁRIO ---
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
    // Impede a página de recarregar (Comportamento padrão)
    e.preventDefault();
    
    // Esconde o formulário e mostra a div de agradecimento
    form.style.display = "none";
    feedback.style.display = "block";
    
    console.log("Dados de contato enviados!");
});

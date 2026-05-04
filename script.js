// Variáveis para controle de acessibilidade
let fontSize = 16;
const mainContent = document.getElementById('main-content');

// 1. Controle de Tamanho de Fonte
document.getElementById('font-increase').addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('font-decrease').addEventListener('click', () => {
    if(fontSize > 12) fontSize -= 2;
    document.body.style.fontSize = fontSize + 'px';
});

// 2. Modo Escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerText = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// 3. Saudação Personalizada (DOM Manipulation)
function boasVindas() {
    const nome = document.getElementById('user-name').value;
    const feedback = document.getElementById('welcome-message');
    
    if(nome.length > 2) {
        feedback.innerHTML = `<strong>Olá, ${nome}!</strong> Obrigado por se interessar pela agricultura do futuro.`;
        feedback.style.color = "var(--secondary)";
    } else {
        feedback.innerText = "Por favor, digite seu nome completo.";
    }
}

// 4. Simulador de Impacto (Contador Progressivo)
function animarContador(id, alvo) {
    let atual = 0;
    let obj = document.getElementById(id);
    let step = alvo / 100;
    
    let intervalo = setInterval(() => {
        atual += step;
        if (atual >= alvo) {
            obj.innerText = alvo.toLocaleString();
            clearInterval(intervalo);
        } else {
            obj.innerText = Math.floor(atual).toLocaleString();
        }
    }, 30);
}

// Inicia contadores ao carregar a página
window.onload = () => {
    animarContador('count-co2', 4500); // Exemplo de 4500 toneladas
    animarContador('count-water', 125000); // Exemplo de litros
};

// 1. Função para Personalização de Boas-vindas
const btnPersonalizar = document.getElementById('btn-personalizar');
const inputNome = document.getElementById('input-nome');
const textoSaudacao = document.getElementById('saudacao-dinamica');

btnPersonalizar.addEventListener('click', () => {
    // Armazena informação em uma variável antes de exibir
    let nomeUsuario = inputNome.value;
    
    if(nomeUsuario.trim() === "") {
        alert("Por favor, digite seu nome!");
    } else {
        // Manipula o DOM alterando o texto
        textoSaudacao.innerText = `Olá, ${nomeUsuario}! Vamos transformar o Agro?`;
        inputNome.value = ""; // Limpa o campo
    }
});

// 2. Lógica de Modo Escuro
const btnDarkMode = document.getElementById('dark-mode-toggle');
btnDarkMode.addEventListener('click', () => {
    // Altera a classe do body para ativar o modo escuro no CSS
    document.body.classList.toggle('dark-mode');
    
    // Efeito visual no botão
    btnDarkMode.style.transform = "scale(1.2)";
    setTimeout(() => btnDarkMode.style.transform = "scale(1)", 200);
});

// 3. Alteração de Tamanho de Fonte (Acessibilidade)
let fontSizeAtual = 16;
function alterarFonte(acao) {
    const corpo = document.body;
    if(acao === 'aumentar' && fontSizeAtual < 24) {
        fontSizeAtual += 2;
    } else if(acao === 'diminuir' && fontSizeAtual > 12) {
        fontSizeAtual -= 2;
    }
    // Atualiza o CSS via JS
    corpo.style.fontSize = fontSizeAtual + "px";
}

// 4. Manipulação de Formulário com Feedback Visual
const form = document.getElementById('form-sustentavel');
const feedback = document.getElementById('feedback-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Esconde o formulário e mostra a div de feedback
    form.classList.add('hidden');
    feedback.classList.remove('hidden');
    
    // Log explicativo para o console (bom para o nível de estudante)
    console.log("Formulário processado com sucesso.");
});

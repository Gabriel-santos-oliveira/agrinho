// 1. Variável para o contador
let contagemArvores = 0;

// 2. Função para personalizar saudação (Armazena e processa info)
function personalizarSaudacao() {
    const nome = document.getElementById('input-nome').value;
    const h1 = document.getElementById('boas-vindas');
    
    if (nome.trim() !== "") {
        h1.innerText = `Olá, ${nome}! Vamos cultivar o futuro?`;
    } else {
        alert("Por favor, digite seu nome.");
    }
}

// 3. Manipulação do contador
const btnContar = document.getElementById('btn-contar');
const displayContador = document.getElementById('contador');

btnContar.addEventListener('click', () => {
    contagemArvores++;
    displayContador.innerText = contagemArvores;
    // Efeito visual simples via JS
    displayContador.style.color = "#2d6a4f";
    displayContador.style.fontWeight = "bold";
});

// 4. Alternar Modo Escuro (Melhoria para o usuário)
const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if(document.body.classList.contains('dark-mode')) {
        btnTheme.innerText = "Modo Claro";
    } else {
        btnTheme.innerText = "Modo Escuro";
    }
});

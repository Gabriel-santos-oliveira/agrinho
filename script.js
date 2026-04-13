// Função para exibir mais informações na seção "Sobre"
function mostrarInfo() {
    const infoSobre = document.getElementById('info-sobre');
    if (infoSobre.style.display === "none") {
        infoSobre.style.display = "block";
    } else {
        infoSobre.style.display = "none";
    }
}

// Função para ativar/desativar o modo escuro
document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Função para mostrar/ocultar informações sobre sustentabilidade
document.getElementById('sustentabilidade-btn').addEventListener('click', function() {
    const info = document.getElementById('info-sustentabilidade');
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
});

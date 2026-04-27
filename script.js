// Alternar Modo Escuro
document.getElementById('modo-escuro').addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});

// Exibir/Esconder Detalhes (Correção do erro de primeiro clique)
function toggleDiv() {
    const div = document.getElementById('detalhes');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
}

// Envio de Formulário
function handleSubmit(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Recebemos sua mensagem.`);
    event.target.reset();
}

// Gráfico (Inicia após carregar a página)
const ctx = document.getElementById('graficoImpacto').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Convencional', 'Sustentável'],
        datasets: [{
            label: 'Emissão de CO2 (ton)',
            data: [1500, 200],
            backgroundColor: ['#ff6347', '#28a745']
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

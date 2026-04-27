// Alternar Modo Escuro
document.getElementById('modo-escuro').addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});

// Envio de Formulário
function handleSubmit(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada (simulação).`);
    event.target.reset();
}

// Inicialização do Gráfico
const ctx = document.getElementById('graficoImpacto').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Convencional', 'Sustentável'],
        datasets: [{
            label: 'Emissão de CO2 (Toneladas)',
            data: [1500, 200],
            backgroundColor: ['#d9534f', '#28a745']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

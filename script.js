document.addEventListener("DOMContentLoaded", function() {
    // Gráfico de Impacto Ambiental
    var ctx = document.getElementById('impactChart').getContext('2d');
    var impactChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Emissão de Gases', 'Uso de Água', 'Desmatamento'],
            datasets: [{
                label: 'Impactos do Agro no Meio Ambiente',
                data: [60, 40, 30], // Exemplo de dados
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

function openLink(url) {
    window.open(url, '_blank');
}

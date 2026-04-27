// Alterna o modo escuro
document.getElementById('modo-escuro').addEventListener('click', function () {
    document.body.classList.toggle('modo-escuro');
});

// Função para abrir link de sustentabilidade
function openLink() {
    window.open('https://www.exemplo.com/sustentabilidade', '_blank');
}

// Função para alternar a exibição de detalhes
function toggleDiv() {
    const div = document.getElementById('detalhes');
    div.style.display = (div.style.display === 'none') ? 'block' : 'none';
}

// Função para enviar formulário
function handleSubmit(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const comentarios = document.getElementById('comentarios').value;
    alert(`Obrigado pelo seu feedback, ${nome}! Responderemos em breve no seu email: ${email}. Comentário: ${comentarios}`);
}

// Gráfico Impacto com Chart.js
const ctx = document.getElementById('graficoImpacto').getContext('2d');
const graficoImpacto = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Práticas Convencionais', 'Práticas Sustentáveis'],
        datasets: [{
            label: 'Emissão de CO2 (toneladas)',
            data: [1500, 200],
            backgroundColor: ['#ff6347', '#28a745'],
            borderColor: ['#d9534f', '#218838'],
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

// Modo Escuro
const modoEscuroBtn = document.getElementById('modo-escuro-btn');

modoEscuroBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    if (document.body.classList.contains('modo-escuro')) {
        modoEscuroBtn.textContent = "Modo Claro";
    } else {
        modoEscuroBtn.textContent = "Modo Escuro";
    }
});

// Manipulando links externos
document.querySelectorAll('.external-link').forEach(button => {
    button.addEventListener('click', (e) => {
        const url = e.target.getAttribute('data-url');
        window.open(url, '_blank');
    });
});// Modo Escuro
const modoEscuroBtn = document.getElementById('modo-escuro-btn');

modoEscuroBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    if (document.body.classList.contains('modo-escuro')) {
        modoEscuroBtn.textContent = "Modo Claro";
    } else {
        modoEscuroBtn.textContent = "Modo Escuro";
    }
});

// Manipulando links externos
document.querySelectorAll('.external-link').forEach(button => {
    button.addEventListener('click', (e) => {
        const url = e.target.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

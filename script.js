// Executa após carregar a página
document.addEventListener("DOMContentLoaded", () => {

```
let tamanho = 16;

const aumentar = document.getElementById("increase-font");
const diminuir = document.getElementById("decrease-font");
const dark = document.getElementById("dark-mode");

// Aumentar fonte
if (aumentar) {
    aumentar.addEventListener("click", () => {
        tamanho += 2;
        document.body.style.fontSize = tamanho + "px";
    });
}

// Diminuir fonte
if (diminuir) {
    diminuir.addEventListener("click", () => {
        if (tamanho > 12) {
            tamanho -= 2;
            document.body.style.fontSize = tamanho + "px";
        }
    });
}

// Modo escuro
if (dark) {
    dark.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

iniciarContadores();
```

});

// Saudação
function saudacao() {
const nome = document.getElementById("nome").value.trim();
const msg = document.getElementById("mensagem");

```
if (nome.length > 2) {
    msg.textContent = `Olá, ${nome}! 🌱`;
} else {
    msg.textContent = "Digite um nome válido.";
}
```

}

// Simulador
function simular() {
const tipo = document.getElementById("tipo").value;
const res = document.getElementById("resultado");

```
if (tipo === "convencional") {
    res.textContent = "Alta produção, maior impacto ambiental.";
} else if (tipo === "sustentavel") {
    res.textContent = "Produção equilibrada com preservação ambiental.";
} else {
    res.textContent = "Escolha uma opção.";
}
```

}

// Abrir links externos
function abrir(url) {
window.open(url, "_blank", "noopener");
}

// Contador
function animar(id, valor) {
const el = document.getElementById(id);
if (!el) return;

```
let atual = 0;
const incremento = Math.ceil(valor / 100);

const intervalo = setInterval(() => {
    atual += incremento;

    if (atual >= valor) {
        el.textContent = valor.toLocaleString();
        clearInterval(intervalo);
    } else {
        el.textContent = atual.toLocaleString();
    }
}, 30);
```

}

// Inicia contadores
function iniciarContadores() {
animar("co2", 5000);
animar("agua", 100000);
}


// Controle de fonte
let tamanho = 16;

document.getElementById("increase-font").onclick = () => {
tamanho += 2;
document.body.style.fontSize = tamanho + "px";
};

document.getElementById("decrease-font").onclick = () => {
if (tamanho > 12) {
tamanho -= 2;
document.body.style.fontSize = tamanho + "px";
}
};

// Modo escuro
document.getElementById("dark-mode").onclick = () => {
document.body.classList.toggle("dark");
};

// Saudação personalizada
function saudacao() {
let nome = document.getElementById("nome").value;
let msg = document.getElementById("mensagem");

```
if (nome.length > 2) {
    msg.innerText = "Olá, " + nome + "! 🌱";
} else {
    msg.innerText = "Digite um nome válido.";
}
```

}

// Simulador
function simular() {
let tipo = document.getElementById("tipo").value;
let res = document.getElementById("resultado");

```
if (tipo === "convencional") {
    res.innerText = "Alta produção, porém maior impacto ambiental.";
} else if (tipo === "sustentavel") {
    res.innerText = "Equilíbrio entre produção e preservação ambiental.";
} else {
    res.innerText = "Escolha uma opção.";
}
```

}

// Abrir links externos
function abrir(link) {
window.open(link, "_blank");
}

// Contador animado
function contador(id, valor) {
let el = document.getElementById(id);
let atual = 0;

```
let intervalo = setInterval(() => {
    atual += valor / 100;

    if (atual >= valor) {
        el.innerText = valor;
        clearInterval(intervalo);
    } else {
        el.innerText = Math.floor(atual);
    }
}, 30);
```

}

// Inicialização
window.onload = () => {
contador("co2", 5000);
contador("agua", 100000);
};

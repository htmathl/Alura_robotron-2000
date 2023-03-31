const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const botoes_troca = document.querySelectorAll('[data-troca]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const listaRobos = [
    'Robotron 2000 - Rosa',
    'Robotron 2000 - Amarelo',
    'Robotron 2000 - Branco',
    'Robotron 2000 - Preto',
    'Robotron 2000 - Vermelho',
    'Robotron 2000 - Azul'
];

controle.forEach(e => {
    e.addEventListener("click", event => {
        manipularDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatistica(event.target.dataset.peca);
    });
});

function manipularDados(operacao, controle) {
    const componente = controle.querySelector("[data-contador]");

    if(operacao === "-")
        componente.value = parseInt(componente.value) - 1; 
    if(operacao === "+")
        componente.value = parseInt(componente.value) + 1;
}

function atualizaEstatistica(peca) {
    estatistica.forEach(el => {
        el.textContent = parseInt(el.textContent) + pecas[peca][el.dataset.estatistica];
    });
}

let cont = 0;

botoes_troca.forEach(el => {
    el.addEventListener("click", event => {
        const troca = event.target.dataset.troca;
        console.log(troca);
        if(troca === "anterior") {
            cont--;
            if(cont < 0) cont = 5;
        }
        if(troca === "proximo") {
            cont++;
            if(cont > 5) cont = 0;
        }
        console.log(cont);
        document.querySelector(".robo").src = `img/${listaRobos[cont]}.png`;
    });
});

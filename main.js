const controle = document.querySelectorAll('[data-controle]');

controle.forEach(e => {
    e.addEventListener("click", event => {
        manipularDados(event.target.dataset.controle, event.target.parentNode);
    });
});

function manipularDados(operacao, controle) {
    const componente = controle.querySelector("[data-contador]");

    if(operacao === "-")
        componente.value = parseInt(componente.value) - 1; 
    if(operacao === "+")
        componente.value = parseInt(componente.value) + 1;
}
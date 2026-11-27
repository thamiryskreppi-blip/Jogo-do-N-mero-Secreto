function jogar() {
    // Número secreto definido diretamente no código
    const numeroSecreto = 42;
    const totalTentativas = 5;
    let acertou = false;

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.textContent = "";

    for (let tentativa = 1; tentativa <= totalTentativas; tentativa++) {
        let palpite = Number(prompt(`Tentativa ${tentativa} de ${totalTentativas}:\nDigite seu palpite:`));

        if (palpite === numeroSecreto) {
            alert("Parabéns!");
            elementoResultado.style.color = "#04d361";
            elementoResultado.textContent = `Parabéns! Você acertou o número ${numeroSecreto} na ${tentativa}ª tentativa.`;
            acertou = true;
            break; // Interrompe o laço for imediatamente
        } else if (palpite > numeroSecreto) {
            alert(`Dica: O número informado (${palpite}) é MAIOR que o número secreto.`);
        } else if (palpite < numeroSecreto) {
            alert(`Dica: O número informado (${palpite}) é MENOR que o número secreto.`);
        }
    }

    if (!acertou) {
        alert(`Você perdeu! Suas 5 tentativas acabaram. O número correto era ${numeroSecreto}.`);
        elementoResultado.style.color = "#f75a68";
        elementoResultado.textContent = `Fim de jogo! Você perdeu. O número secreto era ${numeroSecreto}.`;
    }
}

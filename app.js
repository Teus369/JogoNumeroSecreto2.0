let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do Numero Secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
//  ESSE DE BAIXO É IGUAL A O DE CIMA, SO QUE REDUZIDO
function exibirTextonaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    // esse codigo faz o texto falar
}
function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'Jogo do Numero Secreto')
    exibirTextonaTela('p', 'Escolha um numero entre 1 e 10')
}

exibirMensagemInicial();


function verificarChute() {
    // ('input').value = é pegar o que esta dentro do input 
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Acertou! :)');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextonaTela('p',  'O numero secreto é menor que o chute');
        } else {
            exibirTextonaTela('p',  'O numero secreto é maior que o chute');
        }

        tentativas ++
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
if (quantidadeDeElementosNaLista == numeroLimite) {
    listaNumerosSorteados =[];
}

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
/*

OBJETIVO 1 - quando clicarmos na seta de avançar  temos que mostrar o proximo cartao da lista
   -passo 1 - dar um jeito de pegar o elemento html da seta avançar
   -passo 2 - dar um jeito de identifiacar o clique do usuario na seta avançar
   -passo 3 - fazer aparecer o proximo cartao da lista
   -passo 4 - buscar o cartao que esta selecionado e esconder

OBJETIVO 2 quando clicarmos na seta de voltar  temos que mostrar o anterior cartao da lista
   -passo 1 - dar um jeito de pegar o elemento html da seta voltar
   -passo 2 - dar um jeito de identifiacar o clique do usuario na seta voltar
   -passo 3 - fazer aparecer o anterior cartao da lista
   -passo 4 - buscar o cartao que esta selecionado e esconder

*/

const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if(cartaoAtual === cartoes.length - 1) return;

esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

})

btnVoltar.addEventListener('click', function () {
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});

// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

const btn = document.querySelector('#btn');
btn.addEventListener('click', botaoClicado);

function botaoClicado() {
  console.log('o botão foi clicado');
}

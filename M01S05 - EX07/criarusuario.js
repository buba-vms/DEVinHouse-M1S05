// const mostrarUsuario = require('./mostrarusuario');
import { mostrarUsuario } from './mostrarusuario.js';

const cadastro = document.querySelector('#cadastro');
const card = document.querySelector('.card');
const nome = document.querySelector('#nome');
const imagem = document.querySelector('#imagem');
const descricao = document.querySelector('#descricao');

let usuario = {};
console.log(usuario);
cadastro.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeProv = nome.value;
  const imagemProv = imagem.value;
  const descricaoProv = descricao.value;

  console.log(nomeProv, imagemProv, descricaoProv);
  usuario = {
    nome: nomeProv,
    imagem: imagemProv,
    descricao: descricaoProv,
  };
  console.log(usuario);
  card.innerHTML = mostrarUsuario(
    usuario.nome,
    usuario.imagem,
    usuario.descricao
  );
});

// era pra ser em outra pasta
// function mostrarUsuario(nome, imagem, descricao) {
//   return `
//         <img src="${imagem}" alt="imagem" />
//         <h2>${nome}</h2>
//         <p>${descricao}</p>
//     `;
// }

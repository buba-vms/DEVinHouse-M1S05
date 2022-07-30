export function mostrarUsuario(nome, imagem, descricao) {
  return `
        <img src="${imagem}" alt="imagem" />
        <h2>${nome}</h2>
        <p>${descricao}</p>
    `;
}

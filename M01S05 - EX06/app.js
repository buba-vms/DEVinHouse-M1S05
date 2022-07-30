// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

const calcularTabuada = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
};

calcularTabuada(5);

const segundaFuncao = (num, callback) => {
  for (let i = 1; i <= num; i++) {
    callback(i);
  }
};
segundaFuncao(3, calcularTabuada);

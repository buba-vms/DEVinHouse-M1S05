// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

const retornaPositivo = (array = []) => {
  const somentePositivos = array.filter((num) => {
    return num > 0;
  });
  return somentePositivos;
};

console.log(retornaPositivo([-1, -2, -3, 4, 5, 7, -4]));

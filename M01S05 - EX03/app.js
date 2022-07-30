// Crie uma arrow function que recebe um array de números e calcula a média deles

const mediaDoArray = (array = []) => {
  const soma = array.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return soma / array.length;
};

console.log(mediaDoArray([2, 2, 2, 5]));

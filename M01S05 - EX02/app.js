function verificarPar(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function verificarImpar(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function filtrarNumeros(array, callback) {
  const numerosFiltrados = array.filter(callback);
  return numerosFiltrados;
}

console.log(filtrarNumeros(array1, verificarPar));
console.log(filtrarNumeros(array1, verificarImpar));

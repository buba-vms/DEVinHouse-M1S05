// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

const numDeDias = 5;
const numDeDias2 = 30;

function primeiraOuSegunda(num) {
  const info = num > 15 ? 'segunda quinzena' : 'primeira quinzena';
  return info;
}
console.log(primeiraOuSegunda(numDeDias2));

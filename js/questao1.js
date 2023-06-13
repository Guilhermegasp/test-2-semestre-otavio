// 1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function numeroPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if(numero % i === 0) {
         return false;
      }
    }
    return numero !== 1;  
  }

  // Listando todos os números primos entre 1 e 1000:
  function numeroPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if(numero % i === 0) {
         return false;
      }
    }
    return numero !== 1;  
  }
const primeNumbers = [];
for ( let i = 1; i <= 1000; i++) {
    if (numeroPrimo(i)) {
        primeNumbers.push(i);
    }
}

console.log('Número primos entre 1 e 1000');
console.log(primeNumbers);
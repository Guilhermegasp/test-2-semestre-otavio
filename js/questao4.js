// 4- Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

function verificarQuadradoPerfeito(numero) {
    if (numero < 0) {
    return false;
    }
    var raiz = Math.sqrt(numero);
    return raiz % 1 === 0;
    }

   // Determinando se o número é quadrado perfeito:

console.log(verificarQuadradoPerfeito(9)); // true (3 * 3 = 9)
console.log(verificarQuadradoPerfeito(25)); // true (5 * 5 = 25)
// 3- Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
    return 1;
    }
    var resultado = 1;
    for (var i = 2; i <= numero; i++) {
    resultado *= i;
    }
    return resultado;
    }
    
   // Calculando os fatoriais de 1 a 10
for (var n = 1; n <= 10; n++) {
    var fatorial = calcularFatorial(n);
    console.log("Fatorial de " + n + ": " + fatorial);
    }

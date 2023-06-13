// 2- Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

function verificarSenha(senha) {
    if (senha.length < 8) {
    return false;
    }
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;
    for (var i = 0; i < senha.length; i++) {
    var caractere = senha.charAt(i);
    if (caractere >= 'A' && caractere <= 'Z') {
    temMaiuscula = true;
    } else if (caractere >= 'a' && caractere <= 'z') {
    temMinuscula = true;
    } else if (!isNaN(caractere)) {
    temNumero = true;
    
    }
    if (temMaiuscula && temMinuscula && temNumero) {
    break;
    }
    }
    return temMaiuscula && temMinuscula && temNumero;
    }

    // Testes de senhas:
var senha1 = "Abcdef12";
var senha2 = "oi";
console.log(verificarSenha(senha1)); // true
console.log(verificarSenha(senha2)); // false

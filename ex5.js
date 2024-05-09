/*Exercício 5: Verificação de números em ordem crescente
Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não.*/

let ordem1 = parseInt (prompt ("Digite o primeiro número."))
let ordem2 = parseInt (prompt ("Digite o segundo número.")) 
let ordem3 = parseInt (prompt ("Digite o terceiro número."))

if (ordem1 < ordem2 && ordem2 < ordem3) {
    console.log ("Ordem crescente!")
}

else {
    console.log ("Não é uma ordem crescente!")
}
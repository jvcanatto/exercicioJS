/* 4. Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10. */

const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));


if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
/* 9. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */

let numero = parseInt(prompt("Digite um número para a contagem regressiva:"));

if (!isNaN(numero) && numero >= 0) {
    console.log(`Contagem regressiva de ${numero} até 0:`);
    
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
} else {
    console.log("Por favor, digite um número válido maior ou igual a 0.");
}
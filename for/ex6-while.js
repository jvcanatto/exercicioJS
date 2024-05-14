/* 6. Imprimir números pares de 0 a 20 utilizando o loop while */

let numero = 0;

console.log("Números pares de 0 a 20:");

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}
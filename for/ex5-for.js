/* 5. Imprimir os primeiros 10 números da sequência de Fibonacci. */

function fibonacci(n) {
    let fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

console.log("os primeros 10 números de Fibonacci sao:");
console.log(fibonacci(10));
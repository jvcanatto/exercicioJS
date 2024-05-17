// construir um menu em que é possível escolher um exercício entre os exercícios anteriores, para ser executado. 
// Faça com que o menu repita a sua execução, disponibilize as opções pro usuário, até que seja digitado "sair".

// \n : quebra de linha


//if-else
function exercicioPar() {
    let number = parseInt (prompt ("Insira um número"))

    if (number % 2 == 0) {
        console.log ("Número par!")
    }

    else {
        console.log ("Número impar!")
    }
}

function boletim() {
    let nota1 = parseInt (prompt ("Digite a nota 1"))
    let nota2 = parseInt (prompt ("Digite a nota 2"))
    let nota3 = parseInt (prompt ("Digite a nota 3"))
    let nota4 = parseInt (prompt ("Digite a nota 4"))
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    console.log (media)

    if (media >= 7) {
        console.log ("APROVADO!")
    }

    else if (media > 4 && media < 7) {
        console.log ("RECUPERAÇÃO!")
    }

    else if (media < 5) {
        console.log ("REPROVADO!")
    }
}

function desconto() {
    let valor = parseFloat (prompt ("Valor total da compra: "))

    if (valor <= 100.00) {
        console.log ("Sem desconto!")
        console.log (valor)
    }

    else if (valor > 100.00 && valor < 200.00) {
        console.log ("10% de desconto!")
        let desconto = valor * (10 / 100)
        let final = valor - desconto
        console.log ("Valor: R$ " + final.toFixed(2))
    }   

    else if (valor > 200.00) {
        console.log ("20% de desconto!")
        let desconto = valor * (20 / 100)
        let final = valor - desconto
        console.log ("Valor: R$ " + final.toFixed(2))
    }
}

//loop

function tabuada() {
    const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));

    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");} 
    else {
        console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);}
    }
}

function fibonacci() {
    function fibonacci(n) {
        let fib = [0, 1]; 
    
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    
        return fib;
    }
    
    console.log("os primeros 10 números de Fibonacci sao:");
    console.log(fibonacci(10));
}

function idade() {
    let idade = parseInt(prompt("Digite sua idade:"));

    while (idade < 18) {
        idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente:"));
    }
    
    console.log("Você é maior de idade! Bem-vindo!");
}

let opcao;

while (opcao != "sair") {

    opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1- Exercicio par ou ímpar\n2- Exercício boletim do aluno\n3- Exercício de descontos\n4- Exercício de tabuada\n5- Exercício da sequência de Fibonacci\n6- Exercício da maioridade\n Digite 'sair' para encerrar")

    if (opcao == "1") {
        console.log (exercicioPar())
    }

    else if (opcao == "2") {
        console.log (boletim())
    }

    else if (opcao == "3") {
        console.log (desconto())
    }

    else if (opcao == "4") {
        console.log (tabuada())
    }

    else if (opcao == "5") {
        console.log (fibonacci())
    }

    else if (opcao == "6") {
        console.log (idade())
    }
}

alert("Tchau, programa encerrrado!")


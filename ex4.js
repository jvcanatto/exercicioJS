/* Exercício 4: Notas escolares
Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0. */

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


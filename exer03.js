/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

let grade = 4

if (grade >= 7) {
    console.log('Aprovado')
} else if (grade < 7 && grade >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
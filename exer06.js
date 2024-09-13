/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

let a = 5
let b = 5
let c = 5

if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a === b && b === c) {
        console.log('Triângulo Eqüilátero');
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo Isósceles');
    } else {
        console.log('Triângulo Escaleno');
    }
} else {
    console.log('Não forma um triângulo');
}
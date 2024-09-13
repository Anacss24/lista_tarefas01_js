/* Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

let age = 56

if (age <= 12 && age >= 0 ) {
    console.log('Criança')
} else if (age > 12 && age < 18) {
    console.log('Adolescente')
} else if (age > 18 && age < 65) {
    console.log('Adulto')
} else if (age > 65) {
    console.log('Idoso')
} else {
    console.log('Insira uma idade válida')
}

/* Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/
const prompt = require('prompt-sync')()

let soma = 0

for (let i = 1; i <= 5; i++){
    let numeros = Number(prompt('Digite um número: '))
    soma += numeros
}

console.log(soma)



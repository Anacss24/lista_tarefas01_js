/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */ 

const prompt = require('prompt-sync')()

let precoMaca = 0;


let quantidadeMacas = Number(prompt('Digite o número de maçãs a serem compradas: '))

if (quantidadeMacas < 12) {
    precoMaca = 0.30
} else {
    precoMaca = 0.25
}

let resultado = quantidadeMacas * precoMaca

console.log(`Valor total da compra R$ ${resultado}`)


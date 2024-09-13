/* Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */ 

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite o número para a tabuada de 1 a 10: '))

for(let i = 1; i <= 10; i++){
    let resultado = numero * i
    console.log(`${numero} X ${i} = ${resultado}`)
}
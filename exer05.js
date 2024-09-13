/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */ 

const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite o seu peso: '))
let altura = Number(prompt('Digite a sua altura'))


let calcIMC = peso / (altura * altura)

if (calcIMC < 18.5) {
    console.log('De acordo com o seu IMC você está abaixo do peso saudável')
} else if (calcIMC >= 18.5 && calcIMC <= 24.9) {
    console.log('De acordo com o seu IMC você está dentro do peso saudável')
} else if (calcIMC >= 25 && calcIMC <= 29.9) {
    console.log('De acordo com o seu IMC você está com Sobrepeso')
} else {
    console.log('De acordo com o seu IMC você está com Obesidade')
}
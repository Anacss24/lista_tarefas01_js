/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require('prompt-sync')()

let number1
let number2

do {
    number1 = Number(prompt('Digite o primeiro número: '))
    number2 = Number(prompt('Digite o segundo número: '))
   
    if (number1 === number2) {
        console.log('Os números devem ser diferentes. Por favor, tente novamente.');
    }
    
} while(number1 === number2)



    if (number1 < number2) {
        console.log("Valores em ordem crescente: " + number1 + ", " + number2);
      } else {
        console.log("Valores em ordem crescente: " + number2 + ", " + number1);
      }
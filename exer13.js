/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require('prompt-sync')()

let numeros
let soma = 0
let contador = 0
do {
    numeros = parseFloat(prompt('Digite um número : '))
    if(numeros !== 0){
        soma += numeros
         contador++   
    }
    
} while(numeros !== 0)

 if(contador > 0) {
    let media = soma / contador;
    console.log("A soma dos números é: " + soma);
    console.log("A média aritmética é: " + media);
 } else {
    console.log("Nenhum número foi inserido para cálculo.");
 }



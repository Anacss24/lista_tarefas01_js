/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero para calcular o fatorial: "));

let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é ${fatorial}.`);

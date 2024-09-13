/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

console.log('MENU')
console.log('1-LASANHA')
console.log('2-CHURRASCO')
console.log('3-FEIJOADA')


let foodFavorite = Number(prompt('Digite o número da sua comida favorita de acordo com as opções acima: '))

switch(foodFavorite) {
    case 1:
        console.log('Lasanha sempre um boa escolha :) !!')
    break;
    case 2:
        console.log('Churrasco sempre um boa escolha :) !!')
    break;
    case 3:
        console.log('Feijoada sempre um boa escolha :) !!')
    break;
    default:
        console.log('Digite um número válido')
}
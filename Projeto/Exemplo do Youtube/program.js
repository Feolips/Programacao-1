import { unicos } from './js/function.mjs';

//                                     ARRAYS
// 01. Ler um array B de 10 elementos que podem ser repetidos.
//     Os elementos únicos de B devem ser gravados no array C.

// Entrada
input = require("prompt-sync")();
let B = [];
// Populando o array;
for (var b = 1; b <= 10; b++){
	B[b] = parseInt(input('Insira o ' + b + '° valor: '));
}

// Assimilação e Retorno
let C = B.filter(unicos);
console.log('Array C = ' + C + '.');

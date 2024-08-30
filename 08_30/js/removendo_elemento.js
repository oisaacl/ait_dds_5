'use strict';

let municipios = ['serra', 'cariacica', 'vila velha', 'viana', 'vitoria', 'guarapari'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

//Removendo dois elementos a partir dos elementos 1

municipios.splice(0, 2);

//Removendo dois elementos no final

municipios.splice(-2, 1);
console.log(municipios);

//Para juntar um array usamos o join e podemos definir um separador

let texto = municipios.join('-');

console.log(texto);

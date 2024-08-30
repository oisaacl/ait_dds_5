'use strict';


let nome = 'Isaac';

let sobrenome = 'Barbara';

console.log(sobrenome)

const instrutor = 'EDUARDO LUIZ FERREIRA SILVA';

// split separa uma string em um array de strings com o separador escolhido

const piaces = instrutor.split(' ');


// pop remove e retornar o último elemento

console.log(piaces[0], piaces[piaces.length - 1]);



let array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.pop());
console.log(array);


//push empurra ao final do array
array.push(7);

console.log(array.shift());
console.log(array);

//unshift adiciona a primeira posição
array.unshift(0);
console.log(array);


let cores = ['verde', 'azul', 'roxo', 'vermelho', 'rosa', 'preto'];

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);


}

for (let cor of cores) {
    console.log(cor);

}



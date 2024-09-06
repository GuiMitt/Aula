//fonte : w3schools.com
//numbers
let polegadas =16;
let frequencia = 7.5;
console.log(typeof polegadas)
console.log(typeof frequencia)

//string
let cor = 'Amarelo'
let sobrenome = 'Mittelmann'

//boolean
let x = true;
let y = false;

//object
const person =
{
    firstName:'Guilherme',
    lastName:'Mittelmann'
};

//Array object
const fruits =
['Morango', 'maça', 'manga'];

//date object
const date = new Date('2022-03-25');

//Davi boiola fazendo boiolagem.
for(let fruta of fruits){
    console.log(fruta)
}
//inteiros limite de 15 digitos
//decimais tomar cuidado com arredondamentos 
//ToFixed(x) para quantidade de casas decimais
let testeNumero = (0.1 + 0.2).toFixed(2);
console.log('testeNumero',testeNumero);


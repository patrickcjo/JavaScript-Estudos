const nome = 'Patrick Carvalho';
const sobrenome = 'Jacomo de Oliveira';
const peso = 90;
const idade = 36;
const altura = 1.80;

let imc;
let anoNascimento;

anoNascimento = 2022 - idade;
imc = peso / (altura * altura)

console.log('O IMC é '+ imc + ' e o ano de nascimento é o '+ anoNascimento)
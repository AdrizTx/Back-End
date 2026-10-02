//TIPOS DE DADOS
//No javascript, tudo o armazenamos em variaveis tem um tipo. Esses tipos o que podemos fazer com os valores.

//PRINCIPAIS TIPOS DE DADOS:
//  String  ---- (textos)
//  nUMBER  ---- (números)
//  Boolean ---- (verdadeiro ou falso)
//  Object  ---- (Objetos, que agrupam informações)
//  Array   ---- (Lista de Valores)
//  Null    ---- (valor vazio)
//  Underfined  (quando algo não foi definido)


//STRING(textos)
//uma string é um texto, sempre escrito entre aspas (""ou'')

let nome="Jarvis";
let mensagem='Olá, Mundo';

console.log(nome);
console.log(mensagem);

let saudacao= "Olá, " + nome + "!";
console.log(saudacao); //Exibe "Olá, Jarvis"

//typeof
//O typeof serve para descobrir o tipo de um valor ou variavel

let nomeDois = "Bryan";
console.log(typeof nomeDois)

let soma= 10 + 5;
console.log(soma);

//BOOLEAN (VERDADEIRO OU FALSO)
//Um boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade= true
let menorDeIdade= false;

console.log(maiorDeIdade);//EXIBE TRUE
console.log(menorDeIdade);//EXIBE FALSE

let idade= 20;
let podeDirigir= idade>= 18;
console.log(podeDirigir);
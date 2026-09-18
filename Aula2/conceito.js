//INICIO BACK-END - JAVASCRIPT

// VARIAVEIS

//ANTIGO!!!!!, pode ser redeclarado e mudar o valor(NÃO USAR)
var idade= 10
var idade= 20 // NÃO GERA ERRO!✓

//MAIS MODERNO, pode mudar de valor, mas não pode ser redeclarado

let nome= "Adriel"
nome= "Naty"; //PERMITIDO

// let nome= "Flavio";  //GERA ERRO!✕




//const é fixo, não pode mudar de valor
const pi = 3.14
//pi = 40;// ✕ ERRO

//-------------------------------------------------------------------------
//FORMAS DE ESCREVER UM CODIGO
//-------------------------------------------------------------------------

//CAMEL CASE ---- * A mais famosa
// - Primeira palavra minúscula
// - Palavra seguintes começam com maiúscula

// let nomeCompleto; let idadeUsuario; functionCalcularIdade(){}


//-------------------------------------------------------------------------
//PASCAL CASE
// - Todas as palavras começam com letras maiúsculas

class UsiarioSisistema {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
};


//-------------------------------------------------------------------------
//SNAKE CASE
// - Palavras separadas por underscore _

let nome_completo; let total_vendas;

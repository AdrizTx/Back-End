// FUNÇÕES EM JAVASCRIPT

// o que é uma função?
//Uma Função é um bloco de codigo reutilizavel, criado para executar uma tarefa especifica.

//Analogia Simples!
//Você vai colocar valores (parâmetrôs)
//Ela Processa
//Devolve um resultado (return)

//----------------------------------------------------------

//  ESTRUTURA BASICA DE UMA FUNÇÃO

//----------------------------------------------------------

// function nomeDaFuncao(parametro1, parametro2){
//     //codigo que será executado
// return resultado;
// }

//  functiom ---> palavra-chave
//  nomeDaFuncao ---> nome da função
//  parâmetros ---> valores que a função recebe
//  return ---> valor que a função devolve


//5 EXEMPLOS

//1 - Somar Dois Números

function somar(a, b) {
    return a + b;
}

console.log(somar(2,15))


//2 - Converter real para dólar

function realParaDolar(valorReal, cotacao) {
    return valorReal / cotacao;
}

console.log(realParaDolar(10,5.20).toFixed(2))

//2 - Converter dólar para real

function dolarParaReal(valorDolar, cotacao) {
    return valorDolar * cotacao;
}

console.log(dolarParaReal(5,5.20))

//4 - Aumento de salário (Você merece 25% de aumento)

function AumentoDeSalario(valorSalario, Porcentagem){
    return valorSalario + (valorSalario * Porcentagem / 100)
}
console.log(AumentoDeSalario(2000,25))

//5 - Verificar se é Par ou Impar

    function number(num1){
        if (num1 % 2 === 0){
            return "seu numero é par"
        }
        else {
            return "Seu Numero é Impar"
        }
    }

    console.log(number(2))

    // FORMA DO PROFESSOR 

    function parOuImpar(numero){
        return numero % 2 === 0 ? "Par" : "impar";
        //Se o resto for ---> retorna "par"
        //Case contrário ---> retorna "impar"
    }

    console.log(parOuImpar(6))



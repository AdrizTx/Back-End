//##################################################
//  NOSSA API DE CACHORROS
//##################################################
//
// Agora as fotos NÃO  são mais baxadas atomaricamente!,
// Elas DEVEM existir manualmente na pasta
// data/fotos
//##################################################

// ROTAS:
// GET / api/ Cachorros / aleatorio
// GET / api/ Cachorros / :raca

//Importar o framework Express para criar o servidor

const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa o modulo de arquivo do NODE
const fs = require("fs")
// Importa  utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa  o arquivo JSON que contém as raças e fotos
const Cachorros = require("./data/dogs.json")
// crie a aplicação com Express
const app = express();
// definir a porta onde o servidor irá rodar
const PORT = 3000;
//Habilitar o uso do CORS na aplicação
app.use(cors());

//#####################################################################
//  SERVIDOR ARQUIVOS ESTÁTICOS
//#####################################################################

// Nós falamos para o express
//"Tudo o que estiver na pasta data/ fotos pode ser acessado pela URL /fotos"

//EXEMPLO

//https://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos" ,
    express.static(
        path.join(__dirname, "data/fotos") //caminho real da pasta do servidor
    )
)

//#####################################################################
//  FUNÇÃO AUXILIAR
//#####################################################################

// função que recebe um array e retorna um item aleatorio
function sortear (array) {
    //gera um numero aleatorio entre 0 e o tamanho do array
    //array.length - conta quantos itens existem na lista
    //Math.random() - sorteia um número decimal entre 0 e 1
    //Math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    //Math.florr - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length)

    //const 1 - guarda a posição na variavel
    //retorna o item soreteado
    return array[1];
}
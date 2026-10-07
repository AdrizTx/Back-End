//###################################################
//API DE CACHORROS
//###################################################

//Endereço da API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random';

//Pegando os elementos do HTML

// - Imagem pelo seu ID
const fotoCachorro = document.getElementById('fotoCachorro')

// - Botão pelo seu ID
const btnNovaFoto = document.getElementById('btnNovaFoto')

//###################################################
//FUNÇÃO PARA BUCAR UMA NOVA FOTO
//###################################################

async function buscarFoto() {
    //Fazer uma requisção para a API
    const resposta = await fetch(url)
    
    //Conventer a resposta da API para JSON
    const dados = await resposta.json()

    //Mostrar no console o que a API retornou
    console.log(dados)

    //Alterarmos o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

//###################################################
//BOTÃO
//###################################################

//Quando o usuario clicar no botão
//Vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto)

//Quano a pagina abrir,
//Ja buscamos uma foto automaticamente

buscarFoto();
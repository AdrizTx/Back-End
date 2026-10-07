// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados

JSON É COMO FICHA DE CADASTRO.

FICHA FISICA        JSON:
Nome: João          "nome": "João"
Idade: 25           "idade": 25
Cidade: SP          "cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

<!-- ############################################################## -->

{
    "cachorro":{
        "nome": "Mel",
        "idade" 5,
        "raca": "Pug",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono":{
            "nome": "Adriel",
            "telefone": "11 99409-7424"

        }

    }
}

<!-- ############################################################## -->
EXPLICAÇÃO
<!-- ############################################################## -->

//STRING(texto) - Sempre com aspas

        "nome": "Mel",

//NUMBER (Número) - Sem aspas

        "idade" 5,
        "peso": 25.5,

//BOOLEAN (true/false)

        "vacinado": true,

//ARRAY (lista) - com colchetes

        "brinquedos": ["bola", "osso", "frisbee"],

//OBJECTS (objeto) - com chaves

        "dono":{
            "nome": "Adriel",
            "telefone": "11 99409-7424"
        }

//NULL (vazio)

    "dataFalecimento": null

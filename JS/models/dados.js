let paragrafo = document.querySelector("#paragrafo");


//Let responsável por fazer requisição, que vai pegar os dados de uma API
let dadosReq = new XMLHttpRequest(); 

let texto = document.createElement("p");

//Abrir a "porta" da nossa requisição 
dadosReq.open("GET", "https://api.nasa.gov/planetary/apod?api_key=3PmYMPQvIjm5qI4VGgo5eMBADS41PD4fXoal3h4d");

//Verificar os dados, tratador de evento de requisição
dadosReq.addEventListener("load", function(){
    //Se requisição for 200 eu dou
    if(dadosReq.status == 200){
        let dados = JSON.parse(dadosReq.responseText); //Converti o texto do dadosReq para um objeto json
        console.log(dados);
        //Chamando função afim de exibir o conteúdo da api no meu site
        exibirSite(dados.copyright, dados.date,dados.hdurl);
    }
})
//Entrando na porta para pegar os dados
dadosReq.send();
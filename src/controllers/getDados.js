//Esse script é responsável por obter os dados da API  e exibir seu conteúdo com as funções
//que foram formadas no exibirDados
//Maior gambiarra da minha vida

class Dados{
    getDados(){
        let dadosReq = new XMLHttpRequest(); 
        dadosReq.open("GET", "https://api.nasa.gov/planetary/apod?api_key=3PmYMPQvIjm5qI4VGgo5eMBADS41PD4fXoal3h4d", false);
        dadosReq.send();

        let listaDados = JSON.parse(dadosReq.responseText);

        //Criando um objeto para a minha class exibirDados
        let exibirD = new exibirDados();

        //Chamando funções afim de exibir o conteúdo da api no meu site
        return exibirD.exibir(listaDados.copyright, listaDados.date, listaDados.hdurl, listaDados.explanation, listaDados.title);
    }
}

//Iniciando a classe dados
let pegarDados = new Dados();
//Executando o seu método boladíssimo 
pegarDados.getDados();



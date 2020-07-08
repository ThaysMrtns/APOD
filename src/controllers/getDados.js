//Esse script é responsável por obter os dados da API  e exibir seu conteúdo com as funções
//que foram formadas no exibirDados
//Maior gambiarra da minha vida

class Dados{
    getDados(){
        let btnForm = document.querySelector(".form-btn");
        let dataForm = document.querySelector(".form-date");

        let dadosReq = new XMLHttpRequest(); 
        dadosReq.open("GET", `https://api.nasa.gov/planetary/apod?api_key=3PmYMPQvIjm5qI4VGgo5eMBADS41PD4fXoal3h4d`, false);
        dadosReq.send();

        let listaDados = JSON.parse(dadosReq.responseText);

        let exibir1 = new exibirDados();

        //Se o botão do formulário for clickado
        btnForm.onclick = function(){
            //Não consigo apagar o conteúdo antigo da página
           
            dadosReq.open("GET", `https://api.nasa.gov/planetary/apod?api_key=3PmYMPQvIjm5qI4VGgo5eMBADS41PD4fXoal3h4d&date=${dataForm.value}`, false);
            dadosReq.send();

            listaDados = JSON.parse(dadosReq.responseText);

            return exibir1.exibir(listaDados.copyright, listaDados.date, listaDados.hdurl, listaDados.explanation, listaDados.title);
        }
       
        //Chamando funções afim de exibir o conteúdo da api no meu site
        return exibir1.exibir(listaDados.copyright, listaDados.date, listaDados.hdurl, listaDados.explanation, listaDados.title);
    }
}

//Iniciando a classe dados
let pegarDados = new Dados();
//Executando o seu método boladíssimo 
pegarDados.getDados();




//O objetivo desse script é instanciar a class form que referência as suas propriedades e
//executar um evento no button que pega a data selecionada pelo usuário

class getImageForm{
    constructor(){

    } //&date=dateForm
    getImage(){
        //let form1 = new form(); //Criou o objeto form1 da class form
        let btnForm = document.querySelector(".form-btn");
        let dataForm = document.querySelector(".form-date");
        btnForm.onclick = function(){
            event.preventDefault();
            let dadosReq = new XMLHttpRequest(); 
            dadosReq.open("GET", "https://api.nasa.gov/planetary/apod?api_key=3PmYMPQvIjm5qI4VGgo5eMBADS41PD4fXoal3h4d&date=${dataForm.value}", false);
            dadosReq.send();

            let listaDados = JSON.parse(dadosReq.responseText);

            let form1 = new Form();
            
            return form1.exibirImagem(listaDados.copyright, listaDados.date, listaDados.hdurl, listaDados.explanation, listaDados.title);
        }
    }
}

let imageForm = new getImageForm();
imageForm.getImage();
//Nova requisição 
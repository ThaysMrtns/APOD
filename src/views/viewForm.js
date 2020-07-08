//O objetivo dessa classe é adicionar as propriedades do formulário e referênciar suas propriedades
//Ou seja, moldar o nosso form 

class Form{
    exibirImagem(copyForm, dataForm, imageForm, explanationForm, titleForm){
        let copyrightHtm = document.querySelector("#copyright"); //Pegar elemento do mundo html
        let dateHtm = document.querySelector("#date");
        let imgHtm = document.querySelector("#imagem");
        let explanationHtm = document.querySelector("#explanation");
        let titleHtm = document.querySelector("#title");

        let copyrightView = copyrightHtm.append(copyForm); //Inseri dados dentro do elemento html
        let dateView = dateHtm.append(dataForm);
        let imgView = imgHtm.src = imageForm;
        let explanationView = explanationHtm.append(explanationForm);
        let titleView = titleHtm.append(titleForm);

        return {copyrightView, dateView, imgView,explanationView,titleView}; //Retornando variáveis que inserem os dados da api no mundo html
    }
}
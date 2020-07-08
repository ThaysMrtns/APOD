//O objetivo deste script é exibir os dados da api dentro dos elementos html da página

class exibirDados{
    exibir(copy, data, image, explanation, title){
        let copyrightHtm = document.querySelector("#copyright"); //Pegar elemento do mundo html
        let dateHtm = document.querySelector("#date");
        let imgHtm = document.querySelector("#imagem");
        let explanationHtm = document.querySelector("#explanation");
        let titleHtm = document.querySelector("#title");

        let copyrightView = copyrightHtm.append(copy); //Inseri dados dentro do elemento html
        let dateView = dateHtm.append(data);
        let imgView = imgHtm.src = image;
        let explanationView = explanationHtm.append(explanation);
        let titleView = titleHtm.append(title);

        return {copyrightView, dateView, imgView,explanationView,titleView}; //Retornando variáveis que inserem os dados da api no mundo html
    }
}




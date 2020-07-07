//O objetivo deste script é exibir os dados da api dentro dos elementos html da página

class exibirDados{
    exibir(copy, data, image, explanation, title){
        let copyrightHtm = document.querySelector("#copyright"); //Pegar elemento do mundo html
        let dateHtm = document.querySelector("#date");
        let imgHtm = document.querySelector("#imagem");
        let explanationHtm = document.querySelector("#explanation");
        let titleHtm = document.querySelector("#title");

        let c = copyrightHtm.append(copy); //Inseri dados dentro do elemento html
        let d = dateHtm.append(data);
        let i = imgHtm.src = image;
        let e = explanationHtm.append(explanation);
        let t = titleHtm.append(title);

        return {c, d, i,e,t}; //Retornando variáveis que inserem os dados da api no mundo html
    }
}




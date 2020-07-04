

function exibirSite(copy, data, image){
    //Pegar elemento do mundo html
    let copyrightHtm = document.querySelector("#copyright");
    let dateHtm = document.querySelector("#date");
    let imgHtm = document.querySelector("#imagem");

    //Colocar o conteúdo da api dentro do elemento html
    copyrightHtm.append(copy);
    dateHtm.append(data);
    imgHtm.src = image;
}


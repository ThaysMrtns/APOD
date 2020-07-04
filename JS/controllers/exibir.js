

function exibirTopo(copy, data){
    //Pegar elemento do mundo html
    let copyrightHtm = document.querySelector("#copyright");
    let dateHtm = document.querySelector("#date");

    //Colocar o conteúdo da api dentro do elemento html
    copyrightHtm.append(copy);
    dateHtm.append(data);
}
function exibirImg(image){
    let imgHtm = document.querySelector("#imagem");
    imgHtm.src = image;
}
function exibirExplanation(explanation){
    let explanationHtm = document.querySelector("#explanation");
    explanationHtm.append(explanation);
}
function exibirTitle(title){
    let titleHtm = document.querySelector("#title");
    titleHtm.append(title);
}

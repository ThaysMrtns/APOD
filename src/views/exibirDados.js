
function exibirCopy(copy){
    //Pegar elemento do mundo html
    let copyrightHtm = document.querySelector("#copyright");
    //Colocar o conteúdo da api dentro do elemento html
    copyrightHtm.append(copy);
}
function exibirDate(data){
    let dateHtm = document.querySelector("#date");
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


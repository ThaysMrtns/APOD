//O objetivo deste script é exibir os dados da api dentro dos elementos html da página

function exibirCopy(copy){
    let copyrightHtm = document.querySelector("#copyright"); //Pegar elemento do mundo html
    copyrightHtm.append(copy); //Colocar o conteúdo da api dentro do elemento html
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


//O objetivo desse script é instanciar a class form que referência as suas propriedades e
//executar um evento no button que pega a data selecionada pelo usuário

function getForm(dataApi){
    let form1 = new form();
    form1._btn.addEventListener("click", function(){
        /*data = form1._date.value;//valor do que eu escrevi
        dataApi = data;//igualar a data api
        let dataForm = document.write("#imagem-form"); 
        dataApi = dataForm.src;
        console.log(dataApi);*/
        console.log(typeof dataApi);
    })
}
//Nova requisição 
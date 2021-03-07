console.log("Salve, mundão.")

var entrada = document.querySelector("input") //selecionando o input

var saida = document.querySelector("#respostaAno") 

function cliquei(){

    var ano = entrada.value //seleciona o valor colocado
    saida.textContent = ano //mostra o conteudo escrito no valor
    console.log(ano)

}
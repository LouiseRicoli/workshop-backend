console.log("Oii, mundo bom.")

var inputvalorHora = document.querySelector("#valor-hora")

var inputhorasProjeto = document.querySelector("#horas-projeto")

var resposta = document.querySelector("#resposta")

function calcular(){
    var valorHora = inputvalorHora.valueAsNumber
    var HorasProjeto = inputhorasProjeto.valueAsNumber

    var horatotal = valorHora * HorasProjeto

    var valorDuasCasas = horatotal.toFixed(2)

    resposta.textContent = "R$ " + valorDuasCasas
}
console.log("Opa, tamo on")

var inputsalario = document.querySelector("#ganho-mes")

var inputhoras = document.querySelector("#horas-dia")

var resultado = document.querySelector("#resposta")

function calcularValorHora(){
    var salario = inputsalario.valueAsNumber
    var horas = inputhoras.valueAsNumber

    var horaMes = horas * 22
    var valorHora = salario / horaMes

    var valorDuasCasas = valorHora.toFixed(2)

    resultado.textContent = "R$ " + valorDuasCasas

}

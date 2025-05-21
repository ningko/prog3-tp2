const botonCalcular = document.querySelector("button")

const calcularIMC = () => {
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const imc = peso / altura ** 2

    if (!altura || !peso) {
        alert("No se ingresaron los valores requeridos")
        return
    } else if (altura < 0 || peso < 0) {
        alert("La altura o el peso no pueden ser números negativos")
        return
    } else if (altura > 2.3) {
        alert("La altura debe ingresarse en metros")
    } else {
        alert(`IMC: ${imc.toFixed(1)}`)
    }
}

botonCalcular.addEventListener("click", calcularIMC)

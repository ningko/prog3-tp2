const botonArea = document.querySelector("button")

function calcularArea() {
    const ladoA = document.getElementById("ladoa").value
    const ladoB = document.getElementById("ladob").value
    const ladoC = document.getElementById("ladoc").value

    const area = ((ladoA - ladoC) * ladoB) / 2 + ladoB * ladoC

    if (!ladoA || !ladoB || !ladoC) {
        alert("Los valores ingresados no son válidos")
        return
    } else {
        alert(`El área del terreno es de ${area.toFixed(2)} metros`)
    }
}

botonArea.addEventListener("click", calcularArea)
function validarDatos() {
    if (!document.getElementById("form").checkValidity()) {
        document.getElementById("p").style="visibility:visible;color:red"
        document.getElementById("p").innerHTML = "Los datos ingresados no son válidos"
     } else {
        document.getElementById("p").style="visibility:visible;color:green"
        document.getElementById("p").innerHTML = "Validación realizada correctamente"
    }
}  

document.getElementById("button").onclick = validarDatos

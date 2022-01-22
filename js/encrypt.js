/*DEFINICIÓN DE CONSTANTES Y VARIABLES*/

const input = document.getElementById("input");
const btnEncrypt = document.getElementById("button-encrypt");
const output = document.getElementById("output");
/* DEFINICIÓN DE FUNCIONES*/

/* DEFINICIÓN DE LA FUNCIÓN DE ENCRIPTADO*/

function encrypt() {
    if (input.value.length > 0) {
        console.log("Encriptado");
    } else {
        alert("No se puede encriptar un mensaje vacío");
    }
}

/*CAPTURA DE TEXTO EN EL INPUT*/

input.addEventListener("input", function() {
    console.log(input.value);
});

/*CAPTURA DEL CLICK EN EL BOTÓN ENCRIPTAR"*/

btnEncrypt.addEventListener("click", function() {
    console.log("click");
    output.textContent = input.value;
    encrypt();
});
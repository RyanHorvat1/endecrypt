/*DEFINICIÓN DE CONSTANTES Y VARIABLES*/
const btnDecrypt = document.getElementById("button-decrypt");
const ai = /ai/g;
const enter = /enter/g;
const imes = /imes/g;
const ober = /ober/g;
const ufat = /ufat/g;

/* DEFINICIÓN DE LA FUNCIÓN DE ENCRIPTADO*/
function decrypt() {
    if (input.value.length > 0) {
        let cadena = input.value;
        cadena = cadena.replace(ufat, 'u');
        cadena = cadena.replace(ober, 'o');
        cadena = cadena.replace(ai, 'a');
        cadena = cadena.replace(imes, 'i');
        cadena = cadena.replace(enter, 'e');
        output.textContent = cadena;
        /*let origin = [e, i, a, o, u];
        let replace = ['enter', 'imes', 'ai', 'ober', 'ufat'];
        origin.forEach(function(i) {
        cadena = cadena.replace(origin[i], replace[i]);*/

    } else {
        alert("No se puede desencriptar un mensaje vacío");
    }
}

/*CAPTURA DEL CLICK EN EL BOTÓN DESENCRIPTAR"*/
btnDecrypt.addEventListener("click", function() {
    decrypt();
});
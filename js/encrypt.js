/*DEFINICIÓN DE CONSTANTES Y VARIABLES*/
const btnEncrypt = document.getElementById("button-encrypt");
const a = /a+/g;
const e = /e+/g;
const i = /i+/g;
const o = /o+/g;
const u = /u+/g;

/* DEFINICIÓN DE LA FUNCIÓN DE ENCRIPTADO*/
function encrypt() {
    if (input.value.length > 0) {
        let cadena = input.value;
        cadena = cadena.replace(e, 'enter');
        cadena = cadena.replace(i, 'imes');
        cadena = cadena.replace(a, 'ai');
        cadena = cadena.replace(o, 'ober');
        cadena = cadena.replace(u, 'ufat');
        output.textContent = cadena;
        /*let origin = [e, i, a, o, u];
        let replace = ['enter', 'imes', 'ai', 'ober', 'ufat'];
        origin.forEach(function(i) {
        cadena = cadena.replace(origin[i], replace[i]);*/

    } else {
        alert("No se puede encriptar un mensaje vacío");
    }
}

/*CAPTURA DEL CLICK EN EL BOTÓN ENCRIPTAR"*/
btnEncrypt.addEventListener("click", function() {
    encrypt();
});
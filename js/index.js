const input = document.getElementById("input");
const output = document.getElementById("output");

/*CAPTURA DE TEXTO EN EL INPUT*/
input.addEventListener("input", function() {
    input.value = input.value.replace(/[^A-Za-z \r\n¡!¿?.,;:]/g, '');
    input.value = input.value.toLowerCase();
});
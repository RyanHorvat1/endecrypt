/*DEFINICIÓN DE CONSTANTES*/
const btnCleanInput = document.getElementById("button-input-clear");
const btnCleanOutput = document.getElementById("button-output-clear");

/*DEFINICIÓN DE LA FUNCIÓN DE LIMPIEZA EN EL INPUT*/
function cleanInput() {
    input.value = "";
}

function cleanOutput() {
    output.value = "";
}

/*DEFINICIÓN DE EVENTOS*/
btnCleanInput.addEventListener("click", function(event) {
    cleanInput();
});
btnCleanOutput.addEventListener("click", function() {
    cleanOutput();
});
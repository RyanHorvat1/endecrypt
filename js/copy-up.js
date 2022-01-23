const btnCopyUp = document.getElementById("button-copy-up");

function copyUp() {
    let text = output.textContent;
    input.textContent = "LA PUTA QUE TE PARIÓ";
    console.log(text);
}

btnCopyUp.addEventListener("click", function() {
    copyUp();
});
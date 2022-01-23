function copy() {
    var copyText = document.querySelector("#output");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#button-copy").addEventListener("click", copy);
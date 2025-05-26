let imageSelect = document.getElementById("seleciona");
let img = document.querySelector("img");

imageSelect.addEventListener("change", () => {
    const arquivo = imageSelect.files[0];
    if (arquivo.size > 1000000) {
        alert("Apenas imagens com menos de 1mb");
        img.src = "";
        imageSelect.value = "";
    } else {
        img.style.display = "block";
        const urlTemp = URL.createObjectURL(arquivo);
        img.src = urlTemp;
        img.onload = () => URL.revokeObjectURL(urlTemp);
    }
})
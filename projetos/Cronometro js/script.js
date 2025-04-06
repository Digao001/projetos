let h1 = document.querySelector(".container h1");
let count = [0];
let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
let encerrar = document.querySelector("#encerrar");

iniciar.addEventListener("click", () => {
    h1.classList.toggle("show")
    iniciar.disabled = true;
    iniciar.innerHTML = "Contando..."
    inicio = setInterval(() => {
        h1.classList.toggle("show")
        count++
        h1.innerHTML = count
    }, 1000)

})

parar.addEventListener("click", () => {
    clearInterval(inicio);
    iniciar.innerHTML = "Retomar"
    h1.innerHTML = `Pausa <br> ${count}`;
    iniciar.disabled = false;
    h1.classList.toggle("show1");
})

encerrar.addEventListener("click", () => {
    iniciar.innerHTML = "Iniciar";
    clearInterval(inicio);
    count = 0;
    h1.innerHTML = "0"
    iniciar.disabled = false;
})
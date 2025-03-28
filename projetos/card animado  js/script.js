let paragrafo = document.querySelector(".container p");
let botao = document.getElementById("botao");
let container = document.querySelector(".container");
let img = document.querySelector(".container img");
let body = document.querySelector("body");
let coquelita = document.getElementById("coquelita");


botao.addEventListener("click", ()=>{
    botao.classList.toggle("botao-animation")
   
    setTimeout(()=>{
        paragrafo.style.display = "block";
        botao.setAttribute("disabled", true);
        botao.value = "-"
        container.style.border = "3px solid"
        container.style.borderRadius = "10px"
    }, 500);

coquelita.style.display = "block"

});

img.addEventListener("click", ()=>{
    img.classList.toggle("img-expande");
    img.style.borderColor = "red"
    body.classList.toggle("body-color");
    
})

img.addEventListener("mouseout", ()=>{
    img.style.borderColor = "red"
})

img.addEventListener("mouseenter", ()=>{
    img.style.borderColor = "green"
})







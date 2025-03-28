let inpt = document.querySelector("input");
const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener("click", ()=>{
    const inptValue = inpt.value;
    if(!inptValue) return;
    btn.innerText = "Gerando..."
    img.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=E${inptValue}`
})

img.addEventListener("load", ()=>{
    btn.innerText = "Código criado"
    btn.style.background = "green";
    btn.style.color = "black"
    btn.setAttribute("disabled", "true");
})
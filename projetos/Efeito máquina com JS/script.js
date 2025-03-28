document.querySelector("p").classList.add("cor");
let texto = ["Olá","Me chamo Rodrigo","sou Dev Front End"];
let indice = 0;

function efeitomaquina(){
    let h1_text = document.querySelector("h1");
    let text = "Seja Bem vindo";
    
    text.split("").forEach((e, index)=>{
        setTimeout(()=>{
            h1_text.innerHTML += e
        }, 85 * index)
    })};

function slide(){
setInterval(()=>{
document.querySelector("p").textContent = texto[indice];
indice++;
    if(indice >= texto.length){
    indice =0;
}
}, 2000)};

setTimeout(efeitomaquina);
setTimeout(slide);



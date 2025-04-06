const tituloPrincipal = document.querySelector("h1");
let texto = "Jogos de Qualidade Venha já adquirir o seu !!!";

let Arr = texto.split("");

Arr.forEach((e, ind)=>{
    setTimeout(()=>{
            tituloPrincipal.innerHTML += `${e}`
    },100 * ind)
})




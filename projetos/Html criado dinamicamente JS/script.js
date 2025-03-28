//HTML//
let div = document.createElement("div");
let texto = document.createElement("input");
let h1 = document.createElement("h1");
let resultado = document.createElement("p");
let corpo = document.querySelector("body");
let img = document.querySelector("img");
document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(texto);
div.appendChild(resultado);
resultado.id = "resultado";
texto.id = "input-texto";
texto.name = "texto";
h1.innerHTML = "Escreva";
texto.setAttribute("placeholder", "Escreva Algo...")
//css ao Iniciar/
h1.style.color = "green";
//Ao Clicar no input//
texto.addEventListener("focus", (e)=>{
    resultado.style.border = ("3px solid"), resultado.style.width = ("400px"), resultado.style.height = ("400px"), texto.style.width = ("300px"), texto.style.height = ("50px"), texto.style.fontSize = ("1.2em"),h1.style.color = "purple",
    h1.innerHTML = "Estou Aguardando...", resultado.style.fontSize = "1.5em"
});
//Sair do input//
texto.addEventListener("blur", (e)=>{
    resultado.style = "unset", h1.style = "unset", h1.innerHTML = "Escreva", h1.style.color = "green", texto.style = "unset", resultado.innerHTML = "", texto.value = "";
})
//Display flex na div//
texto.className = "texto";
div.style.display = "flex",
div.style.height = ("100vh"),div.style.width = ("100vw"),
div.style.justifyContent = "center", div.style.alignItems = "center", div.style.flexDirection = "column"
//Adicionar Em tempo real//
    texto.addEventListener("input", (e) => {
    resultado.innerHTML = `${e.target.value}`;
});

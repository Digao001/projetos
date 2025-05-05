let senha = document.getElementById("senha");
let icon = document.getElementById("icon");
let gif = document.getElementById("gif");

//Mudança de imagem do icone e o type da senha//
icon.addEventListener("click", ()=>{
    if(icon.dataset.state === "close"){
        gif.classList.add("gif-open");
        icon.src =  "img/icone-open.png";
        gif.src = "gif/sharingan-open.gif";
        senha.type = "text";
        icon.dataset.state = "open";
        fundoAdd();
    } else {
        gif.classList.remove("gif-open")
        icon.src =  "img/icone-close.png";
        gif.src = "gif/sharingan-close.gif";
        senha.type = "password";
        icon.dataset.state = "close";
        imagemGif = document.querySelector("#imagemGif").src = "";
        
    }
});
//Animação de fundo//
function fundoAdd(){
    let imagemGif = document.querySelector("#imagemGif").src = "img/TSUKUYOMI INFINITO.gif";
}

     
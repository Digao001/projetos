let box = document.getElementById("box"); 
let img = document.querySelector("body img");
let video = document.getElementById("watch");
let capa = document.querySelector(".capa img");
const titulo = document.querySelector(".titulo img");
const preço = document.querySelector("#preço");

box.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {     
        // Gof Of War//
        switch (box.value) {

            case "God of War": {
            
                setTimeout(() => {
                    
                    img.src = "";
                    video.src = "videos/kratos.960x540.mp4"
                }, 2000)
               setTimeout(()=>{
                capa.style.display = "block"
                capa.src = "img/capa god of war.jpg";
                titulo.src = "img/titulo gof of war.png";
                titulo.style.width = "700px";
                preço.innerHTML= `199,90$`;
                preço.setAttribute("id", "block");
                img.src = "gifs/god-of-war/gif--god.gif";
               }, 2000)  
                break;
            }
            // GTA //
            case "Grand Theft Auto - GTA": {
                
                setTimeout(() => {
                    img.src = "";
                    video.src = "videos/gta-video.mp4"
                }, 2000)
                setTimeout(()=>{
                    capa.src = "img/capa gta.jpg";
                titulo.src = "img/titulo gta.png";
                titulo.style.width = "300px"
                preço.innerHTML= `179,90$`
                preço.setAttribute("id", "block")
                img.src = "gifs/gta-gif/gif-gta.webp";
                }, 2000)
                break;
            }

            case "Spider-man 2": {
                
                setTimeout(() => {
                    img.src = "";
                    video.src = "videos/spider man video.mp4"
                }, 2000)
                setTimeout(()=>{
                    capa.src = "img/capa spider man.jpg";
                titulo.src = "img/titulo spider man.png";
                titulo.style.width = "400px"
                preço.innerHTML= `189,90$`
                preço.setAttribute("id", "block")
                img.src = "gifs/spider man gif/spider man gif.webp";
                }, 2000)
                break;
            }

            default: {
                alert("Digite algo")
            }

        }

    }
})


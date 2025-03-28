let imagens = [document.querySelectorAll("img")];
window.onload = loading();
function loading(){
for(let img of imagens){
   img.forEach((entry, indice)=>{
    setInterval(()=>{
        
        entry.classList.replace("hidden", "show")
        
    }, 2000 * indice)
   })
}}

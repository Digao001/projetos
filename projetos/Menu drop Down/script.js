let lista = [document.querySelectorAll(".hidden")];

let menu = document.querySelector(".menu").addEventListener("click", ()=>{
    for(let list of lista ){
        list.forEach((entries, ind)=>{
            setTimeout(()=>{
                entries.classList.toggle("show")
            }, 100 * ind)
        })
    }
});

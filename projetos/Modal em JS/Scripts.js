let inpt = document.querySelector('input[type="button"]');
let content = document.querySelector(".content");
let btn = document.querySelector("button");
let body = document.querySelector("body");

inpt.addEventListener("click", ()=>{
        content.classList.add("content-on");
        inpt.style.opacity = "0"
        body.style.backgroundColor = "#80808094"
})

btn.addEventListener("click", ()=>{
    content.classList.replace("content-on", "content")
    inpt.style.opacity = "1"
    body.style.backgroundColor = "white"
   
})
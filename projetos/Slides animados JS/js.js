
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let imagens = document.querySelector('.imagens');
let body = document.querySelector('body');

var contador = 0;
var clicar = true;

function slide(){
contador++

if(contador == 1 && clicar === true){
    img1.style.display = 'none';
    img2.style.display = 'block';
} else if(contador == 2 && clicar === true){
    img2.style.display = 'none';
    img3.style.display = 'block';
} else if(contador == 3 && clicar === true){
    img3.style.display = 'none';
    img4.style.display = 'block';
} else if(contador == 4 && clicar === true){
    img4.style.display = 'none';
    img1.style.display = 'block';
    contador = 0;
}

}


function pausa(){
   clicar = false;
   body.style.background = 'red'
   for(clicar; clicar = false;clearInterval(slide())){}
}

function retornar(){
    clicar = true;
    body.style.background = 'white'
    
}
imagens.addEventListener('mouseout', retornar)
imagens.addEventListener('click', pausa)
var intervalo = setInterval(slide, 2000)





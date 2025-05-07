let display = document.querySelector('.display');

let res = document.getElementById('resultado');

let botao = document.getElementsByName('input');

let numerosort = document.getElementById('numero-sort');

function insert(numeros){
    display.value = display.value + numeros.value
}

let btn = document.getElementById('sortear').addEventListener('click', function sortear(){

 
 
 if(display.value){
    
    res.innerHTML = Math.floor(Math.random()* display.value)

    
    numerosort.innerHTML = ' Foi o Número sorteado'

    numerosort.classList.add("class-sort")
    

}
    
 else {
        res.innerHTML = ' Por favor Escolha o valor a ser sorteado'
    }


}) 

let del = document.getElementById('apagar').addEventListener('click', ()=>{

if(display.value){
    display.value = ''
}

})

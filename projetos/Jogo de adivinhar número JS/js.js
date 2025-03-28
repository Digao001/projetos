
let pronto = document.getElementById("pronto");
let numero = document.getElementById('numero');
let resultado = document.getElementById("resultado");
let botao = document.querySelector(".botao");
let botaotentar = document.getElementById('tentar');
let tentativa = document.getElementById("tentativa");
let escolher = document.querySelector(".escolher");
let xis = document.querySelector(".xis");
let contagem = document.getElementById("contagem");
let perdeu = document.getElementById("perdeu");
let escolha$numero = document.getElementById("escolha-numero");
var escolhido = [];
var fimJogo = false;


let clique = 0;
pronto.addEventListener('click', ()=>{
    if(numero.value > 0 && numero.value <= 100 ){
       
        escolhido = numero.value
        pronto.setAttribute('disabled', 'true');
        numero.style.opacity = '0'
        botao.classList.replace('botao', 'botaosim');
        escolher.classList.replace('escolher', 'escolhersim');
        pronto.style.border = "2px solid red"
        numero.style.border = "2px solid red"
        
    } else {
        resultado.innerHTML = ' Escolha um número entre 1 e 100'
    }
})

botaotentar.addEventListener('click', ()=>{


   if(escolhido === escolher.value){
    tentativa.innerHTML = 'Você acertou ✅'
    
   } else {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.id = 'div';
    div.innerHTML = '❌ ERROU ❌';
    resultado.appendChild(div);
    clique ++
    contagem.innerHTML = `${clique} ERROS`
   } 
})

function limpar(){
    resultado.innerHTML = ''
}

setInterval(limpar, 2000)

function erros(){
    if(clique >= 10){
        xis.classList.replace('xis', 'xisb')
        perdeu.innerHTML = 'Você perdeu'
        fimJogo = true;

    }
}

setInterval(erros, 1000)

function fimjogo(){
    if(fimJogo === true){
        window.location = 'http://127.0.0.1:5500/index.html'
    }
}

setInterval(fimjogo, 3000)
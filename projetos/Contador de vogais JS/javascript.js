
let par = document.querySelector('h2');

let botao = document.getElementById('botao').addEventListener('click',()=>{
    var texto = document.getElementById('texto').value;

    var vogais = texto.match(/[aeiou]/gi);

    var cont = vogais.length;

    par.innerHTML = `O número de vogais é: ${cont}`

})
const btn = document.getElementById("btn");
let nome = document.querySelector("#nome");
let endereco = document.querySelector("#endereco");
let mensagem = document.querySelector("#mensagem");
let bDados = [];
//Botão que envia os dados//
btn.addEventListener("click", (e)=>{
e.preventDefault();
validar();
})

//Apaga o ultimo caractere da mensagem//
mensagem.addEventListener("input", (e)=>{
if(e.target.value.length > 50){
    e.target.value = e.target.value.slice(0, -1);
    alert("Limite de caractere alcançado");
}
})
//Valida os campos nome e endereço//
function validar(){
    if(nome.value.length < 3 || nome.value.match(/[^\w]/g) || !endereco.value.match(/[\d]/g)){
        alert("Nome deve possuir menos que 3 caracteres e não pode conter caracteres especiais, o endereço deve haver o número do imóvel");
    } else {
        add();
    }
}

//Adicionar os campos a tabela//
function add(){
    const nomeInput = nome.value.trim();
    const enderecoInput = endereco.value.trim();
//Faz a verificaçao se está repetindo//
const repetido = bDados.some((obj)=>{
   return obj.nome === nomeInput || obj.endereco === enderecoInput;
    
});
if(repetido){
    alert("Já existe este nome ou endereço");
    return;
}
bDados.push({
    nome: nomeInput,
    endereco: enderecoInput,
    mensagem: mensagem.value
})
dados(nomeInput, enderecoInput);
}
//Adicionar aos dados recebidos//
function dados(nomeInput, enderecoInput){
let nomeR = document.getElementById("nomeR");
nomeR.innerHTML += `${nomeInput} <br>`;
let enderecoR = document.getElementById("enderecoR");
enderecoR.innerHTML += `${enderecoInput} <br>`;
let mensagemR = document.getElementById("mensagemR");
mensagemR.innerHTML += `${mensagem.value} <br>`;
}
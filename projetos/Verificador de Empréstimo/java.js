var nome = document.getElementById('nome')
var idade = document.getElementById('idade')
var profissao = document.getElementById('profissao')
var salario = document.getElementById('salario')
var res = document.getElementById('resultado')

//ITENS PREENCHIDOS//
var nomeP = document.getElementById('nome-preenchido')
var idadeP = document.getElementById('idade-preenchido')
var profissaoP = document.getElementById('profissao-preenchido')
var salarioP = document.getElementById('salario-preenchido')
//ITENS PREENCHIDOS//

let arrdados = [nome, idade, profissao, salario, res]

//labels//
let labelnome = document.querySelector('.label-nome')
let labelidade = document.querySelector('.label-idade')
let labelprofissao = document.querySelector('.label-profissao')
let labelsalario = document.querySelector('.label-salario')

let arrlabel = [labelnome, labelidade, labelprofissao, labelsalario]
//Labels//


//OKS//

let okname = document.getElementById('ok-nome')
let okidade = document.getElementById('ok-idade')
let okprofissao = document.getElementById('ok-profissao')
let oksalario = document.getElementById('ok-salario')
//OKS//

            ///////NOME//////
labelnome.addEventListener('click', ()=>{
   if(nome.value){
nomeP.setAttribute('value', `${nome.value}`.toUpperCase())

okname.style.display = 'block'



nomeP.style.border = '2px solid green'} else {
   nomeP.style.border = '2px solid red'
}

})
            ////IDADE/////
labelidade.addEventListener('click', ()=>{
    if(idade.value){
 idadeP.setAttribute('value', `${idade.value}`.toUpperCase())
 
 okidade.style.display = 'block'
 
 
 
 idadeP.style.border = '2px solid green'} else {
    idadeP.style.border = '2px solid red'
 }
 
 })

         //////PROFISSAO/////
 labelprofissao.addEventListener('click',()=>{
if(profissao.value){
 profissaoP.setAttribute('value', `${profissao.value}`.toUpperCase())
             
 okprofissao.style.display = 'block'
             
                
profissaoP.style.border = '2px solid green'} else {
                profissaoP.style.border = '2px solid red'
             }
             
          })


       /////SALARIO/////   
          labelsalario.addEventListener('click',()=>{
            if(salario.value){
             salarioP.setAttribute('value', `${salario.value}`.toUpperCase())
                         
            oksalario.style.display = 'block'
             salarioP.style.border = '2px solid green'     
                            
            } else {
                            salarioP.style.border = '2px solid red'
                         }
                         
                      })

            ///Analisar/////

            let botao = document.getElementById('analisar').addEventListener('click', ()=>{
                
                
            })
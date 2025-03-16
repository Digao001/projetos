
let caixadigit = document.querySelector('.caixa-digitaçao');

var lista = document.getElementById('lista')

var novatarefa = document.querySelector('.nova-tarefa')




novatarefa.addEventListener('click', ()=>{

    if (caixadigit.value != '')var novalista = document.createElement('li')


 
     novalista.innerHTML = caixadigit.value
    document.body.appendChild(novalista);

    novalista.setAttribute('class', 'lista')
    
    



    var x = document.createElement('span')

    x.innerHTML = '❌'

    document.body.appendChild(x)

    x.setAttribute('class', 'xx')
    


    var v = document.createElement('span')

    v.innerHTML = '✔️'

    document.body.appendChild(v)

    v.setAttribute('class', 'vv')
   

    x.addEventListener('click', ()=>{

    
        elemento = document.querySelector('.lista').remove(novalista)
        xx = document.querySelector('.xx').remove(x)
        vv = document.querySelector('.vv').remove(v)

        
 })


    v.addEventListener('click', ()=>{
        novalista.style.background = 'green'
       
    })
    
}


)




let x = document.getElementById('input-link');

let res = document.getElementById('resultado');

///Eventos///

document.addEventListener("keydown", (event)=>{

if(event.key === 'Enter'){   
     if(confirm('Confirmar?') === true){
     window.location = x.value

     }else {
        res.innerHTML = 'Defina Um Link'
     }
}
}
) 
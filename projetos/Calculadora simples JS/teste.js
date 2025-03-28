var mais = document.getElementById('mais')


var menos = document.getElementById('menos')


var multiplicação = document.getElementById('multiplicação')


var divisão = document.getElementById('divisão')

var sinal = document.getElementById('sinal')

var res = document.getElementById('res')



mais.addEventListener('click', ()=>{

sinal.innerHTML = ('+');

var num1 = document.getElementById('num1').value;

var num2 = document.getElementById('num2').value;

var res = document.getElementById('res')

var result = Number(num1) + Number(num2)
    res.innerHTML = (result)

})


menos.addEventListener('click', ()=>{

    sinal.innerHTML = ('-');
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var res = document.getElementById('res')
    
    var result = (num1) - (num2)
        res.innerHTML = (result)
    
    })


    multiplicação.addEventListener('click', ()=>{

        sinal.innerHTML = ('*');
        
        var num1 = document.getElementById('num1').value;
        
        var num2 = document.getElementById('num2').value;
        
        var res = document.getElementById('res')
        
        var result = (num1) * (num2)
            res.innerHTML = (result)
        
        })

        divisão.addEventListener('click', ()=>{

            sinal.innerHTML = ('/');
            
            var num1 = document.getElementById('num1').value;
            
            var num2 = document.getElementById('num2').value;
            
            var res = document.getElementById('res')
            
            var result = (num1) / (num2)
                res.innerHTML = (result)
            
            })

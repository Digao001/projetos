//Desafio da multiplicação//

/*var mult = 5;
var resultado = 0;
for (i = 0; i <= 10; i++){
  resultado = mult * i;
  
  console.log(`${i} * 5 = ${resultado}`);
}*/


//Contagem de vogais//




/*function vogais(){
    var text = document.getElementById('texto').value;
    var paragrafo = document.getElementById('paragrafo');
    

var vogais = text.match(/[aeiou]/gi);

let cont = vogais.length;

paragrafo.innerHTML = `O número de vogais são: ${cont}`

}*/

for(i = 0; i < 11; i++){
  document.writeln(`Tabuada do: ${i} <br>`);

    for(j = 1; j < 11; j++){
      document.writeln(`${j} * ${i} = ${i * j} <br>`)
    }

}
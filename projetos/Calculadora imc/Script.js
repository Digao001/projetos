let peso;
let altura;

function filtrar(pesoKg, alturaM){
    //Nao pode conter strings e caracteres especiais (exceto o .)//
    while(isNaN(peso) || peso == /[^\w\s\d\.,.]/g || peso == ""){
        peso = prompt("Digite seu peso");
    };

    while(isNaN(altura) || altura == /[^\w\s\d\.,.]/g || peso == ""){
        altura = prompt("Digite sua altura");
    };
}
//Chama a função, faz o calculo e mostra o resultado//
filtrar(peso, altura);
const imc = peso / (altura*altura);
console.log(`Seu IMC: ${imc.toFixed(2)}`);
console.log("Tabela do IMC: \n Menor que 18,5	Abaixo do peso \n 18,5 – 24,9	Peso normal \n 25,0 – 29,9	Sobrepeso \n 30 ou mais (obesidade)");


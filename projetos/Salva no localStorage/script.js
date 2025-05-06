let data = document.getElementById("data");
let horario = document.querySelector("#horario");
let opcao = document.getElementById("opcao");
let nome = document.getElementById("nome");
const btn = document.querySelector(".btn");
let horariosDisponiveis = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
//Agendamentos ficarão salvos aqui e no cache do navegador
const agendamentos = [];

//Cria dinamicamente a tag option//
for(h of horariosDisponiveis){
    var opt = document.createElement("option");
    horario.appendChild(opt);
    opt.textContent = h;
} 
//Atualiza ao modificar o option//
data, horario.addEventListener("change", ()=>{
    let h3 = document.querySelector("h3");
    h3.innerHTML = `Nome: ${nome.value}<br>Data: ${data.value}<br> ás ${horario.value}`;
})

btn.addEventListener("click", ()=>{
    agendamentos.push(`${nome.value} ${data.value} ${horario.value}`);
    console.log(agendamentos);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

})
console.log(`Agendamento feito para o dia e hora \n \n${localStorage.getItem('agendamentos')}`);


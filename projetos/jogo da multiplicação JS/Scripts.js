const pergunta = document.querySelector("h2");
let resposta = document.querySelector(".resposta");
let btn = document.querySelector(".btn");
let par = document.querySelector("p");
const resete = document.querySelector(".reset");

const random = function multi() {
   let num1 = Math.ceil(Math.random() * 10);
   let num2 = Math.ceil(Math.random() * 10);
   btn.disabled = false

   pergunta.textContent = `Qual o resultado entre (${num1} * ${num2})?`;

   btn.addEventListener("click", () => {
      if (num1 * num2 == resposta.value) {
         par.textContent = `✅ CORRETO o valor é ( ${num1 * num2} )`;
         btn.disabled = true;
         resete.style.color = "green"
      }
      else {      
         par.innerHTML = `❌ ERROU`;     
      }
   })
};
random();
resete.addEventListener("click", () => reset());
function reset() {
   random();
   par.innerHTML = ""
   resete.style.color = "gray"
};
let participacao = document.querySelector("#participacao");
let prova = document.querySelector("#prova");
let trabalho = document.querySelector("#trabalho");
let aluno = document.getElementById("aluno");
let btn = document.querySelector("button");
let text1 = document.querySelector("h1");
let text2 = document.querySelector("h2");
class Curso {
    constructor(nomeAluno, participacao, prova, trabalho) {
        this.participacao = participacao;
        this.prova = prova;
        this.trabalho = trabalho;
        this.nomeAluno = nomeAluno;
    }
    get media() {
        return parseFloat((Number(this.participacao) + Number(this.prova) + Number(this.trabalho)) / 3).toFixed(2);
    }
}
btn.addEventListener("click", () => {
    let boletim = new Curso(aluno.value, participacao.value, prova.value, trabalho.value);

    text1.innerHTML = `Nome do aluno: <ins>${boletim.nomeAluno}</ins> <hr> Nota de participação: ${boletim.participacao} <br> Nota da prova: ${boletim.prova} <br> Nota do trabalho : ${boletim.trabalho}`;

    if (boletim.media >= 7) {
        text2.innerHTML = `A média do aluno <ins>${boletim.nomeAluno}</ins> é <mark style="background: green">${boletim.media}</mark> <br> <mark style="color: green;">Aprovado</mark> !!!`
    } else {
        text2.innerHTML = `A média do aluno <ins>${boletim.nomeAluno}</ins> é  <mark style="background: red;">${boletim.media}</mark><br> <mark style="color: red;">Reprovado</mark> !!!`
    }
});
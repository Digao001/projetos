let banco = [];
let count = 0;
const local = localStorage.getItem(banco);

function adicionar() {
    let nome = prompt("Digite um nome");

    if (!nome || nome === "" || nome.match(/[^\w]/)) {
        adicionar();
    }
    else if (local) {
        alert("Já existe no local");
        return;
    }
    else if (banco.includes(nome)) {
        alert("Já existe");
        return;
    } else {
        count++;
        banco.push(nome);
        const item = document.createElement("span");
        document.body.appendChild(item);
        item.innerHTML = `<br> ${count} - ${nome}`;
        localStorage.setItem(`NOMES`, `${count} ${banco}`);
        
    }

}

let lista = []; 
let text = document.querySelector("h1");
// Lista de ingredientes

// Função principal que exibe o menu e captura a escolha do usuário
function menu() {
    let n = prompt(`\t\t SELECIONE OS ACOMPANHAMENTOS
    ● 1: Granola \n
    ● 2: Leite condensado \n
    ● 3: Leite em pó \n
    ● 4: Salada de frutas \n
    ● 5: Finalizar`);

    n = Number(n);

    verificar(n); // Passa o valor de n para a função de verificação
}

// Função de verificação da entrada do usuário
function verificar(n) {
    // Verifica se o valor é realmente um número
    if (!Number.isNaN(n) && n >= 1 && n <= 5) {
        adicionar(n);
    } else {
        alert("Digite um número entre 1 e 5");
        menu();
    }
}

// Função para adicionar os itens à lista
function adicionar(n) {
    switch (n) {
        case 1:
            if (!lista.includes("Granola")) {
                lista.push("Granola");
                alert("Granola Adicionada");
            } else {
                alert("Granola já foi adicionada");
            }
            break;

        case 2:
            if (!lista.includes("Leite condensado")) {
                lista.push("Leite condensado");
                alert("Leite condensado Adicionado");
            } else {
                alert("Leite condensado já foi adicionado");
            }
            break;

        case 3:
            if (!lista.includes("Leite em pó")) {
                lista.push("Leite em pó");
                alert("Leite em pó Adicionado");
            } else {
                alert("Leite em pó já foi adicionado");
            }
            break;

        case 4:
            if (!lista.includes("Salada de frutas")) {
                lista.push("Salada de frutas");
                alert("Salada de frutas Adicionada");
            } else {
                alert("Salada de frutas já foi adicionada");
            }
            break;

        case 5:
            alert("Pedido finalizado");
            const finalizado = lista.join(",")

            text.innerHTML = `Itens no pedido: <br> ${finalizado}`;

            return;
        default:
            alert("Opção inválida");
            break;
    }

    menu();
}

// Inicia o menu
menu();
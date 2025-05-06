
// Menu principal
let listaMenu = [document.querySelectorAll(".item-menu")];
let menu = document.getElementById("menu").addEventListener("click", () => {
    for (l of listaMenu) {
        l.forEach((element, index) => {
            setTimeout(() => {
                element.classList.toggle("show");
            }, 70 * index)
        })
    }

});


// Tamanho da box//
let listaTbox = [document.querySelectorAll(".t-box-item")];

let TamanhoBox = document.getElementById("tamanho-box").addEventListener("click", () => {
    for (l of listaTbox) {
        l.forEach((element, index) => {
            setTimeout(() => {
                element.classList.toggle("t-box-show")
            }, 70 * index)
        })
    }
});
//Tamanho da font//
let listaFonte = [document.querySelectorAll(".t-fonte-item")];

let fonte = document.getElementById("fonte").addEventListener("click", () => {
    for (l of listaFonte) {
        l.forEach((element, index) => {
            setTimeout(() => {
                element.classList.toggle("t-fonte-show")
            }, 70 * index)
        })
    }
});
//Estilo da font

let styleFont = document.getElementById("t-font-size").addEventListener("click", () => {
    const tSizeFont = document.querySelector(".t-size-font");
    tSizeFont.classList.toggle("t-size-show")
})

//Cor da fonte

let corFonte = document.getElementById("corFonte").addEventListener("click", () => {
    const colorFonte = document.querySelector(".colorFont");
    colorFonte.classList.toggle("colorFont-show")
})

//Alinhamento

let alinhamento = document.getElementById("alinhamento").addEventListener("click", () => {
    const alinhamentoInpt = document.querySelector(".alinhamento-display");
    alinhamentoInpt.classList.toggle("alinhamento-show")
})

// Background

let background = document.getElementById("background").addEventListener("click", () => {
    const backgroundDisplay = document.querySelector(".background-display");
    backgroundDisplay.classList.toggle("background-show")
})

// Estilo da fonte

let bordaItem = [document.querySelectorAll(".borda-item")];

let estiloBorda = document.getElementById("borda").addEventListener("click", () => {
    for (e of bordaItem) {
        e.forEach((element, index) => {
            setTimeout(() => {
                element.classList.toggle("borda-show")
            }, 70 * index)
        })
    }
});
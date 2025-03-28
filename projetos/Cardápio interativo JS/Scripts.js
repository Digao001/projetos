let p = document.querySelector("p");
const imgs = document.querySelectorAll(".container img");
let sp = document.querySelector("span");
const data = new Date();
let dia = data.getDay();


window.onload = (()=>{
    diaSemana();
});

function diaSemana() {
  switch (dia) {
    //Domingo//
    case 0: {
      sp.textContent = "Domingo Topzera";
      p.innerHTML = `<hr> Nossa Promoção de domingo Hamburguer artesanal de <del>30$</del> por <ins>20$</ins><hr>`;
      imgs[0].style.zIndex = "1";
      imgs[6].style.zIndex = "0";
      break;
    }
    //Segunda//
    case 1: {
      sp.textContent = "Segunda Feira Braba";
      p.innerHTML = `<hr> Peça hoje nosso hamburguer por apenas 30$<strong>Aproveite</strong><hr>`;
      imgs[1].style.zIndex = "1";
      imgs[0].style.zIndex = "0";
      break;
    }
    //terça feira//
    case 2: {
      sp.textContent = "Terça feira Tensa";
      p.innerHTML =
        "<hr> Aproveite hoje nosso delicioso hamburguer por apenas 30$<strong>Aproveite</strong><hr>";
      imgs[2].style.zIndex = "1";
      imgs[0].style.zIndex = "0";
      break;
    }
    //quarta feira//
    case 3: {
      sp.textContent = "Quarta Feira Maluca";
      p.innerHTML =
        "<hr> Hoje nosso delicioso hamburguer sai por apenas 25$<strong>Aproveite</strong><hr>";
      imgs[3].style.zIndex = "1";
      imgs[2].style.zIndex = "0";
      break;
    }
    //quinta feira//
    case 4: {
      sp.textContent = "Quinta feira Louca";
      p.innerHTML =
        "<hr> Hoje nosso delicioso hamburguer sai por apenas 25$<strong>Aproveite</strong><hr>";
      imgs[4].style.zIndex = "1";
      imgs[3].style.zIndex = "0";
      break;
    }
    //sexta feira//
    case 5: {
      sp.textContent = "Sexta Feira sua Linda";
      p.innerHTML =
        "<hr> Chegou sexta feira, aproveite nosso hamburguer por apenas 22$<strong>Aproveite</strong><hr>";
      imgs[5].style.zIndex = "1";
      imgs[4].style.zIndex = "0";
      break;
    }
    //sabado//
    case 6: {
      sp.textContent = "Sábado até que emfim";
      p.innerHTML = `<hr> Nossa Promoção de sábado Hamburguer artesanal de <del>30$</del> por <ins>20$</ins><hr>`;
      imgs[6].style.zIndex = "1";
      imgs[5].style.zIndex = "0";
      break;
    }
  }
}

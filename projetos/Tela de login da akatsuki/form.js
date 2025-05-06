
let senha = document.getElementById("senha");
let login = document.getElementById("login");
let iconeForte = document.querySelector("#icone-forte");
let validar = false;
///Retira os caracteres especiais do login///
login.addEventListener("input", () => {

    if (!login.value.match(/[^a-zA-Z0-9]/g, '')) {
        login.style.color = "green"
    } else {
        login.style.color = "red"
    }

})
///Validação de senha:Pelo menos 1 letra maiuscula, 1 numero, 1 caracter especial///
senha.addEventListener("input", () => {

    if (senha.value.match(/[@#_-]/g) && senha.value.length >= 5 && senha.value.match(/[A-Z]/) && senha.value.match(/[0-9]/)) {
        iconeForte.innerHTML = "<span style='color: green;'>Forte</span>";
        iconeForte.style.display = "block";
        validar = true;

    } else if (!senha.value.match(/[@#_-]/g) || !senha.value.length >= 5 || !senha.value.match(/[A-Z]/) || !senha.value.match(/[0-9]/)) {
        iconeForte.innerHTML = "<span style='color: red;'>Fraca</span>";
        iconeForte.style.display = "block";
        validar = false;

    }

})

//Envia dados pro PHP se tudo for validado o formulário///

const cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    if (validar == false) {
        alert("A senha deve conter pelo menos \n Uma letra maiúscula \n um símbolo especial @#_- \n Um número")
        return;
        //Salva no localStorage e envia pro php
    } else {
        alert("Cadastro confirmado");
        
        const usuario = {
            login: login.value,
            senha: senha.value
        };
        
        localStorage.setItem("usuario", JSON.stringify(usuario));
        const dados = JSON.parse(localStorage.getItem("usuario"));
        console.log(dados.login, dados.senha);
        
        document.formulario.submit()
    }
    
    
})


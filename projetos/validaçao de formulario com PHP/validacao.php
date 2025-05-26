<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com php</title>
    <style>
        .container{
            display: grid;
            place-items: center;
            margin-top: 20%;
        }
         h2{
            border: 1px solid;
            padding: 5px;
            border-radius: 7px;
         }
    </style>
</head>

<body>
    <?php
    //Função que vai limpar as entradas//
    function limpar($limpar)
    {
        return trim($limpar);
    }
    //Variaveis recebidas do formulário//
    $nomeRecebido = limpar($_POST["nome"] ?? "Nome indefinido");
    $enderecoRecebido = limpar($_POST["endereco"] ?? "Endereço indefinido");
    $mensagemRecebido = limpar($_POST["mensagem"] ?? "Mensagem indefinida");

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    //Valida o formato do email//
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido";
        return;
    }

    else if (mb_strlen($nomeRecebido) <= 2) {
        echo "Nome muito curto";
        return;
    }

    else if (mb_strlen($enderecoRecebido) <= 10) {
        echo "Endereço muito curto";
        return;
    }

    ?>

    <div class="container">
        <h2><?php echo "Nome: " . htmlspecialchars(($nomeRecebido)) ?></h2>
        <h2><?php echo "Endereço: " . htmlspecialchars(($enderecoRecebido)) ?></h2>
        <h2><?php echo "Email: " . htmlspecialchars(($email)) ?></h2>
        <h2><?php echo "Mensagem: " . htmlspecialchars(($mensagemRecebido)) ?></h2>
    </div>
</body>

</html>
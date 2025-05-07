<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recebendo dados</title>
</head>
<body>
    <header>
        <h1>Recebendo dados</h1>
    </header>
    <main>
        <?php 
        $n = $_GET["nome"];
        $s = $_GET["sobrenome"];
        echo "<p>é um prazer te conhecer <strong>$n $s</strong> ! este é o meu site </p>"
        ?>
        <p><a href="javascript:history.go(-1)">Voltar</a></p>
    </main>
</body>
</html>
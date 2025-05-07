<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $numero = $_GET["numero"] ?? "Sem número";
    echo "Número selecionado $numero <br>";
    echo "Antecessor ".($numero -1). "<br>";
    echo "Sucessor ".($numero +1);
    ?><br>
    <a href="javascript:history.go(-1)">Voltar</a>
</body>
</html>
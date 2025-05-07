<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $numero = $_GET["numero"];
    $sorteado = $numero.rand($numero * $numero, $numero / $numero);


    echo $sorteado 
    ?>
</body>
</html>
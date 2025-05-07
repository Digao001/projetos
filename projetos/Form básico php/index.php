<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interação com formulários</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
  
    <section>
        <form action="cad.php" method="get">

            <label for="nome">Nome:</label>
            <input type="text" id="idnome" name="nome" required>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" required>
            <input type="submit" value="Enviar" id="btn">

        </form>
    </section>
</body>

</html>
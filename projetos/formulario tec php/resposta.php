<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Recebendo dados</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #74ebd5, #acb6e5);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .card {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      padding: 30px;
      max-width: 400px;
      width: 100%;
    }

    .card h2 {
      margin-top: 0;
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }

    .card p {
      margin: 10px 0;
      font-size: 16px;
      color: #555;
    }

    .label {
      font-weight: bold;
      color: #111;
    }
  </style>
</head>
<body>
<?php 
$nome = htmlspecialchars($_GET["nome"]) ?? "Indefinido";
$email = htmlspecialchars($_GET["email"]) ?? "Indefinido";
$mensagem= htmlspecialchars($_GET["mensagem"]) ?? "Indefinido";
?>
<div class="card">
  <h2>Dados Recebidos</h2>
  <p><span class="label">Nome:</span><?php echo"$nome"?></p>
  <p><span class="label">Email:</span><?php echo"$email"?></p>
  <p><span class="label">Mensagem:</span><?php echo"$mensagem"?></p>
  <a href="javascript:history.go(-1)">Voltar</a>
</div>

</body>
</html>
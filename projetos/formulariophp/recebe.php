<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
// Recebe JSON enviado
$dados = json_decode(file_get_contents("php://input"), true);

// Pega os valores
$nome = $dados['nome'] ?? 'n';
$data = $dados['data'] ?? 'n';
$horario = $dados['horario'] ?? 'n';

// Simula resposta
echo "Agendamento confirmado!<br>Nome: $nome<br>Data: $data<br>Horário: $horario";
?>
</body>
</html>
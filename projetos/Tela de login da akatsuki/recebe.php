<?php
    $login = $_GET["login"] ?? 'Login indefinido';
    $senha = $_GET["senha"] ?? 'Senha Indefinido';
    
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Dados Recebidos</title>
    
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #444;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #eee;
        }
    </style>
</head>
<body>

    <h2>Dados Recebidos</h2>

    <table>
        <tr>
            <th>Login</th>
            <th>Senha</th>
        </tr>
        <tr>
            <td><?= htmlspecialchars($login) ?></td>
            <td><?= htmlspecialchars($senha) ?></td>
        </tr>
    </table>

</body>
</html>
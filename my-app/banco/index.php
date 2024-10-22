<?php

header('Content-Type: application/json'); // Define o tipo de resposta como JSON
header('Access-Control-Allow-Origin: *'); // Permite acessos de qualquer origem (CORS)
header('Access-Control-Allow-Methods: POST'); // Permite apenas o método POST
header('Access-Control-Allow-Headers: Content-Type'); // Permite o cabeçalho Content-Type

// Ativar a exibição de erros no PHP
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Configurações de conexão ao banco de dados
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "portifolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Erro na conexão: ' . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Aqui você substitui o código que pega os dados da requisição POST
    $data = json_decode(file_get_contents('php://input'), true);
    $titulo = $data['titulo'];
    $descricao = $data['descricao'];
    $tecnologias = $data['tecnologias'];
    $link_git = $data['link_git'];
    $imagem_url = $data['imagem_url'];

    // Insere no banco de dados
    $stmt = $conn->prepare("INSERT INTO lista (titulo, descricao, tecnologias, link_git, imagem_url) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $titulo, $descricao, $tecnologias, $link_git, $imagem_url);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Dados inseridos com sucesso!']);
    } else {
        echo json_encode(['error' => 'Erro: ' . $stmt->error]);
    }
    $stmt->close();
}

$conn->close();

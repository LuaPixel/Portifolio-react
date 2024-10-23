<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "portifolio";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die(json_encode(['error' => 'Erro na conexão: ' . $conn->connect_error]));
}

// Receber dados JSON
$data = json_decode(file_get_contents("php://input"), true);
$feedback_text = $data['text'] ?? '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($feedback_text)) {
        // Escapar o feedback para prevenir injeções SQL
        $feedback_text = $conn->real_escape_string($feedback_text);

        $sql = "INSERT INTO feedback (feedback) VALUES ('$feedback_text')";
        
        if ($conn->query($sql) === TRUE) {
            // Retorna a mensagem enviada como parte da resposta
            echo json_encode(["message" => "Feedback enviado com sucesso!", "feedback" => $feedback_text]);
        } else {
            echo json_encode(["error" => "Erro ao enviar feedback: " . $conn->error]);
        }
    } else {
        echo json_encode(["error" => "Feedback vazio, por favor insira algo."]);
    }
} else {
    echo json_encode(["error" => "Método não suportado."]);
}

// Fechar conexão
$conn->close();

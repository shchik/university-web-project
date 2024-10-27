<?php
$username = 'root';
$passwordBd = 'Shadyman6';
$dbh = new PDO('mysql:host=localhost;dbname=usersdb', $username, $passwordBd);

$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];

$sql = "INSERT INTO admins (email, login, password) 
        VALUES (:email, :login, :password);";

try {
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':login', $login);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        header("Content-Type: application/json; charset=utf-8");
        echo json_encode(['status' => 'success', 'message' => 'Запись успешно удалена.']);
        
    } else {
        header("Content-Type: application/json; charset=utf-8");
        echo json_encode(['status' => 'error', 'message' => 'Запись не найдена.']);
    }
} catch (PDOException $e) {
    // Обработка ошибок
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode(['status' => 'error', 'message' => 'Ошибка: ' . $e->getMessage()]);
}
?>
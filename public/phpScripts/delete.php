<?php
$username = 'root';
$password = 'Shadyman6';
$dbh = new PDO('mysql:host=localhost;dbname=usersdb', $username, $password);

$id = $_POST['id'];

$sql = "DELETE FROM users WHERE id = :id";

try {
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    // Проверяем количество затронутых строк
    if ($stmt->rowCount() > 0) {
        // Успешное удаление
        header("Content-Type: application/json; charset=utf-8");
        echo json_encode(['status' => 'success', 'message' => 'Запись успешно удалена.']);
    } else {
        // Если запись не найдена
        header("Content-Type: application/json; charset=utf-8");
        echo json_encode(['status' => 'error', 'message' => 'Запись не найдена.']);
    }
} catch (PDOException $e) {
    // Обработка ошибок
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode(['status' => 'error', 'message' => 'Ошибка: ' . $e->getMessage()]);
}
?>
<?php
$username = 'root';
$password = 'Shadyman6';
$dbh = new PDO('mysql:host=localhost;dbname=usersdb', $username, $password);

$id = $_POST['id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$patronymic = $_POST['patronymic'];
$faculty = $_POST['faculty'];
$speciality = $_POST['speciality'];
$pointsNumber = $_POST['pointsNumber'];

$sql = "UPDATE users 
        SET firstname = :firstname, 
            lastname = :lastname, 
            patronymic = :patronymic, 
            pointsNumber = :pointsNumber, 
            facultyName = :faculty, 
            specialityName = :speciality 
        WHERE id = :id;";

try {
    $stmt = $dbh->prepare($sql);
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':firstname', $firstname, PDO::PARAM_STR);
    $stmt->bindParam(':lastname', $lastname, PDO::PARAM_STR);
    $stmt->bindParam(':patronymic', $patronymic, PDO::PARAM_STR);
    $stmt->bindParam(':pointsNumber', $pointsNumber, PDO::PARAM_INT);
    $stmt->bindParam(':faculty', $faculty, PDO::PARAM_STR);
    $stmt->bindParam(':speciality', $speciality, PDO::PARAM_STR);
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
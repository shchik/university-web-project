<?php
$username = 'root';
$password = 'Shadyman6';
$dbh = new PDO('mysql:host=localhost;dbname=usersdb', $username, $password);

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$patronymic = $_POST['patronymic'];
$faculty = $_POST['faculty'];
$speciality = $_POST['speciality'];
$pointsNumber = $_POST['pointsNumber'];

$sql = "INSERT INTO users (firstname, lastname, patronymic, pointsNumber, facultyName, specialityName) 
        VALUES (:firstname, :lastname, :patronymic, :pointsNumber, :faculty, :speciality);";

try {
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':firstname', $firstname);
    $stmt->bindParam(':lastname', $lastname);
    $stmt->bindParam(':patronymic', $patronymic);
    $stmt->bindParam(':pointsNumber', $pointsNumber, PDO::PARAM_INT);
    $stmt->bindParam(':faculty', $faculty);
    $stmt->bindParam(':speciality', $speciality);
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
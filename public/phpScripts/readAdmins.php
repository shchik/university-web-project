<?php
$username = 'root';
$password = 'Shadyman6';
$dbh = new PDO('mysql:host=localhost;dbname=usersdb', $username, $password);

$sql = "SELECT * FROM admins";

try{
    $result = $dbh->query($sql)->fetchAll(PDO::FETCH_ASSOC);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($result);
}
catch(PDOException $e) {
    echo 'Ошибка: ' . $e->getMessage();
}
?>
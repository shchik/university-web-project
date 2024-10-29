<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/Exception.php';
require '../phpmailer/PHPMailer.php';
require '../phpmailer/SMTP.php';

// Check if email is provided
if (isset($_POST['email'])) {
    $email = $_POST['email'];

    // Validate email (you can use a more robust validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                          // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                 // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                               // Enable SMTP authentication
        $mail->Username   = 'neka19023@gmail.com';           // SMTP username
        $mail->Password   = 'odcl grwv vliv qjwt';              // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;    // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 465;                                // TCP port to connect to

        // Recipients
        $mail->setFrom('neka19023@gmail.com', 'Nikita');
        $mail->addAddress($email);                               // Add a recipient

        // Content
        $mail->isHTML(true);                                   // Set email format to HTML
        $mail->Subject = 'Password Reset Request';
        $mail->Body    = '<p>Click the link below to reset your password:</p><a href="https://yourwebsite.com/reset.php?token=YOUR_TOKEN">Reset Password</a>';

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Reset email sent.']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No email provided.']);
}
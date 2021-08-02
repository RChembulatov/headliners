<?

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Переменные, которые отправляет пользователь
$url = $_POST['url'];
$form_name = $_POST['form_name'];
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Хэдлайнерс";
$body = "
<h2>Хэдлайнерс</h2>
<b>url сайта: </b> $url<br><br>
<b>Название формы: </b> $form_name<br><br>
<b>ФИО: </b>$name<br><br>
<b>Номер телефона: </b>$phone<br><br>
";

$mail = new PHPMailer();
try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'devkvn1';
    $mail->Password = 'PASSAdWb123';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('devkvn1@yandex.ru', 'devkvn1');
    $mail->addAddress('devkvn1@yandex.ru');


    //Content
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    $mail->send();    

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
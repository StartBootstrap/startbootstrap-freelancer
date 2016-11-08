<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
date_default_timezone_set('your-time-zone'); //http://php.net/manual/en/function.date-default-timezone-set.php
require ('../mail/PHPMailer-master/PHPMailerAutoload.php');
require ('../mail/PHPMailer-master/class.phpmaileroauthgoogle.php'); // altough autoloader works, I had to set google auth to test gmail smtp
//download the mailer class and set the directory. //https://github.com/PHPMailer/PHPMailer // you will need latest versions.


$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host       = "yourhost.domain.com"; 
$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth   = true;                  // enable SMTP authentication

$mail->SMTPAuth   = true;                    // enable SMTP authentication
$mail->Port       = 465;                    // set the SMTP port for ssl
$mail->Username   = "sender@yourdomain.com"; // SMTP account username example
$mail->Password   = "password_of_sender_mail";


$mail->addAddress("reciever_adress@domain.com");
$mail->SetFrom('from_who@domain.com','name');
$mail->Subject    = "Subject";

$mail->CharSet    = 'UTF-8';
$mail->MsgHTML("");
$mail->Body       = "You have received a new message from your website contact form.\n\nHere are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message" ;





if(!$mail->Send()) {
echo "Mailer Error: " . $mail->ErrorInfo;
} else {
echo "Message sent!";

}			
?>

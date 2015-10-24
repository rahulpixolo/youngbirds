<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contacting us. As early as possible  we will contact you '
	);

    $name = $_POST['name']; 
    $email = $_POST['email'];    
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = $email;
    $email_to = 'rahul.pixolo@gmail.com';//replace with your email

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = mail($email_to, "INQUIRY", $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;

?>
<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contacting us. As early as possible  we will contact you '
	);

    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'youngbirds.com';
    $email_to = 'rahul.pixolo@gmail.com';//replace with your email

    $body = 'subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = mail($email_to, "www.youngbirds.com has a message", $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;

?>
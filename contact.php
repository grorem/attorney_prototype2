<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    $message = $_POST['message'];

    $from = 'From: UX_Form'; 
    $to = 'gmrorem@gmail.com'; 
    $subject = 'UX Portfolio Form Submission';

    $body = "From: $name\n\n E-Mail: $email\n\n Message:\n\n $message";


    if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}

?>
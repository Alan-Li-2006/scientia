<?php

  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "info.scientiaedu@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Email received from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
  }

  // $name = $_POST['name'];
  // $visitor_email = $_POST['email'];
  // $message = $_POST['message'];

  // $email_from = 'contact.scientiaedu@gmail.com';

  // $email_subject = 'Scientia Contact Form Message';

  // $email_body = 'User Name: $name.\n'.
  //                 'User Email: $visitor_email.\n'.
  //                   'User Message: $message.\n';

  // $to = 'info.scientiaedu@gmail.com';

  // $headers = 'From: $email_from \r\n';

  // $headers .='Reply-To: $visitor_email \r\n';

  // mail($to, $email_subject, $email_body, $headers);

  // header('Location: index.html');
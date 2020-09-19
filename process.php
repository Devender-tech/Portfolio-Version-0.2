<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "devender.tech101@gmail.com";
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    header('Location: form_success.html');
  }

    ?>
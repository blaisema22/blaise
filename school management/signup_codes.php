<?php
include("conn.php");
if(isset($_POST["send"])){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $resul = mysqli_query($conn,"INSERT INTO user VALUES(NULL,'$username','$password')");
    if($resul){
        echo"<script>alert('Account created successfully');window.location.href='login.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to create Account  ');window.location.href='signup.php'</script>";

    }
}
?>
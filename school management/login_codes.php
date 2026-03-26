<?php
session_start();
include("conn.php");
if(isset($_POST["send"])){
    $UserName = $_POST["UserName"];
    $Password = $_POST["Password"];
    $resul = mysqli_query($conn,"SELECT * FROM user WHERE UserName='$UserName' AND Password='$Password'");
    if(mysqli_num_rows($resul)){
        $_SESSION["UserName"]=$UserName;
        echo"<script>alert(' successfully Login');window.location.href='index.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to Login ');window.location.href='Login.php'</script>";

    }
}
?>
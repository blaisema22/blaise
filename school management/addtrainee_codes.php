<?php
include("conn.php");
if(isset($_POST["send"])){
    $id = $_POST["tradeid"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $date = $_POST["date"];
    $gender = $_POST["gender"];
    $level = $_POST["level"];
    $parentid = $_POST["parentid"];

    $resul = mysqli_query($conn,"INSERT INTO trainee VALUES(NULL,'$fname','$lname','$gender','$date','$parentid',' $id','$level')");
    if($resul){
        echo"<script>alert('successfully Trade Added');window.location.href='viewtrainee.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to Add trade ');window.location.href='addtrade.php'</script>";

    }
}
?>
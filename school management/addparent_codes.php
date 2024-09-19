<?php
include("conn.php");
if(isset($_POST["send"])){
    $id = $_POST["id"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $phone = $_POST["phone"];
    $district = $_POST["district"];
    $resul = mysqli_query($conn,"INSERT INTO parents(`ParentNationalId`, `pFirstName`, `pLastName`, `pGender`, `PhoneNumber`, `District`) VALUES('$id','$fname','$lname','$gender','$phone','$district')");
    if($resul){
        echo"<script>alert('successfully Trade Added');window.location.href='viewtrade.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to Add trade ');window.location.href='addtrade.php'</script>";

    }
}
?>
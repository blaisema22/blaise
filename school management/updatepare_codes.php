<?php
include("conn.php");
if(isset($_POST["send"])){
    $id = $_POST["id"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $phone = $_POST["phone"];
    $district = $_POST["district"];
    $resul = mysqli_query($conn,"UPDATE parents SET pFirstName='$fname', pLastName='$lname',pGender='$gender',PhoneNumber='$phone', District='$district' WHERE ParentNationalId='$id'");
    if($resul){
        // echo"<script>alert('successfully Updaed Parent);window.location.href='viewparent.php'</script>";
        header("location:viewparent.php");
    }
    else{
        echo"<script>alert(' Failed to  Update parent ');window.location.href='viewparent.php'</script>";

    }
}
?>
<?php
include("conn.php");
if(isset($_POST["send"])){
    $name = $_POST["name"];
    $resul = mysqli_query($conn,"INSERT INTO trades VALUES(NULL,'$name')");
    if($resul){
        echo"<script>alert('successfully Trade Added');window.location.href='viewtrade.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to Add trade ');window.location.href='addtrade.php'</script>";

    }
}
?>
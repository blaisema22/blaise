<?php
include("conn.php");
if(isset($_POST["send"])){
    $id = $_POST["id"];
    $name = $_POST["name"];
    $resul = mysqli_query($conn,"UPDATE trades SET Trade_name='$name' WHERE trade_code='$id'");
    if($resul){
        echo"<script>alert('successfully Trade Updated');window.location.href='viewtrade.php'</script>";
    }
    else{
        echo"<script>alert(' Failed to Update trade ');window.location.href='viewtrade.php'</script>";

    }
}
?>
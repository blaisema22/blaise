<?php 
include("conn.php");
$id=$_GET['tradeid'];
$result = mysqli_query($conn,"DELETE  FROM trades WHERE trade_code='$id'");
if($result){
    echo"<script>alert('Successfully trade deleted');window.location.href='viewtrade.php'</script>";
}
else{
    echo"<script>alert('failed trade deleted');window.location.href='viewtrade.php'</script>";
}
?>
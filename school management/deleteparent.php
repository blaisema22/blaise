<?php 
include("conn.php");
$id=$_GET['parentid'];
$result = mysqli_query($conn,"DELETE  FROM parents WHERE ParentNationalId='$id'");
if($result){
    echo"<script>alert('Successfully trade deleted');window.location.href='viewtrade.php'</script>";
}
else{
    echo"<script>alert('failed trade deleted');window.location.href='viewtrade.php'</script>";
}
?>
<?php 
include("conn.php");
$id=$_GET['TraineeId'];
$result = mysqli_query($conn,"DELETE  FROM trainee WHERE TraineeId='$id'");
if($result){
    echo"<script>alert('Successfully trainee deleted');window.location.href='viewtrainee.php'</script>";
}
else{
    echo"<script>alert('failed trainee to deleted');window.location.href='viewtrainee.php'</script>";
}
?>
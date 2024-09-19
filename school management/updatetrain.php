
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sigup</title>
</head>
<body>
<div class="log">
        <h1><span>L</span>AVINIA</h1>
    </div>
    <section class="container">
        <div class="links">
        <?php
        include("home.php");
        ?>
        </div>
        <div class="content">
    <div class="form">
        <center>
        <?php
                include("conn.php");
                $trade=$_GET['TraineeId'];
                $result=mysqli_query($conn,"SELECT * FROM trainee WHERE TraineeId='$trade'");
                while ($row=mysqli_fetch_array($result)) {
                ?>
        <form action="updatetrainee_codes.php" method="POST">
        <h4>Update Trainee</h4>
            <input type="text" name="TraineeId" value="<?php echo $row['TraineeId']?>">
            <input type="text" name="fname" value="<?php echo $row['tFirstName']?>">
            <input type="text" name="lname" value="<?php echo $row['tLastName']?>">
            
            <input type="text" name="gender" value="<?php echo $row['tGender']?>">
            <input type="text" name="level" value="<?php echo $row['Level']?>">
            <input type="date" name="date" value="<?php echo $row['DOB']?>">
            <select name="parentid" id="">
            <?php
                }
                include("conn.php");
                $result=mysqli_query($conn,"SELECT * FROM parents");
                while ($row=mysqli_fetch_array($result)) {
                ?>
                <option value="<?php echo $row['ParentNationalId']?>"><?php echo $row['ParentNationalId']?>
                <?php echo $row['pFirstName']?></option>
                <?php }?>
            </select>
            <button name="send" type="submit">Add Trade</button>
        </form>
        
    </center>
</div>
    </div>
</section>
<footer>
    <div class="footer">
       <p> LAVINIA@gmail.com.  2023&copy;<address> Nother Rulindo District</address></p>
    </div>
</footer>
</body>
</html>
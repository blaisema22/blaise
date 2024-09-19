              
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
    <?php
                include("conn.php");
                $parentid=$_GET['parentid'];
                $result=mysqli_query($conn,"SELECT * FROM parents WHERE ParentNationalId='$parentid'");
                while($row=mysqli_fetch_array($result)) {
                ?>
  
        <center>
        <form action="updatepare_codes.php" method="POST">
        <h3>Update parent</h3>
            <input type="number" name="id" value="<?php echo $row['ParentNationalId']?>">
            <input type="text" name="fname" value="<?php echo $row['pFirstName']?>" >
            <input type="text" name="lname" value="<?php echo $row['pLastName']?>">
            <input type="text" name="gender" value="<?php echo $row['pGender']?>">
            <input type="number" name="phone" value="<?php echo $row['PhoneNumber']?>">
            <input type="address" name="district" value="<?php echo $row['District']?>">
            <button name="send" type="submit">UpdateParent</button>
        </form>
        <?php } ?>
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
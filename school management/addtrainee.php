
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>TRegesta Traine</title>
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
                $trade=$_GET['tradeid'];
                $result=mysqli_query($conn,"SELECT * FROM trades WHERE Trade_code='$trade'");
                while ($row=mysqli_fetch_array($result)) {
                ?>
        <form action="addtrainee_codes.php" method="POST">
        <h3>Trainee Restration</h3>
            <input type="text" name="tradeid" value="<?php echo $row['Trade_code']?>" hidden>
            <input type="text" name="fname"  placeholder="Enter First Name">
            <input type="text" name="lname"  placeholder="Enter Last name">
            <?php } ?>
            <input type="text" name="gender" placeholder="Enter Gender" >
            <input type="text" name="level" placeholder="Enter Level " >
            <input type="date" name="date"  placeholder="Enter ">
            <select name="parentid" id="">
            <?php
                include("conn.php");
                $result=mysqli_query($conn,"SELECT * FROM parents");
                while ($row=mysqli_fetch_array($result)) {
                ?>
                <option value="<?php echo $row['ParentNationalId']?>"><?php echo $row['ParentNationalId']?>
                <?php echo $row['pFirstName']?></option>
                <?php }?>
            </select>
            <button name="send" type="submit">Regestor Trainee</button>
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
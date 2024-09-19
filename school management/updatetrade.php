<?php
                include("conn.php");
                $id=$_GET['tradeid'];
                $result=mysqli_query($conn,"SELECT * FROM trades WHERE Trade_code='$id'");
                while ($row=mysqli_fetch_array($result)) {
                ?>
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
        <form action="updatetrade_codes.php" method="POST">
        <h3>Update trade</h3>
        <input type="text" name="id" value="<?php echo $row['Trade_code']?>">
            <input type="text" name="name" value="<?php echo $row['Trade_name']?>">
            <button name="send" type="submit">Update trade</button>
        </form>
        <?php }?>
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
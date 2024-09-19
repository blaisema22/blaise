
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
        <form action="addparent_codes.php" method="POST">
        <h3>Add parent</h3>
            <input type="number" name="id" placeholder="Enter Parent National Id" >
            <input type="text" name="fname" placeholder="Enter Parent First Name">
            <input type="text" name="lname" placeholder="Enter Parent Last Name">
            <input type="text" name="gender" placeholder="Enter Gender">
            <input type="number" name="phone" placeholder="Enter Phone Number">
            <input type="address" name="district" placeholder="Enter District">
            <button name="send" type="submit">Add Parent</button>
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
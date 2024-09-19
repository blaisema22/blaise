
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
        <form action="addtrade_codes.php" method="POST">
        <h3>Add trade</h3>
            <input type="text" name="name" placeholder="Enter Trade">
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
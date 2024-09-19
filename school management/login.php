
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="CSS/responsive.css">
    <title>Login</title>
</head>
<body>
    <div class="sign">
        <center>
            <h3>Login</h3>
        <form action="login_codes.php" method="POST">
            <input type="text" name="UserName" placeholder="👤 Enter User Name">
            <input type="password" name="Password" placeholder="🔐 Enter Password">
            <button name="send" type="submit">Login</button>
            <p>I have don't Account <h3><a href="signup.php">Sign_up</a></h3></p>
        </form>
    </center>
    </div>
</body>
</html>
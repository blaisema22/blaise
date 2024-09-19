
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
            <center>
                <h3>Trade Table</h3>
            <table border="1">
                <tr>
                    <th>Trade Table </th>
                    <th colspan="3">Action</th>
                </tr>
                <?php
                include("conn.php");
                $result=mysqli_query($conn,"SELECT * FROM trades");
                while ($row=mysqli_fetch_array($result)) {
                ?>
                <tr>
                    <td><?php echo $row['Trade_name']?></td>
                    <td><a href="deletetrade.php?tradeid=<?php echo $row['Trade_code']?>"><button>Delete</button></a></td>
                    <td><a href="updatetrade.php?tradeid=<?php echo $row['Trade_code']?>"><button>update</button></a></td>
                    <td><a href="addtrainee.php?tradeid=<?php echo $row['Trade_code']?>"><button>Add trainee</button></a></td>
                </tr>
                <?php  }?>
            </table>  
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
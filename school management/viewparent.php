
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
                <h3>Parent Table</h3>
            <table border="1">
                <tr>
                    <th>ParentNationalId</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>District</th>
                    <th colspan="3">Action</th>
                </tr>
                <?php
                include("conn.php");
                $result=mysqli_query($conn,"SELECT * FROM parents");
                while ($row=mysqli_fetch_array($result)) {
                ?>
                <tr>
                    <td><?php echo $row['ParentNationalId']?></td>
                    <td><?php echo $row['pFirstName']?></td>
                    <td><?php echo $row['pLastName']?></td>
                    <td><?php echo $row['pGender']?></td>
                    <td><?php echo $row['PhoneNumber']?></td>
                    <td><?php echo $row['District']?></td>
                    <td><a href="deleteparent.php?parentid=<?php echo $row['ParentNationalId']?>"><button>Delete</button></a></td>
                    <td><a href="updateparent.php?parentid=<?php echo $row['ParentNationalId']?>"><button>update</button></a></td>
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
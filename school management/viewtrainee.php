
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
                <h3>Trainee Table</h3>
            <table border="1">
                <tr>
                    <th>First Name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Parentid</th>
                    <th colspan="3">Action</th>
                </tr>
                <?php
                include("conn.php");
                $result=mysqli_query($conn,"SELECT * FROM trainee");
                while ($row=mysqli_fetch_array($result)) {
                ?>
                <tr>
                    <td><?php echo $row['tFirstName']?></td>
                    <td><?php echo $row['tLastName']?></td>
                    <td><?php echo $row['tGender']?></td>
                    <td><?php echo $row['DOB']?></td>
                    <td><?php echo $row['ParentNationalId']?></td>

                    <td><a href="deletetrainee.php?TraineeId=<?php echo $row['TraineeId']?>"><button>Delete</button></a></td>
                    <td><a href="updatetrain.php?TraineeId=<?php echo $row['TraineeId']?>"><button>update</button></a></td>
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
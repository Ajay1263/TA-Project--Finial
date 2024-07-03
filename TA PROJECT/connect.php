<?php
    // $Username =$_POST['Username'];
    // $Password =$_POST['Password'];

    // $conn = new mysqli('localhost', 'root', 'travel');
    // if($conn->connect_error){
    //     die('Connection Failed: ' .$conn->connect_error);
    // }
    // else{
    //     $stmt = $conn->prepare("Insert into loginpage(Username,Password)
    //     values(?,?)");
    //     $stmt->bind_param("ss",$Username,$Password);
    //     $stmt->execute();
    //     echo "You have successfully logged in";
    //     $stmt -> close();
    //     $conn -> close();
    // }


// if(isset($_POST['username']) && isset($_POST['password'])){
//     $server = "localhost";
//     $username = "root";
//     $password = "";
//     $database = "tourly";

//     $con = mysqli_connect($server, $username, $password,$database);

//     if(!$con){
//         die("connection to this database failed due to" . mysqli_connect_error());
//     }

//     // echo "Success connecting to the database"
//     $username = $_POST['Username'];
//     $password = $_POST['Password'];

//     $sql = "INSERT INTO `loginpage` (`Username`, `Password`) VALUES ('$username', '$password');";
   
//     if(mysqli_query($con,$sql)){
//         echo "Successfully inserted";}
//         else{
//             echo "ERROR:" . $sql . "<br>" . mysqli_error($con); 
//         }
//         mysqli_close($con);
//     }
// ?>




<?php
if(isset($_POST['username']) && isset($_POST['password'])) {
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "tourly";

    // Create connection
    $conn = new mysqli($server, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get username and password from the form submission
    $username = $_POST['username'];
    $password = $_POST['password'];

    // SQL query to insert user information into the database
    $sql = "INSERT INTO loginpage (Username, Password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
}
?>


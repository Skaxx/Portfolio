<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$pwd = $_POST['pwd'];

if (!empty($fname) || !empty($lname) || !empty($email) || !empty($pwd)) {

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "Squids_users";

    //CREATE CONNECTION

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error(' . mysqli_connect_error() . ')' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email FROM squids_data_users WHERE email = ? limit 1";
        $INSERT = "INSERT squids_data)users (fname, lname, email, pwd) values(?, ?, ?, ?)";

        //PREPARE STMT

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum == 0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sssssii", $fname, $lname, $email, $pwd);
            $stmt->execute();

            echo "Nowy rekord zapisany poprawnie";
        } else {
            echo "Ten email został już wykorzystany";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "Wszystkie pola są wymagane";
    die();
}

?>
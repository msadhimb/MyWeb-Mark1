<?php

    $server = "sql312.epizy.com";
    $username ="epiz_30765083";
    $password = "qTcTkIuYi6";
    $dbname = "epiz_30765083_headmuOfc";

    $conn = mysqli_connect($server, $username, $password, $dbname);

    if(!$conn){
        die("Connextion Failed : ".mysqli_connect_error());
    }
?>
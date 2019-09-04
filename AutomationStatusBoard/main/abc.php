<?php
    include_once('db.php');
    $project = $_POST['project'];
    $activity = $_POST['activity'];

    if(mysql_query("INSERT INTO test VALUES ('$activity','$project')"))
        echo "Success";
    else
        echo "fail";
?>
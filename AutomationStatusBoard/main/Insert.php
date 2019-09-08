<?php
    //include_once('db.php');
    $project = $_POST['project'];
    $activity = $_POST['activity'];

    //server side validation

    if(!empty($project)|| !empty($activity)){
        
        //create connection
        $host = "shareddb-g.hosting.stackcp.net";
        $dbUsername = "dremerz";
        $dbPassword = "dremerz85";
        $dbname = "drmrzd-373116ae";
        $conn = new mysqli($host, $dbUsername,$dbUsername,$dbname);


    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_error().')'. mysqli_connect_error());
    } else{
        $SELECT = "SELECT * from test where activity=? Limit=1";
        $INSERT = "INSERT Into test(project,activity) values(?,?)";

        //prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s",$activity);
        $stmt->execute();
        $stmt->bind_result($activity);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_paran("ss",$project,$activity);
            $stmt->execute();
            echo "inserted successfully";
        } else{
            echo "record already exists";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
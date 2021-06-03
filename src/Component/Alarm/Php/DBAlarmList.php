<?php
include 'dbconfig.php';
 
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
 
$id = $obj['id'];
$alarmTitle = $obj['alarmTitle'];
$alarmTime = $obj['alarmTime'];
$stringTime = $obj['stringTime'];
$integerTime = $obj['integerTime'];
$activation = $obj['activation'];
 
$CheckSQL = "SELECT * FROM alarms";
 
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
if(isset($check)){
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson ; 
} else{
    $Sql_Query = "insert into user_details (name,email,password) values ('$name','$email','$password')";
    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'User Registered Successfully' ;
        $json = json_encode($MSG);
        echo $json ;
    } else{
    echo 'Try Again';
    }
}
 mysqli_close($con);
?>
<?php 

$type = $_GET['tp']; 
if($type=='login') login(); 
elseif($type=='view') view(); 

function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $username = $json['username']; $password = $json['password']; 
       $userData =''; $query = "select * from user where username='$username' and password='$password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $id=$userData->id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';

            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}




function view(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $id=$json['id'];
    
    $query = "SELECT * FROM user WHERE id=$id ORDER BY id DESC LIMIT 10";
    $result = $db->query($query); 

    $userData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $userData=json_encode($userData);
    
    echo '{"userData":'.$userData.'}';
    
   
}

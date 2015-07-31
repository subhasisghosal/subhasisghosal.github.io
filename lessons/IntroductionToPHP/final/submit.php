<?php
	$name = $email = $phone = $sex = $country = $state = $address = $int = "";
	$nameErr = $emailErr = $phoneErr = $sexErr = $countryErr = $stateErr = $interestErr = $addressErr = "";
	$interest = array();
	$flag = false;
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$flag = true;
		$name = $_POST["name"];
		$email = $_POST["email"];
		$phone = $_POST["phone"];
		$country = $_POST["country"];
		$state = $_POST["state"];
		$address = $_POST["address"];
	  if (!isset($_POST["sex"])||empty($_POST["sex"])) {
	    $sexErr = "Missing";
	    $flag = false;
	  } else {
	    $sex = $_POST["sex"];
	  }
	  if (!isset($_POST["interest"])||empty($_POST["interest"])) {
	    $interestErr = "Missing";
	    $flag = false;
	  } else {
	    $interest = $_POST["interest"];
	  }
	  
	}
	
	if($flag==true){
		$conn = mysqli_connect('127.0.0.1', 'root', 'root', 'subscription',"3306");
		if(! $conn ){
		  die('Could not connect: ' . mysqli_error($conn));
		}
		if (mysqli_connect_errno()){
		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		#echo 'Connected successfully';
		mysqli_query($conn, "INSERT INTO user VALUES ('$name', '$email', $phone, '$sex', '$country', '$state', '$address')");
		foreach ($interest as $value) {
			switch ($value) {
				case 'football':
					$id = 1;
					break;
				case 'movie':
					$id = 2;
					break;
				case 'reading':
					$id = 3;
					break;
			}
			mysqli_query($conn, "INSERT INTO user_interest VALUES ($id,'$email')");
		}
		mysqli_close($conn);
		unset($interest);
		$interest = array();
		$name = $email = $phone = $sex = $country = $state = $address = $int = "";
		echo "Successfully Subscribed";
	}
	else echo "All Fields are Mandatory!!";
?>

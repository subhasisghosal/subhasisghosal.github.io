	<?php
		$name = $email = $phone = $sex = $country = $state = $address = $int = "";
		$nameErr = $emailErr = $phoneErr = $sexErr = $countryErr = $stateErr = $interestErr = $addressErr = "";
		$interest = array();
		$flag = false;
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			$flag = true;
		  if (empty($_POST["name"])) {
		    $nameErr = "Missing";
		    $flag = false;
		  } else {
		    $name = $_POST["name"];
		  }
		  if (empty($_POST["email"])) {
		    $emailErr = "Missing";
		    $flag = false;
		  } else {
		  	$email = $_POST["email"];
		  	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		    	$emailErr = "Wrong";
		    	$flag = false;
		  	}
		  }
		  if (empty($_POST["phone"])) {
		    $phoneErr = "Missing";
		    $flag = false;
		  } else {
		  		$phone = $_POST["phone"];
		  	if((preg_match("/[^0-9]/", $phone, $match)) || strlen($phone) != 10){
		  		$phoneErr = "Invalid";
		  		$flag = false;
		  	}   
		  }
		  if (empty($_POST["sex"])) {
		    $sexErr = "Missing";
		    $flag = false;
		  } else {
		    $sex = $_POST["sex"];
		  }
		  if (empty($_POST["interest"])) {
		    $interestErr = "Missing";
		    $flag = false;
		  } else {
		    $interest = $_POST["interest"];
		  }
		  if (empty($_POST["country"])) {
		    $countryErr = "Missing";
		    $flag = false;
		  } else {
		    $country = $_POST["country"];
		  }
		  if (empty($_POST["state"])) {
		    $stateErr = "Missing";
		    $flag = false;
		  } else {
		    $state = $_POST["state"];
		  }
		  if (empty($_POST["address"])) {
		    $addressErr = "Missing";
		    $flag = false;
		  } else {
		    $address = $_POST["address"];
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

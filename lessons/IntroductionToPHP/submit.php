	<?php
		$name = $email = $phone = $sex = $country = $state = $address = $int = "";
		$nameErr = $emailErr = $phoneErr = $sexErr = $countryErr = $stateErr = $interestErr = $addressErr = "";
		$interest = array();
		$flag = false;
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
		  if (empty($_POST["name"])) {
		    $nameErr = "Missing";
		    $flag = false;
		  } else {
		    $name = $_POST["name"];
		    $flag = true;
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
		    else{
		    	$flag = true;
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
		  	else{	
		    	$flag = true;
		  	}    
		  }
		  if (empty($_POST["sex"])) {
		    $sexErr = "Missing";
		    $flag = false;
		  } else {
		    $sex = $_POST["sex"];
		    $flag = true;
		  }
		  if (empty($_POST["interest"])) {
		    $interestErr = "Missing";
		    $flag = false;
		  } else {
		    $interest = $_POST["interest"];
		    $flag = true;
		  }
		  if (empty($_POST["country"])) {
		    $countryErr = "Missing";
		    $flag = false;
		  } else {
		    $country = $_POST["country"];
		    $flag = true;
		  }
		  if (empty($_POST["state"])) {
		    $stateErr = "Missing";
		    $flag = false;
		  } else {
		    $state = $_POST["state"];
		    $flag = true;
		  }
		  if (empty($_POST["address"])) {
		    $addressErr = "Missing";
		    $flag = false;
		  } else {
		    $address = $_POST["address"];
		    $flag = true;
		  }
		}
		print_r($_POST);
		#echo $name, $email, $phone, $sex, $country, $state, $address;
		
		if($flag==true){
			foreach ($interest as $value) {
				$int .= $value.", ";
			}
			$int = chop($int,', ');
			$data = "$name, $email, $phone, $sex, $country, $state, $address, $int\n";
			$myf = fopen("/home/subhasisghosal/subhasis/data.csv", "a");
			fwrite($myf, $data);
			fclose($myf);
			$name = $email = $phone = $sex = $country = $state = $address = $int = "";
			echo "Successfully Subscribed";
		}
		else echo "All Fields are Mandatory!!";
	?>

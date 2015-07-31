<?php
	// Getting values from request
	$value = $_GET['query'];
	$formfield = $_GET['field'];
	// Check Missing and Valid or Invalid name when user enters a name in name input field.
	if ($formfield == "name") {
		if(empty($value)){
			echo "Missing Name";
		}
		else{
			if (strlen($value) < 4) {
				echo "Must be 3+ letters";
			} else {
				echo "Valid";
			}
		}
	}
	// Check Missing and Valid or Invalid email when user enters email in email input field.
	if ($formfield == "email") {
		if(empty($value)){
			echo "Missing Email";
		}
		else{
			// if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $value)) {
			if(!filter_var($value, FILTER_VALIDATE_EMAIL)){
				echo "Invalid email";
			} else {
				echo "Valid";
			}
		}
	}
	// Check Missing and Valid or Invalid phone number when user enters number in phone input field.
	if ($formfield == "phone") {
		if(empty($value)){
			echo "Missing Phone no.";
		}
		else{
			if((preg_match("/[^0-9]/", $value, $match)) || strlen($value) != 10) {
				echo "Invalid Phone Number";
			} else {
				echo "Valid";
			}
		}
	}
	// Check Missing address when user enters in address input field.
	if ($formfield == "address") {
		if(empty($value)){
			echo "Missing ";
		}
		else{
			echo "<span>Valid</span>";
		}
	}
	// Check Missing country when user selects a country.
	if ($formfield == "country") {
		if(empty($value)){
			echo "Missing ";
		}
		else{
			echo "<span>Valid</span>";
		}
	}
	// Check Missing state when user selects a state.
	if ($formfield == "state") {
		if(!isset($value)||empty($value)){
			echo "Missing ";
		}
		else{
			echo "<span>Valid</span>";
		}
	}
?>
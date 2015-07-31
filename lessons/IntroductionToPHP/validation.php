<?php
	$value = $_GET['query'];
	$formfield = $_GET['field'];
	// Check Valid or Invalid name when user enters a name in name input field.
	if ($formfield == "name") {
		if (strlen($value) < 4) {
			echo "Must be 3+ letters";
		} else {
			echo "<span>Valid</span>";
		}
	}
	// Check Valid or Invalid email when user enters email in email input field.
	if ($formfield == "email") {
		if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $value)) {
			echo "Invalid email";
		} else {
			echo "<span>Valid</span>";
		}
	}
	// Check Valid or Invalid phone number when user enters number in phone input field.
	if ($formfield == "phone") {
		if((preg_match("/[^0-9]/", $value, $match)) || strlen($value) != 10) {
			echo "Invalid Phone Number";
		} else {
			echo "<span>Valid</span>";
		}
	}
?>
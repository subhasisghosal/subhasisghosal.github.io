<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$conn = mysqli_connect('127.0.0.1', 'root', 'root', 'subscription',"3306");
		if(! $conn ){
			die('Could not connect: ' . mysqli_error($conn));
		}
		if (mysqli_connect_errno()){
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$oldphone = $_POST['oldphone'];
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$sex = $_POST['sex'];
		$country = $_POST['country'];
		$state = $_POST['state'];
		$address = $_POST['address'];
		$interest = $_POST['interest'];
		$query = "update user set u_name='".$name."', u_email='".$email."', u_phone=".$phone.", u_sex='".$sex."', u_country='".$country."', u_state='".$state."', u_addr='".$address."' where u_phone=".$oldphone;
		mysqli_query($conn, $query);
		$id = 0;
		mysqli_query($conn, "DELETE from user_interest where u_email='".$email."'");
		foreach ($interest as $value) {
			switch ($value) {
				case 'Football':
					$id = 1;
					break;
				case 'Movie':
					$id = 2;
					break;
				case 'Reading':
					$id = 3;
					break;
			}
			mysqli_query($conn, "INSERT INTO user_interest VALUES ($id,'$email')");
		}
		mysqli_close($conn);
		header('Location: http://subhasis.localhost/show.php');
	}
?>
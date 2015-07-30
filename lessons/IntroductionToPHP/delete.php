<?php
	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		if(isset($_GET["phone"])){
			$conn = mysqli_connect('127.0.0.1', 'root', 'root', 'subscription',"3306");
			if(! $conn ){
				die('Could not connect: ' . mysqli_error($conn));
			}
			if (mysqli_connect_errno()){
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			$phone = $_GET["phone"];
			$query = "delete from user where u_phone=".$phone;
			mysqli_query($conn, $query);

			header('Location: http://subhasis.localhost/show.php');
			mysqli_close($conn);
		}
	}
?>
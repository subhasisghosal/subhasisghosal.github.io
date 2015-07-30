<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<?php
	$conn = mysqli_connect('127.0.0.1', 'root', 'root', 'subscription',"3306");
	if(! $conn )
	{
	  die('Could not connect: ' . mysqli_error($conn));
	}
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$retval = mysqli_query($conn, "SELECT * from user");
	if(! $retval )
	{
	  die('Could not get data: ' . mysql_error());
	}
	echo "<table><tr><th>Name</th><th>E-Mail</th><th>Phone</th><th>Sex</th><th>Country</th><th>State</th><th>Address</th></tr>";
	while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
	{
	    echo "<tr><td>".$row['u_name']."</td><td>".$row['u_email']."</td><td>".$row['u_phone']."</td><td>".$row['u_sex']."</td><td>".$row['u_country']."</td><td>".$row['u_state']."</td><td>".$row['u_addr']."<td><a href='delete.php?phone=".$row['u_phone']."'>Delete</a></td><td><a href='edit.php?phone=".$row['u_phone']."'>Edit</a></td></tr>";
	}
	mysqli_close($conn);
?>
</body>
</html>

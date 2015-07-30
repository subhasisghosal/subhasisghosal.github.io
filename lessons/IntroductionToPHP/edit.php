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
			$oldPhone = $phone;
			$retval = mysqli_query($conn, "SELECT * from user where u_phone=".$phone);
			if(! $retval ){
				die('Could not get data: ' . mysql_error());
			}
			$result = mysqli_fetch_array($retval, MYSQLI_ASSOC);
			$name = $result['u_name'];
			$email = $result['u_email'];
			$phone = $result['u_phone'];
			$sex = $result['u_sex'];
			$country = $result['u_country'];
			$state = $result['u_state'];
			$address = $result['u_addr'];
			$interest = array();
			$intq = mysqli_query($conn, "select int_name from interest natural join user_interest natural join user where u_email='".$email."'");
			if(! $intq ){
				die('Could not get data: ' . mysql_error());
			}
			while($intr = mysqli_fetch_array($intq, MYSQLI_ASSOC)){
				array_push($interest,$intr['int_name']);
			}
			mysqli_close($conn);
		}
	}
?>
<h2 class="textformat">Update Form</h2>
<form id='sub_form' action="update.php" method="post">  
	<input style="visibility:hidden" id="oldphone" name="oldphone" value="<?php echo htmlspecialchars($oldPhone);?>"></input>    				
	<table>
		<tr>
			<td>Name</td>
			<td><input id="name" type="text" name="name" value="<?php echo htmlspecialchars($name);?>"/></td>
		</tr>
		<tr>
			<td>Email</td>
			<td><input id="email" type="text" name="email" value="<?php echo htmlspecialchars($email);?>"/></td>
		</tr>
		<tr>
			<td>Phone</td>
			<td><input id="phone" type="text" name="phone" value="<?php echo htmlspecialchars($phone);?>" onkeyup="validatePh(this.value)"/></td>
		</tr>
		<tr>
			<td>Sex</td>
			<td><input id="male" type="radio" value="male" name="sex" <?php if($sex=="male") echo "checked";?> > Male
			<input id="female" type="radio" value="female" name="sex" <?php if($sex=="female") echo "checked";?> > Female
			</td>
		</tr>
		<tr>
			<td>Interest</td>
			<td><input id="football" type="checkbox" name="interest[]" value="Football" <?php 
						foreach($interest as $value){
							if($value == 'Football')
								echo "checked"; 
						}?> > Football
			<input id="movie" type="checkbox" name="interest[]" value="Movie" <?php 
						foreach($interest as $value){
							if($value == 'Movie')
								echo "checked"; 
						}?> > Movie
			<input id="reading" type="checkbox" name="interest[]" value="Reading" <?php 
						foreach($interest as $value){
							if($value == 'Reading')
								echo "checked"; 
						}?> > Reading
			</td>
		</tr>
		<tr>
			<td>Country</td>
			<td><select id="country" name="country" onchange="selectState(this.value)">
				<option></option>
				<option value="england" <?php if($country=="england") echo "selected";?> >England</option>
				<option value="india" <?php if($country=="india") echo "selected";?> >India</option>
				<option value="japan" <?php if($country=="japan") echo "selected";?> >Japan</option>
				<option value="usa" <?php if($country=="usa") echo "selected";?> >USA</option>
			</select></td>
		</tr>
		<tr>
			<td>State</td>
			<td><input type="text" id="state" name="state" value="<?php echo htmlspecialchars($state);?>"></td>
		</tr>
		<tr>
			<td>Address</td>
			<td><textarea id="address" name="address" rows="6" form="sub_form"><?php echo htmlspecialchars($address);?></textarea></td>
		</tr>
	</table>
	<input type="submit" value="Update" name="sub" class="btn">
<!-- 	<input type="reset" class="btn" onclick="clearform()"> -->
</form>

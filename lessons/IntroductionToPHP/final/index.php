
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="ajax.js">	</script>
	<title>Latest News</title>
</head>
<body>
	<?php include 'submit.php'?>
	<div class="tab_area">
		<div class="textformat tab left current" id="tab_1" onclick="clickMe(this.id)">News</div>
        <div class="textformat tab" id="tab_2" onclick="clickMe(this.id)">Subscribe</div>
        
        <div id="tab1" class="tab_content matter box">
        	<span id="left" class="box">
			<div>
				<h2 class="textformat">Welcome</h2>
				<p class="textformat">Simple and effective AngularJS bindings for <br/>FusionCharts JavaScript Charting Library. Simple <br/>and effective AngularJS bindings for FusionCharts <br/>JavaScript Charting Library</p>
				<p class="textformat blue">AngularJS bindings for FusionCharts JavaScript <br/>Charting Library</p>
			</div>
			<div class="btn">LEARN MORE</div>
		</span>
		<span id="right" class="box">
			<h2 class="textformat">Latest News</h2>
			<img src="image.jpg">
		</span>
        </div>
        
        <div id="tab2" class="tab_content matter box">
        	<div class="box">	
        		<form id='sub_form' action="#" method="post">
        		<div>
        			<span id="left">
        				<h2 class="textformat">Subscription Form</h2>
        				<table>
        					<tr>
        						<td>Name</td>
        						<td><input id="name" type="text" name="name" value="<?php echo htmlspecialchars($name);?>" onblur="validate(this.name, this.value)"/><span id="name1" class="error">* </span></td>
        					</tr>
	        				<tr>
	        					<td>Email</td>
	        					<td><input id="email" type="text" name="email" value="<?php echo htmlspecialchars($email);?>" onblur="validate(this.name, this.value)"/><span id="email1" class="error">* </span></td>
	        				</tr>
	        				<tr>
	        					<td>Phone</td>
	        					<td><input id="phone" type="text" name="phone" value="<?php echo htmlspecialchars($phone);?>" onkeyup="validatePh(this.value)" onblur="validate(this.name, this.value)"/><span id="phone1" class="error">* </span></td>
	        				</tr>
	        				<tr>
	        					<td>Sex</td>
	        					<td><input id="male" type="radio" value="male" name="sex" <?php if($sex=="male") echo "checked";?> > Male
								<input id="female" type="radio" value="female" name="sex" <?php if($sex=="female") echo "checked";?> > Female
								<span class="error">* <?php echo $sexErr;?></span></td>
							</tr>
							<tr>
								<td>Interest</td>
								<td><input id="football" type="checkbox" name="interest[]" value="football" <?php 
											foreach($interest as $value){
												if($value == 'football')
													echo "checked"; 
											}?> > Football
								<input id="movie" type="checkbox" name="interest[]" value="movie" <?php 
											foreach($interest as $value){
												if($value == 'movie')
													echo "checked"; 
											}?> > Movie
								<input id="reading" type="checkbox" name="interest[]" value="reading" <?php 
											foreach($interest as $value){
												if($value == 'reading')
													echo "checked"; 
											}?> > Reading
								<span class="error">* <?php echo $interestErr;?></span></td>
							</tr>
						</table>
        			</span>
        			<span id="right">
        				<table>
	        				<tr>
	        					<td><span id="country1" class="error">* </span>Country</td>
	        					<td><select id="country" name="country" onchange="selectState(this.value)" onblur="validate(this.name, this.value)">
		        					<option></option>
		        					<option value="england" <?php if($country=="england") echo "selected";?> >England</option>
		        					<option value="india" <?php if($country=="india") echo "selected";?> >India</option>
		        					<option value="japan" <?php if($country=="japan") echo "selected";?> >Japan</option>
		        					<option value="usa" <?php if($country=="usa") echo "selected";?> >USA</option>
		        				</select></td>
	        				</tr>
	        				<tr>
	        					<td><span id="state1" class="error">* </span>State</td>
	        					<td><select id="state" name="state">
		        					<option value="<?php echo htmlspecialchars($state);?>"><?php echo htmlspecialchars($state);?></option>
		        				</select></td>
	        				</tr>
	        				<tr>
	        					<td><span id="address1" class="error">* </span>Address</td>
	        					<td><textarea id="address" name="address" rows="6" form="sub_form" onblur="validate(this.name, this.value)"><?php echo htmlspecialchars($address);?></textarea></td>
	        				</tr>
        				</table>
        			</span>
        		</div>
        		<input type="submit" name="sub" class="btn" onclick="checkForm()">
        		<input type="reset" class="btn" onclick="clearform()">
        		</form>
        	</div>
        	<a href="http://subhasis.localhost/show.php">Show All Data</a>
        </div>        
    </div>
    <script type="text/javascript" src="script.js"></script>
    
    <?php
    	if(isset($_POST["sub"])){
			echo "<script type='text/javascript'>clickMe('tab_2');</script>";
		}
	?>
</body>
</html>
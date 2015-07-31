function find(id){
	return document.getElementById(id);
}
function checkForm(){
	var name = find("name").value;
	var email = find("email").value;
	var phone = find("phone").value;
	var country = find("country").value;
	var state = find("state").value;
	var address = find("address").value;
	if(name==='' || email==='' || phone==='' || country==='' || state==='' || address===''){
		alert("Please fill up ALL Fields");
	}
	else{
		var name1 = find("name1");
		var email1 = find("email1");
		var phone1 = find("phone1");
		var country1 = find("country1");
		var state1 = find("state1");
		var address1 = find("address1");
		//Check All Values Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
		if (name1.innerHTML == 'Must be 3+ letters' || email1.innerHTML == 'Invalid email' || phone1.innerHTML == 'Invalid Phone Number' || name1.innerHTML == 'Missing Name' || email1.innerHTML == 'Missing Email' || phone1.innerHTML == 'Missing Phone Number' || country1.innerHTML == 'Missing' || state1.innerHTML == 'Missing' || address1.innerHTML == 'Missing') {
			alert("Fill Valid Information");
		} else {
		//Submit Form When All values are valid.
			find("sub_form").submit();
		}
	}
}
function validate(field, query){
	console.log("Validating",field,query);
	var xmlhttp;
	if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		console.log("HTTP request");
	} else { // for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		console.log("State Change");
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log("Entering..");
			find(field+"1").innerHTML = xmlhttp.responseText;
			// alert(JSON.stringify(xmlhttp.responseText));
		} 
	};
	xmlhttp.open("GET", "validate.php?field=" + field + "&query=" + query);
	xmlhttp.send();
}
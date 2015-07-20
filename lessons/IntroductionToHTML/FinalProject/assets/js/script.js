function find(id){
	return document.getElementById(id);
}

function submit(){
	var details = {
		name: find('name').value,
		email: find('email').value,
		address: find('msg').value
	}
	console.log(JSON.stringify(details));
}
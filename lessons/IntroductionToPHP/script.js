function find(id){
	return document.getElementById(id);
}

function clickMe(id){
	var t1 = find('tab_1');
	var t2 = find('tab_2');
	var el1 = find('tab1');
	var el2 = find('tab2');
	if(id==="tab_2"){
		el1.style.display="none";
		el2.style.display="block";
		t2.style.background="#D6EBFF";
		t2.style.color="#002081";
		t1.style.background="white";
		t1.style.color="grey";
		t2.style.zindex="5";
	}
	if(id==="tab_1"){
		el2.style.display="none";
		el1.style.display="block";
		t1.style.background="#D6EBFF";
		t1.style.color="#002081";
		t2.style.background="white";
		t2.style.color="grey";
		t1.style.zindex="5";
	}
}

function submit(){
	var s, arr = [];
	if(find('male').checked)
		s = "male";
	else
		s = "female";
	if(find('football').checked)
		arr.push("football");
	if(find('movie').checked)
		arr.push("movie");
	if(find('reading').checked)
		arr.push("reading");
	var details = {
		name: find('name').value,
		email: find('email').value,
		address: find('address').value,
		country: find('country').value,
		sex: s,
		interest: arr
	};
	console.log(JSON.stringify(details));
}

function clearform(){
	find('sub_form').reset();
}	

function selectState(val){
	var state;
	switch(val){
		case "india": state = ["UP","WB","Bihar","Orissa","Assam"];
			break;
		case "usa": state = ["Texas","California","Ohio","Alabama","Utah"];
			break;
		case "england": state = ["Manchester","Wales"];
			break;
		case "japan": state = ["Hokkaido","Honshu","Kyoto"];
			break;
	}
	var select = find("state");
	while (select.hasChildNodes()) {   
		select.removeChild(select.firstChild);}	
	for (var i = 0; i < state.length; i++) {
		var option = document.createElement("option");
		option.value = state[i];
		option.label = state[i];
		option.innerHTML = state[i];
		select.appendChild(option);
	}
}

function validatePh(val){
	var digit = parseInt(val.slice(val.length-1));
	if(isNaN(digit))
		alert("Please enter digits");
}

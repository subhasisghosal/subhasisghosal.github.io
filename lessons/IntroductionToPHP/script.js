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

function overlay(id) {
	switch(id){
		case "football": el = find("overlay1");
			break;
		case "movie": el = find("overlay2");
			break;
		case "reading": el = find("overlay3");
			break;
	}
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function back() {
	document.getElementById("overlay1").style.visibility = "hidden";
	document.getElementById("overlay2").style.visibility = "hidden";
	document.getElementById("overlay3").style.visibility = "hidden";
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
		//var select = find("state");
		select.appendChild(option);
	}
}

function validatePh(val){
	//alert(typeof(parseInt(val))+" "+parseInt(val));
	//if(typeof(val)!=='number')
	//	alert(val);
	var digit = parseInt(val.slice(val.length-1));
	if(isNaN(digit))
		alert("Please enter digits");
}

function validPh(n){
	var format = /^\((?([7-9]{1})?([0-9]{9}))$/;
	if(!n.match(format))
		alert("wrong");
}
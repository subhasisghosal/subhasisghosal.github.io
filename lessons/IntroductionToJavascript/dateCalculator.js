function change(i){
	if(i===1){
		document.getElementById("diff").style.visibility="visible";
		document.getElementById("inter").style.visibility="hidden";
	}
	else{
		document.getElementById("diff").style.visibility="hidden";
		document.getElementById("inter").style.visibility="visible";
	}
}

function diff(){
	var min=0,hr=0,day=0,wk=0,yr=0;
	var d1 = new Date(document.getElementById("start").value);
	var d2 = new Date(document.getElementById("end").value);
	var diff = d2-d1
	min = diff/60000;
	if(min>=60){
		hr+=parseInt(min/60);
		min%=60;
	}
	if(hr>=24){
		day+=parseInt(hr/24);
		hr%=24;
	}
	if(day>=7){
		wk+=parseInt(day/7);
		day%=7;
	}
	if(wk>=52){
		yr+=parseInt(wk/52);
		wk%=52;
	}
	document.getElementById("result").innerHTML=yr+" Years, "+wk+" Weeks, "+day+" Days, "+hr+" Hours, "+min+" Minutes ";
}

function inter(){
	var d = new Date(document.getElementById("dt").value);
	var limit,ampm="AM";
	var dt = document.getElementById("dt").value;
	var yr = parseInt(dt.slice(0,4));
	var mn = parseInt(dt.slice(5,7));
	var dy = parseInt(dt.slice(8,10));
	var hr = parseInt(dt.slice(11,13));
	var min = parseInt(dt.slice(14,16));
	if(mn===2)
		limit=28;
	else if (mn===4||mn===6||mn===9||mn===11) 
		limit=30;
	else
		limit=31;
	var day = parseInt(document.getElementById("day").value);
	var hour = parseInt(document.getElementById("hour").value);
	hr+=hour;
	dy+=day;
	if(hr>=24){
		dy+=parseInt(hr/24);
		hr%=24;
	}
	if(dy>=limit){
		mn+=parseInt(dy/limit);
		dy%=limit;
	}
	if(mn>12){
		yr++;
		mn%=12;
	}
	if(hr>12){
		ampm="PM";
		hr%=12
	}
	document.getElementById("next").innerHTML=mn+" / "+dy+" / "+yr+", "+hr+" : 00 "+ampm;
}
(function (){
	var d1 = document.createElement("div");
	d1.id = "content";
	document.body.appendChild(d1);
	d1.style.margin = "50px";
	var l1 = document.createElement("label");
	l1.innerHTML = "Basic Calculator";
	d1.appendChild(l1);
	var r1 = document.createElement("input");
	r1.type = "radio";
	r1.name = "type";
	d1.appendChild(r1);
	var l2 = document.createElement("label");
	l2.innerHTML = "Date/Time Calculator";
	d1.appendChild(l2);
	var r2 = document.createElement("input");
	r2.type = "radio";
	r2.name = "type";
	d1.appendChild(r2);
	var l3 = document.createElement("label");
	l3.innerHTML = "EMI Calculator";
	d1.appendChild(l3);
	var r3 = document.createElement("input");
	r3.type = "radio";
	r3.name = "type";
	d1.appendChild(r3);
})();
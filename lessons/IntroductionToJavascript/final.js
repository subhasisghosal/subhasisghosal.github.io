(function (){
	function find(id){
		return document.getElementById(id);
	}
	
	var labels = ["Basic Calculator", "Date/Time Calculator", "EMI Calculator"];
	var d = document.createElement("div");
	d.id = "content";
	document.body.appendChild(d);
	d.style.margin = "50px";
	for (var i = 1; i < 4; i++) {
		var r = document.createElement("input");
		r.id = "r"+i;
		r.type = "radio";
		r.name = "type";		
		d.appendChild(r);
		var l = document.createElement("label");
		l.id = "l"+i;
		l.for = "r"+i;
		l.innerHTML = labels[i-1];
		d.appendChild(l);
	};
	r1.addEventListener("click", basicCalculator);
	r2.addEventListener("click", dateCalculator);
	r3.addEventListener("click", emiCalculator);

	function basicCalculator(){
		var buttons = [["7","8","9","-","mod","="],["4","5","6","+","C","AC"],["1","2","3","*","MR","MC"],[".","0","%","/","M+","M-"]];
		var d1 = document.createElement("div");
		d1.id = "calculator";
		document.body.appendChild(d1);
		var t = document.createElement("table");
		d1.appendChild(t);
		var head = t.insertRow(0).insertCell(0);
		head.setAttribute("colspan","6");
		var scrn = document.createElement("input");
		scrn.id = "screen";
		scrn.type = "text";
		scrn.setAttribute("disabled","disabled");
		head.appendChild(scrn);
		for (var i = 1; i < 5; i++) {
			var row = t.insertRow(i);
			for (var j = 0; j < 6; j++) {
				var cell = row.insertCell(j);
				cell.innerHTML = buttons[i-1][j];
				//cell.addEventListener("click", func);
			}
		};
	}

	function dateCalculator(){
		var switcher = ["Date/Time Difference","Date/Time Interval"];
		for (var i = 1; i < 3; i++) {
			var b = document.createElement("input");
			b.id = "b"+i;
			b.type = "button";
			b.value = switcher[i-1];
			b.setAttribute("onclick", "change("+i+")");
			
			document.body.appendChild(b);
		};
		//b1.addEventListener("click",change(),true);
		//b1.setAttribute("onclick", "change()");
		var d2 = document.createElement("div");
		d2.id = "date";
		document.body.appendChild(d2);
		for (var i = 1; i < 3; i++) {
			var dv = document.createElement("div");
			dv.id = "dv"+i;
			d2.appendChild(dv);
		};
		for (var i = 1; i < 3; i++) {
			var l1 = document.createElement("label");
			var ip1 = document.createElement("input");
			ip1.type = "datetime-local";
			dv1.appendChild(l1).appendChild(ip1);
		};

	}

	function emiCalculator(){
		var d3 = document.createElement("div");
		d3.id = "emi";
		document.body.appendChild(d3);
		var t = document.createElement("table");
		d3.appendChild(t);
		var labels = ["Amount(in INR):","Rate of Interest(Yearly):","","Time period(Months):","","EMI(in INR):"];
		for (var i = 0; i < 7; i++) {
			var row = t.insertRow(i);
			if(i%2!==0 || i===0){
				for (var j = 0; j < 2; j++) {
					var cell = row.insertCell(j);
					if(j===0){
						cell.innerHTML = labels[i];
					}
					else{
						var ip = document.createElement("input");
						ip.type = "text";
						cell.appendChild(ip);
					}
				}
			}
			else{
				var cell = row.insertCell(0);
				cell.setAttribute("colspan","2");
				var ip = document.createElement("input");
				cell.appendChild(ip);
				if(i!==6){	
					ip.type = "range";
				}
				else{
					ip.type = "button";
					ip.value = "Calculate";
				}
			}
		};
	}
})();

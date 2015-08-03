(function (){
	'use strict';
	function find(id){
		return document.getElementById(id);
	}

	function create(elementName,parent,attrList,styleList,eventList){
		var el = document.createElement(elementName);
		for (var i in attrList) {
			console.log(i,attrList[i]);
			el[i] = attrList[i];
		}
		for (var j in styleList) {
			console.log("Style",j,styleList[j]);
			el.style[j] = styleList[j];
		}
		for (var k in eventList) {
			console.log("Event",k,eventList[k]);
			el.addEventListener(k, eventList[k]);
		}
		parent.appendChild(el);
		return el;
	}

	(function createBody(){
		var labels = ["Basic Calculator", "Date/Time Calculator", "EMI Calculator"];
		var events = [basicCalculator,dateCalculator,emiCalculator];
		create("div",document.body,{"id":"selector"},{"margin":"50px"});
		for (var i = 1; i < 4; i++) {
			create("input",selector,{"id":"r"+i, "type":"radio", "name":"type"},{},{"click": events[i-1]});
			create("label",selector,{"id":"l"+i, "for":"r"+i, "innerHTML":labels[i-1]});
		}
		create("div",document.body,{"id":"content"});
	})();

	function basicCalculator(){
		// var op = find("screen");
		var memory=0;
		function putValue(val){
			var op = find("screen");
			op.selectionStart = op.selectionEnd = 0;
			op.value += val;
		}

		function allClear(v){
			op.value = (v===0) ? "" : op.value.slice(0,-v);
		}

		function evalue(){
			op.value = eval(op.value);
		}

		function mem(v){
			switch(v){
				case '+': memory += parseFloat(op.value);
						op.value = "";
				break;
				case '-': memory -= parseFloat(op.value);
						op.value = "";
				break;
				case 'r': op.value += memory;
				break;
				case 'c': memory = "";
					alert("Memory Cleared");
				break;
			}
		}

		function percent(){
			var a,p='';
			if(op.value.length===1){
				p = op.value;
			}
			else{
				var l;
				switch(op.value.length){
					case 2: l = 2;
					break;
					case 3: l = 3;
					break;
					case 4: l = 4;
					break;
					case 5: l = 5;
					break;
				}
				for (var i = 0; p.length < l; i++) {
						a = op.value.substring(op.value.length-i-1,op.value.length-i);
						if ((a>=0 && a<=9) || a=='.')
							p = a + p;
						else
							break;
				}
			}
			p = parseFloat(p)/100;
			allClear(0);
			op.value += p;
		}
//		(function domCreate(){
			content.innerHTML = "";
			var buttons = [["7","8","9","-","%","="],["4","5","6","+","C","AC"],["1","2","3","*","MR","MC"],[".","0","mod","/","M+","M-"]];
			create("div",content,{id:"calculator"});
			var t = create("table",calculator,{},{margin:"100px", border:"1px solid black", float:"left", "background-color":"cornflowerblue"});
			var head = t.insertRow(0).insertCell(0);
			head.setAttribute("colspan","6");
			create("input",head,{id:"screen",type:"text",disabled:"disabled"},{height:"inherit", width:"auto", "text-align":"right", "font-size":"24px"});
			var memList = ['r','c','+','-'], k=0, c=1;
			for (var i = 1; i < 5; i++) {
				var row = t.insertRow(i);
				for (var j = 0; j < 6; j++) {
					var cell = row.insertCell(j);
					cell.innerHTML = buttons[i-1][j];
					cell.align = "center";
					cell.style.border = "1px solid black";
					cell.style.width = "50px";
					cell.style.height = "50px";
					cell.style.cursor = "pointer";
					cell.style.background = "#ffffec";
					cell.style.font = "20px";
					if(j<4)
						cell.addEventListener("click", (function(a){ 
							return function(){
								if(a=="mod")
									putValue("%");
								else
									putValue(a);
							};
						})(buttons[i-1][j]));
					else if(j>3 && i>2)
						cell.addEventListener("click", (function(a){ 
							return function(){
								mem(a);
							};
						})(memList[k++]));
					else if(j>3 && i===2)
						cell.addEventListener("click", (function(a){ 
							return function(){
								allClear(a);
							};
						})(c--));
					else if(i===1 && j===4)
						cell.addEventListener("click", percent);
					else
						cell.addEventListener("click", evalue);
				}
			}
			var op = find("screen");
//		})();
	}

	function dateCalculator(){
		//Function to Switch
		function change(i){
			if(i==1){
				dv1.style.visibility="visible";
				dv2.style.visibility="hidden";
			}
			else{
				dv1.style.visibility="hidden";
				dv2.style.visibility="visible";
			}
		}
		//Function to Find Difference
		function diff(){
			var min=0,hr=0,day=0,wk=0,yr=0;
			var d1 = new Date(find("ip1").value);
			var d2 = new Date(find("ip2").value);
			var diff = d2-d1;
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
			find("result").innerHTML=yr+" Years, "+wk+" Weeks, "+day+" Days, "+hr+" Hours, "+min+" Minutes ";
		}
		//Function to Find Next date 
		function inter(){
			var d = new Date(find("dt").value);
			var limit,ampm="AM";
			var dt = find("dt").value;
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
			var day = parseInt(find("i1").value);
			var hour = parseInt(find("i2").value);
			var minute = parseInt(find("i3").value);
			min+=minute;
			hr+=hour;
			dy+=day;
			if(min>=60){
				hr+=parseInt(min/60);
				min%=60;
			}
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
				hr%=12;
			}
			find("next").innerHTML=mn+" / "+dy+" / "+yr+", "+hr+" : "+min+" "+ampm;
		}
		content.innerHTML = "";

		var switcher = ["Date/Time Difference","Date/Time Interval"];
		for (let i = 1; i < 3; i++) {
			create("input",content,{id:"b"+i, type:"button", value:switcher[i-1]}, {margin:"20px"},{"click": function(){change(i);}});
		}
		create("div",content,{id:"date"},{margin:"100px"});
		var lab = ["From","To"];
		var labs = ["Days","Hours","Minutes"];
		for (i = 1; i < 3; i++) {
			create("div",date,{id:"dv"+i},{visibility:"hidden"});
		}
		for (i = 1; i < 3; i++) {
			create("label",dv1,{innerHTML:lab[i-1]});
			create("input",dv1,{id:"ip"+i, type:"datetime-local"});
		}
		create("label",dv1,{id:"result", innerHTML:"Difference"});
		create("button",dv1,{innerHTML:"Find Difference"}, {margin:"20px"},{"click":diff});
		create("label",dv2,{innerHTML:"Date-Time"});
		create("input",dv2,{id:"dt", type:"datetime-local"});
		for (var i = 1; i < 4; i++) {
			create("label",dv2,{innerHTML:labs[i-1]});
			create("input",dv2,{id:"i"+i, type:"number", min:"0", value:"0"},{width:"40px"});
		};
		i2.max = "23";
		i3.max = "59";
		create("label",dv2,{id:"next", innerHTML:"Date/Time"});
		create("button",dv2,{innerHTML:"Find Date/Time"}, {margin:"20px"},{"click":inter});
		
	}

	function emiCalculator(){
		function isNum(e){
			var key = e.which ? e.which : e.keyCode;
			if(key>31 && (key<48 || key>57))
				return false;
		}
		var p, r, n, e;
		function calculateEMI(){
			p = parseInt(find("ip0").value);
			n = parseInt(find("ip3").value);
			r = find("ip1").value/1200;
			e = (p*r)/(1-Math.pow((1+r),-n));
			find("ip5").value = Math.round(e);
		}
		function calculatePrincipal(){
			e = parseInt(find("ip5").value);
			n = parseInt(find("ip3").value);
			r = find("ip1").value/1200;
			p = (e*(1-Math.pow((1+r),-n)))/r;
			find("ip0").value = Math.round(p);
		}
		function calculateTime(){
			p = parseInt(find("ip0").value);
			e = parseInt(find("ip5").value);
			r = find("ip1").value/1200;
			n = (Math.log(e)-Math.log(e-p*r))/Math.log(1+r);
			find("ip3").value = Math.round(n);
		}
		function calculate(){
			if (find("ip0").value==="") {
				calculatePrincipal();
			}
			else if (find("ip3").value==="") {
				calculateTime();
			}
			else if (find("ip5").value==="") {
				calculateEMI();
			}
		}
		function reflect(id){
			if(id==="sl2")
				find("ip1").value = find(id).value;
			else
				find("ip3").value = find(id).value;
		}
		content.innerHTML = "";
		var cell,ip;
		create("div",content,{id:"emi"});
		var t = create("table",emi);
		var labels = ["Amount(in INR):","Rate of Interest(Yearly):","","Time period(Months):","","EMI(in INR):"];
		for (let i = 0; i < 7; i++) {
			var row = t.insertRow(i);
			if(i%2!==0 || i===0){
				for (var j = 0; j < 2; j++) {
					cell = row.insertCell(j);
					if(j===0){
						cell.innerHTML = labels[i];
					}
					else{
						ip = create("input",cell,{id:"ip"+i, type:"number", min:"0"},{width:"70px"},{"keydown":isNum});
					}
				}
			}
			else{
				cell = row.insertCell(0);
				cell.setAttribute("colspan","2");
				ip = create("input",cell,{id:"sl"+i});
				ip.style.width = "auto";
				cell.appendChild(ip);
				if(i!==6){	
					ip.type = "range";
					ip.addEventListener("click",function(){reflect(this.id);});
				}
				else{
					ip.id = "btn";
					ip.type = "button";
					ip.value = "Calculate";
					ip.addEventListener("click",calculate);
				}
			}
		}
		ip1.step = "0.01";
		ip1.min = "8.00";
		ip1.max = "16.00";
		sl2.step = "0.01";
		sl2.min = "8.00";
		sl2.max = "16.00";
		ip3.min = "12";
		ip3.max = "240";
		sl4.min = "12";
		sl4.max = "240";
	}
})();

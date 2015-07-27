(function (){
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
		};
		create("div",document.body,{"id":"content"});
	})();
	
	function calculateBasic(){
		

	}

	function basicCalculator(){
		var op = document.getElementById("screen");

		var memory=0;

		function putValue(val){
			op.selectionStart = op.selectionEnd = 0;
			op.value += val;
		}

		function allClear(v){
			op.value = (v==0) ? "" : op.value.slice(0,-v);
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
						cell.setAttribute("onclick","putValue('"+buttons[i-1][j]+"')");
					else if(j>3 && i>2)
						cell.setAttribute("onclick","mem()");
					else if(j>3 && i===2)
						cell.setAttribute("onclick","allClear()");
				}
			};
//		})();
	}

	function dateCalculator(){
		content.innerHTML = "";
		var switcher = ["Date/Time Difference","Date/Time Interval"];
		for (var i = 1; i < 3; i++) {
			create("input",content,{id:"b"+i, type:"button", value:switcher[i-1]},{},{"click": function(){}});
		};
		//b1.addEventListener("click",change(),true);
		//b1.setAttribute("onclick", "change()");
		create("div",content,{id:"date"});

		for (var i = 1; i < 3; i++) {
			create("div",date,{id:"dv"+i});
		};
		for (var i = 1; i < 3; i++) {
			create("label",dv1);
			create("input",dv1,{type:"datetime-local"});
		};

	}

	function emiCalculator(){
		function isNum(e){
			var key = e.which ? e.which : e.keyCode;
			if(key>31 && (key<48 || key>57))
				return false;
		}
		function calculate(){
			if (find("amt").value==="") {
				calculatePrincipal();
			}
			else if (find("mnth").value==="") {
				calculateTime();
			}
			else if (find("emi").value==="") {
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
		create("div",content,{id:"emi"});
		var t = create("table",emi);
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
						var ip = create("input",cell,{id:"ip"+i, type:"number"},{},{keypress:"isNum"});
						ip.setAttribute("onclick","return isNum()");
					}
				}
			}
			else{
				var cell = row.insertCell(0);
				cell.setAttribute("colspan","2");
				var ip = create("input",cell,{id:"sl"+i});
				ip.style.width = "auto";
				cell.appendChild(ip);
				if(i!==6){	
					ip.type = "range";
					ip.setAttribute("onchange","reflect(this.id)");
				}
				else{
					ip.id = "btn";
					ip.type = "button";
					ip.value = "Calculate";
					ip.setAttribute("onclick","calculate()");
				}
			}
		};
	}
	//document.body.innerHTML += '<script type="text/javascript" src="final.js"></script>';
})();

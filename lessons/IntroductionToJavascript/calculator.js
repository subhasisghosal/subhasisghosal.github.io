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

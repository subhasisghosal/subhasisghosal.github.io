var op = document.getElementById("screen");

var var1, var2, result, memory=0;

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
		case '+': memory += op.value;
				op.value = "";
		break;
		case '-': memory -= op.value;
				op.value = "";
		break;
		case 'r': op.value += memory;
		break;
		case 'c': memory = 0;
		break;
	}
}

function percent(){
	var a,p='';
	if(op.value.length===1){
		p = op.value;
	}
	else{
		for (var i = 0; p.length < 2; i++) {
				a = op.value.substring(op.value.length-i-1,op.value.length-i);
				if (a>=0 && a<=9)
					p = a + p;
				else
					break;
				console.log(a);
		}
	}
	alert(p+"%");
	p = parseInt(p)/100;
	console.log(p);
	allClear(2);
	op.value += p;
}

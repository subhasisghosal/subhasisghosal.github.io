var op = document.getElementById("screen");

var var1, var2, result;

function putValue(val){
	op.selectionStart = op.selectionEnd = 0;
	op.value += val;
}

function allClear(v){
	op.value = (v==0) ? "" : op.value.slice(0,-1);
}

function evalue(){
	op.value = eval(op.value);
}

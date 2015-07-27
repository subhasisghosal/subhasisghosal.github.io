function getRandNum() {
	var numbers = [];
	for (var i = 0; i < 80; i++) {
		var n = Math.floor(Math.random()*100);
		if(n>9)
			numbers.push(n);	
	}
	return numbers;
}

function sort(arr) {
	for (var i = 0; i < arr.length; i+=2) {
		if(arr[i+1]>arr[i]){
			arr[i+1] = arr[i+1] + arr[i];
			arr[i] = arr[i+1] - arr[i];
			arr[i+1] = arr[i+1] - arr[i];
		}
	}
	return arr;
}

var ans = [];

function subtractions(){
	var sum = "";
	var sortedList = sort(getRandNum());
	ans.length = 0;
	for (var i = 0, j = 0; i < 30; i++, j+=2) {
		sum+="<div class='sum' id='d"+i+"'>";
		sum+="<div>"+sortedList[j]+"</div>";
		sum+="<div>-"+sortedList[j+1]+"</div>";
		sum+="<div class='answer'><input id='"+i+"' type='text' onkeypress='return isNum(event)' onkeyup='validate(this.id)'/></div></div>";
		ans.push(parseInt(sortedList[j])-parseInt(sortedList[j+1]));
	}
	document.getElementById("content").innerHTML = sum;
}

function additions(){
	var sum = "";
	var list = getRandNum();
	ans.length = 0;
	for (var i = 0, j = 0; i < 30; i++, j+=2) {
		sum+="<div class='sum' id='d"+i+"'>";
		sum+="<div>"+list[j]+"</div>";
		sum+="<div>+"+list[j+1]+"</div>";
		sum+="<div class='answer'><input id='"+i+"' type='text' onkeypress='return isNum(event)' onkeyup='validate(this.id)'/></div></div>";
		ans.push(parseInt(list[j])+parseInt(list[j+1]));
	}
	document.getElementById("content").innerHTML = sum;
}

function validate(id){
	var box = document.getElementById(id);
	box.selectionStart = box.selectionEnd = 0;
	if(parseInt(box.value) === ans[id])
		box.style.background = "#7BFF6F";
	else
		box.style.background = "#FF5050";
}

function isNum(e){
	var key = e.which ? e.which : e.keyCode;
	if(key>31 && (key<48 || key>57))
		return false;
}
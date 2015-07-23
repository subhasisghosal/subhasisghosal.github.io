function find(id){
	return document.getElementById(id);
}
var p, r, n, e;
function reflect1(id){
	find("rate").value = find(id).value;
}
function reflect2(id){
	find("mnth").value = find(id).value;
}
function calculateEMI(){
	p = parseInt(find("amt").value);
	n = parseInt(find("mnth").value);
	r = find("rate").value/1200;
	e = (p*r)/(1-Math.pow((1+r),-n));
	find("emi").value = Math.round(e);
}
function calculatePrincipal(){
	e = parseInt(find("emi").value);
	n = parseInt(find("mnth").value);
	r = find("rate").value/1200;
	p = (e*(1-Math.pow((1+r),-n)))/r;
	find("amt").value = Math.round(p);
}
function calculateTime(){
	p = parseInt(find("amt").value);
	e = parseInt(find("emi").value);
	r = find("rate").value/1200;
	n = (Math.log(e)-Math.log(e-p*r))/Math.log(1+r);
	find("mnth").value = Math.round(n);
}

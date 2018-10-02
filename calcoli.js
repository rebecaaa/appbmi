function calcola () {

var peso=document.forms.bmi.peso.valueAsNumber;
var altezza=document.forms.bmi.altezza.valueAsNumber;
var sesso=document.forms.bmi.sesso.value;

if (sesso='m'){
	var totale =peso/(altezza*altezza);
	document.getElementById('calcola').innerHTML="BMI="+totale;
}
	else if(sesso='f'){
	
	var totale=eso/(altezza*altezza)*0.9;
	document.getelementById('calcolo').innerHTML="BMI="+totale;
		}
 	var calcolo =getElementById('calcola');
	risultato ,innerHTML="BMI = "+"res;
}
function cancella () {
document.getelementById('calcola').innerHTML=" ";

}

function calcola(){

var peso=document.forms.bmi.peso.valueAsNumber;
var altezza=document.forms.bmi.altezza.valueAsNumber;
var sesso=document.forms.bmi.sesso.value;

if(sesso='m'){
	var totale =peso/(altezza*altezza);
	document.getElementById('calcola').innerHTML="BMI"+totale;
		if(totale<20.1){
		document,getElementById('spiegazione').innerHTML="Sottopeso"
		}
		else if(totale<25){
		document,getElementById('spiegazione').innerHTML="Peso ottimale"
		}
		else if(totale<29.9){
		document,getElementById('spiegazione').innerHTML="Sovrappeso"
		}
		else if(totale<35){
		document,getElementById('spiegazione').innerHTML="obesità 1° grado"
		}
		else if(totale<40){
		document,getElementById('spiegazione').innerHTML="obesità 2° grado"
		}
		else if{
		document,getElementById('spiegazione').innerHTML="obesità grave"
		}
}
	else if(sesso='f'){
	
	var totale=peso/(altezza*altezza)*0.9;
	document.getelementById('calcolo').innerHTML="BMI ="+totale;
		if(totale<18.7){
		document,getElementById('spiegazione').innerHTML="Sottopeso"
		}
		else if(totale<23.8){
		document,getElementById('spiegazione').innerHTML="Peso ottimale "
		}
		else if(totale<28.6){
		document,getElementById('spiegazione').innerHTML="Sovrappeso"
		}
		else if(totale<35){
		document,getElementById('spiegazione').innerHTML="obesità 1° grado"
		}
		else if(totale<40){
		document,getElementById('spiegazione').innerHTML="obesità 2° grado"
		}
		else if{
		document,getElementById('spiegazione').innerHTML="obesità grave"
		}
	}
function annulla () {
document.getelementById('calcola').innerHTML=" ";
document.getelementById('spiegazione').innerHTML=" ";

}

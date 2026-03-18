//var schaden = null ;
//var angriff = null ;
//var gegnerdef = null ;  
//var LP = 20 ;
var klassen = new Angriffskarte(Zerberus Minotaurus)

var LP = 20 ;
var schaden = null ;
// Schaden tracken
function lpabzug() {
	
	if(true) {	document.createElementById > Zerberus.HP ;
			schaden = Minotaurus.Atk - Zerberus.HP;
			neueLP = LP - schaden			
	}
	console.log(neueLP)
	return(neueLP) ;	
}

lpabzug()

/*function schadenLP(a) {
	if(true) {LP > ueberschuss 
				a = Math.abs(LP - ueberschuss) ;// Schaden abziehen
	}
	console.log(a)
}
*/

//schadenLP()

// Geschrieben von André Boden 
	var Orte = ['Deck', 'Friedhof', 'AngriffPlayer01', 'AngriffPlayer02', 'FeldPlayer01', 'FeldPlayer02', 'Handkarten'] ;
	
																				   
function ablegen() {
	const spielen = document.querySelectorAll('.aktion');
	aktion.forEach(aktion => {
		spielen.addEventListener('click', function(e) {
			hinlegen()
	hinlegen()
		}) ;
	}) ;
}


function hinlegen(Ort, quelle) {
	let karte = document.createElement('img') ;
		karte.src= quelle ;
        karte.className = 'ruecken' ;
        Ort.appendChild(karte) ;
		karte.addEventListener('click', e => {aktivekarte = karte }) ;	
}
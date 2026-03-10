'use strict' ;
// made by Tim Vogel
//JS dokument fuer klassenstruktur des PIP projekts TCG
var Mana = null;
var Attack = null;
var Hitpoints = null;
var AktionNr = null;
//var PassivNr = null;
var SpezialNr = null;

class Karten {
	constructor (Manakosten, Hitpoints) {
		this.Mana = Manakosten;
		this.HP = Hitpoints;
	}
}

class Angriffskarte extends Karten {
	constructor (Manakosten, Attack, Hitpoints) {
		super (Manakosten, Hitpoints);
		this.Atk = Attack;
	}
}

class Aktionskarte extends Karten {
	constructor (Manakosten, Hitpoints, Aktionseffekt) {
		super (Manakosten, Hitpoints);
		this.Aktionseffekt = AktionNr;
	}
}

/*class Unterstuetzerkarte extends Karten {
	constructor (Manakosten, HP, Feldeffekt) {
		this.Feldeffekt = PassivNr;
	}
}*/

class Goetterkarte extends Karten {
	constructor (Manakosten, HP, Atk, Sondereffekt) {
		super (Manakosten, HP);
		this.Atk = Attack;
		this.Sondereffekt = SpezialNr;
	}
}

var Zerberus = new Angriffskarte(4, 10, 5 );

var Minotaurus = new Angriffskarte(2, 7, 3 );

var Zeus = new Goetterkarte ();

var Hades = new Goetterkarte ();

//var AepfelDerHesperiden = new Unterstuetzerkarte ();

var OrakelVonDelphi = new Aktionskarte ();

//geschrieben von André Boden 

var LP = 20 ;
var schaden = null ;
// Schaden tracken
function angriff() { 
	console.log('angriff') ;
	if(true) {	
		var karte = document.createElement('img') ;
		var karte = document.createElement('img') ;
		karte.src='Odin_fertig_update.png' ;
		karte.className = 'dummy' ;
		document.getElementById('Gegnerkarten').appendChild(karte) ;
		 console.log('karte') ;
		document.getElementById('Feldkarten').appendChild(karte) ;
		 console.log('karte') ;
			schaden = ;			
	}	
}
window.addEventListener('load', angriff) ;

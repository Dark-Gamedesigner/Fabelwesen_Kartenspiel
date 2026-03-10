// made by Tim Vogel
//JS dokument fuer klassenstruktur des PIP projekts TCG
var Mana = null;
var Attack = null;
var Hitpoints = null;
var AktionNr = null;
//var PassivNr = null;
var SpezialNr = null;

class Karten {
	constructor (Manakosten, HP) {
		this.Manakosten = Mana;
		this.HP = Hitpoints;
	}
}

class Angriffskarte extends Karten {
	constructor (Manakosten, HP, Atk) {
		super (Manakosten, HP);
		this.Atk = Attack;
	}
}

class Aktionskarte extends Karten {
	constructor (Manakosten, HP, Aktionseffekt) {
		super (Manakosten, HP);
		this.Aktionseffekt = AktionNr;
	}
}

/*class Unterstützerkarte extends Karten {
	constructor (Manakosten, HP, Feldeffekt) {
		this.Feldeffekt = PassivNr;
	}
}*/

class Götterkarte extends Karten {
	constructor (Manakosten, HP, Atk, Sondereffekt) {
		super (Manakosten, HP);
		this.Atk = Attack;
		this.Sondereffekt = SpezialNr;
	}
}

var Zerberus = new Angriffskarte (4, 5, 10);

var Minotaurus = new Angriffskarte (2, 3, 7);

var Zeus = new Götterkarte (x,y,z,q);

var Hades = new Götterkarte (q,z,y,x);

var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

var OrakelVonDelphi = new Aktionskarte (f,m,l);

//André Boden geschrieben

var LP = 20 ;
var schaden = null ;

function lpabzug() {
	
	let neueLP = null ;
	if(true) {	Minotaurus(Atk) > Zerberus(HP) ;
			schaden =Math.abs( Minotaurus(Atk) - Zerberus(HP) );
			neueLP = Math.abs(LP - schaden)
			
			// Schaden tracken
	}
	console.log(neueLP)
	return(neueLP) ;	
}

lpabzug()
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
	super (Manakosten, HP);
	constructor (Atk) {
		this.Atk = Attack;
	}
}

class Aktionskarte extends Karten {
	super (Manakosten, HP);
	constructor (Aktionseffekt) {
		this.Aktionseffekt = AktionNr;
	}
}

/*class Unterstützerkarte extends Karten {
	constructor (Manakosten, HP, Feldeffekt) {
		this.Feldeffekt = PassivNr;
	}
}*/

class Götterkarte extends Karten {
	super (Manakosten, HP);
	constructor (Atk, Sondereffekt) {
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

// made by Tim Vogel
//debugging via Firefox Browser Konsole + Google
//JS dokument für klassenstruktur des PIP projekts Sammelkartenspiel "Myth Wars"
'use strict';

class Karte {
	Manakosten = null;
	Hitpoints = null;
	constructor (Mana, HP) {
		this.Manakosten = Mana;
		this.Hitpoints = HP;
	}
}

class Angriffskarte extends Karte {
	Attack = null;
	constructor (Mana, HP, Atk) {
		super (Mana, HP);
		this.Attack = Atk;
	}
}

/*class Aktionskarte extends Karten {
	Aktionseffekt = null;
	constructor (Manakosten, HP, AktionNr) {
		super (Manakosten, HP);
		this.Aktionseffekt = AktionNr;
	}
}*/

/*class Unterstützerkarte extends Karten {
	Feldeffekt = null;
	constructor (Manakosten, HP, PassivNr) {
		super (Manakosten, HP);
		this.Feldeffekt = PassivNr;
	}
}*/

class Götterkarte extends Angriffskarte {
	Sondereffekt = null;
	constructor (Mana, HP, Atk, SpezialNr) {
		super (Mana, HP, Atk);
		this.Sondereffekt = SpezialNr;
	}
}

// ---------- Angriffskarte ----------
var Zerberus = new Angriffskarte (4, 5, 10);

var Minotaure = new Angriffskarte (2, 3, 7);
// erweitert by Kruse >
var JackOLantern = new Angriffskarte (0, 0, 0);

var Pixi = new Angriffskarte (0, 0, 0);

var Hochpixi = new Angriffskarte (0, 0, 0);

var Kelpie = new Angriffskarte (0, 0, 0);

var Werwolf = new Angriffskarte (0, 0, 0);

var Zyklop = new Angriffskarte (0, 0, 0);

var Valkyre = new Angriffskarte (0, 0, 0);

var Pegasus = new Angriffskarte (0, 0, 0);

var Hydra = new Angriffskarte (0, 0, 0);

var Zentaure = new Angriffskarte (0, 0, 0);

var Sphinx = new Angriffskarte (0, 0, 0);

var Chimäre = new Angriffskarte (0, 0, 0);

var Typhon = new Angriffskarte (0, 0, 0);

var Greif = new Angriffskarte (0, 0, 0);

var Einhorn = new Angriffskarte (0, 0, 0);

var Harpyie = new Angriffskarte (0, 0, 0);

var Ratatoskr = new Angriffskarte (0, 0, 0);
// erweitert by Kruse <

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (0,0,0,0);

var Hades = new Götterkarte (0,0,0,0);
// erweitert by Kruse >
var Odin = new Götterkarte (0,0,0,0);

var Frigg = new Götterkarte (0,0,0,0);

var Hel = new Götterkarte (0,0,0,0);

var Freya = new Götterkarte (0,0,0,0);

var Loki = new Götterkarte (0,0,0,0);
// erweitert by Kruse <

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
//var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse >
//var Gungir = new Aktionskarte (f,m,l);

//var Gleipnir = new Aktionskarte (f,m,l);

//var DreizackDesPoseidon = new Aktionskarte (f,m,l);

//var Medusa = new Aktionskarte (f,m,l);

//var Aigis = new Aktionskarte (f,m,l);

//var Mjölnir = new Aktionskarte (f,m,l);
// erweitert by Kruse <

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
// ---------- Angriffskarte ----------
var Zerberus = new Angriffskarte (4, 5, 10);

var Minotaurus = new Angriffskarte (2, 3, 7);
// erweitert by Kruse >
var JackOLantern = new Angriffskarte (0, 0, 00);

var Pixi = new Angriffskarte (0, 0, 00);

var Hochpixi = new Angriffskarte (0, 0, 00);

var Kelpie = new Angriffskarte (0, 0, 00);

var Werewolf = new Angriffskarte (0, 0, 00);

var Zyklop = new Angriffskarte (0, 0, 00);

var Valkyre = new Angriffskarte (0, 0, 00);

var Pegasus = new Angriffskarte (0, 0, 00);

var Hydra = new Angriffskarte (0, 0, 00);

var Zentaure = new Angriffskarte (0, 0, 00);

var Minotaure = new Angriffskarte (0, 0, 00);

var Sphinx = new Angriffskarte (0, 0, 00);

var Chimäre = new Angriffskarte (0, 0, 00);

var Typhon = new Angriffskarte (0, 0, 00);

var Greif = new Angriffskarte (0, 0, 00);

var Unicorn = new Angriffskarte (0, 0, 00);

var Harpies = new Angriffskarte (0, 0, 00);

var Ceberus = new Angriffskarte (0, 0, 00);

var Ratatoskr = new Angriffskarte (0, 0, 00);
// erweitert by Kruse <

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (x,y,z,q);

var Hades = new Götterkarte (q,z,y,x);
// erweitert by Kruse >
var Odin = new Götterkarte (q,z,y,x);

var Thor = new Götterkarte (q,z,y,x);

var Frigg = new Götterkarte (q,z,y,x);

var Hel = new Götterkarte (q,z,y,x);

var Freya = new Götterkarte (q,z,y,x);

var Skadi = new Götterkarte (q,z,y,x);

var Loki = new Götterkarte (q,z,y,x);
// erweitert by Kruse <

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse >
var Gungir = new Aktionskarte (f,m,l);

var Gleipnir = new Aktionskarte (f,m,l);

var DreizackDesPoseidon = new Aktionskarte (f,m,l);

var Medusa = new Aktionskarte (f,m,l);

var Aigis = new Aktionskarte (f,m,l);

var Mjölnir = new Aktionskarte (f,m,l);
// erweitert by Kruse <

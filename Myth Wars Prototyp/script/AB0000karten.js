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

class Aktionskarte extends Karte {
	Aktionseffekt = null;
	constructor (Manakosten, HP, AktionNr) {
		super (Manakosten, HP);
		this.Aktionseffekt = AktionNr;
	}
}

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
var Leer = new Angriffskarte (0, 0, 0);//liegt am Anfang in den Feldern als Platzhalter

var Zerberus = new Angriffskarte (6,5,5);

var Minotaure = new Angriffskarte (3,3,5);
// erweitert by Kruse >
var JackOLantern = new Angriffskarte (2,3,1);

var Pixi = new Angriffskarte (1,2,2);

var Hochpixi = new Angriffskarte (1,3,1);

var Kelpie = new Angriffskarte (2,2,3);

var Werwolf = new Angriffskarte (3,4,2);

var Zyklop = new Angriffskarte (4,3,3);

var Valkyre = new Angriffskarte (3,2,4);

var Pegasus = new Angriffskarte (1,2,1);

var Hydra = new Angriffskarte (5,5,3);

var Zentaure = new Angriffskarte (3,3,3);

var Sphinx = new Angriffskarte (4,4,4);

var Chimäre = new Angriffskarte (2,3,2);

var Typhon = new Angriffskarte (6,6,6);

var Greif = new Angriffskarte (2,2,3);

var Einhorn = new Angriffskarte (1,2,1);

var Harpyie = new Angriffskarte (2,1,3);

var Ratatoskr = new Angriffskarte (1,2,1);

var Wolpertinger = new Angriffskarte (1,1,1);
// erweitert by Kruse <

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (8,9,9,0);
// erweitert by Justin G.
var Thor = new Götterkarte (7,7,10,0);

var Skadi = new Angriffskarte (6,7,7,0);

var Poseidon = new Angriffskarte (7,9,8,0);

var Hera = new Angriffskarte (6,8,6,0);

var Aphrodite = new Angriffskarte (6,7,7,0);

var Artemis = new Angriffskarte (7,7,9,0);

var Hermes = new Angriffskarte (6,8,6,0);
// erweitert by Justin G.
var Hades = new Götterkarte (8,12,4,0);
// erweitert by Kruse >
var Odin = new Götterkarte (8,10,8,0);

var Frigg = new Götterkarte (6,6,6,0);

var Hela = new Götterkarte (7,0,0,0);

var Freya = new Götterkarte (7,8,8,0);

var Loki = new Götterkarte (6,6,8,0);//muss eventuell Mana wert anpassen wenn Effekte hinzugefügt werden
// erweitert by Kruse <

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
//var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse >
var Gungir = new Aktionskarte (4,0,0);

var Gleipnir = new Aktionskarte (2,0,0);

var Dreizack = new Aktionskarte (3,0,0);

var Medusa = new Aktionskarte (3,0,0);

var Aigis = new Aktionskarte (3,0,0);

var Mjölnir = new Aktionskarte (4,0,0);
// erweitert by Kruse <




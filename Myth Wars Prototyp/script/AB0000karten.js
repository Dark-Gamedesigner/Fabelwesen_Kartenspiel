// made by Tim Vogel
//debugging via Firefox Browser Konsole + Google
//JS dokument für klassenstruktur des PIP projekts Sammelkartenspiel "Myth Wars"
'use strict';

class Karte {
	Manakosten = null;
	Hitpoints = null;
	SpriteKarte = null;
	constructor (Mana, HP, Bild) {
		this.Manakosten = Mana;
		this.Hitpoints = HP;
		this.SpriteKarte = Bild;
	}
}

class Angriffskarte extends Karte {
	Attack = null;
	constructor (Mana, HP, Bild, Atk) {
		super (Mana, HP, Bild);
		this.Attack = Atk;
	}
}

class Aktionskarte extends Karte {
	Aktionseffekt = null;
	constructor (Manakosten, HP, Bild, AktionNr) {
		super (Manakosten, HP, Bild);
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
	constructor (Mana, HP, Bild, Atk, SpezialNr) {
		super (Mana, HP, Bild, Atk);
		this.Sondereffekt = SpezialNr;
	}
}

// ---------- Angriffskarte ----------
var Leer = new Angriffskarte (0,0,"../pictures/Karten_Ruecken.png",0);//liegt am Anfang in den Feldern als Platzhalter

var Zerberus = new Angriffskarte (6,5,"../pictures/Aphrodite.png",5);

var Minotaure = new Angriffskarte (3,3,"../pictures/Aphrodite.png",5);
// erweitert by Kruse >
var JackOLantern = new Angriffskarte (2,3,"../pictures/Aphrodite.png",1);

var Pixi = new Angriffskarte (1,2,"../pictures/Aphrodite.png",2);

var Hochpixi = new Angriffskarte (1,3,"../pictures/Aphrodite.png",1);

var Kelpie = new Angriffskarte (2,2,"../pictures/Aphrodite.png",3);

var Werwolf = new Angriffskarte (3,4,"../pictures/Aphrodite.png",2);

var Zyklop = new Angriffskarte (4,3,"../pictures/Aphrodite.png",3);

var Valkyre = new Angriffskarte (3,2,"../pictures/Aphrodite.png",4);

var Pegasus = new Angriffskarte (1,2,"../pictures/Aphrodite.png",1);

var Hydra = new Angriffskarte (5,5,"../pictures/Aphrodite.png",3);

var Zentaure = new Angriffskarte (3,3,"../pictures/Aphrodite.png",3);

var Sphinx = new Angriffskarte (4,4,"../pictures/Aphrodite.png",4);

var Chimäre = new Angriffskarte (2,3,"../pictures/Aphrodite.png",2);

var Typhon = new Angriffskarte (6,6,"../pictures/Aphrodite.png",6);

var Greif = new Angriffskarte (2,2,"../pictures/Aphrodite.png",3);

var Einhorn = new Angriffskarte (1,2,"../pictures/Aphrodite.png",1);

var Harpyie = new Angriffskarte (2,1,"../pictures/Aphrodite.png",3);

var Ratatoskr = new Angriffskarte (1,2,"../pictures/Aphrodite.png",1);

var Medusa = new Angriffskarte (3,0,"../pictures/Aphrodite.png",0);
// erweitert by Kruse <

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (8,9,"../pictures/Aphrodite.png",9,0);
// erweitert by Justin G.
var Thor = new Götterkarte (7,7,"../pictures/Aphrodite.png",10,0);

var Skadi = new Angriffskarte (6,7,"../pictures/Aphrodite.png",7,0);

var Poseidon = new Angriffskarte (7,9,"../pictures/Aphrodite.png",8,0);

var Hera = new Angriffskarte (6,8,"../pictures/Aphrodite.png",6,0);

var Aphrodite = new Angriffskarte (6,7,"../pictures/Aphrodite.png",7,0);

var Artemis = new Angriffskarte (7,7,"../pictures/Aphrodite.png",9,0);

var Hermes = new Angriffskarte (6,8,"../pictures/Aphrodite.png",6,0);
// erweitert by Justin G.
var Hades = new Götterkarte (8,12,"../pictures/Aphrodite.png",4,0);
// erweitert by Kruse >
var Odin = new Götterkarte (8,10,"../pictures/Aphrodite.png",8,0);

var Frigg = new Götterkarte (6,6,"../pictures/Aphrodite.png",6,0);

var Hel = new Götterkarte (7,0,"../pictures/Aphrodite.png",0,0);

var Freya = new Götterkarte (7,8,"../pictures/Aphrodite.png",8,0);

var Loki = new Götterkarte (6,6,"../pictures/Aphrodite.png",8,0);//muss eventuell Mana wert anpassen wenn Effekte hinzugefügt werden
// erweitert by Kruse <

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
//var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse >
var Gungir = new Aktionskarte (4,0,"../pictures/Aphrodite.png",0);

var Gleipnir = new Aktionskarte (2,0,"../pictures/Aphrodite.png",0);

var Dreizack = new Aktionskarte (3,0,"../pictures/Aphrodite.png",0);

var Aigis = new Aktionskarte (3,0,"../pictures/Aigis.png",0);

var Mjölnir = new Aktionskarte (4,0,"../pictures/Mjoelnir.png",0);
// erweitert by Kruse <




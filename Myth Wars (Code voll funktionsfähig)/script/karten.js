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

var Zerberus = new Angriffskarte (6,5,"../pictures/Zerberus.png",5);

var Minotaure = new Angriffskarte (3,3,"../pictures/Minotaurus.png",5);
// erweitert by Kruse >
var JackOLantern = new Angriffskarte (2,3,"../pictures/Jack_O_Lantern.png",1);

var Pixi = new Angriffskarte (1,2,"../pictures/Pixie.png",2);

var Kelpie = new Angriffskarte (2,2,"../pictures/Kelpie.png",3);

var Wolpertinger1 = new Angriffskarte (1,2,"../pictures/Wolpertinger.png",1);

var Wolpertinger2 = new Angriffskarte (1,2,"../pictures/Wolpertinger.png",1);

var Werwolf = new Angriffskarte (3,4,"../pictures/Werwolf.png",2);

var Zyklop = new Angriffskarte (4,3,"../pictures/Zyklop.png",3);

var Valkyre = new Angriffskarte (3,2,"../pictures/Valkyrie.png",4);

var Pegasus = new Angriffskarte (1,2,"../pictures/Pegasus.png",1);

var Hydra = new Angriffskarte (5,5,"../pictures/Hydra.png",3);

var Sphinx = new Angriffskarte (4,4,"../pictures/Phynx.png",4);

var Chimaere = new Angriffskarte (2,3,"../pictures/Chimäre.png",2);

var Greif = new Angriffskarte (2,2,"../pictures/Greif.png",3);

var Einhorn = new Angriffskarte (1,2,"../pictures/Einhorn.png",1);

var Harpyie = new Angriffskarte (2,1,"../pictures/Harpye.png",3);

var Ratatoskr = new Angriffskarte (1,2,"../pictures/Ratatoskr.png",1);

var Medusa = new Angriffskarte (3,0,"../pictures/Medusa.png",0);
// erweitert by Kruse <

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (8,9,"../pictures/Zeus.png",9,0);
// erweitert by Justin G.
var Thor = new Götterkarte (7,7,"../pictures/Thor.png",10,0);

var Skadi = new Angriffskarte (6,7,"../pictures/Skadi.png",7,0);

var Poseidon = new Angriffskarte (7,9,"../pictures/Poseidon.png",8,0);

var Hera = new Angriffskarte (6,8,"../pictures/Hera.png",6,0);

var Aphrodite = new Angriffskarte (6,7,"../pictures/Aphrodite.png",7,0);

var Artemis = new Angriffskarte (7,7,"../pictures/Artemis.png",9,0);

var Hermes = new Angriffskarte (6,8,"../pictures/Hermes.png",6,0);
// erweitert by Justin G.
var Hades = new Götterkarte (8,12,"../pictures/Hades.png",4,0);
// erweitert by Kruse >
var Odin = new Götterkarte (8,10,"../pictures/Odin.png",8,0);

var Frigg = new Götterkarte (6,6,"../pictures/Frigg.png",6,0);

var Hel = new Götterkarte (7,0,"../pictures/Hela.png",0,0);

var Freya = new Götterkarte (7,8,"../pictures/Freya.png",8,0);

var Loki = new Götterkarte (6,6,"../pictures/Loki.png",8,0);//muss eventuell Mana wert anpassen wenn Effekte hinzugefügt werden
// erweitert by Kruse <

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
//var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse >
var Gleipnir = new Aktionskarte (2,0,"../pictures/Gleipnir.png",0);

var Dreizack = new Aktionskarte (3,0,"../pictures/Speer_des_Poseidon.png",0);

var Aigis = new Aktionskarte (3,0,"../pictures/Aigis.png",0);

var Mjölnir = new Aktionskarte (4,0,"../pictures/Mjoelnir.png",0);
// erweitert by Kruse <


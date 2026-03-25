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
var Leer = new Angriffskarte (0,0,"./medien/Karten_Ruecken.png",0);//liegt am Anfang in den Feldern als Platzhalter

var Zerberus1 = new Angriffskarte (6,5,"./medien/Zerberus.png",5);

var Zerberus2 = new Angriffskarte (6,5,"./medien/Zerberus.png",5);

var Minotaure1 = new Angriffskarte (3,3,"./medien/Minotaurus.png",5);

var Minotaure2 = new Angriffskarte (3,3,"./medien/Minotaurus.png",5);
// erweitert by Kruse---------------------------------------------------------------------------------------------------------------------------------------
var JackOLantern1 = new Angriffskarte (2,3,"./medien/Jack_O_Lantern.png",1);

var JackOLantern2 = new Angriffskarte (2,3,"./medien/Jack_O_Lantern.png",1);

var Pixi1 = new Angriffskarte (1,2,"./medien/Pixie.png",2);

var Pixi2 = new Angriffskarte (1,2,"./medien/Pixie.png",2);

var Kelpie1 = new Angriffskarte (2,2,"./medien/Kelpie.png",3);

var Kelpie2 = new Angriffskarte (2,2,"./medien/Kelpie.png",3);

var Wolpertinger1 = new Angriffskarte (1,2,"./medien/Wolpertinger.png",1);

var Wolpertinger2 = new Angriffskarte (1,2,"./medien/Wolpertinger.png",1);

var Werwolf1 = new Angriffskarte (3,4,"./medien/Werwolf.png",2);

var Werwolf2 = new Angriffskarte (3,4,"./medien/Werwolf.png",2);

var Zyklop1 = new Angriffskarte (4,3,"./medien/Zyklop.png",3);

var Zyklop2 = new Angriffskarte (4,3,"./medien/Zyklop.png",3);

var Valkyre1 = new Angriffskarte (3,2,"./medien/Valkyrie.png",4);

var Valkyre2 = new Angriffskarte (3,2,"./medien/Valkyrie.png",4);

var Pegasus1 = new Angriffskarte (1,2,"./medien/Pegasus.png",1);

var Pegasus2 = new Angriffskarte (1,2,"./medien/Pegasus.png",1);

var Hydra1 = new Angriffskarte (5,5,"./medien/Hydra.png",3);

var Hydra2 = new Angriffskarte (5,5,"./medien/Hydra.png",3);

var Sphinx1 = new Angriffskarte (4,4,"./medien/Phynx.png",4);

var Sphinx2 = new Angriffskarte (4,4,"./medien/Phynx.png",4);

var Chimaere1 = new Angriffskarte (2,3,"./medien/Chimäre.png",2);

var Chimaere2 = new Angriffskarte (2,3,"./medien/Chimäre.png",2);

var Greif1 = new Angriffskarte (2,2,"./medien/Greif.png",3);

var Greif2 = new Angriffskarte (2,2,"./medien/Greif.png",3);

var Einhorn1 = new Angriffskarte (1,2,"./medien/Einhorn.png",1);

var Einhorn2 = new Angriffskarte (1,2,"./medien/Einhorn.png",1);

var Harpyie1 = new Angriffskarte (2,1,"./medien/Harpye.png",3);

var Harpyie2 = new Angriffskarte (2,1,"./medien/Harpye.png",3);

var Ratatoskr1 = new Angriffskarte (1,2,"./medien/Ratatoskr.png",1);

var Ratatoskr2 = new Angriffskarte (1,2,"./medien/Ratatoskr.png",1);

var Medusa1 = new Angriffskarte (3,0,"./medien/Medusa.png",0);

var Medusa2 = new Angriffskarte (3,0,"./medien/Medusa.png",0);

// erweitert by Kruse (erweiterung von Zeile 55)---------------------------------------------------------------------------------------------------------------------------------------

// ---------- Götterkarte ----------
var Zeus = new Götterkarte (8,9,"./medien/Zeus.png",9,0);
// erweitert by Justin Görtz--------------------------------------------------------------------------------------------------------------------------------
var Thor = new Götterkarte (7,7,"./medien/Thor.png",10,0);

var Skadi = new Angriffskarte (6,7,"./medien/Skadi.png",7,0);

var Poseidon = new Angriffskarte (7,9,"./medien/Poseidon.png",8,0);

var Hera = new Angriffskarte (6,8,"./medien/Hera.png",6,0);

var Aphrodite = new Angriffskarte (6,7,"./medien/Aphrodite.png",7,0);

var Artemis = new Angriffskarte (7,7,"./medien/Artemis.png",9,0);

var Hermes = new Angriffskarte (6,8,"./medien/Hermes.png",6,0);

var Hades = new Götterkarte (8,12,"./medien/Hades.png",4,0);
// erweitert by Kruse---------------------------------------------------------------------------------------------------------------------------------------
var Odin = new Götterkarte (8,10,"./medien/Odin.png",8,0);

var Frigg = new Götterkarte (6,6,"./medien/Frigg.png",6,0);

var Hela = new Götterkarte (7,0,"./medien/Hela.png",0,0);

var Freya = new Götterkarte (7,8,"./medien/Freya.png",8,0);

var Loki = new Götterkarte (6,6,"./medien/Loki.png",8,0);//muss eventuell Mana wert anpassen wenn Effekte hinzugefügt werden
// erweitert by Kruse-----------------------------------------------------------------------------------------------------------------------------------------

// ---------- Unterstützerkarte ----------
// var ÄpfelDerHesperiden = new Unterstützerkarte (a,b,c);

// ---------- Aktionskarte ----------
//var OrakelVonDelphi = new Aktionskarte (f,m,l);
// erweitert by Kruse (erweiterung von Zeile 119)--------------------------------------------------------------------------------------------------------------
var Gleipnir1 = new Aktionskarte (2,0,"./medien/Gleipnir.png",0);

var Gleipnir2 = new Aktionskarte (2,0,"./medien/Gleipnir.png",0);

var Dreizack1 = new Aktionskarte (3,0,"./medien/Speer_des_Poseidon.png",0);

var Dreizack2 = new Aktionskarte (3,0,"./medien/Speer_des_Poseidon.png",0);

var Aigis1 = new Aktionskarte (3,0,"./medien/Aigis.png",0);

var Aigis2 = new Aktionskarte (3,0,"./medien/Aigis.png",0);

var Mjölnir1 = new Aktionskarte (4,0,"./medien/Mjoelnir.png",0);

var Mjölnir2 = new Aktionskarte (4,0,"./medien/Mjoelnir.png",0);

// erweitert by Kruse <


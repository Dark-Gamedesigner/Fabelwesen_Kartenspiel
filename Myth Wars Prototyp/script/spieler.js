//made by Andre Boden

'use strict';

class Spieler {
	manaspeicher = null ;
	siegpunkte = null ;
	handkarten = null ;
	feldkarten = null ;
	
	constructor (speicher, punkte, hand, feld, deck) {
		this.manaspeicher = speicher;
		this.siegpunkte = punkte;
		this.handkarten = hand;
		this.feldkarten = feld;
	}
}

var spieler01 = new Spieler(0, 0, 0, 0) ;
var spieler02 = new Spieler(0, 0, 0, 0) ;

//------------------------------
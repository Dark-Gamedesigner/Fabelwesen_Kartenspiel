//made by Tim Vogel

'use strict';

class Spieler {
	manaspeicher = null ;
	siegpunkte = null ;
	handkarten = null ;
	bankkarten = null ;
	deckkarten = null ;
	angriffskarte = null ;
	istAmZug = false;
	
	constructor (speicher, punkte, hand, bank, deck, angriff, amZug) {
		this.manaspeicher = speicher;
		this.siegpunkte = punkte;
		this.handkarten = hand;
		this.bankkarten = bank;
		this.deckkarten = deck;
		this.angriffskarte = angriff;
		this.istAmZug = amZug;
	}
}

let angriff1 = [];
let angriff2 = [];

var spieler01 = new Spieler(0, 0, hand1, bank1, deck1, angriff1, false);
var spieler02 = new Spieler(0, 0, hand2, bank2, deck2, angriff2, false);

//------------------------------
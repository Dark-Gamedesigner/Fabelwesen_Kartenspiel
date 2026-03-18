//made by Andre Boden

'use strict';

class Spieler {
	manaspeicher = null ;
	siegpunkte = null ;
	handkarten = null ;
	bankkarten = null ;
	deckkarten = null;
	istAmZug = false;
	
	constructor (speicher, punkte, hand, bank, deck, amZug) {
		this.manaspeicher = speicher;
		this.siegpunkte = punkte;
		this.handkarten = hand;
		this.bankkarten = bank;
		this.deckkarten = deck;
		this.istAmZug = amZug;
	}
}

var spieler01 = new Spieler(0, 0, hand1, 'bank1', deck1, false) ;
var spieler02 = new Spieler(0, 0, hand2, 'bank2', deck2, false) ;

//------------------------------
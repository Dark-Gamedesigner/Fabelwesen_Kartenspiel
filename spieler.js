

class Spieler {
	manaspeicher = null ;
	punkte = null ;
	handkarten = null ;
	feldkarten = null ;
	
	constructor (speicher, siegpunkte, hand, feld) {
		this.manaspeicher = speicher;
		this.punkte = siegpunkte;
		this.handkarten = hand;
		this.feldkarten = feld;
	}
}

var spieler01 = new Spieler(0, 0, 0, 0) ;
var spieler02 = new Spieler(0, 0, 0, 0) ;
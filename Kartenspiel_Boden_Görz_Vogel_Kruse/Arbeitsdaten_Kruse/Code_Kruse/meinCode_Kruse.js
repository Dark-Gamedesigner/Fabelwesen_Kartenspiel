
// erweitert by Kruse in Klassen>
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

// erweitert by Kruse in Klassen >
var Odin = new Götterkarte (q,z,y,x);

var Thor = new Götterkarte (q,z,y,x);

var Frigg = new Götterkarte (q,z,y,x);

var Hel = new Götterkarte (q,z,y,x);

var Freya = new Götterkarte (q,z,y,x);

var Skadi = new Götterkarte (q,z,y,x);

var Loki = new Götterkarte (q,z,y,x);
// erweitert by Kruse <

// erweitert by Kruse in Klassen >
var Gungir = new Aktionskarte (f,m,l);

var Gleipnir = new Aktionskarte (f,m,l);

var DreizackDesPoseidon = new Aktionskarte (f,m,l);

var Medusa = new Aktionskarte (f,m,l);

var Aigis = new Aktionskarte (f,m,l);

var Mjölnir = new Aktionskarte (f,m,l);
// erweitert by Kruse <




// Made by Justin Görtz

window.onload = function() {
		baueDeck1() ;
		baueDeck2() ;
		mischeDeck1() ;
		mischeDeck2() ;
		//austeilen() ;
		/* ---- von Kruse in deckbauen > ----*/
		handStart1()
		handStart2()
		const feld = document.getElementById( "Handkarten" ) ;
		 seeHand(hand1, feld) ;	// ACHTUNG! Das ist vorerst nur da damit man was sehen kann!!!
		/* ---- < von Kruse ----*/
}
/* ---- von Kruse in deckbauen > ----*/
function draw( deck, hand ) {
	const karte = deck.pop() ;	// oberste Karte ziehen
	hand.push( karte ) ;		// Karte in Hand schieben
	return karte ;
}

function handStart1() {
	for( let i = 0; i < 5; i++) {	// beim Start 5 Karten ziehen
		draw( deck1, hand1 ) ;		// vom Deck1 auf die Hand1
	}
}

function handStart2() {
	for( let i = 0; i < 5; i++) {	// beim Start 5 Karten ziehen
		draw( deck2, hand2 ) ;		//vom Deck2 auf die Hand2
	}
}
function seeHand( hand, feld ) {
	feld.innerHTML = "" ;									// Hand leeren
	for ( const karte of hand ) {							// Jede Karte durchgehen
		const bild = document.createElement( "img" ) ;		// Bild erstellen
		bild.src = "./media/karten/" + karte + ".png" ;		// Bildpfad erstellen
		feld.appendChild( bild ) ;							// Fügt das erstellte ins Feld
	}						
}
/* ---- < von Kruse ----*/
//---------------------------------------------------------------------------------
// Zeile 3 bis 7 made by Justin Görtz
'use strict'
let deck1 ;
let deck2 ;
let hand1 = [] ;
let hand2 = [] ;
//made by Tim Vogel >>>
let bank1 = [] ;
let bank2 = [] ;
let Empty = [Leer];//nicht genutzt
var feld = null ;//made by Kruse, eingefügt/geändert von Vogel
var passiv1 = null ;
var passiv2 = null ;
var aktiv1 = null ;
var aktiv2 = null ;
//<<< made by Tim Vogel
// Zeile 19 bus 23 made by Justin Görtz---------------------------------------------------------------------------------------------------------------------
function kartendecks() {
		baueDeck1() ;
		baueDeck2() ;
		mischeDeck1() ;
		mischeDeck2() ;
		/* ---- von Kruse, abgeändert von Vogel > ----*/
		handStart1();
		handStart2();
		feld = document.getElementById( "Handkarten" ) ;
		seeHand(hand1, feld);// ACHTUNG! Das ist vorerst nur da damit man was sehen kann!!!
// made by Tim Vogel >>>
		const stapel = document.getElementById("Deck");
		passiv1 = document.getElementById("FeldPlayer01");
		passiv2 = document.getElementById("FeldPlayer02");
		aktiv1 = document.getElementById("AngriffPlayer01");
		aktiv2 = document.getElementById("AngriffPlayer02");
		hinlegen(stapel, Leer.SpriteKarte) ;
//<<< made by Tim Vogel
		/* ---- < von Kruse ----*/
}

// made by Justin Görtz-------------------------------------------------------------------------------------------------------------------------------------------------
// Nordisches Array
function baueDeck1() {//erweiterung by Vogel
	let Playerone = [Odin , Thor , Frigg , Hel , Freya , Skadi , Loki ,
					JackOLantern , Pixi , Wolpertinger1 , Ratatoskr , Kelpie , Werwolf , Zyklop , Valkyre , Medusa , Pegasus , 
					Hydra , Minotaure , Sphinx , Chimaere , Greif , Einhorn , Harpyie , Zerberus ,
					Gleipnir , Dreizack , Aigis , Mjölnir] ;
	deck1 = [] ;
		for(let i = 0; i < Playerone.length; i++) {
			deck1.push(Playerone[i]) ;
		}
}

// Griechisches  Array
function baueDeck2() {//erweiterung by Vogel
	let Playertwo = [Zeus , Poseidon , Hera , Hades , Aphrodite , Artemis , Hermes ,
					JackOLantern , Pixi , Wolpertinger2 , Ratatoskr , Kelpie , Werwolf , Zyklop , Valkyre , Medusa , Pegasus , 
					Hydra , Minotaure , Sphinx , Chimaere , Greif , Einhorn , Harpyie , Zerberus , 
					Gleipnir , Dreizack , Aigis , Mjölnir] ;
	deck2 = [] ;
		for(let i = 0; i < Playertwo.length; i++) {
			deck2.push(Playertwo[i]) ;
		}
		console.log(Playertwo) ;
}

function mischeDeck1() {
	for(let i = 0; i < deck1.length; i++) {
		let j = Math.floor(Math.random() * deck1.length) ;
		let temp = deck1[i] ;
		deck1[i] = deck1[j] ;
		deck1[j] = temp ;
	}
}

function mischeDeck2() {
	for(let i = 0; i < deck2.length; i++) {
		let j = Math.floor(Math.random() * deck2.length) ;
		let temp = deck2[i] ;
		deck2[i] = deck2[j] ;
		deck2[j] = temp ;
	}
}

//---------------------------------------------------------------------------------

/* ---- von Kruse > ----*/
function draw( deck, hand ) {
	if ( deck.length <= 0 ) {
		return null ;
	}
	if ( hand.length >= 8 ) {
		return null ;
	}
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
	feld.innerHTML = "" ;												// Hand leeren
	for ( let i = 0 ; i < hand.length; i++ ) {							// Jede Karte durchgehen
		const karte = hand[ i ] ;
		
		const kartenBox = document.createElement( "div" ) ;				// Erstellt eine Box für jede Karten
		kartenBox.className = "karte" ;
		
		kartenBox.addEventListener( "click", function () {				// Gibt den Boxen eine Klick Funktion
			if (spieler01.amZug === true) {								// Wenn Spieler 1 am zug ist...
				legeKarteBank( hand1, bank1, i ) ;						// ... von Hand auf Bank eine Karte durch Klick
				rendernP1();											// Aktuallisiere die Ansicht
			} else if (spieler02.amZug === true) {						// Wenn Spieler 2 am zug ist...
				legeKarteBank( hand2, bank2, i ) ;						// ... von Hand auf Bank eine Karte durch Klick
				rendernP2();											// Aktuallisiere die Ansicht
			}
		} ) ;
		const bild = document.createElement( "img" ) ;					// Bau eine constante Bild mit dem img
		bild.src = karte.SpriteKarte ;									// Nim die Sprite Karten
		bild.alt = "Karte" ;											// Nen es Karte
		
		kartenBox.appendChild( bild ) ;									// Gib der Kartenbox das Bild
		feld.appendChild( kartenBox ) ;									// Und gib dann die kartenBox als Bild aus
	}						
}

function legeKarteBank(hand, bank, index) {								// Karte legen
	if (hand.length <= 0) {												// Hand leer nix
		return null;
	}
	if (bank.length >= 4) {												// Banl voll nix
		return null;
	}
	if (index < 0 || index >= hand.length) {
		return null;
	}

	let karte = hand.splice(index, 1)[0];								// Ángeklickte Karte wird aus Hand array gezogen
	bank.push(karte);													// Karte wird auf Bank geschoben
	return karte;
}
/* ---- < von Kruse ----*/

//made by Tim Vogel >>>
function seeBank(bank, passiv) {
	passiv.innerHTML = "" ;
	for (const karte of bank) {
		hinlegen(passiv, karte.SpriteKarte);
	}
}

function seeAngriff (angriff, aktiv) {
	aktiv.innerHTML = "" ;
	for (const karte of angriff) {
		hinlegen(aktiv, karte.SpriteKarte);
	}
}
//<<< made by Tim Vogel

//---------------------------------------------------------------------------------------------------------------------------------
// Geschrieben von André Boden und erweiter von Justin Görtz
	var Orte = ['Deck', 'Friedhof', 'AngriffPlayer01', 'AngriffPlayer02', 'FeldPlayer01', 'FeldPlayer02', 'Handkarten'] ;

function hinlegen(Ort, motiv) {
	/*const deckFeld = document.getElementById("Deck");*/
	let karte = document.createElement('img') ;
		karte.src = motiv ;
		Ort.appendChild(karte) ;
}


function ablegen() {
	const Orte = document.querySelectorAll('.aktion'); 
	console.log(Orte);
	Orte.forEach(Ort => {
		Ort.addEventListener('click', function(e) {	
		console.log(e) ;		
			hinlegen(Ort, './pictures/Karten_Ruecken.png', 'aktion')
		}) ;
	}) ;
}

//made by Tim Vogel >>>
//function legeKarteBank (hand, bank) {// nur für Code im Hintergrund
//	if (hand.length <= 0) {
//		return null ;
//	}
//	if (bank.length >= 4) {
//		return null ;
//	}
//	let karte = hand.pop();
//	bank.push( karte );
//	return karte;
//}
// Auskommentiert von Kruse da nur die letzte karte ge"pop"t wurde
function legeKarteAngriff (bank, angriff) {// nur für Code im Hintergrund
	angriff.pop(Leer);
	if (bank.length <= 0) {
		return null ;
	}
	if (angriff.length >= 1) {
		return null ;
	}
	let karte = bank.pop();
	angriff.push( karte );
	return karte;
}

function rendernP1() {//funktion zum anzeigen der karten
	feld.innerHTML = "" ;
	passiv1.innerHTML = "" ;
	passiv2.innerHTML = "" ;
	aktiv1.innerHTML = "" ;
	aktiv2.innerHTML = "" ;
	seeHand(hand1, feld);
	seeBank(bank1, passiv1);
	seeBank(bank2, passiv2);
	seeAngriff(angriff1, aktiv1);
	seeAngriff(angriff2, aktiv2);
}

function rendernP2() {//funktion zum anzeigen der karten
	feld.innerHTML = "" ;
	passiv1.innerHTML = "" ;
	passiv2.innerHTML = "" ;
	aktiv1.innerHTML = "" ;
	aktiv2.innerHTML = "" ;
	seeHand(hand2, feld);
	seeBank(bank1, passiv1);
	seeBank(bank2, passiv2);
	seeAngriff(angriff1, aktiv1);
	seeAngriff(angriff2, aktiv2);
}
//<<< made by Tim Vogel

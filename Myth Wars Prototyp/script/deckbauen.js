//---------------------------------------------------------------------------------
//erweiterungen Vogel: line 7 geändert zu window.addEventListener; line 13 geändert zu kartendecks()
'use strict'
let deck1 ;
let deck2 ;
let hand1 = [] ;
let hand2 = [] ;
// Made by Justin Görtz
function kartendecks() {
		baueDeck1() ;
		baueDeck2() ;
		mischeDeck1() ;
		mischeDeck2() ;
		/* ---- von Kruse > ----*/
		handStart1();
		handStart2();
		const feld = document.getElementById( "Handkarten" ) ;
		 seeHand(hand1, feld) ;	// ACHTUNG! Das ist vorerst nur da damit man was sehen kann!!!
		/* ---- < von Kruse ----*/
}

// Made by Justin Görtz
// Nordisches Array
function baueDeck1() {//erweiterung by Vogel
	let Playerone = [Odin , Thor , Frigg , Hel , Freya , Skadi , Loki ,
					JackOLantern , Pixi , Hochpixi , Ratatoskr , Kelpie , Werwolf , Zyklop , Valkyre , Medusa , Pegasus , 
					Hydra , Zentaure , Minotaure , Sphinx , Chimäre , Greif , Einhorn , Harpyie , Zerberus , 
					Gleipnir , Dreizack , Aigis , Mjölnir] ;
	deck1 = [] ;
		for(let i = 0; i < Playerone.length; i++) {
			deck1.push(Playerone[i]) ;
		}
}


// Made by Justin Görtz
// Griechisches  Array
function baueDeck2() {//erweiterung by Vogel
	let Playertwo = [Zeus , Poseidon , Hera , Hades , Aphrodite , Artemis , Hermes ,
					JackOLantern , Pixi , Hochpixi , Ratatoskr , Kelpie , Werwolf , Zyklop , Valkyre , Medusa , Pegasus , 
					Hydra , Zentaure , Minotaure , Sphinx , Chimäre , Greif , Einhorn , Harpyie , Zerberus , 
					Gleipnir , Dreizack , Aigis , Mjölnir] ;
	deck2 = [] ;
		for(let i = 0; i < Playertwo.length; i++) {
			deck2.push(Playertwo[i]) ;
		}
}
// Made by Justin Görtz
function mischeDeck1() {
	for(let i = 0; i < deck1.length; i++) {
		let j = Math.floor(Math.random() * deck1.length) ;
		let temp = deck1[i] ;
		deck1[i] = deck1[j] ;
		deck1[j] = temp ;
	}
}
// Made by Justin Görtz
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
//---------------------------------------------------------------------------------------------------------------------------------
// Geschrieben von André Boden
function hinlegen(Ort) {
        let karten_ruecken = document.createElement('img') ;
        karten_ruecken.src='./pictures/Karten_Ruecken.png' ;
        karten_ruecken.className = 'ruecken' ;
        Ort.appendChild(karten_ruecken) ;
    }




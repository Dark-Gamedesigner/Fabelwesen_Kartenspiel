'use strict';

let handP1 = [] ;
let handP2 = [] ;
let feldP1 = [] ;
let feldP2 = [] ;

let aktiverSpieler = 1 ;

const feldHand = document.getElementById( "Hand" );
const feldAElement = document.getElementById( "FeldA" );
// Chat GPT kopiert >>>>
const feldHandGegner = document.getElementById( "HandGegner" ) ;
const feldBElement = document.getElementById( "FeldB" ) ;
const menuElement = document.getElementById( "Menu" ) ;
const overlay = document.getElementById( "overlay" ) ;
//<<<< Chat GPT kopiert
const Aphrodite = { name: "Aphrodite", angriff: 5, hp: 10,bild: "medien/karten/Aphrodite.png" } ;
const Baldur = { name: "Baldur", angriff: 5, hp: 10,bild: "medien/karten/Baldur.png" } ;
const Chimäre = { name: "Chimäre", angriff: 5, hp: 10,bild: "medien/karten/Chimäre.png" } ;
const Frigg = { name: "Frigg", angriff: 5, hp: 10,bild: "medien/karten/Frigg.png" } ;
const Hades = { name: "Hades", angriff: 5, hp: 10,bild: "medien/karten/Hades.png" } ;
const Harpye = { name: "Harpye", angriff: 5, hp: 10,bild: "medien/karten/Harpye.png" } ;
const Hela = { name: "Hela", angriff: 5, hp: 10,bild: "medien/karten/Hela.png" } ;
const Hera = { name: "Hera", angriff: 5, hp: 10,bild: "medien/karten/Hera.png" } ;
const Hermes = { name: "Hermes", angriff: 5, hp: 10,bild: "medien/karten/Hermes.png" } ;
const Hydra = { name: "Hydra", angriff: 5, hp: 10,bild: "medien/karten/Hydra.png" } ;
const Jack_o_Lantern = { name: "Jack_o_Lantern", angriff: 5, hp: 10,bild: "medien/karten/Jack_o_Lantern.png" } ;
const Minotaurus = { name: "Minotaurus", angriff: 5, hp: 10,bild: "medien/karten/Minotaurus.png" } ;
const Odin = { name: "Odin", angriff: 5, hp: 10,bild: "medien/karten/Odin.png" } ;
const Pegasus = { name: "Pegasus", angriff: 5, hp: 10,bild: "medien/karten/Pegasus.png" } ;
const Poseidon = { name: "Poseidon", angriff: 5, hp: 10,bild: "medien/karten/Poseidon.png" } ;
const Ratatoskr = { name: "Ratatoskr", angriff: 5, hp: 10,bild: "medien/karten/Ratatoskr.png" } ;
const Sphynx_card = { name: "Sphynx_card", angriff: 5, hp: 10,bild: "medien/karten/Sphynx_card.png" } ;
const Thor = { name: "Thor", angriff: 5, hp: 10,bild: "medien/karten/Thor.png" } ;
const Werwolf = { name: "Werwolf", angriff: 5, hp: 10,bild: "medien/karten/Werwolf.png" } ;
const Zerberus = { name: "Zerberus", angriff: 5, hp: 10,bild: "medien/karten/Zerberus.png" } ;
const Zeus = { name: "Zeus", angriff: 5, hp: 10,bild: "medien/karten/Zeus.png" } ;
const Zyklop = { name: "Zyklop", angriff: 5, hp: 10,bild: "medien/karten/Zyklop.png" } ;

let deckA = [					//14 Karten
	{ ...Baldur },
	{ ...Chimäre },
	{ ...Frigg },
	{ ...Harpye },
	{ ...Hydra },
	{ ...Jack_o_Lantern },
	{ ...Minotaurus },
	{ ...Odin },
	{ ...Pegasus },
	{ ...Ratatoskr },
	{ ...Sphynx_card },
	{ ...Werwolf },
	{ ...Zerberus },
	{ ...Zyklop }
	
] ;
let deckB = [					//19 Karten
	{ ...Aphrodite },
	{ ...Chimäre },
	{ ...Hades },
	{ ...Harpye },
	{ ...Hela },
	{ ...Hera },
	{ ...Hermes },
	{ ...Hydra },
	{ ...Jack_o_Lantern },
	{ ...Minotaurus },
	{ ...Pegasus },
	{ ...Poseidon },
	{ ...Ratatoskr },
	{ ...Sphynx_card },
	{ ...Thor },
	{ ...Werwolf },
	{ ...Zerberus },
	{ ...Zeus },
	{ ...Zyklop }
] ;

function mischeDeck(deck) {
	for(let i = 0; i < deck.length; i++) {
		let j = Math.floor(Math.random() * deck.length) ;
		let temp = deck[i] ;
		deck[i] = deck[j] ;
		deck[j] = temp ;
	}
}

function draw( deck, hand ) {
	if ( deck.length === 0 ) {
		return null ;
	}
	if ( hand.length >= 8 ) {
		return null ;
	}
	const karte = deck.pop() ;	
	hand.push( karte ) ;		
	return karte ;
	
}

function handStart( deck, hand ) {
	for( let i = 0; i < 5; i++) {	
		draw( deck, hand ) ;		
	}
}
// Chat GPT kopiert >>>>
function holeAktiveHand() {
	if ( aktiverSpieler === 1 ) {
		return handP1 ;
	}
	return handP2 ;
}

function holeGegnerHand() {
	if ( aktiverSpieler === 1 ) {
		return handP2 ;
	}
	return handP1 ;
}

function holeAktivesFeld() {
	if ( aktiverSpieler === 1 ) {
		return feldP1 ;
	}
	return feldP2 ;
}

function holeGegnerFeld() {
	if ( aktiverSpieler === 1 ) {
		return feldP2 ;
	}
	return feldP1 ;
}
//<<<< Chat GPT kopiert
function bauHand( hand, feld ) {
	feld.innerHTML = "" ;
	for ( let i = 0; i < hand.length; i++) {
		const karte = hand[i] ;
		
		const kartenBox = document.createElement( "div" ) ;
		kartenBox.className = "karte" ;
		
		kartenBox.addEventListener( "click", function() {
			spieleKarte( i, hand, holeAktivesFeld() );
		} ) ;
		
		const bild = document.createElement( "img" ) ;
		bild.src = karte.bild ;
		bild.alt = karte.name ;
		
		const angriff = document.createElement( "span" ) ;
		angriff.className = "wert angriff" ;
		angriff.textContent = karte.angriff ;
		
		const hp = document.createElement( "span" )
		hp.className = "wert hp" ;
		hp.textContent = karte.hp ;
		
		kartenBox.appendChild( bild ) ;
		kartenBox.appendChild( angriff ) ;
		kartenBox.appendChild( hp ) ;
		feld.appendChild( kartenBox ) ;
	}						
}
function bauFeld( feldArray, feldElement ) {
	feldElement.innerHTML = "" ;
	
	for ( let i = 0; i < feldArray.length; i++ ) {
		const karte = feldArray[i] ;
		
		const kartenBox = document.createElement( "div" ) ;
		kartenBox.className = "karte" ;
		
		const bild = document.createElement( "img" ) ;
		bild.src = karte.bild ;
		bild.alt = karte.name ;
		
		const angriff = document.createElement( "span" ) ;
		angriff.className = "wert angriff" ;
		angriff.textContent = karte.angriff ;
		
		const hp = document.createElement( "span" ) ;
		hp.className = "wert hp" ;
		hp.textContent = karte.hp ;
		
		kartenBox.appendChild( bild ) ;
		kartenBox.appendChild( angriff ) ;
		kartenBox.appendChild( hp ) ;
		feldElement.appendChild( kartenBox ) ;
	}
}

// Chat GPT kopiert >>>>
function bauHandGegner( hand, feld ) {
	feld.innerHTML = "" ;
	
	for ( let i = 0; i < hand.length; i++ ) {
		const kartenBox = document.createElement( "div" ) ;
		kartenBox.className = "karte" ;

		const bild = document.createElement( "img" ) ;
		bild.src = "medien/karten/Rueckseite.png" ;
		bild.alt = "Kartenrückseite" ;

		kartenBox.appendChild( bild ) ;
		feld.appendChild( kartenBox ) ;
	}
}
//<<<< Chat GPT kopiert


function spieleKarte( index, hand, feld ) {
	if ( feld.length >= 1) {
		return ;
	}
	const karte = hand.splice( index, 1 )[0] ;
	feld.push( karte ) ;
	// Chat GPT kopiert >>>>
	render() ;
	//<<<< Chat GPT kopiert
}

// Chat GPT kopiert >>>>
function bauMenu() {
	menuElement.innerHTML = "" ;

	const button = document.createElement( "button" ) ;
	button.textContent = "Zug Ende" ;

	button.addEventListener( "click", function() {
		aktiverSpieler = aktiverSpieler === 1 ? 2 : 1 ;
		render() ;
		overlay.classList.remove( "versteckt" ) ;
	} ) ;

	menuElement.appendChild( button ) ;
}

function render() {
	bauHand( holeAktiveHand(), feldHand ) ;
	bauHandGegner( holeGegnerHand(), feldHandGegner ) ;
	bauFeld( holeAktivesFeld(), feldAElement ) ;
	bauFeld( holeGegnerFeld(), feldBElement ) ;
	bauMenu() ;
}

overlay.addEventListener( "click", function() {
	overlay.classList.add( "versteckt" ) ;
} ) ;
//<<<< Chat GPT kopiert


mischeDeck(deckA) ;
mischeDeck(deckB) ;
handStart( deckA, handP1 ) ;
handStart( deckB, handP2 ) ;
// Chat GPT kopiert >>>>
render() ;
//<<<< Chat GPT kopiert
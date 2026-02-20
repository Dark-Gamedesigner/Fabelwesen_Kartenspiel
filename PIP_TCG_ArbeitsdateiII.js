//made by Tim Vogel
//sämtlicher Code ist noch nicht fertig oder sortiert!!!
'use strict';
//werden später eventuell als attribute in die Klasse "Spieler" übernommen
var LebensPunktePlayer1 = null;
var LebensPunktePlayer2 = null;
var Mana = null; 
var cardsinDeck = null; "
var Player1Lost = false;
var Player2Lost = false;
var BothPlayersLoose = false;
var TheDeveloperLost = false;
let result;

function gameStart() {
	LebensPunktePlayer1 = 50;
	LebensPunktePlayer2 = 50;
	Mana = 0;
	//Initialisieren des Spiels (to do)
}

function runInitialTurn() {
	//erster Zug beider Spieler (to do)
}
function runGame() {
	while (TheDeveloperLost == false && BothPlayersLoose == false && P1Lost == false && P2Lost == false) {
		LebensPunkteZaehler();
		//normaler Game Loop , while schleife läuft bis kondition für spielende eintritt (to do)
	}
	if (Player1Lost == true) {
		alert("Weiß gewinnt");
	}else if (Player2Lost == true) {
		alert("Schwarz gewinnt");
	}else if (BothPlayersLoose == true) {
		alert("Was ist denn hier los?");
	}else if (TheDeveloperLost == true) {
		alert("Kranplätze müssen verdichtet sein![Fix your code]");
	}else {
		alert("Jetzt reicht's mir langsam!!![Seriously, Fix your code]");
	}
}

function LebensPunkteZaehler() {
	if (LebensPunktePlayer1 > 0 && LebensPunktePlayer2 > 0)
		Turn ();
	else if (LebensPunktePlayer1 <= 0 && LebensPunktePlayer2 <= 0)
		gameTerminate(0);
	else if (LebensPunktePlayer2 <= 0)
		gameTerminate(1);
	else 
		gameTerminate(2);
	//überprüft LP von Spielern, initialisiert Zug wenn beide Spieler noch LP übrig haben, ruft andernfalls Funktion zum Beenden des Spiels auf
}

function Turn() {
	if (Mana < 10) {
		Mana++;
	}else {
		break;
	}
	if (cardsinDeck > 0)
		karteZiehen(); //funktion existiert noch nicht
	;
}

function gameTerminate(result) {
	if (result == 0) {
		BothPlayersLoose = true;
	}else if (result == 1) {
		Player2Lost = true;
	}else if (result == 2) {
		Player1Lost = true;
	}else {
		TheDeveloperLost = true;
	}
//Ergebnisbestimmung und entsprechendes Alert (kann später in andere Funktion übernommen werden)
}

//made by Tim Vogel
//--------------------------------------------------------------------------------------------------------------------------------------
// Made from Justin Görtz
'use strict'
let deck1 ;
let deck2 ;
window.onload = function() {
		baueDeck1() ;
		baueDeck2() ;
		mischeDeck1() ;
		mischeDeck2() ;
		//austeilen() ;
		
}


// Nordisches Array
function baueDeck1() {
	let Playerone = ['Odin' , 'Thor' , 'Frigg' , 'Hel' , 'Freya' , 'Skadi' , 'Loki' , 
					'Jack o Lantern' , 'Pixi' , 'Hochpixi' , 'Jackfrost' , 'Kelpie' , 'Werewolf' , 'Zyklop' , 'Valkyre' , 'Typhon' , 'Pegasus' , 
					'Hydra' , 'Zentaure' , 'Minotaure' , 'Sphinx' , 'Chimäre' , 'Greif' , 'Unicorn' , 'Harpies' , 'Ceberus' , 
					'Gungir' , 'Gleipnir' , 'Dreizack des Poseidon' , 'Medusa' , 'Aigis' , 'Mjölnir']
	deck1 = [] ;
		for(let i = 0; i < Playerone.length; i++) {
			deck1.push(Playerone[i]) ;
		}
		console.log(deck1) ;
}



// Griechisches  Array
function baueDeck2() {
	let Playertwo = ['Zeus' , 'Baldur' , 'Hera' , 'Hades' , 'Aphrodite' , 'Artemis' , 'Hermes' ,
					'Jack o Lantern' , 'Pixi' , 'Hochpixi' , 'Jackfrost' , 'Kelpie' , 'Werewolf' , 'Zyklop' , 'Valkyre' , 'Typhon' , 'Pegasus' , 
					'Hydra' , 'Zentaure' , 'Minotaure' , 'Sphinx' , 'Chimäre' , 'Greif' , 'Unicorn' , 'Harpies' , 'Ceberus' , 
					'Gungir' , 'Gleipnir' , 'Dreizack des Poseidon' , 'Medusa' , 'Aigis' , 'Mjölnir']
	deck2 = [] ;
		for(let i = 0; i < Playertwo.length; i++) {
			deck2.push(Playertwo[i]) ;
		}
		console.log(deck2) ;
}

function mischeDeck1() {
	for(let i = 0; i < deck1.length; i++) {
		let j = Math.floor(Math.random() * deck1.length) ;
		let temp = deck1[i] ;
		deck1[i] = deck1[j] ;
		deck1[j] = temp ;
	}
	console.log(deck1) ;
}

function mischeDeck2() {
	for(let i = 0; i < deck2.length; i++) {
		let j = Math.floor(Math.random() * deck2.length) ;
		let temp = deck2[i] ;
		deck2[i] = deck2[j] ;
		deck2[j] = temp ;
	}
	console.log(deck2) ;
}
// TODO ist nicht ganz fertig
//function austeilen(karten, Spielfeld) {
//	for(let motiv of karten) {
//		let bild = document.createElement('img') ;
//		bild.src = 'media/bilder/back.png' ;
//		bild.alt = motiv ;
//		Spielfeld.appendChild(bild) ;
//	}
//}
//--------------------------------------------------------------------------------------------------------------------------------------

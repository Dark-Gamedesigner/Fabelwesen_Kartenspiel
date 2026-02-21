//Variablen/Funktionen Liste TCG
'use strict';
var LPP1 = null;
var LPP2 = null;
//var ManaP1 = null; werden als attribute in Klasse Spieler übernommen
//var ManaP2 = null; "
//var cardsinDeckP1 = null; "
//var CardsinDeckP2 = null; "
var P1Lost = false;
var P2Lost = false;
let result;
let outcome;

function gameStart() {
	LPP1 = 50;
	LPP2 = 50;
	ManaP1 = 0;
	ManaP2 = 0;
}

function runInitialTurn() {
	//erster Zug beider Spieler
}
function runGame() {
	while (P1Lost == false || P2Lost == false)
		//normaler Game Loop
}

function LPZaehler() {
	if (LPP1 > 0 && LPP2 > 0)
		Turn ();
	else if (LPP1 <= 0 && LPP2 <= 0)
		outcome = gameTerminate(0);
	else if (LPP2 <= 0)
		outcome = gameTerminate(1);
	else 
		outcome = gameTerminate(2);
	//überprüft LP von Spielern, initialisiert Zug wenn beide Spieler noch LP übrig haben, andernfalls Ende des Spiels
}

/*function LPZaehlerP2() {
	if (LPP2 > 0)
		TurnP2 ();
	else 
		gameTerminatewins();
	//überprüft LP von Spieler 2, wenn > 0 initialisiert Zug von Spieler 2, andernfalls Spiel endet mit Sieg von Spieler 1
}*/

function Turn() {
	Mana++;
	if (cardsinDeck > 0)
		//function for pulling cards from the deck into hand [to be done]
	;
}

function gameTerminate(result) {
	if //...
}
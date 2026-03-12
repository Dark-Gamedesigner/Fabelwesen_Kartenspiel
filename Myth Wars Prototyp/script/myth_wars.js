//made by Tim Vogel
//debugging via Firefox Browser Konsole + Google
'use strict';

window.addEventListener('load', gameStart);

var PunktePlayer1 = null;
var PunktePlayer2 = null;
var FirstTurnPlayer1 = false;
var FirstTurnPlayer2 = false;
var isTurnPlayer1 = false;
var isTurnPlayer2 = false;
var TurnIsSkipped = false;
var Player1Lost = false;
var Player2Lost = false;
var BothPlayersLoose = false;
var FehlerImSpiel = false;
var Runden = 0;


function gameStart() {
	isTurnPlayer1 = true;
	kartendecks();//zu finden in deckbauen.js
	runInitialTurn();
}

function runInitialTurn() {
	FirstTurnPlayer1 = true;
	FirstTurnPlayer2 = true;
	StartNewRound();
}

function StartNewRound () {
	Runden++;
	if (Runden <= 30) {
		runGame();
	}else if (PunktePlayer1 < PunktePlayer2) {
		gameTerminate(0);
	}else if (PunktePlayer1 > PunktePlayer2) {
		gameTerminate(1);
	}else if (PunktePlayer1 == PunktePlayer2){
		gameTerminate(2);
	}else {
		gameTerminate();
	}
}

function runGame() {
	if (FehlerImSpiel === false && BothPlayersLoose === false && Player1Lost === false && Player2Lost === false) {
		PunkteZaehler();
	}else {
		if (BothPlayersLoose === true) {
			alert("Unentschieden");
		}else if (Player2Lost === true) {
			alert("Spieler 1 hat gewonnen");
		}else if (Player1Lost === true) {
			alert("Spieler 2 hat gewonnen");
		}else {
			alert("Kranplätze müssen verdichtet sein![Du hast ein Leck im Code]");
		}
	}
	document.getElementById('Neuladen').addEventListener('click', ReloadPage);
}

function PunkteZaehler() {
	PunktePlayer1 = spieler01.punkte ;
	PunktePlayer2 = spieler02.punkte ;
	if (0 <= PunktePlayer1 < 3 && 0 <= PunktePlayer2 < 3) {
		Turn ();
	}else if (PunktePlayer1 < 3 && PunktePlayer2 >= 3) {
		gameTerminate(0);
	}else if (PunktePlayer1 >= 3 && PunktePlayer2 < 3) {
		gameTerminate(1);
	}else if (PunktePlayer1 >= 3 && PunktePlayer2 >= 3) {
		gameTerminate(2);
	}else {
		gameTerminate();
	}//überprüft Punkte von Spielern, initialisiert Zug wenn beide Spieler keine 3 Punkte, ruft andernfalls Funktion zum Beenden des Spiels auf
}

function gameTerminate(result) {
	if (result === 0) {
		Player1Lost = true;
		runGame();
	}else if (result === 1) {
		Player2Lost = true;
		runGame();
	}else if (result === 2) {
		BothPlayersLoose = true;
		runGame();
	}else {
		FehlerImSpiel = true;
		runGame();
	}

//Ergebnisbestimmung und entsprechendes Alert (kann später in andere Funktion übernommen werden)
}

function Turn() {
	var Mana = null;
	var Hand = null;
	if (isTurnPlayer1 === true) {
		var Mana = spieler01.speicher ;
		var Hand = spieler01.hand ;
		if (Mana < 10) {
			Mana++;
		}
		spieler01.speicher = Mana;
		if (Hand < 8) {
			//draw();//zu finden in deckbauen.js (auskommentiert zum testen des codes, weil website in endlosschleife hängt (draw fuktion noch nicht angepasst)
		}
		document.getElementById('Zugende').addEventListener('click', TurnSkip);
		if (TurnIsSkipped === false || FirstTurnPlayer1 === true) {
			//karten auf spielfeld ablegen (to do)
			if (FirstTurnPlayer1 === false) {
				//Angriff();
				document.getElementById('Angreifen').addEventListener('click', Angriff);
			}
		}
		FirstTurnPlayer1 = false;
		isTurnPlayer2 = true;
		isTurnPlayer1 = false;
		StartNewRound();
	}else if (isTurnPlayer2 == true) {
		var Mana = spieler02.speicher
		var Hand = spieler02.hand
		if (Mana < 10) {
			Mana++;
		}
		spieler02.speicher = Mana;
		if (Hand < 8) {
			//draw();//zu finden in deckbauen.js (auskommentiert zum testen des codes, weil website in endlosschleife hängt (draw fuktion noch nicht angepasst)
		}
		document.getElementById('Zugende').addEventListener('click', TurnSkip);
		if (TurnIsSkipped === false || FirstTurnPlayer2 === true) {
			//karten auf spielfeld ablegen (to do)
			if (FirstTurnPlayer2 === false) {
				//Angriff();
				document.getElementById('Angreifen').addEventListener('click', Angriff);
			}
		}
		FirstTurnPlayer2 = false;
		isTurnPlayer1 = true;
		isTurnPlayer2 = false;
		StartNewRound();
	}else {
		gameTerminate();
	}
	
}


//geschrieben von André Boden 
//abgeändert, angepasst und erweitert von Tim Vogel
// Schaden tracken
function Angriff() {
	var schaden = null ;
	if(isTurnPlayer1 === true) {
		schaden = document.getElementById('AngriffPlayer02').getAttribute(HP) - document.getElementById('AngriffPlayer01').getAttribute(Atk);
		if (schaden > 0) {
			document.getElementById('AngriffPlayer02').setAttribute(HP, schaden);
		}else {
			PunktePlayer1++;
			//delete.document.getElementById('AngriffPlayer02');//syntax error
		}
	}else if(isTurnPlayer2 === true) {
		schaden = document.getElementById('AngriffPlayer01').HP - document.getElementById('AngriffPlayer02').Atk;
		if (schaden > 0) {
			document.getElementById('AngriffPlayer01').setAttribute(HP, schaden);
		}else {
			PunktePlayer2++;
			//delete.document.getElementById('AngriffPlayer01');//syntax error
		}
	}else {
		gameTerminate();
	}
}
//---------------------------------------------------------------------

function TurnSkip() {
	TurnIsSkipped = true;
}

function ReloadPage() {
	window.location.reload();
}

//------------------------------------------------------------
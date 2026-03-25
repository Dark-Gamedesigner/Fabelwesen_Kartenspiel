//made by Tim Vogel
//debugging via Firefox Browser Konsole + Google
'use strict';

window.addEventListener('load', gameStart);

spieler01.speicher = 0 ;
spieler02.speicher = 0 ;
spieler01.punkte = 0 ;
spieler02.punkte = 0 ;
var PunktePlayer1 = null;
var PunktePlayer2 = null;
var FirstTurnPlayer1 = false;
var FirstTurnPlayer2 = false;
var Player1Lost = false;
var Player2Lost = false;
var BothPlayersLoose = false;
var FehlerImSpiel = false;
var Runden = 0;


const spielen = document.querySelectorAll('.aktion');

function gameStart() {
	FirstTurnPlayer1 = true;
	FirstTurnPlayer2 = true;
	spieler01.amZug = true;
	//einfügen der Dummy Karte in Felder, damit code funktioniert
	kartendecks();//zu finden in deckbauen.js
	StartNewRound();
}

function StartNewRound () {
	rendernP1();
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
	if (PunktePlayer1 < 3 && PunktePlayer2 < 3) {
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
	if (spieler01.amZug === true) {
		var Mana = spieler01.speicher ;
		if (Mana < 10) {
			Mana++;
		}
		spieler01.speicher = Mana;
		draw(deck1, hand1);
		if (FirstTurnPlayer1 === true) {
			angriff1.push(Wolpertinger1);
		}
		rendernP1();
		document.getElementById('Zugende').addEventListener('click', TurnEnd );
		let hand = document.getElementById('Handkarten').addEventListener('click', legenAufBank);
		let feld01 = document.getElementById('FeldPlayer01').addEventListener('click', legenAufAngriff);
		if (FirstTurnPlayer1 === false) {
			document.getElementById('Angreifen').addEventListener('click', Angriff);
		}
	}else if (spieler02.amZug === true) {
		var Mana = spieler02.speicher;
		if (Mana < 10) {
			Mana++;
		}
		spieler02.speicher = Mana;
		draw(deck2, hand2);
		if (FirstTurnPlayer2 === true) {
			angriff2.push(Wolpertinger2);
		}
		rendernP2();
		document.getElementById('Zugende').addEventListener('click', TurnEnd);
		let hand = document.getElementById('Handkarten').addEventListener('click', legenAufBank);
		let feld02 = document.getElementById('FeldPlayer02').addEventListener('click', legenAufAngriff);
		if (FirstTurnPlayer2 === false) {
			document.getElementById('Angreifen').addEventListener('click', Angriff);
		}
	}else {
		gameTerminate();
	}
	
}

function legenAufBank () {// nur für Code im Hintergrund
	if (spieler01.amZug === true) {
		legeKarteBank(hand1, bank1, index);//in deckbauen.js
		rendernP1();
	}else if (spieler02.amZug === true) {
		legeKarteBank(hand2, bank2, index);//in deckbauen.js
		rendernP2();
	}
}

function legenAufAngriff () {// nur für Code im Hintergrund
	if (spieler01.amZug === true) {
		legeKarteAngriff(bank1, angriff1);//in deckbauen.js
		rendernP1();
	}else if (spieler02.amZug === true) {
		legeKarteAngriff(bank2, angriff2);//in deckbauen.js
		rendernP2();
	}
}

//geschrieben von André Boden 
//abgeändert, angepasst und erweitert von Tim Vogel
// Schaden tracken
function Angriff() {
	var schaden = null ;
	if(spieler01.amZug === true) {
		schaden = angriff2[0].Hitpoints - angriff1[0].Attack;
		if (schaden > 0) {
			angriff2[0].Hitpoints = schaden;
			TurnEnd(1);
		}else {
			PunktePlayer1++;
			angriff2.pop();
			TurnEnd(1);
		}
	}else if(spieler02.amZug === true) {
		schaden = angriff1[0].Hitpoints - angriff2[0].Attack;
		if (schaden > 0) {
			angriff1[0].Hitpoints = schaden;
			TurnEnd(2);
		}else {
			PunktePlayer2++;
			angriff1.pop();
			TurnEnd(2);
		}
	}else {
		gameTerminate();
	}
}
//---------------------------------------------------------------------

function TurnEnd() {
	if (Runden %2 == 1) {
		document.getElementById('Zugende').removeEventListener('click', TurnEnd );
		document.getElementById('Handkarten').removeEventListener('click', legenAufBank);
		document.getElementById('FeldPlayer01').removeEventListener('click', legenAufAngriff);
		document.getElementById('Angreifen').removeEventListener('click', Angriff);
		spieler01.punkte = PunktePlayer1;
		spieler02.punkte = PunktePlayer2;
		FirstTurnPlayer1 = false;
		spieler02.amZug = true;
		spieler01.amZug = false;
		StartNewRound();
	}else if (Runden %2 == 0) {
		document.getElementById('Zugende').removeEventListener('click', TurnEnd );
		document.getElementById('Handkarten').removeEventListener('click', legenAufBank);
		document.getElementById('FeldPlayer02').removeEventListener('click', legenAufAngriff);
		document.getElementById('Angreifen').removeEventListener('click', Angriff);
		spieler01.punkte = PunktePlayer1;
		spieler02.punkte = PunktePlayer2;
		FirstTurnPlayer2 = false;
		spieler01.amZug = true;
		spieler02.amZug = false;
		StartNewRound();
	}else {
		gameTerminate();
	}
}

function ReloadPage() {
	window.location.reload();
}

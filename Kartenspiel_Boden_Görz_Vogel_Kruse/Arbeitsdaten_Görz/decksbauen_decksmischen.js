//---------------------------------------------------------------------------------
// Made by Justin Görtz
'use strict'
let deck1 ;
let deck2 ;

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
// TODO ist nicht ganz fertig
//function austeilen(karten, Spielfeld) {
//	for(let motiv of karten) {
//		let bild = document.createElement('img') ;
//		bild.src = 'media/bilder/back.png' ;
//		bild.alt = motiv ;
//		Spielfeld.appendChild(bild) ;
//	}
//}
//---------------------------------------------------------------------------------

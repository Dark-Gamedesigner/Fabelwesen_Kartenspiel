// made by Tim Vogel
//JS dokument fuer klassenstruktur des PIP projekts TCG

class Karten {
	constructor (ManaKosten);
}

class Angriffskarte extends Karten {
	constructor (Manakosten, Atk, HP);
}

class Aktionskarte extends Karten {
	constructor (Manakosten, HP, Aktionseffekt);
}

class Unterstützerkarte extends Karten {
	(constructor (Manakosten, HP, Feldeffekt);
}

class Götterkarte extends Karten {
	constructor (Manakosten, Atk, HP, Effekt);
}

var Zerberus = new Angriffskarte (4, 5, 10);

var Minotaurus = new Angriffskarte (2, 3, 7);

var Zeus = new Götterkarte (x,y,z,q);

var Hades = new Götterkarte (q,z,y,x);

var Äpfel der Hesperiden = new Unterstützerkarte (a,b,c);

var Orakel von Delphi = new Aktionskarte (f,m,l);

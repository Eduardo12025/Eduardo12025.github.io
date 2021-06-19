Algoritmo ejemplo2
	Definir tur, men como texto;
	tur="", men="";
	Escribir "ingrese el turno M o T o N:";
	leer tur;
	si(tur="m")Entonces
		men="mañana";
	SiNo
		si(tur="t")Entonces
			men="tarde";
		SiNo
			si(tur="n")Entonces
				men="Noche";
			SiNo
				men="no es una letra valida";
			FinSi
		FinSi
	FinSi
	Escribir "el turno es: ",men;
FinAlgoritmo

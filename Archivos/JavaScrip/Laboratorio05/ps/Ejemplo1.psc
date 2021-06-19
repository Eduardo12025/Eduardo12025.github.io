Algoritmo ejemplo1
	Definir est Como Entero;
	Definir men como texto;
	est=0; men="";
	Escribir "ingrese el numero de estacion 1 o 2 o 3 o 4:";
	leer est;
	si(est=1)Entonces
		men="verano";
	SiNo
		si(est=2)Entonces
			men="otoño";
		SiNo
			si(est=3)Entonces
				men="invierno";
			SiNo
				si(est=4)Entonces
					men="Primavera";
				SiNo
					men="no es un numero valido";
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "la estacion es: ",men;
FinAlgoritmo

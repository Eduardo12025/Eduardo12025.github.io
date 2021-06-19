Algoritmo ejemplo3
	Definir sb, bon, des, sf Como Real;
	Definir cat como texto;
	sb=0; bon=0; des=0; sf=0; cat="";
	Escribir "ingrese el sueldo basico:";
	Leer sb;
	Escribir "ingrese una categoria A o B o C o D:";
	Leer cat;
	si(cat="a")Entonces
		bon=sb*0.03;
		des=sb*0.01;
	SiNo
		si(cat="b")Entonces
			bon=sb*0.05;
			des=sb*0.02;
		SiNo
			si(cat="c")Entonces
				bon=sb*0.07;
				des=sb*0.03;
			SiNo
				si(cat="d")Entonces
					bon=sb*0.09;
					des=sb*0.04;
				SiNo
					bon=0;
					des=0;
				FinSi
			FinSi
		FinSi
	FinSi
	sf=sb+bon-des;
	Escribir "El sueldo basico es: ",sb;
	Escribir "la bonificacion es: ",bon;
	Escribir "el descuento es: ", des;
	Escribir "el sueldo final es: ", sf;
FinAlgoritmo

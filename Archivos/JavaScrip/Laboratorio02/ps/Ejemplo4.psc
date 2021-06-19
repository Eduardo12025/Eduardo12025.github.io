Algoritmo ejemplo4
	Definir nh,ch,sb,bon,des,sf Como Real;
	nh=0; ch=0; sb=0; bon=0; des=0; sf=0;
	Escribir "ingresa el numero de horas trabajadas";
	Leer nh;
	Escribir "ingrese el costo por hora trabajada";
	Leer ch;
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	Escribir "el sueldo basico es: ",sb;
	Escribir "la bonificacion es: ",bon;
	Escribir "el descuento es: ",des;
	Escribir "el sueldo final es: ",sf;
	
FinAlgoritmo

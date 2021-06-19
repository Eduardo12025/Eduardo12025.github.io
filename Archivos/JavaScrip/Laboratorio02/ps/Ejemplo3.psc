Algoritmo Ejemplo3
	Definir pre, sbt, igv, tot Como Real;
	Definir can Como Entero;
	pre=0; sbt=0; igv=0; tot=0;
	Escribir  "ingresa el precio del producto:";
	leer pre;
	Escribir "ingresa la cantidad a comprar del producto";
	leer can;
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	Escribir  "el subtotal es: ", sbt;
	Escribir "el igv es: ", igv;
	Escribir "el total es: ",tot;
	
FinAlgoritmo

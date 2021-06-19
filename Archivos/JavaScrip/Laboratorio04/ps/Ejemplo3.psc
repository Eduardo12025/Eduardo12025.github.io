Algoritmo sin_titulo
	Definir bas, alt, area como real;
	Definir men como texto;
	bas=0; alt=0; area=0; men="";
	Escribir "ingrese la base del rectangulo:";
	leer bas;
	Escribir "ingrese la altura del rectangulo:";
	leer alt;
	area=bas*alt;
	si (area>100)Entonces
		men="Es un rectangunlo grande";
	SiNo
		men="es un rectangulo pequeño";
	FinSi
	Escribir "el area del rectangulo es: ",area;
	Escribir men;
FinAlgoritmo

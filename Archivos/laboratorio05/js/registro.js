//creamos un vector que contenga la info
var registro=[];
//creamos un procedimiento para registrar
function Registrar(nombreregistro,apellidoregistro,correoregistro){
    var NuevoRegistro={
        nombre:nombreregistro,
        apellido:apellidoregistro,
        correo:correoregistro
    };
    registro.push(NuevoRegistro);
}
//creamos una funcion para tener los valores del registro
function Mostrar(){
    return registro;
}
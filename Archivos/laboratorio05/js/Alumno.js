var alumnos=[];

function Registrar(nomalumnos, apealumnos, dnialumnos){
    var NuevoRegistro={
        nombres:nomalumnos,
        apellidos:apealumnos,
        dni:dnialumnos,  
    };
    alumnos.push(NuevoRegistro);
}
function Mostrar(){
    return alumnos;
}       

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var btnRegistrar=document.getElementById("btnRegistrar");
var tbAlumno=document.getElementById("tbAlumno");
var chkEst=document.getElementById("chkEst")

function MostrarRegistro(){
    var listaregistro=Mostrar();
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0; i<listaregistro.length;i++){
        var fila=tbody.insertRow(i);
        var titulonombres=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        
        titulonombres.innerHTML=listaregistro[i].nombre;
        tituloapellido.innerHTML=listaregistro[i].apellido;
        titulodni.innerHTML=listaregistro[i].dni;
        tbody.appendChild(fila);
    }
}

function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;   
    Registrar(nom,ape,dni);
    MostrarRegistro();
}



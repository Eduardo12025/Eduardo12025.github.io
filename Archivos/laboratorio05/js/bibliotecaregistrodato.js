//variables para los controles
var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualizar=document.getElementById("btnActualizar");

//llamamos a la funcion registrar del firebase
// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }

//creamos un procedimiento para buscar datos del
function Buscar(codigo){
    //seleccionamos la tabla
    var db = database.ref().child('registro');
    db.once("value").then(function(snapshot){
        snapshot.forEach(function(data){
            //declaramos una variable para el codigo
            var key=data.key;
            //evaluamos que el key sea == al codigo 
            if(key == codigo){
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor= data.val().correo;
                //enviamos los datos a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    });
}

//procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

function Mostrar(){
    //declaramos
    var i = 0;
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //se selecciona la tabla
    var db = database.ref().child('registro');
    db.once("value", function (snapshot){
        if (snapshot.exists()) {
            //loop para recorrer los datos del firebase realtime
            snapshot.forEach(function(data){
                var cod = data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;         
                //declaramos una variable para la fila
                var fila=tbody.insertRow(i);
                //declaramos variables para los titulos
                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulocorreo = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulocor = fila.insertCell(4);
                //agregamos los valores
                titulonombre.innerHTML=nom;
                tituloapellido.innerHTML=ape;
                titulocorreo.innerHTML=cor;
                tituloact.innerHTML = "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
                });
            }
        });
    }

//llamamos a la funcion mostrar cuando cargue la pagina
window.onload = Mostrar;

//creamos un procedimiento para registrar 
function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese el nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese el Apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese el Correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        //llamamos a la funcion de firebase 
        //seleccionamos la tabla
        var db = database.ref('registro');
        var registros = db.push();
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("Se registro los datos")
        Limpiar();
        Mostrar();
    }
}

//creamos el procedimiento par actuazlizar 
function Actualizar(){
    //capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    //seleecionamos la tabla que vamos actuazlizar con su codigo
    var db = database.ref("registro/"+cod);
    //le pasamos los datos que vamos a actualizar
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //llamamos al procedimiento limpiar 
    Limpiar();
    //llamaos al procedimiento mostrar
    Mostrar();
}

//creamos un procedimiento par aeliminar
function Eliminar(codigo){
    //preguntamos si se quiere eliminar
    var result=confirm("¿Estas seguro que quieres eliminar el registro?");
    //evaluamos 
    if(result){
        var cod=codigo;
        var db=database.ref("registro/"+cod).remove();
        alert("Se elimino el dato");
        Limpiar();
        Mostrar();
    }
}


//llamamos a la funcion registrar el boton
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actualizar);
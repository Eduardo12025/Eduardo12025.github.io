// declarando variables para los controles
var txtCod=document.getElementById("txtCod")
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var txtFec=document.getElementById("txtFec");
var txtDir=document.getElementById("txtDir");
var txtTel=document.getElementById("txtTel");
var txtCel=document.getElementById("txtCel");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualizar=document.getElementById("btnActualizar");
var cboDistrito=document.getElementById("cboDistrito");


// creamos un procedimiento para buscar datos
function Buscar(codigo){
    // seleccionamos la tabla
    var db=database.ref().child("alumno");
    db.once("value").then(function (snapshot){
        snapshot.forEach(function(data){
            // declaramos una variable para el codigo de la tabla
            var key = data.key;
            // evaluamos que el key de la tabla sea igual al codigo buscado
            if (key ==codigo){
                var cod = key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var dni=data.val().dni;
                var fec=data.val().fecha;
                var dir=data.val().direccion;
                var dis=data.val().distrito;
                var tel=data.val().telefono;
                var cel=data.val().celular;
                var cor=data.val().correo;
                var sex=data.val().sexo;
                var est=data.val().estado;
                // enviamos los datos a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtDni.value = dni;
                txtFec.value = fec;
                txtDir.value = dir;
                // var tam = cboDistrito.options.length;
                
                for(var i=0;i<cboDistrito.options.length;i++){
                    if(cboDistrito.options[i].text==dis){
                        cboDistrito.options[i].selected=true;
                        break;
                    }
                }
                txtTel.value = tel;
                txtCel.value = cel;
                txtCor.value = cor;
                if(sex=="Masculino"){
                    rbMas.checked=true;
                }else if(sex=="Femenino"){
                    rbFem.checked=true;
                }else if(sex=="Otro"){
                    rbOtr.checked=true;
                }else{
                    rbMas.checked=false;
                    rbFem.checked=false;
                    rbOtr.checked=false;
                }
                if(est=="Habilitado"){
                    chkEst.checked=true;
                }else if(est=="Deshabilitado"){
                    chkEst.checked=true;
                }else{
                    chkEst.checked=false;
                }
            }
        })
    })
}

// crear un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCod.value = "";         
    txtDni.value = "";
    txtFec.value = "";
    txtDir.value = "";
    cboDistrito.selectedIndex=0;
    txtTel.value = "";
    txtCel.value = "";
    txtCor.value = "";
    rbMas.value="";
    rbFem.value="";
    rbOtr.value="";
    chkEst.value="";
    txtNom.focus();
}





// creamos un procedimiento para mostrar
function Mostrar(){
    // declaramos una variable para el numero de filas
    var i = 0;
    // selecciono el tbody de la tabla donde lo voy a guardar
    tbody = document.querySelector("#tbAlumno tbody");
    tbody.innerHTML = "";
    // se selecciona la tabla
    var db = database.ref().child('alumno');
    db.once("value", function (snapshot){
        if (snapshot.exists()){
        // loop para recorrer los datos de firebase realtime database
        snapshot.forEach(function(data){
            var cod=data.key;
            // capturamos los valores
            var nom=data.val().nombre;
            var ape=data.val().apellido;
            var dni=data.val().dni;
            var fec=data.val().fecha;
            var dir=data.val().direccion;
            var dis=data.val().distrito;
            var tel=data.val().telefono;
            var cel=data.val().celular;
            var cor=data.val().correo;
            var sex=data.val().sexo;
            var est=data.val().estado;
            // creamos una variable para la fila
            var fila=tbody.insertRow(i);
            // declaramos variables para los titulos
            var titulonombre=fila.insertCell(0);
            var tituloapellido=fila.insertCell(1);
            var titulodni=fila.insertCell(2);          
            var titulofecha=fila.insertCell(3);
            var titulodireccion=fila.insertCell(4);
            var titulodistrito=fila.insertCell(5);
            var titulotelefono=fila.insertCell(6);
            var titulocelular=fila.insertCell(7);
            var titulocorreo=fila.insertCell(8);
            var titulosexo=fila.insertCell(9);
            var tituloestado=fila.insertCell(10);
            var tituloact=fila.insertCell(11);
            var titulocor=fila.insertCell(12);
            // agregamos los valores
            titulonombre.innerHTML=nom;
            tituloapellido.innerHTML=ape;
            titulodni.innerHTML=dni;
            titulofecha.innerHTML=fec;
            titulodireccion.innerHTML=dir;
            titulodistrito.innerHTML=dis;
            titulotelefono.innerHTML=tel;
            titulocelular.innerHTML=cel;
            titulocorreo.innerHTML=cor;
            titulosexo.innerHTML=sex;
            tituloestado.innerHTML=est;
            tituloact.innerHTML =
                "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
            titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
            tbody.appendChild(fila);
            i++;
        })
    }
})
}

// creamos un procedimiento con todos los procedimientos que se cargaran cuando cargue la pagina
function Inicio(){
    Mostrar();
    CargarDistrito();
}

// creamos un procedimiento para registrar
function Registrar(){
    //validamos los controles
    var nom = txtNom.value;
    var ape = txtApe.value;
    var dni = txtDni.value;
    var fec = txtFec.value;
    var dir = txtDir.value;
    var dis = cboDistrito.options[cboDistrito.selectedIndex].text;
    var tel = txtTel.value;
    var cel = txtCel.value;
    var cor = txtCor.value;
    var sex = "";
    if(rbMas.checked==true){
        sex="Masculino";
    }else if (rbFem.checked==true){
        sex="Femenino";
    }else if (rbOtr.checked==true){
        sex="Otro";
    }else {
        sex="";
    }

    var est = "";
    if(chkEst.checked==true){
        est="Habilitado";
    }else{
        est="Deshabilitado";
    }
    // llamamos a la funcion firebase
    // seleccionamos la tabla
    // si la tabla no existe automaticamente el firebase la crea 
    var db = database.ref('alumno');
    // asignamos los valores a la tabla que ha sido creada
    var registros = db.push();
    // los valores se deberan de pasar con la estructura de JSON
    registros.set({
        'nombre': nom,
        'apellido': ape,
        'dni': dni,
        'fecha': fec,
        'direccion': dir,
        'distrito': dis,
        'telefono': tel,
        'celular': cel,
        'correo': cor,
        'sexo': sex,
        'estado': est,
    });
    alert("Se registraron los datos");
    Mostrar();
}

// creamos un procedimiento para eliminar
function Eliminar(codigo){
    // preguntamos si se quiere eliminar
    var result=confirm("¿Estas seguro que quieres eliminar el registro?");
    // evaluamos la respuesta
    if(result){
        // pasamosel codigo al registro que se va a eliminar
        var cod=codigo;
        // seleccionamos la tabla con el codigo correspondiente para eliminarla
        var db=database.ref("alumno/"+cod).remove();
        alert("Se elmino el dato");
        // llamamos a la funcion Limpiar
        Limpiar();
        // llamamos a la funcion Mostrar
        Mostrar();
    }
}

// creamos el procedimiento para actualizar
function Actualizar(){
    // capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var dni = txtDni.value;
    var fec = txtFec.value;
    var dir = txtDir.value;
    var dis = cboDistrito.options[cboDistrito.selectedIndex].text;
    var tel = txtTel.value;
    var cel = txtCel.value;
    var cor = txtCor.value;
    var sex = "";
    if(rbMas.checked==true){
        sex="Masculino";
    }else if (rbFem.checked==true){
        sex="Femenino";
    }else if (rbOtr.checked==true){
        sex="Otro";
    }else {
        sex="";
    }

    var est = "";
    if(chkEst.checked==true){
        est="Habilitado";
    }else{
        est="Deshabilitado";
    }
    // seleccionamos la tabla que vamos actualizar con su codigo correspondiente
    var db=database.ref("alumno/"+cod);
    // le pasamos los datos que vamos a actualizar
    db.update({
        'nombre': nom,
        'apellido': ape,
        'dni': dni,
        'fecha': fec,
        'direccion': dir,
        'distrito': dis,
        'telefono': tel,
        'celular': cel,
        'correo': cor,
        'sexo': sex,
        'estado': est,
    });
    alert("Se actualizo el dato");
    // llamamos al procedimiento limpiar
    Limpiar();
    // llamamos al procedimiento mostrar
    Mostrar();
}


// creamos un procedimiento para cargar el combo
function CargarDistrito(){
    // declaramos una variable para el numero de filas
    var i = 0;
    // selecciono la tabla de la base de datos
    var db = database.ref().child('distrito');
    db.once("value", function (snapshot){
        if (snapshot.exists()){
            // loop para recorrer los datos de firebase realtime database
            snapshot.forEach(function(data){
                // capturamos la informacion de la tabla
                var cod = data.key;
                var nom = data.val().nombre;
                // creamos un elemento tipo option
                var options =document.createElement("option");
                // agregamos el nombre y el codigo al option
                options.text = nom;
                options.value = cod;
                // agregamos los options al combo
                cboDistrito.add(options);
                i++;
        });
    }
});
}



// llamamos al procedimiento cuando carga la pantalla
window.onload = Inicio;

// le asignamos al boton Registrar el procedimiento
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click", Actualizar);



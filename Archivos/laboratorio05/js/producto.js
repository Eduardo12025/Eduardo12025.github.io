var productos=[];

function Registrar(nomproducto, preproducto, canproducto, catproducto){
    var NuevoRegistro={
        nombre:nomproducto,
        precio:preproducto,
        cantidad:canproducto,
        categoria:catproducto     
    };
    productos.push(NuevoRegistro);
}
function Mostrar(){
    return productos;
}

var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var cboCategoria=document.getElementById("cboCategoria");
var btnRegistrar=document.getElementById("btnRegistrar");
var tbRegistro=document.getElementById("tbRegistro");

function MostrarRegistro(){
    var listaregistro=Mostrar();
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0; i<listaregistro.length;i++){
        var fila=tbody.insertRow(i);
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocantidad=fila.insertCell(2);
        var titulocategoria=fila.insertCell(3);
        
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloprecio.innerHTML=listaregistro[i].precio;
        titulocantidad.innerHTML=listaregistro[i].cantidad;
        titulocategoria.innerHTML=listaregistro[i].categoria;
        tbody.appendChild(fila);
    }
}

function RegistrarDatos(){
    var nom=txtNom.value;
    var pre=txtPre.value;
    var can=txtCan.value;   
    var cat=cboCategoria.value;
    Registrar(nom,pre,can,cat);
    MostrarRegistro();
}

// btnRegistrar.addEventListener("click",RegistrarDatos);
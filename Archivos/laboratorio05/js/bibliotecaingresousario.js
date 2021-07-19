//declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

//creamos un procedimeinto para ingresar 
function Ingresar(){
    if(txtCor.value=="" || txtCon.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
    }else{
        //capturando valores 
        var cor=txtCor.value;
        var con=txtCon.value;
        //llamamos a la funcion de firebase para validar
        auth.signInWithEmailAndPassword(cor, con)
        .then((userCredential) => {
            alert("Bienvenidos al Sistema");
            //nos dirigimos a la pagina 11
            window.location="pagina11.html";
        })
        .catch((error) => {
            alert("Usuario o clave no valida");
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });

            }
        }

//llamaos al procidimiento para ingresar 
btnIngresar.addEventListener("click",Ingresar);
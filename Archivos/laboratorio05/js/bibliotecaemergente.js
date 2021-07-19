//cream{os una funcion para cuando cargue el documento abra la ventana
function Cargar(url,titulo,ancho,alto){
    //declaramos variables
    var anc=screen.width;
    var alt=screen.height;
    //declaramos varibales para ubicar la ventana emergente en el centro 
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"widht="+ancho+", height="+alto+", left="+x+", top="+y+", scrollbars=NO")

    //para centrar la ventana
    //window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+",top="+y+",scrollbars=NO, menubar=no, toolbar=no, locationbar=no, resizable=no");


}
//llamamos a la funcion cargar 
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);
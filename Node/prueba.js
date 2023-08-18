/* function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí   
    var i=0;
    while(i<=10){
       console.log(numero +' * '+i+' = '+(i*numero));
       //console.log(i)
       i++;
    };
    return;
}
console.log(tablaDeMultiplicar(5))
*/
/*
let perfil= ""

if(perfil == ""){
    console.log("Debe especificar el perfil del usuario")
}
else{
    perfil =perfil.toLowerCase()

    if(perfil =="administrador"){
        "Usted tiene todos los privilegios de uso del sistema."
    }
    else if (perfil == "asistente") {
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    }
    else if (perfil == "invitado") {
        console.log("Usted sólo tiene permisos de consultar datos");
    } 
    else {
        console.log("Debe especificar un perfil válido");
    }
}
*/

//programa 2
let pagoMes = 11077
let consumoKWH = 450

capo= consumoKWH > 300 ? pagoMes +=pagoMes*0.3 : pagoMes

console.log("Debido a que su hogar tuvo un consumo de",consumoKWH, "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de $" ,capo)
//programa 3
let operacion = 'suma'
console.log('operacion seleccionada')
switch(operacion){
    case 'suma':
        
        break
}
//programa adicional 
let velocidad =0
let altura = 0
if(velocidad >=268 && velocidad >= 278){
    if(altura >=150 && altura <=300){
        console.log('Avion listo para aterrizar')
    }
}
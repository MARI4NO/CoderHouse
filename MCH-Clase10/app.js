let dhBici = require('./datosBici')

function buscarBici (id, bicicletas){
    let buscado = null
    for(let i=0;i<bicicletas.length; i++){
        if(bicicletas[i].id == id){
            buscado =bicicletas[i];
        }
    }
    return buscado;
} 
function venderBici (id, bicicletas){
    let buscado = buscarBici(id,bicicletas)
    if(buscado== null){
        return "bicicleta no encontrada"
    }
    if(buscado.vendida == "no"){
        return buscado;
    }
    else{
        return "Bicleta ya vendida"
    }
    
    
} 
//console.log('bici buscada: ',buscarBici(1,dhBici))
console.log('Bici vendida : ',venderBici(4,dhBici))
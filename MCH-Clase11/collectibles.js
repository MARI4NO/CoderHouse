let fs = require('fs')

let ruta1 = './datos/figuras1.json';
let ruta2 = './datos/figuras2.json';
let ruta3 = './datos/figuras3.json';

function importar(nombreMarca){
    let ruta = '';
    let juguetes = '';
    if(nombreMarca == 'hotToys'){
        ruta =ruta1;
    };
    if(nombreMarca == 'bandai'){
        ruta = ruta2;
    };
    if(nombreMarca == 'starWars'){
        ruta = ruta3;
    }
    if(ruta != ''){
        juguetes =  JSON.parse(fs.readFileSync(ruta,'utf-8'));
    }
    return juguetes;
}
//console.log(importar('starWars'));
module.exports = {importar};
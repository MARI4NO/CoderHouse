let fs = require('fs');
let bicicletas = fs.readFileSync('./bicicletas.json','utf-8');
let bicis = JSON.parse(bicicletas);

/*
for(let i=0; i<bicis.length; i++){
    console.log(
        "Marca:",bicis[i].marca,", Precio:",bicis[i].precio
    );
}
*/

module.exports=bicis;
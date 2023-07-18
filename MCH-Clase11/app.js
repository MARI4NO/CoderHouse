const { importar } = require('./collectibles');

let hotToys = importar('hotToys');
let bandai = importar('bandai');
let starWars = importar('starWars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
//console.log(unifiedCollectibles);

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        this.figuras.forEach(element => {
            console.log('----- Datos del Juguete -------')
            console.log('Marca :', element.marca)
            console.log('Nombre:', element.nombre)
            console.log('Precio :', element.precio)
            console.log('Stock :', element.stock)
        })
    },
    figuresByBrand: function (marca) {
        return this.figuras.filter(figura => figura.marca == marca);
    }
};

/* PARA COMPROBAR SI ESTAN BIEN LAS FUNCIONES 
console.log(collectibles.listFigures())
console.log(collectibles.figuresByBrand('Star Wars'))
*/


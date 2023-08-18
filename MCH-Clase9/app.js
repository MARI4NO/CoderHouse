let pelicula = require('./peliculas');
let fs = require('fs');

console.log(fs.readFileSync('./mensaje.txt','utf-8'))

for (let i =0; i<pelicula.length;i++){
    console.log('Pelicula :',pelicula[i].name,', Precio:',pelicula[i].price )
}

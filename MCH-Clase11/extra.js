let numeros = [1,2,3,4,5,6,7,8,9,10]
let [cero,,dos,,cuatro] = numeros; //destructing de posiciones 0,2,4
let todosNumeros = [...numeros] //spred de toda la cadena
let mascota = {
    nombre : 'Bony',
    tipo: 'Perro',
    color : 'Dorado',
    raza: 'Golden Retriever'
}
let {nombre,tipo,color,raza} = mascota; //destructing de todas las propiedades

console.log(cero,dos,cuatro)
console.log('Hola les presento a mi mascotas su nombre es :' ,nombre,', es un hermoso', tipo,',de color:',color,'y su raza es:',raza)
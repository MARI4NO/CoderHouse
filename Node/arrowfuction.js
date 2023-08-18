let mitad = numero =>  numero/2;
console.log(mitad(10))

let trabajo = dia => {
    if(dia == 'lunes'){
        return 'hay que laburar';
    }
    else{
        return 'no hay que ir';
    }
}
console.log(trabajo('lunes'))

// callback

let suma = (num1 ,num2) => num1 +num2;
let resta = (num1, num2) => num1 - num2;

let calculadora =(num1,num2,operacion) => operacion(num1,num2);
console.log(calculadora(18,3,resta)) 


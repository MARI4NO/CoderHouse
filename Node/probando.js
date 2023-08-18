function laClaveSecreta(a){
    clave ="";
    //console.log(clave +a[a.length-1]);
    for (let i=a.length-1; i>-1; i--){
        if(a[i] != '*'){
            clave= clave + a[i];
        }
    }   
    return clave;
}
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));

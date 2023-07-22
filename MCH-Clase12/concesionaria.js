let autosImportados = require('./auto')
let concesionaria = {
   autos: autosImportados,

   buscarAuto: function (patente) {
      let buscado = this.autos.find(element => element.patente == patente)
      if (buscado != null) {
         return buscado;
      }
      else {
         return null;
      }

   },
   venderAuto: function (patente) {
      auto = this.buscarAuto(patente)
      if (auto != null) {
         auto.vendido = true;
      }
      else {
         return 'No se puede encontrar el auto';
      }

   },
   autosParaLaVenta: function () {
      return this.autos.filter(element => element.vendido !== true)
   },
   autosNuevos: function () {
      let autos = this.autosParaLaVenta();
      return autos.filter(element => (element.km <= 100 ))
   },
   listaDeVentas: function(){
      let vendidos = this.autos.filter(element => element.vendido == true);
      return vendidos
   },
   totalDeVentas:function(){
      let vendidos =this.listaDeVentas()
      console.log(this.listaDeVentas().length)
      if(vendidos.length>0){
         vendidos=vendidos.reduce(function(acum,valor){
            return acum+=valor;
         },0);
         return vendidos;
      }
      else{
         return 0;
      }
   }
}
/*
autosNuevos: function () {
      let autos = this.autosParaLaVenta().filter(
         function(auto){
            return auto.km <100
         });
      return autos;

}
*/
 


//onsole.log(concesionaria.autosNuevos())
console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.venderAuto('APL123'))
//console.log(concesionaria.autos)
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
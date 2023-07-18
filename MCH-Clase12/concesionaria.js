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
   }
}



console.log(concesionaria.autosNuevos())
console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.autosNuevos())
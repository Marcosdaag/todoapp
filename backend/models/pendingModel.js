'use stict'
// Modelo-Plantilla-Esquema de los objetos pending

var mongoose = require('mongoose'); // Traigo el modulo de mongoose
var Schema = mongoose.Schema; // Traigo los esquemas de mongoose

//Creamos el esquema de PENDINGS
var PendingSchema = Schema({
    name: String,
    realized: Boolean
});

/* 
* Exportamos el modulo con el modelo PendingSchema adentro
* Como primer parametro se le pone 'Pending' ya que mongoose lo
* pasa a minusculas y a plural, lo que quedaria como pendings el cual
* es el nombre de nuestra colecction
*/
module.exports = mongoose.model('Pending', PendingSchema);
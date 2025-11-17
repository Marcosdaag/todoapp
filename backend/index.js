'use strict'
// Modulo que establece la conexion con la db y levanta el servidor

var mongoose = require('mongoose'); // Importo modulo de mongoose
mongoose.Promise = global.Promise; // Le digo a mongoose que use promesas then y catch igual que JS
var app = require('./app'); // Importo el modulo de app.js
var port = process.env.PORT || 3000; // Puerto prefeterminado de mongoDB

// Establecer conexion a la db

mongoose.connect(process.env.DATABASE)
// Intento conectar y mediante una promesa elijo que hacer en caso de que pueda o no conectarse
.then(()=>{
    console.log("conexion establecida correctamente");

    // Si se puede conectar a la DB, levanta el servidor
    app.listen(port, ()=>{
        console.log("servidor on");
    });
})
.catch((error)=> console.log(error));
'use strict'
// Modulo que trae funciones y las asigna a una ruta con un metodo

var express = require('express'); // Importo el modulo de express
var pendingControllers = require('../controllers/pendingController'); // Importo modulo que tiene las funciones
const { model } = require('mongoose'); // Traigo el model por parte de mongoose
var router = express.Router(); //Permite definir rutas y middlewares de forma modular y separada del objeto principal de la app

// Rutas y sus respectivas funciones-metodos guardados en el controlador
router.post('/save-pending', pendingControllers.savePending);
router.get('/pending', pendingControllers.getPending);
router.get('/pending/:id', pendingControllers.getPending);
router.get('/pendings', pendingControllers.getPendings);
router.put('/pending-update/:id', pendingControllers.updatePending);
router.delete('/pending/:id', pendingControllers.deletePending);

module.exports = router; // Exporto el modulo
'use strict'
// Modulo que trae funciones y las asigna a una ruta con un metodo

var express = require('express'); // Importo el modulo de express
var pendingControllers = require('../controllers/pendingController'); // Importo modulo que tiene las funciones
const { model } = require('mongoose'); // Traigo el model por parte de mongoose
var router = express.Router(); //Permite definir rutas y middlewares de forma modular y separada del objeto principal de la app

router.get('/home', pendingControllers.home);
/* 
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project', ProjectController.getProject);
router.get('/project/:id', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/projects/:id', ProjectController.updateProject);
router.delete('/projects/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', upload.single('image'), ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);
 */

module.exports = router; // Exporto el modulo
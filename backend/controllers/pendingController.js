'use strct'
// Modulo para controlar que acciones se pueden hacer con los objetos pendings y sus respectivas funciones

var Pending = require('../models/pendingModel'); // Importamos el modulo que tiene el Schema de los objetos

// var controller = {
//     // Funcion home
//     home: function (req, res) {
//         return res.status(200).send({
//             message: 'Soy la home por get'
//         });
//     },

//     // Funcion test
//     test: function (req, res) {
//         return res.status(200).send({
//             message: 'Soy el test por post'
//         });
//     },

//     // Funcion para guardar
//     saveProject: function (req, res) {
//         var project = new Project();

//         var params = req.body;
//         project.name = params.name;
//         project.description = params.description;
//         project.category = params.category;
//         project.year = params.year;
//         project.langs = params.langs;
//         project.image = null;

//         project.save().then((projectStored) => {
//             return res.status(200).send({
//                 message: "proyecto guardado",
//                 project: projectStored,
//             });
//         })

//             .catch((error) => {
//                 if (!projectStored)
//                     return res.status(404).send({ message: "no se ha podido guardar el proyecto" });

//                 if (error)
//                     return res.status(500).send({ error: "Error al guardar el proyecto en la base de datos" });
//             });
//     },

//     // Funcion getProject
//     getProject: async function (req, res) {
//         var projectId = req.params.id;

//         if (projectId == null) return res.status(404).send({ message: "El proyecto no existe" }); // Verificar este if

//         try {
//             const project = await Project.findById(projectId);
//             if (!project) return res.status(404).send({ message: "El proyecto no existe" });
//             return res.status(200).send({ project });
//         } catch (err) {
//             return res.status(500).send({ message: "Error al devolver los datos del proyecto" });
//         }
//     },

//     // Método para listar todos los proyectos
//     getProjects: async function (req, res) {
//         try {
//             const projects = await Project.find({/* aca podemos poner condiciones de busqueda */ }).sort('year').exec(); // Tambien poniendo el sort lo ordeno la lista y si le pongo un menos adelante lo arregal de mayor a menor

//             if (!projects || projects.length === 0) {
//                 return res.status(404).send({ message: 'No hay proyectos para mostrar' });
//             }

//             return res.status(200).send({ projects });
//         } catch (err) {
//             return res.status(500).send({ message: 'Error al devolver los datos' });
//         }
//     },

//     //Metodo para updatear proyectos
//     updateProject: function (req, res) {
//         var projectId = req.params.id;
//         var update = req.body;

//         Project.findByIdAndUpdate(projectId, update, { new: true })
//             .then((projectUpdated) => {
//                 return res.status(200).send({
//                     project: projectUpdated
//                 })
//             })
//             .catch(() => {
//                 return res.status(404).send({ message: "Proyecto no encontrado para actualizar." });
//             })
//     },

//     //Metodo para eliminar un proyecto
//     deleteProject: function (req, res) {
//         var projectId = req.params.id;

//         Project.findByIdAndDelete(projectId)
//             .then((projectRemoved) => {
//                 return res.status(200).send({
//                     project: projectRemoved
//                 })
//             })
//             .catch((err, projectRemoved) => {
//                 if (err) return res.status(500).send({ message: 'No se pudo eliminar el proyecto.' });

//                 if (!projectRemoved) return res.status(404).send({ message: 'No se pudo encontrar el proyecto para ser eliminado.' });
//             })
//     }

// };

// module.exports = controller;
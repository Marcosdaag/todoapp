'use strct'
// Modulo para controlar que acciones se pueden hacer con los objetos pendings y sus respectivas funciones

var Pending = require('../models/pendingModel'); // Importamos el modulo que tiene el Schema de los objetos

// Dentro de la variable controller defino todas las funciones que va a poder hacer la api en formayo JSON
var controller = {

    // Funcion para guardar pendientes
    savePending: function (request, response){
        var pending = new Pending(); // Creo un objeto tipo Pending que lo importamos desde los modelos (schema)
        var params = request.body;
        pending.name = params.name;
        pending.realized = params.realized;

        pending.save().then((pendingStored)=>{
            return response.status(200).send({message: 'pendiente guardado', pending: pendingStored});
        })
        .catch((error)=>{
            if(!pendingStored){
                return response.status(404).send({message: 'no se pudo guardar el pendiente'});
            }
            if(error){
                return response.status(500).send({message: 'error en el servidor'});
            }
        });
    },

    // Funcion para devolver el pendiente
    getPending: async function (request, response) {
        var pendingId = request.params.id; // Id del objeto

        try{
            const pending = await Pending.findById(pendingId);
            if(!pending){
                return response.status(404).send({mesage: 'el proyecyo no existe'});
            }else{
                return response.status(200).send({pending});
            }
        }
        catch (error){
            return response.status(500).send({message:'erro en el servidor'});
        }
    },


}

module.exports = controller; // Exporto el modulo de los controladores-funciones


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
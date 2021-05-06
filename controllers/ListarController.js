'use strict';
//const GrupoSchema = require('../model/Grupo.js');
const Asignatura = require('../model/Asignatura.js');
const Curso = require('../model/Curso.js');
const Tema = require('../model/Tema.js');
const Examen = require('../model/Examen.js');
const Grupo = require('../model/Grupo')
const Sequelize = require('sequelize');
const asoc = require('../model/asociations');
const Op = Sequelize.Op;
const db = require('../config/database');


const ConsultasController = {};
//
ConsultasController.listarTablero = async (req, res) => {
  Curso.findAll().then(Curso => res.render('tablero', { Curso })).catch(err => res.render('error', { error: err }))
}



//Listar Curso
ConsultasController.listar = async (req, res) => {
  Curso.findAll().then(Curso => res.render('index', { Curso })).catch(err => res.render('error', { error: err }))
}





// Insertar Curso
ConsultasController.insertar = async (req, res, next) => {
  let {
    nombre,
    descripcion,
    AsignaturaId,
    GrupoId,
    imagen
  } = req.body;
  let errors = [];
    // Insert into table
    Curso.create({
      nombre,
      descripcion,
      AsignaturaId,
      GrupoId,
      imagen
    })
      .then(curso => res.redirect('/'))
      .catch(err => res.render('error', { error: err.message }))
  }


//Editar
ConsultasController.editarCursos = async (req, res, next) => {
  Curso.findByPk(req.params.id).then(Curso => res.render('editarC', { Curso })).catch(err => res.render('error', { error: err }))
}
ConsultasController.editarP = async (req, res, next) => {
  Curso.update({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen
  }, {
    where: { //capsula where
      id: req.params.id
    }
  })
    .then(curso => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}

//Eliminar
ConsultasController.eliminar = async (req, res, next) => {
  Curso.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(curso => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}


//CONTENIDO
//Listar contenido
ConsultasController.editarContenido = async (req, res, next) => {
  Curso.findByPk(req.params.id).then(Curso => res.render('contenido', { Curso })).catch(err => res.render('error', { error: err }))
  //const cursoid = req.params.id;
  //Curso.findOne({
    //  include: [{
      //  model: Tema,
        //as: 'tema'
       // where: { name: 'Al Green' } //
      //}]
    //}).then(curso => {  
     //const Cursos = JSON.stringify(curso); // remove await this is not async process
      //const CursosTemas = JSON.parse(Cursos);
      //var temanombre = curso.tema.nombreTema;
      //var username = user.NombreUsuario;
      //console.log(CursosTemas) 
    //res.render('contenido', { curso: CursosTemas});
  //})
}
  //
  //




//ASIGNATURA
ConsultasController.asignatura = async (req, res, next) => {
  // INSERTAR TABLA
  Asignatura.create({
    nombreAsignatura: req.body.nombreAsignatura,
    semestre: req.body.semestre,
    descripcion: req.body.descripcion,
    carrera: req.body.carrera,
    temario: req.body.temario,
  })
    .then(asignatura => res.redirect('contenido'))
    .catch(err => res.render('error', { error: err.message }))
}
// mostrar
ConsultasController.listarAsignatura = async (req, res, next) => {
  Asignatura.findAll().then(Asignatura => res.render('index', { Asignatura })).catch(err => res.render('error', { error: err }))
}





// TEMA
//insertar tema
ConsultasController.tema = async (req, res, next) => {
  // INSERTAR TABLA
  Tema.create({
    nombreTema: req.body.nombreTema,
    ParcialId: req.body.ParcialId,
    CursoId: req.body.CursoId,
  })
    .then(Tema => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}
//editar tema
ConsultasController.temaEditar = async (req, res, next) => {
  Tema.update({
    nombreTema: req.body.nombre,
  }, {
    where: { //capsula where
      id: req.params.id
    }
  })
    .then(curso => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}

//eliminar tema
ConsultasController.temaDelete = async (req, res, next) => {
  Tema.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tema => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}






//Examen
ConsultasController.examen = async (req, res, next) => {
  // INSERTAR TABLA
  Examen.create({
    ponderacion: req.body.ponderacion,
    duracion: req.body.duracion,
    nombre: req.body.nombre,
    intentos: req.body.intentos,
  })
    .then(examen => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}
//eliminar examen
ConsultasController.examenDelete = async (req, res, next) => {
  Examen.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(curso => res.redirect('/'))
    .catch(err => res.render('error', { error: err.message }))
}






//PARCIAL
ConsultasController.parcial = async (req, res, next) => {
  // INSERTAR TABLA
  Parcial.create({
    nombreParcial: req.body.nombreParcial,
  })
    .then(parcial => res.redirect('contenido'))
    .catch(err => res.render('error', { error: err.message }))
}




module.exports = ConsultasController;
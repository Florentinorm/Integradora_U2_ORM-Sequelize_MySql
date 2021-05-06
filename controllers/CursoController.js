'use strict';
const CursoSchema = require('../model/Curso.js');

const CursoController = {}

CursoController.list = async (req, res) => {
    const Curso = await CursoSchema.find();
    res.render('index', { Curso });
}

CursoController.add = async (req, res, next) => {
  const Curso = new CursoSchema(req.body);
  await Curso.save();
  res.redirect('/');
    
}

module.exports = CursoController;
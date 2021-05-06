'use strict';
var PeriodoSchema = require('../model/Periodo.js');

const PeriodoController = {};
//Listar Periodo
PeriodoController.renderPeriodo = async (req, res) => {
    const Periodo = await PeriodoSchema.find();
    res.render('index', { Periodo });
    console.log(Periodo);
}
// Insertar Periodo
PeriodoController.insertPeriodo = async (req, res, next) => {
    const Periodo = new PeriodoSchema(req.body);
    await Periodo.save();
    res.redirect('/');
}

module.exports = PeriodoController;
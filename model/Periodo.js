const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Periodo extends Model {}
Periodo.init({
  nombrePeriodo: {
    type: DataTypes.STRING
  },
  FechaInicio: {
    type: DataTypes.DATE
  },
  FechaFin: {
    type: DataTypes.DATE
  },
  Estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
 }, {
	sequelize,
	modelName: "periodo",
	timestamps: false
	});


module.exports = Periodo;
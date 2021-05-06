const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Tema extends Model {}
Tema.init({
  nombreTema: {
    type: DataTypes.STRING
  },
  FechaInicio: {
    type: DataTypes.DATE
  },
  FechaFin: {
    type: DataTypes.DATE
  }

}, {
  sequelize,
  modelName: "tema",
  timestamps: false

});


module.exports = Tema;
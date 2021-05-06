const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Examen extends Model {}
Examen.init({
  ponderacion: {
    type: DataTypes.STRING
  },
  duracion: {
  type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
    },
    intentos: {
      type: DataTypes.INTEGER
      },
  FechaInicio: {
    type: DataTypes.DATE
  },
  FechaFin: {
    type: DataTypes.DATE

  }

}, {
  sequelize,
  modelName: "examen",
  timestamps: false

});


module.exports = Examen;
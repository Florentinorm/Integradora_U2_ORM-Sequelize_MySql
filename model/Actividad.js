const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');


class Actividad extends Model {}
 Actividad.init({
  nombre: {
    type: DataTypes.STRING
  },
  numero: {
    type: DataTypes.STRING
  },
  tipo: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ponderacion: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  descripcion: {
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
modelName: "actividad",
timestamps: false
});


module.exports = Actividad;
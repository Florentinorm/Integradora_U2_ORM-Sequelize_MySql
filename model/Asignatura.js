const { Model, DataTypes}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Asignatura extends Model {}
 Asignatura.init({
  nombreAsignatura: {
    type: DataTypes.STRING,

  },
  semestre: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  carrera: {
    type: DataTypes.STRING,
    defaultValue: false
  },
  temario: {
    type: DataTypes.STRING
  }
}, {
    sequelize,
    modelName: "asignatura",
    timestamps: false
    });


module.exports = Asignatura;
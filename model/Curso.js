const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');


class Curso extends Model {}
 Curso.init({
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Esplaneado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  imagen: {
    type: DataTypes.STRING
  },
  GrupoId: {
    type: DataTypes.STRING
  },
  AsignaturaId: {
    type: DataTypes.STRING
  },

}, {
sequelize,
modelName: "curso",
timestamps: false
});


module.exports = Curso;



const { Model, DataTypes}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Grupo extends Model {}
 Grupo.init({
  nombreGrupo: {
    type: DataTypes.STRING
    
  },
  carrera: {
    type: DataTypes.STRING
  },
  semestre: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
    sequelize,
    modelName: "grupo",
    timestamps: false
    });


module.exports = Grupo;
const { Model, DataTypes, Sequelize}  = require('sequelize');
const sequelize = require('../config/database');
const db = require('../config/database');

class Parcial extends Model {}
 Parcial.init({
  numeroParcial: {
    type: DataTypes.INTEGER,
  },
  FechaInicio: {
    type: DataTypes.DATE
  },
  FechaFin: {
    type: DataTypes.DATE

  }
}, {
    sequelize,
    modelName: "parcial",
    timestamps: false
    });


module.exports = Parcial;
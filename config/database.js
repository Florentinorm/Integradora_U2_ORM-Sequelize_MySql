const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const { database } = require('../config'); //requerimos el modulo config (conexión a base de datos)

const sequelize = new Sequelize( //creamos un objeto con el nombre sequelize
    database.database, //pasamos la base de datos
    database.username, //el username
    database.password, { //el password
        host: database.host, //un objeto con host
        dialect: "mysql" //dialecto
    }

);

module.exports = sequelize; //exportamos